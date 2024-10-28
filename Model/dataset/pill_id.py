import os
import json
import torch
from torch.utils.data import Dataset
from PIL import Image
import torchvision.transforms as T
import numpy as np
import torchvision
import glob

from PIL import ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES = True

class PillDataset(Dataset):
    def __init__(self, im_size, data_dir):

        self.data_dir = data_dir
        self.im_size = im_size
        self.images, self.labels = self.load_images(data_dir)
        
    def __len__(self):
        return len(self.images)
    
    def load_images(self, data_dir):
        ims, labels = [], []
        for l_name in os.listdir(data_dir):
            inames = (glob.glob(os.path.join(data_dir, l_name, "*.jpg")))
            for iname in inames:
                ims.append(iname)
                labels.append(l_name)

        # Convert labels to integers with mapping
        label_mapping = {value: idx for idx, value in enumerate(set(labels))}
        labels = [label_mapping[label] for label in labels]
        
        print('len(labels):', len(labels))
        
        return ims, labels

    def __getitem__(self, index):
        # Load the image
        im = Image.open(self.images[index])
        im = im.resize((self.im_size, self.im_size))
        im_tensor = torchvision.transforms.ToTensor()(im)
        
        label = self.labels[index]
        
        
        return im_tensor, label
