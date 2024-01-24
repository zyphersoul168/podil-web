import PropTypes from "prop-types";

export const MealTime = ({ mealTime, imgMealTime, calories, description, cookingTime }) => {
    return (
        <div>
            <div className="bg-white px-4 py-6 text-gray-950 rounded-xl shadow-lg">
                <img className="size-28 mx-auto" src={imgMealTime} alt={mealTime} />
                <div className="mt-3">
                    <p className="text-center font-medium text-lg">
                        {mealTime}
                    </p>
                    <p className="pt-2 text-center font-medium text-sm text-gray-500">
                        ~{calories} calories
                    </p>
                    <p className="text-center text-xs text-gray-500">
                        {description}
                    </p>
                    <p className="text-center text-xs text-gray-500">
                        cooking time: {cookingTime} min
                    </p>
                </div>
            </div>
            <button className="bg-black hover:bg-gray-900 mt-3 text-center p-2 rounded-full shadow-lg w-full">
                <p className="font-medium text-xs text-white py-1">
                    View the recipe
                </p>
            </button>
        </div>
    );
};

MealTime.propTypes = {
    mealTime: PropTypes.string,
    imgMealTime: PropTypes.string,
    calories: PropTypes.number,
    description: PropTypes.string,
    cookingTime: PropTypes.number,
};