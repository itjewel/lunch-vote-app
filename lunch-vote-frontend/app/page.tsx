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
    if (selectedRestaurant) {
      postVote(selectedRestaurant, foodPackId)
        .then(() => alert('Vote cast successfully!'))
        .catch(() => alert('Error casting vote.'));
    }
  };

  return (
    <div>
      <h1>Lunch Voting App</h1>

      <div>
        <h2>Today's Winner</h2>
        {dailyWinner ? (
          <p>{dailyWinner.restaurantName} - {dailyWinner.foodPackName}</p>
        ) : (
          <p>No winner yet.</p>
        )}
      </div>

      <div>
        <h2>Select a Restaurant</h2>
        <ul>
          {restaurants.map(restaurant => (
            <li key={restaurant.id} onClick={() => handleRestaurantSelect(restaurant.id)}>
              {restaurant.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedRestaurant && (
        <div>
          <h2>Select a Food Pack</h2>
          <ul>
            {foodPacks.map(pack => (
              <li key={pack.id}>
                {pack.name}
                <button onClick={() => handleVote(pack.id)}>Vote</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
