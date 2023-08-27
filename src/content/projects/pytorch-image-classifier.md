---
author: achimoraites
date: Sun Oct 10 2021 00:00:00 GMT+0200 
excerpt: A deep learning project that allows a user to build and train an image classifier using multiple Neural Network architectures and make predictions on their own images.
tags: ['python', 'machine learning', 'pytorch']
slug: pytorch-image-classifier
title: Python Image Classifer
image: https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1
url: https://achimoraites.io/projects/pytorch-image-classifier
---
 Photo by [Tara Winstead](https://www.pexels.com/@tara-winstead?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [Pexels](https://www.pexels.com/photo/robot-pointing-on-a-wall-8386440/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

<br />

A deep learning project that allows a user to build and train an image classifier using multiple Neural Network architectures and make predictions.

## Features
- **Customizable**: Allows to train and adjust it for classifying your own images
- **Versatile**: Supports multiple deep neural networks architectures: vgg-16 and alexnet



## Example Usage
You can find the code on [Github](https://github.com/achimoraites/pytorch-image-classifier)
### Setup

To be able to try the code you will need to

1. Download the [`flowers.zip`](https://www.mediafire.com/file/87yctfoff1sqi8n/flowers.zip/file) file
2. Extract it to the root of the project as `flowers/`
3. Install the dependencies
**Using Anaconda (recommended)**
```bash
conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch
conda install -c anaconda pillow 
```

The `flowers.zip` has 3 folders that contain our flower images
- `train` this is our training data
- `valid` this is the data used for evaluating our classifier accuracy during training
- `test`  used for sanity checking 

The `cat_to_name.json` has the mappings between the flower ids and their actual names

### 📖 Train your classifier
Now it is time to do fun stuff!

#### 💻 Available options

- `--arch`: (optional) **'Set the CCN Model architecture to use'**
    - `vgg16` 
    - `alexnet` (default)

- `--save_dir`: (optional) **'Set the folder that will be used to save the checkpoints'** the default is `checkpoints`
                       
- `--learning_rate`: (optional) **'Set the learning rate'**  the default is `0.001`

- `--hidden_units`: (optional) **'Set the number of hidden units in the classifier hidden layer'** the default is `1024`

- `--epochs`: (optional) **'Set the number of training epochs'** default is `1`

- `--gpu`: (optional) **'Train the model on gpu'** this requires that you have a CUDA supported GPU!

#### 👨‍🏫 Lets train our classifier

The `train.py` script requires you to:
- pass as a first argument the folder that 'contains' your images
- after that you can pass in any order the above arguments as well to fine tune the training process 😸


**If you have CUDA compatible gpu**
```bash
python train.py flowers --epochs=15 --gpu
```

**Otherwise**
```bash
python train.py flowers --epochs=15
```

This will start the training process for each epoch the tool will train the classifier and will evaluate the classifier accuracy.

When the training is completed the tool will save a checkpoint in `checkpoints/alexnet_checkpoint.pth`

We will need this for making predictions later!

### 🔮 Making image predictions using our classifier
Now it is time to use our classifier!

#### 💻 Available options

- `--category_names`: (optional) **'Path to the category names JSON, this is used to map category IDs to their labels'** the default is `cat_to_name.json`
                       
- `--top_k`: (optional) **'The number of top predictions to be displayed'**  the default is `5`

- `--hidden_units`: (optional) **'Set the number of hidden units in the classifier hidden layer'** the default is `1024`

- `--gpu`: (optional) **'Make prediction using the gpu'** this requires that you have a CUDA supported GPU!

#### 👨‍🏫 Lets use our classifier

The `predict.py` script requires you to:
- pass as a first argument the path to your image
- pass as a seccond argument the checkpoint path to be used
- after that you can pass in any order the above arguments as well to fine tune the prediction process 😸


#### 🧑‍💻 Examples

**If you have CUDA compatible gpu**
```bash
python predict.py flowers/test/10/image_07090.jpg checkpoints/alexnet_checkpoint.pth --gpu
```

**Otherwise**
```bash
python predict.py flowers/test/10/image_07090.jpg checkpoints/alexnet_checkpoint.pth
```

This will start the prediction process and you will get a list of the top predictions for the `flowers/test/10/image_07090.jpg` !

#### 🎉 Congratz!

You have trained an image classifier and used it to make predictions 👏 !!!
