'use client';
import { useState, useEffect } from 'react';
import { getRestaurants, getFoodPacks, postVote, getDailyWinner } from './services/api';
import Winner from './components/Winner';
import RestaurantList from './components/RestaurantList';
import FoodPackList from './components/FoodPackList';

type Restaurant = {
  id: number;
  name: string;
};

type FoodPack = {
  id: number;
  name: string;
};

type WinnerType = {
  restaurantName: string;
  foodPackName: string;
};

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  const [foodPacks, setFoodPacks] = useState<FoodPack[]>([]);
  const [dailyWinner, setDailyWinner] = useState<WinnerType | null>(null);

  useEffect(() => {
    getRestaurants().then((response) => setRestaurants(response.data));
    getDailyWinner().then((response) => setDailyWinner(response.data));
  }, []);

  const handleRestaurantSelect = (id: number) => {
    setSelectedRestaurant(id);
    getFoodPacks(id).then((response) => setFoodPacks(response.data));
  };

  const handleVote = (foodPackId: number) => {
    if (selectedRestaurant) {
      postVote(selectedRestaurant, foodPackId)
        .then(() => alert('Vote cast successfully!'))
        .catch(() => alert('Error casting vote.'));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Lunch Voting App</h1>

      {/* Winner Section */}
      <Winner dailyWinner={dailyWinner} />

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Restaurants */}
        <RestaurantList
          restaurants={restaurants}
          selectedRestaurant={selectedRestaurant}
          onRestaurantSelect={handleRestaurantSelect}
        />

        {/* Right Side: Food Packs */}
        {selectedRestaurant && <FoodPackList foodPacks={foodPacks} onVote={handleVote} />}
      </div>
    </div>
  );
}
