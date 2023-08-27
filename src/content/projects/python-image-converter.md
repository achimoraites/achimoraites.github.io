---
author: achimoraites
date: Sun Aug 27 2023 15:14:42 GMT+0200
excerpt: The python image converter is a free command line tool that allows for quick, batch conversions of images, it supports all the popular formats and you can choose to convert your images to either JPG or PNG.
tags: ['python', 'cli']
slug: python-image-converter
title: Python Image Converter
image: https://images.pexels.com/photos/1744663/pexels-photo-1744663.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1
url: https://achimoraites.io/projects/python-image-converter
---
[Photo by Wendy Wei](https://www.pexels.com/photo/camera-on-black-folding-chair-1744663/)

<br />

The python image converter is a free command line tool that allows for quick, batch conversions of images, it supports all the popular formats and you can choose to convert your images to either
JPG or PNG.

## Features
- **Fast**: Batch convert numerous raw images quickly.
- **Versatile**: Supports multiple formats like WEBP, DNG, CR2, CRW, and more.
- **Free**: Efficient conversions without the cost.


## Example usage

```bash
 # simple usage
 raw_image_converter --s <Enter-Path-Of-Directory>

 # set a custom target image format
 raw_image_converter --s <Enter-Path-Of-Directory> --ext '.png'
```
- The --s argument is where you set the path to the directory you want to convert! 
- The --ext argument is where you specify the image format that will be used for the converted images; by default the `.jpg` is used. valid options are:
    - `.jpg`
    - `.png`

The application will create a folder 'converted' where all your converted images are located!

And you are done! 

## ScreenShot
<img src='https://raw.githubusercontent.com/achimoraites/Python-Image-Converter/master/sample.png' alt='Python Image Converter'>

### Check it out
- [**GitHub**](https://github.com/achimoraites/Python-Image-Converter)
- [![PyPI version](https://badge.fury.io/py/raw-image-converter.svg)](https://pypi.org/project/raw-image-converter/)