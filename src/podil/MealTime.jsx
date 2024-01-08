export const MealTime = ({ mealTime, imgMealTime, calories }) => {
    return (
        <div>
            <div className="bg-white px-8 py-6 text-gray-950 rounded-xl shadow-lg">
                <img className="size-28" src={imgMealTime} alt={mealTime} />
                <div className="mt-3">
                    <p className="text-center font-medium text-lg">
                        {mealTime}
                    </p>
                    <p className="font-medium text-center text-sm text-gray-500">
                        {calories}
                    </p>
                </div>
            </div>
            <div className="bg-green-400 hover:bg-green-500 mt-3 text-center p-2 rounded-full shadow-lg">
                <p className="font-medium text-xs text-gray-500 py-1">
                    View recipe
                </p>
            </div>
        </div>
    );
};
