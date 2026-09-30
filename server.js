import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// System instruction for Gemini 3.8 Flash
const SYSTEM_INSTRUCTION = `You are Civic Pulse AI, an emergency triage assistant. 
Analyze citizen reports and return a strict JSON object with:
- category: (e.g., Road Hazard, Flooding, Public Safety, Medical, Infrastructure)
- severity_score: integer between 1 and 5 (5 being highest risk)
- actionable_summary: brief 1-2 sentence description for emergency dispatch
- safety_recommendations: list of 2 immediate community safety tips`;

app.post('/api/triage', async (req, res) => {
  try {
    const { report } = req.body;
    if (!report) {
      return res.status(400).json({ error: 'Report content is required' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: report,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: 'application/json',
        temperature: 0.2
      }
    });

    const structuredOutput = JSON.parse(response.text);
    res.json({ success: true, triage: structuredOutput });
  } catch (error) {
    console.error('Error during triage processing:', error);
    res.status(500).json({ error: 'Failed to process incident report' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Civic Pulse AI backend running on port ${PORT}`);
});
