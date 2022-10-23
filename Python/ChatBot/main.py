import random
import json
import pickle as pkl
import numpy as np

import nltk
from nltk.stem import WordNetLemmatizer

from tensorflow.keras.models import load_model

lemmatizer = WordNetLemmatizer()

intents = {}
with open("intents.json", "r+") as f:
    intents = json.loads(f.read())

words = []
with open("words.pkl", 'rb') as f:
    words = pkl.load(f)

classes = []
with open("classes.pkl", 'rb') as f:
    classes = pkl.load(f)

model = load_model("chatbot.h5")


def clean_up_sentence(sentence):
    sentence_word = nltk.word_tokenize(sentence)
    sentence_word = [lemmatizer.lemmatize(word) for word in sentence_word]
    return sentence_word


def bag_of_words(sentence):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for w in sentence_words:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1

    return np.array(bag)


def predict_class(sentence):
    bag = bag_of_words(sentence)
    res = model.predict(np.array([bag]))[0]
    ERROR_THRESHOLD = 0.25
    result = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]
    result.sort(key=lambda x: x[1], reverse=True)

    result_list = []
    for r in result:
        result_list.append({'intent': classes[r[0]], 'probability': str(r[1])})

    return result_list


def get_response(intents_list, intents_json):
    tag = intents_list[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if i['tag'] == tag:
            result = random.choice(i['responses'])
            break
    return result


print("Let's Rock")

while True:
    message = input("")
    predicted_class = predict_class(message)
    res = get_response(predicted_class, intents)
    print(res)
