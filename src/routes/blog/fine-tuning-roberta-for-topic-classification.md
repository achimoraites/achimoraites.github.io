---
author: achimoraites
date: Fri Mar 24 2023 00:00:00 GMT+0100 
excerpt: In This tutorial, we fine-tune a RoBERTa model for topic classification using the Hugging Face Transformers and Datasets libraries.
image: https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1
tags: ['machine learning', 'python', 'nlp']
slug: fine-tuning-roberta-for-topic-classification
subtitle: In This tutorial, we fine-tune a RoBERTa model for topic classification using the Hugging Face Transformers and Datasets libraries.
title: Fine-Tuning RoBERTa for Topic Classification
url: https://achimoraites.github.io/blog/fine-tuning-roberta-for-topic-classification
---

<script context="module">
  export const prerender = true;
</script>

Photo by [Artem Podrez](https://www.pexels.com/@artempodrez?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)  from [Pexels](https://www.pexels.com/photo/a-woman-doing-an-experiment-5726788/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

<br />

In this tutorial, we fine-tune a **RoBERTa** model for topic classification using the Hugging Face Transformers and Datasets libraries. By the end of this tutorial, you will have a powerful fine-tuned model for classifying topics and published it to Hugging Face 🤗 for people to use.


## Prerequisites

This article assumes you have a [Hugging Face](https://hackernoon.com/10-best-hugging-face-datasets-for-building-nlp-models?ref=hackernoon.com) 🤗 account and working Python, NLP, and Deep learning knowledge.

1.  **Understanding of [machine learning concepts](https://hackernoon.com/machine-learning-algorithms-explained?ref=hackernoon.com)**: A basic understanding of machine learning concepts, such as supervised learning, training, and evaluation.
2.  **Python programming experience** will help follow the code presented in the tutorial.
3.  **Familiarity with deep learning and [natural language processing](https://hackernoon.com/what-is-natural-language-processing-a-brief-overview-wzm310l?ref=hackernoon.com)**: Some experience with deep learning and natural language processing (NLP) concepts, such as neural networks, word embeddings, and tokenization, will be beneficial for grasping the ideas presented in the tutorial.
4.  **Access to a Google Colab or Jupyter Notebook environment**.
5.  **A Hugging Face account**: To publish your fine-tuned model to the Hugging Face Hub, you will need a Hugging Face account. If you do not already have an account, you can sign up for one at [https://huggingface.co/join](https://huggingface.co/join?ref=hackernoon.com).

By meeting these prerequisites, you will be well-prepared to follow the tutorial and get the most out of it.

  

---

  

## Let's get our hands dirty 😁

We start by installing the dependencies.

```python
!pip install transformers datasets huggingface_hub tensorboard==2.11
!sudo apt-get install git-lfs --yes
```

  
We then import the needed modules.

```python
import torch
from datasets import load_dataset
from transformers import (
    RobertaTokenizerFast,
    RobertaForSequenceClassification,
    TrainingArguments,
    Trainer,
    AutoConfig,
)
from huggingface_hub import HfFolder, notebook_login
```

  
We need to log in to Hugging Face by using a token.

```python
notebook_login()
```

  

Let's set some variables for easier configuration.

```python
model_id = "roberta-base"
dataset_id = "ag_news"
# relace the value with your model: ex <hugging-face-user>/<model-name>
repository_id = "achimoraites/roberta-base_ag_news"
```

  

## Preprossessing

Next, we load our dataset and do some preprocessing.

```python
# Load dataset
dataset = load_dataset(dataset_id)

# Training and testing datasets
train_dataset = dataset['train']
test_dataset = dataset["test"].shard(num_shards=2, index=0)

# Validation dataset
val_dataset = dataset['test'].shard(num_shards=2, index=1)

# Preprocessing
tokenizer = RobertaTokenizerFast.from_pretrained(model_id)

# This function tokenizes the input text using the RoBERTa tokenizer. 
# It applies padding and truncation to ensure that all sequences have the same length (256 tokens).
def tokenize(batch):
    return tokenizer(batch["text"], padding=True, truncation=True, max_length=256)

train_dataset = train_dataset.map(tokenize, batched=True, batch_size=len(train_dataset))
val_dataset = val_dataset.map(tokenize, batched=True, batch_size=len(val_dataset))
test_dataset = test_dataset.map(tokenize, batched=True, batch_size=len(test_dataset))
```

  

## Set The Dataset Format

The `set_format()` function is used to specify the dataset format, making it compatible with PyTorch.

  

The `columns` argument lists the columns that should be included in the formatted dataset.

In this case, the columns are "input_ids", "attention_mask", and "label".

  

By setting the format and specifying the relevant columns, we prepare the datasets for use with the Hugging Face Trainer class, which requires PyTorch tensors as input.

```python
# Set dataset format
train_dataset.set_format("torch", columns=["input_ids", "attention_mask", "label"])
val_dataset.set_format("torch", columns=["input_ids", "attention_mask", "label"])
test_dataset.set_format("torch", columns=["input_ids", "attention_mask", "label"])
```

  

To make our model easier to use, we will create an **id2label** mapping. This will map the class ids to their labels.

  

This makes it easier to interpret the model’s output during inference.

```python
# We will need this to directly output the class names when using the pipeline without mapping the labels later.
# Extract the number of classes and their names
num_labels = dataset['train'].features['label'].num_classes
class_names = dataset["train"].features["label"].names
print(f"number of labels: {num_labels}")
print(f"the labels: {class_names}")

# Create an id2label mapping
id2label = {i: label for i, label in enumerate(class_names)}

# Update the model's configuration with the id2label mapping
config = AutoConfig.from_pretrained(model_id)
config.update({"id2label": id2label})
```

  

## Training and Evaluation

Now, we will set up our training parameters, Hugging Face 🤗 repository, and Tensorboard.

```python
# Model
model = RobertaForSequenceClassification.from_pretrained(model_id, config=config)

# TrainingArguments
training_args = TrainingArguments(
    output_dir=repository_id,
    num_train_epochs=5,
    per_device_train_batch_size=8,
    per_device_eval_batch_size=8,
    evaluation_strategy="epoch",
    logging_dir=f"{repository_id}/logs",
    logging_strategy="steps",
    logging_steps=10,
    learning_rate=5e-5,
    weight_decay=0.01,
    warmup_steps=500,
    save_strategy="epoch",
    load_best_model_at_end=True,
    save_total_limit=2,
    report_to="tensorboard",
    push_to_hub=True,
    hub_strategy="every_save",
    hub_model_id=repository_id,
    hub_token=HfFolder.get_token(),
)

# Trainer
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=val_dataset,
)
```

  

We can start the training process by running:

```python
# Fine-tune the model
trainer.train()
```

  

Evaluate the model:

```python
# Evaluate the model
trainer.evaluate()
```

  

---

## Publishing

We are ready to publish our model to Hugging Face 🤗

```python
# Save our tokenizer and create a model card
tokenizer.save_pretrained(repository_id)
trainer.create_model_card()
# Push the results to the hub
trainer.push_to_hub()
```

  

## Test The Model

At this point, our model should have been published and will be available for use. Let's test it!

```python
# TEST MODEL

from transformers import pipeline

classifier = pipeline('text-classification',repository_id)

text = "Kederis proclaims innocence Olympic champion Kostas Kederis today left hospital ahead of his date with IOC inquisitors claiming his innocence and vowing: quot;After the crucifixion comes the resurrection. quot; .."
result = classifier(text)

predicted_label = result[0]["label"]
print(f"Predicted label: {predicted_label}")
```


## Congratulations

You have fine-tuned and published a RoBERTa model for text classification using Hugging Face 🤗 transformers and datasets libraries!

 
[**For reference, here is my fine-tuned model on Hugging Face** 🤗](https://huggingface.co/achimoraites/roberta-base_ag_news)


[**You can find the code here**](https://github.com/achimoraites/machine-learning-playground/blob/main/NLP/Text%20classification/RoBERTa_Finetuning.ipynb)

Also published [on medium](https://medium.com/@achillesmoraites/fine-tuning-roberta-for-topic-classification-with-hugging-face-transformers-and-datasets-library-c6f8432d0820)


Happy 🤖 learning 😀!