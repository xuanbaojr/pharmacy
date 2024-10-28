import torch
import yaml
import argparse
import os
import numpy as np
from tqdm import tqdm
from torch.optim import Adam
from torch.utils.data import DataLoader

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

version = "b0"
num_classes = 52
weights_path = '/kaggle/working/weights_v1.pth'
num_epochs = 50
lr = 0.001
data_dir = "/kaggle/input/pill-yolo-v2"

def train():
    pill_dataset = PillDataset(im_size=224, data_dir=data_dir)
    pill_loader = DataLoader(pill_dataset, batch_size=32, shuffle=True,
                            num_workers=4)
    
    model = EfficientNet(version=version, num_classes=num_classes).to(device)
    
    if os.path.exists(weights_path):
        model.load_state_dict(torch.load(weights_path, weights_only=True))
    model.train()

    
    optimizer = Adam(model.parameters(), lr=lr)
    criterion = torch.nn.CrossEntropyLoss()
    
    for epoch_idx in range(num_epochs):
        losses = []
        for batch in tqdm(pill_loader):
            ims, labels = batch
            optimizer.zero_grad()
            loss = criterion(model(ims.to(device)), labels.to(device))
            losses.append(loss.item())
            loss.backward()
            optimizer.step()
        
        print("Epoch:", epoch_idx, "| Loss:", np.mean(losses))
        if epoch_idx % 2 == 0:
            torch.save(model.state_dict(), weights_path)
    
    print("Done Training ...")
    
if __name__ == "__main__":
    train()