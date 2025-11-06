// Minimal API wrapper for Chat, Scan and Weather using a generic SUM-style endpoint.
// Configure the real API base and key via environment or app config. When not
// configured, functions return safe mock data so the app still works locally.

const BASE = process.env.SUM_API_BASE || 'https://api.sum.example'; // replace with real base
const KEY = process.env.SUM_API_KEY || '';

type ChatResponse = { text: string };

export async function fetchChatResponse(prompt: string): Promise<ChatResponse> {
  if (!KEY || BASE.includes('example')) {
    // Fallback mock response for local development
    return { text: `(Mock) I received your question: "${prompt}" — please configure SUM_API_KEY to enable real answers.` };
  }

  const res = await fetch(`${BASE}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${KEY}`,
    },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) throw new Error(`Chat API error: ${res.status}`);
  const data = await res.json();

  // Expecting { text: string } or similar shape from SUM API
  return { text: data.text ?? JSON.stringify(data) };
}

export async function analyzeImageWithAI(imageUri: string): Promise<any> {
  if (!KEY || BASE.includes('example')) {
    // Return a simple mock structure matching existing disease objects
    return {
      name: 'Mock Disease (no API key)',
      symptoms: ['Mock symptom A', 'Mock symptom B'],
      treatment: ['Mock treatment A'],
      prevention: ['Mock prevention A'],
      type: 'mock',
    };
  }

  const form = new FormData();
  // react-native / expo-form-data style file object
  form.append('image', {
    // @ts-ignore - React Native FormData file shape
    uri: imageUri,
    name: 'photo.jpg',
    type: 'image/jpeg',
  } as any);

  const res = await fetch(`${BASE}/scan`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${KEY}`,
    },
    body: form as any,
  });

  if (!res.ok) throw new Error(`Scan API error: ${res.status}`);
  const data = await res.json();
  return data;
}

import { fetchWeatherApi } from 'openmeteo';
import { regionCoordinates } from './data/regionCoordinates';

export async function fetchWeather(region: string, options?: { hourlyVars?: string[]; start?: number; end?: number }): Promise<any> {
  const coords = regionCoordinates[region];
  if (!coords) {
    throw new Error(`Unknown region: ${region}. Provide coordinates in lib/data/regionCoordinates.ts`);
  }

  const hourlyVars = options?.hourlyVars ?? ['temperature_2m', 'precipitation', 'relativehumidity_2m', 'windspeed_10m'];
  const url = 'https://api.open-meteo.com/v1/forecast';

  // Build params
  const params: any = {
    latitude: coords.latitude,
    longitude: coords.longitude,
    hourly: hourlyVars.join(','),
    timezone: 'UTC',
  };

  // Allow caller to override a time window (epoch seconds)
  if (options?.start) params.start = options.start;
  if (options?.end) params.end = options.end;

  // Use fetchWeatherApi helper from the openmeteo package. It returns an array of responses.
  const responses = await fetchWeatherApi(url, params as any);
  const response = responses[0];

  // Build a simple, familiar JS object similar to previous mock shape
  const latitude = response.latitude?.();
  const longitude = response.longitude?.();
  const elevation = response.elevation?.();
  const utcOffsetSeconds = response.utcOffsetSeconds?.() ?? 0;

  const hourly = response.hourly?.();

  // Build time array based on snippet approach. If API exposes time/interval helpers, prefer those.
  let times: Date[] = [];
  const hourlyAny: any = hourly;

  if (hourlyAny && typeof hourlyAny.time === 'function' && typeof hourlyAny.timeEnd === 'function' && typeof hourlyAny.interval === 'function') {
    try {
      const startSec = Number(hourlyAny.time());
      const endSec = Number(hourlyAny.timeEnd());
      const interval = Number(hourlyAny.interval());
      const length = Math.max(0, Math.floor((endSec - startSec) / interval));
      times = Array.from({ length }, (_, i) => new Date((startSec + i * interval + utcOffsetSeconds) * 1000));
    } catch (e) {
      // keep times empty, fallback below
    }
  }

  if (times.length === 0) {
    // fallback: try to derive length from first variable values array
    const fallbackLen = (hourlyAny?.variables?.(0)?.valuesArray?.()?.length) || 0;
    times = Array.from({ length: fallbackLen }, (_, i) => new Date(Date.now() + i * 3600 * 1000));
  }

  const variables: any = {};
  // Try to read variables by name (if supported) or by iterating requested hourlyVars
  for (const varName of hourlyVars) {
    try {
      // some implementations expose variables(varName) or variables(index)
      const varObj = (typeof hourlyAny.variables === 'function') ? (hourlyAny.variables(varName) ?? hourlyAny.variables()) : null;
      if (varObj && typeof varObj.valuesArray === 'function') {
        const key = (typeof varObj.key === 'function' ? varObj.key() : varName) || varName;
        variables[key] = varObj.valuesArray();
        continue;
      }
    } catch (e) {
      // ignore and continue to next strategy
    }

    // Last-resort: try response.hourly().variables(i)
    try {
      const varIndex = hourlyVars.indexOf(varName);
      const varObj2 = hourlyAny?.variables?.(varIndex);
      if (varObj2 && typeof varObj2.valuesArray === 'function') {
        const key2 = (typeof varObj2.key === 'function' ? varObj2.key() : varName) || varName;
        variables[key2] = varObj2.valuesArray();
        continue;
      }
    } catch (e) {
      // ignore
    }

    // If nothing found, create empty array
    variables[varName] = [];
  }

  const weatherData = {
    latitude,
    longitude,
    elevation,
    utcOffsetSeconds,
    hourly: {
      time: times,
      ...variables,
    },
  };

  return weatherData;
}

export default { fetchChatResponse, analyzeImageWithAI, fetchWeather };
