type Restaurant = {
    id: number;
    name: string;
  };
  
  type RestaurantListProps = {
    restaurants: Restaurant[];
    selectedRestaurant: number | null;
    onRestaurantSelect: (id: number) => void;
  };
  
  const RestaurantList = ({ restaurants, selectedRestaurant, onRestaurantSelect }: RestaurantListProps) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Select a Restaurant</h2>
        <ul className="space-y-4">
          {restaurants.map((restaurant) => (
            <li
              key={restaurant.id}
              onClick={() => onRestaurantSelect(restaurant.id)}
              className={`cursor-pointer p-4 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300 ${
                selectedRestaurant === restaurant.id ? 'bg-gray-300' : ''
              }`}
            >
              {restaurant.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RestaurantList;
  