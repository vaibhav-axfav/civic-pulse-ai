# Civic Pulse AI 
Real-Time Community Incident & Response Platform

Civic Pulse AI is a real-time civic intelligence and emergency triage application built for local communities. Powered by **Google Gemini 3.8 Flash** and hosted on **Google Cloud**, Civic Pulse AI processes multimodal community reports (text, voice, photos) to classify hazards, extract geotags, and auto-route actionable alerts to local authorities and citizens.

## 🚀 Key Features

* **Multimodal Triage:** Evaluates text descriptions, voice notes, regional dialects, and imagery of civic incidents (e.g., road hazards, flooding, public safety risks).
* **Sub-Second Processing:** Utilizes Gemini 3.8 Flash for ultra-low latency structured JSON classification.
* **Localized Context:** Generates structured severity scores (1–5), precise geotags, and recommended immediate community actions.
* **Scalable Cloud Architecture:** Designed to run seamlessly on Google Cloud Run and Firebase.

## 🏗️ Tech Stack & Google Cloud Services

* **AI & Machine Learning:** Google AI Studio, Gemini 3.8 Flash API
* **Backend:** Google Cloud Run / Node.js
* **Database & Storage:** Firebase Firestore & Cloud Storage
* **Frontend:** React / Web Interface

## ⚙️ Architecture Workflow

1. **User Report:** Citizen submits incident details (text, voice note, or photo).
2. **AI Analysis:** Request sent to `gemini-3.8-flash` with custom system instructions to enforce safety and return strict JSON.
3. **Data Triage:** Server validates hazard classification, emergency level (1–5), and actionable summary.
4. **Community Broadcast:** Event logged in Firestore and broadcasted to local emergency dashboard.

## 📄 Setup & Execution

1. Clone the repository:
   ```bash
   git clone [https://github.com/vaibhav-axfav/civic-pulse-ai.git](https://github.com/vaibhav-axfav/civic-pulse-ai.git)
   cd civic-pulse-ai
