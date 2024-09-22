// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',  // Replace with your Nest.js backend API
});

export const getRestaurants = () => api.get('/restaurants');
export const getFoodPacks = (restaurantId: number) => api.get(`/food-packs/restaurant/${restaurantId}`);
export const postVote = (restaurantId: number, foodPackId: number) => api.post('/votes', { restaurantId, foodPackId });
export const getDailyWinner = () => api.get('/votes/winner');
