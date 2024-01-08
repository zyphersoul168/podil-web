import { MealTime } from "./MealTime";

export const HomePage = () => {
    return (
        <div className="bg-[#91cbd8]">
            <div className="portada bg-cover pb-10">
                <div className="pt-32 flex items-center h-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="w-1/3">
                        <h1 className="text-5xl text-slate-50 font-extrabold">
                            Nutrition Calculator{" "}
                            <span className="text-amber-500">and</span> Grocery
                            Delivery
                        </h1>
                        <br />
                        <div className="text-slate-50">
                            Transform your diet in just 5 minutes with AI
                            nutrition planer.
                            <ul className="list-disc ml-4">
                                <li>Personalized meal plans</li>
                                <li>Easy recipes</li>
                                <li>One-click food delivery</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <img src="src\assets\woman.png" alt="woman" />
                    </div>
                    <div className="w-1/3"></div>
                </div>
                <div className="flex flex-row gap-3 justify-center">
                    <div>
                        <MealTime
                            mealTime="Breakfast"
                            imgMealTime="src\assets\breakfast.png"
                            calories="1750"
                        />
                    </div>
                    <MealTime
                        mealTime="Snack"
                        imgMealTime="src\assets\snack.png"
                        calories="1750"
                    />
                    <MealTime
                        mealTime="Lunch"
                        imgMealTime="src\assets\lunch.png"
                        calories="1750"
                    />
                    <MealTime
                        mealTime="Dinner"
                        imgMealTime="src\assets\dinner.png"
                        calories="1750"
                    />
                    <div className="bg-white px-8 py-6 text-gray-950 rounded-xl shadow-lg">
                        <p className="font-medium">Total Grocery List</p>
                        <ul className="list-disc mt-2 ml-4 text-gray-500 text-sm">
                            <li>Chicken fillet</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-28">
                <div className="flex">
                    <div className="w-1/3"></div>
                    <div className="w-full">
                        <h1 className="font-medium text-5xl text-right">
                            We are saving your time, <br />
                            nerves and money.
                        </h1>
                    </div>
                    <div className="w-1/3"></div>
                </div>
                <div className="flex gap-6 mt-10 justify-center">
                    <div className="bg-white p-6 rounded-2xl h-fit shadow-lg w-1/5 ">
                        <p className="font-medium text-2xl mb-2">Time</p>
                        <p>
                            Questionnaire takes 2 minutes and meal plan creation
                            takes 3. Overall, 5 minutes.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl h-fit shadow-lg w-1/5 ">
                        <p className="font-medium text-2xl mb-2">Nerves</p>
                        <p>
                            Save yourself from endless rabbit hole of recipes
                            and “the most effective diet”. Get a meal plan
                            tailored to your everyday lifestyle, given your
                            goals, limitations and preferences.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl h-fit shadow-lg w-1/5 ">
                        <p className="font-medium mb-2 text-2xl">Money</p>
                        <p>
                            Get a grocery list for your meal plan that fits in
                            your budget. We compare local stores’ prices and
                            give you the best options. Healthy meal plan without
                            salmon or chia seeds is still a healthy meal plan.
                        </p>
                    </div>
                </div>
                <p className="font-medium mt-20 text-center text-3xl text-black">
                    Create a lifestyle, not a diet
                </p>
                <div className="container mx-auto mt-12">
                    {/* timeline */}
                    <ul className="timeline">
                        <li>
                            <div className="timeline-end bg-white py-3 px-4 mt-8 rounded-full">
                                Set Your Health Goals
                            </div>
                            <div className="timeline-middle">
                                <div className="bg-white h-4 w-4 rounded-full"></div>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <div className="bg-white h-4 w-4 rounded-full"></div>
                            </div>
                            <div className="timeline-start bg-white py-3 px-4 mb-8 rounded-full">
                                Get the Meal Plan
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end bg-white py-3 px-4 mt-8 rounded-full">
                                Explore the Menu with the Recipe Library
                            </div>
                            <div className="timeline-middle">
                                <div className="bg-white h-4 w-4 rounded-full"></div>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <div className="bg-white h-4 w-4 rounded-full"></div>
                            </div>
                            <div className="timeline-start bg-white py-3 px-4 mb-8 rounded-full">
                                Do Grocery Delivery
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end bg-white py-3 px-4 mt-8 rounded-full">
                                Track Progress and Adjust the Plan
                            </div>
                            <div className="timeline-middle">
                                <div className="bg-white h-4 w-4 rounded-full"></div>
                            </div>
                        </li>
                    </ul>
                    <div className="font-medium mt-16 text-black">
                        <p>
                            Healthy lifestyle and diet are not limited to
                            chicken filet and broccoli.
                        </p>
                        <p className="mt-8">
                            You can achieve your healthy goals even if
                        </p>
                        <ul className="list-disc ml-4">
                            <li>Don&apos;t have time to cook</li>
                            <li>You&apos;re on tight budget</li>
                            <li>You have bad habits</li>
                            <li>You decided to change your life overnight</li>
                        </ul>
                    </div>
                </div>
                <p className="font-medium mt-20 text-center text-3xl text-black">
                    Get your plan even at 3 am in just 5 minutes
                </p>
                <div className="container mx-auto pl-4 py-16">
                    <ul className="list-disc text-black font-medium">
                        <li>
                            Meal plan with nutrition values (calories and
                            macro-nutrients)
                        </li>
                        <li>Recipes</li>
                        <li>
                            Grocery list with the price comparison from local
                            markets
                        </li>
                        <li>
                            Better well-being and deeper knowledge about the
                            capabilities, needs and problems of your body
                        </li>
                        <li>
                            Pieces of advice curated to your case, expert
                            guidance and reliable information
                        </li>
                        <li>Normalized work of the body functions</li>
                        <li>
                            Reduced risk of chronic diseases in the long-term
                            and preventing sickness
                        </li>
                        <li>Additional energy for everyday life</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
