type FoodPack = {
    id: number;
    name: string;
  };
  
  type FoodPackListProps = {
    foodPacks: FoodPack[];
    onVote: (foodPackId: number) => void;
  };
  
  const FoodPackList = ({ foodPacks, onVote }: FoodPackListProps) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Select a Food Pack</h2>
        <ul className="space-y-4">
          {foodPacks.map((pack) => (
            <li
              key={pack.id}
              className="flex justify-between items-center p-4 rounded-lg bg-gray-200 hover:bg-gray-300 transition duration-300"
            >
              <span>{pack.name}</span>
              <button
                onClick={() => onVote(pack.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Vote
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FoodPackList;
  