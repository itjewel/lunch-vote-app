'use client'
import { useState, useEffect } from 'react';
import { getRestaurants, getFoodPacks, postVote, getDailyWinner } from './services/api';

type Restaurant = {
  id: number;
  name: string;
};

type FoodPack = {
  id: number;
  name: string;
};

type Winner = {
  restaurantName: string;
  foodPackName: string;
};

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  const [foodPacks, setFoodPacks] = useState<FoodPack[]>([]);
  const [dailyWinner, setDailyWinner] = useState<Winner | null>(null);
  
  useEffect(() => {
    getRestaurants().then(response => setRestaurants(response.data));
    getDailyWinner().then(response => setDailyWinner(response.data));
  }, []);

  const handleRestaurantSelect = (id: number) => {
    setSelectedRestaurant(id);
    getFoodPacks(id).then(response => setFoodPacks(response.data));
  };

  const handleVote = (foodPackId: number) => {
    // console.log(selectedRestaurant)
    if (selectedRestaurant) {
      postVote(selectedRestaurant, foodPackId)
        .then(() => alert('Vote cast successfully!'))
        .catch(() => alert('Error casting vote.'));
    }
  };

  console.log(dailyWinner)

  return (   
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Lunch Voting App</h1>

      {/* Winner Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Best Bites: Today's Winner</h2>
        {dailyWinner ? (          
          <p className="text-lg">{dailyWinner.restaurantName} - {dailyWinner.foodPackName}</p>
        ) : (
          <p className="text-lg text-gray-500">No winner yet.</p>
        )}
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Restaurants */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Select a Restaurant</h2>
          <ul className="space-y-4">
            {restaurants.map(restaurant => (
              <li
                key={restaurant.id}
                onClick={() => handleRestaurantSelect(restaurant.id)}
                className={`cursor-pointer p-4 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300 ${selectedRestaurant === restaurant.id ? 'bg-gray-300' : ''}`}
              >
                {restaurant.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Food Packs */}
        {selectedRestaurant && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Select a Food Pack</h2>
            <ul className="space-y-4">
              {foodPacks.map(pack => (
                <li key={pack.id} className="flex justify-between items-center p-4 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300">
                  <span>{pack.name}</span>
                  <button
                    onClick={() => handleVote(pack.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Vote
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
