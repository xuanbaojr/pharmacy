# import our model, different layers and activation function 
from tensorflow.keras.layers import Dense, LSTM, Reshape, BatchNormalization, Input, Conv2D, MaxPool2D, Lambda, Bidirectional, Add, Activation
from tensorflow.keras.models import Model
from tensorflow.keras.activations import relu, sigmoid, softmax
import tensorflow.keras.backend as K
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.callbacks import CSVLogger, TensorBoard, ModelCheckpoint, EarlyStopping, ReduceLROnPlateau
import pandas as pd


def init_model():

    char_list =[' ', '#', "'", '(', ')', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'Â', 'Ã', 'Ê', 'Í', 'Ô', 'à', 'á', 'â', 'ã', 'è', 'é', 'ê', 'ì', 'í', 'ò', 'ó', 'ô', 'õ', 'ù', 'ú', 'ý', 'ă', 'Đ', 'đ', 'ĩ', 'ũ', 'Ơ', 'ơ', 'Ư', 'ư', 'Ạ', 'ạ', 'ả', 'ấ', 'Ầ', 'ầ', 'ẩ', 'ậ', 'ắ', 'ằ', 'ẵ', 'ặ', 'ẻ', 'ẽ', 'Ế', 'ế', 'ề', 'ể', 'ễ', 'Ệ', 'ệ', 'ỉ', 'ị', 'ọ', 'ỏ', 'Ố', 'ố', 'ồ', 'ổ', 'ỗ', 'Ộ', 'ộ', 'ớ', 'ờ', 'ở', 'Ỡ', 'ỡ', 'ợ', 'ụ', 'ủ', 'Ứ', 'ứ', 'ừ', 'ử', 'ữ', 'ự', 'ỳ', 'ỵ', 'ỷ', 'ỹ']

    # input with shape of height=32 and width=128 
    inputs = Input(shape=(118,2522,1))

    # Block 1
    x = Conv2D(64, (3,3), padding='same')(inputs)
    x = MaxPool2D(pool_size=3, strides=3)(x)
    x = Activation('relu')(x)
    x_1 = x 

    # Block 2
    x = Conv2D(128, (3,3), padding='same')(x)
    x = MaxPool2D(pool_size=3, strides=3)(x)
    x = Activation('relu')(x)
    x_2 = x

    # Block 3
    x = Conv2D(256, (3,3), padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    x_3 = x

    # Block4
    x = Conv2D(256, (3,3), padding='same')(x)
    x = BatchNormalization()(x)
    x = Add()([x,x_3])
    x = Activation('relu')(x)
    x_4 = x

    x = Conv2D(512, (3,3), padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    x_5 = x

    x = Conv2D(512, (3,3), padding='same')(x)
    x = BatchNormalization()(x)
    x = Add()([x,x_5])
    x = Activation('relu')(x)

    x = Conv2D(1024, (3,3), padding='same')(x)
    x = BatchNormalization()(x)
    x = MaxPool2D(pool_size=(3, 1))(x)
    x = Activation('relu')(x)

    x = MaxPool2D(pool_size=(3, 1))(x)
    
    squeezed = Lambda(lambda x: K.squeeze(x, 1))(x)
    
    blstm_1 = Bidirectional(LSTM(512, return_sequences=True, dropout = 0.2))(squeezed)
    blstm_2 = Bidirectional(LSTM(512, return_sequences=True, dropout = 0.2))(blstm_1)

    outputs = Dense(len(char_list)+1, activation = 'softmax')(blstm_2)

    # model to be used at test time
    act_model = Model(inputs, outputs)

    act_model.summary()
    return act_model