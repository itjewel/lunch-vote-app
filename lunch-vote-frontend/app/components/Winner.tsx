type WinnerProps = {
    dailyWinner: { restaurantName: string; foodPackName: string } | null;
  };
  
  const Winner = ({ dailyWinner }: WinnerProps) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Best Bites: Today's Winner</h2>
        {dailyWinner ? (
          <p className="text-lg">
            {dailyWinner.restaurantName} - {dailyWinner.foodPackName}
          </p>
        ) : (
          <p className="text-lg text-gray-500">No winner yet.</p>
        )}
      </div>
    );
  };
  
  export default Winner;
  