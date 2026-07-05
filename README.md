# VDerm-X 🐄

**AI-driven mobile application for early detection and management of Lumpy Skin Disease (LSD) in cattle.**

Final Year Project — BS Computer Science, University of Engineering and Technology (UET), Lahore.

## Demo

**App Walkthrough**
[Demo Video of my App](https://drive.google.com/file/d/1DTl5q_eEFjLGF6Zsx6lr7QyfzgWAVJpq/view?usp=drive_link)

**Project Overview**
[Explained Video About what VDerm-X is!](https://drive.google.com/file/d/1bEyTY4kg_2acfPMkxCkPAHvwx43nscvF/view?usp=drive_link)

## Overview

VDerm-X combines machine learning, natural language processing, and mobile technology to help farmers, veterinary professionals, and public health authorities detect and manage Lumpy Skin Disease early — particularly in rural, low-connectivity regions where LSD carries significant economic and agricultural impact.

## Key Features

- 🔍 **AI-powered disease detection** — MobileNetV2-based deep learning model achieving over 92% accuracy in identifying LSD from cattle images
- 💬 **Domain-specific AI chatbot** — real-time treatment guidance and preventive advice
- 🗺️ **Outbreak visualization** — geolocation features with interactive heatmaps for real-time disease tracking
- 📅 **Veterinary appointment booking** — secure in-app scheduling system
- 🔌 **Offline functionality** — on-device inference via TensorFlow Lite for uninterrupted use without connectivity
- 🔐 **Secure authentication** — robust auth mechanisms ensuring data privacy and user trust
- 🔔 **Push notifications** — appointment reminders via Firebase Cloud Messaging

## Tech Stack

**Frontend (Mobile)**
- React Native (Expo) with TypeScript
- TensorFlow Lite for on-device model inference
- Firebase SDK for push notifications

**Backend**
- NestJS (Node.js) — REST API
- MongoDB (via MongoDB Atlas) with Mongoose

**Machine Learning**
- TensorFlow / Keras — MobileNetV2 architecture for image classification
- FastAPI — serving the trained model and exposing prediction endpoints
- Model quantized and converted to TensorFlow Lite for mobile deployment

## Project Structure

```
├── src/                    # React Native mobile app source
├── notebooks/              # ML model training & experimentation
│   └── lumpy_skin_disease_mobilenetv2.ipynb
├── Diagrams/               # System architecture & design diagrams
└── App.tsx                 # App entry point
```

## Getting Started

```bash
# install dependencies
npm install

# start the Expo development server
npx expo start
```


## Thesis & Documentation

- 📄 [Full Thesis (PDF)](https://drive.google.com/file/d/1EhPoJsbEcmbLLTKCGWAAzRLddT419Czz/view?usp=drive_link)
- 📊 [FYP-I Presentation](https://docs.google.com/presentation/d/1t5B7Mzy6qNps9VwwOrN8VyudrzJOkg2Z/edit?usp=drive_link&ouid=107496506754835843487&rtpof=true&sd=true)
- 📊 [FYP-II Presentation](https://docs.google.com/presentation/d/1gkNgfOspAlXhlhG1HeG4KXbM8vOsuGET/edit?usp=drive_link&ouid=107496506754835843487&rtpof=true&sd=true)

## License

This project is licensed under the MIT License.
