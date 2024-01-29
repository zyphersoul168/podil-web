import { useState, useEffect, useRef } from "react";
import { MealTime } from "./MealTime";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Carousel } from "./Carousel";
import { Transition } from "react-transition-group";

// const duration = 500;
// const defaultStyle = {
//     transition: `opacity ${duration}ms ease-in-out`,
//     opacity: 0,
// };
// const transitionStyles = {
//     entering: { opacity: 1 },
//     entered: { opacity: 1 },
//     exiting: { opacity: 0 },
//     exited: { opacity: 0 },
// };

export const HomePage = () => {
    const characters = [
        {
            name: "woman",
            bg: "https://i.imgur.com/6kJDiRA.png",
            character: "https://imgur.com/KjET2Mf.png",
        },
        {
            name: "momndchild",
            bg: "https://imgur.com/ly98Q42.png",
            character: "https://imgur.com/AfdBD4N.png",
        },
        {
            name: "business",
            bg: "https://imgur.com/1hpM3bO.png",
            character: "https://imgur.com/JxljcA9.png",
        },
        {
            name: "fitness",
            bg: "https://imgur.com/UqaWhHD.png",
            character: "https://imgur.com/PtWgtxF.png",
        },
        {
            name: "student",
            bg: "https://imgur.com/Ep1zS3B.png",
            character: "https://imgur.com/lJe8pkJ.png",
        },
        {
            name: "momndchild2",
            bg: "https://imgur.com/gFPjW1P.png",
            character: "https://imgur.com/XlCgFij.png",
        },
    ];
    const [imgIndex, setImgIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);

        const intervalId = setInterval(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [imgIndex]);

    useEffect(() => {
        //change image each 5s
        const invervalId = setInterval(() => {
            // increment imgIndex
            setImgIndex((prevIndex) => (prevIndex + 1) % characters.length);
        }, 2000);
        
        // clean interval when component unmounts
        return () => {
            clearInterval(invervalId);
        };
    }, [imgIndex, characters.length]);

    return (
        <div className="bg-white">
            <div
                className="bg-cover pb-10"
                style={{ backgroundImage: `url(${characters[imgIndex].bg})` }}
            >
                <div className="pt-32 flex items-center h-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="w-1/3">
                        <h1 className="text-5xl text-slate-50 font-extrabold">
                            Nutrition Calculator and Grocery Delivery
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
                        <Transition
                            nodeRef={nodeRef}
                            in={isVisible}
                            timeout={500}
                            unmountOnExit={true}
                        >
                            {(state) => (
                                <img
                                    className={`slide-in slide-in-${state}`}
                                    src={characters[imgIndex].character}
                                    alt={characters[imgIndex].name}
                                />
                            )}
                        </Transition>
                    </div>
                    <div className="w-1/3"></div>
                </div>
                {/* recipes */}
                <div className="flex flex-row gap-3 justify-center">
                    <MealTime
                        mealTime="Breakfast"
                        imgMealTime="https://imgur.com/QKVRiAT.png"
                        calories={350}
                        description="25g carbs, 20g protein, 15g fats"
                        cookingTime={10}
                    />
                    <MealTime
                        mealTime="Lunch"
                        imgMealTime="https://imgur.com/KCrK07H.png"
                        calories={450}
                        description="10g carbs, 30g protein, 25g fats"
                        cookingTime={30}
                    />
                    <MealTime
                        mealTime="Dinner"
                        imgMealTime="https://imgur.com/mXt0NFB.png"
                        calories={550}
                        description="40g carbs, 35g protein, 28g fats"
                        cookingTime={40}
                    />
                    <MealTime
                        mealTime="Snack"
                        imgMealTime="https://imgur.com/RrpyMVS.png"
                        calories={310}
                        description="35g carbs, 20g protein, 10g fats"
                        cookingTime={10}
                    />
                </div>
                {/* total grocery list */}
                <div className="bg-white mt-10 p-10 rounded-2xl mx-auto w-fit">
                    <p className="font-medium text-black">Total grocery list</p>
                    <br />
                    <div className="flex gap-10 items-center text-black">
                        <div className="overflow-x-auto">
                            <table className="table border border-black">
                                {/* head */}
                                <thead className="text-zinc-400" >
                                    <tr>
                                        <th className="text-black border border-zinc-300">Name</th>
                                        <th className="text-black border border-zinc-300">Amount</th>
                                        <th className="text-black border border-zinc-300">Price in Lulu</th>
                                        <th className="text-black border border-zinc-300">Price in Monoprix</th>
                                        <th className="text-black border border-zinc-300">Price in Carrefour</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-zinc-300">Whole Grain Bread</td>
                                        <td className="border border-zinc-300">1 loaf</td>
                                        <td className="border border-zinc-300">QAR 12</td>
                                        <td className="border border-zinc-300">QAR 13</td>
                                        <td className="border border-zinc-300">QAR 11</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-zinc-300">Avocado</td>
                                        <td className="border border-zinc-300">2 units</td>
                                        <td className="border border-zinc-300">QAR 8</td>
                                        <td className="border border-zinc-300">QAR 10</td>
                                        <td className="border border-zinc-300">QAR 19</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-zinc-300">Chicken Breast</td>
                                        <td className="border border-zinc-300">500g</td>
                                        <td className="border border-zinc-300">QAR 22</td>
                                        <td className="border border-zinc-300">QAR 15</td>
                                        <td className="border border-zinc-300">QAR 20</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-zinc-300">Salmon Fillet</td>
                                        <td className="border border-zinc-300">500g</td>
                                        <td className="border border-zinc-300">QAR 30</td>
                                        <td className="border border-zinc-300">QAR 35</td>
                                        <td className="border border-zinc-300">QAR 28</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-zinc-300">Greek Yogurt</td>
                                        <td className="border border-zinc-300">500g</td>
                                        <td className="border border-zinc-300">QAR 10</td>
                                        <td className="border border-zinc-300">QAR 12</td>
                                        <td className="border border-zinc-300">QAR 11</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold border border-zinc-300">Total</td>
                                        <td className="border border-zinc-300"></td>
                                        <td className="border border-zinc-300 font-bold">QAR 136</td>
                                        <td className="border border-zinc-300 font-bold">QAR 145</td>
                                        <td className="border border-zinc-300 font-bold">QAR 132</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            // className="radial-progress bg-white text-zinc-500 border-4 border-white"
                            // style={{
                            //     "--value": "73",
                            //     "--size": "12rem",
                            //     "--thickness": "1.6rem",
                            // }}
                            // role="progressbar"
                            className="flex flex-col justify-center size-48 bg-no-repeat bg-cover text-[#828282]"
                            style={{backgroundImage: `url("https://imgur.com/RrnW1I6.png")`}}
                        >
                            <p className="font-medium text-center text-4xl">
                                73%
                            </p>
                            <p
                                className="text-center w-20 mx-auto"
                                style={{ fontSize: "0.6rem" }}
                            >
                                you&apos;ve done to meet the goal
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* save time nerves and money */}
            <div className="mt-28">
                <div
                    className="bg-center bg-cover mx-auto grid grid-col-1 grid-rows-2 rounded-3xl text-black w-10/12 content-between portada2"
                    style={{
                        backgroundImage: `url("https://imgur.com/9m3qXyb.png")`,
                        height: "780px",
                    }}
                >
                    <div></div>
                    <div className="font-light justify-self-end mr-6 text-end w-3/12">
                        Created in collaboration with specialists from Stanford
                        and Carngie Melon University
                    </div>
                    <div className="pb-6">
                        <button className="flex gap-x-2 py-2 px-5 bg-[#202020] rounded-full text-xs text-white">
                            Contact us
                            <ArrowUpRightIcon className="size-4" />
                        </button>
                        <br />
                        <p className="text-5xl font-medium">
                            Save time,
                            <br /> nerves and money
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-12 gap-x-6 w-10/12 mx-auto text-[#202020]">
                    <div className="border border-1 border-black p-6 rounded-2xl w-1/3">
                        <p className="text-2xl">Time</p>
                        <p className="font-light mt-4">
                            Questionnaire takes 2 minutes and meal plan creation
                            takes 3. Overall, 5 minutes.
                        </p>
                    </div>
                    <div className="border border-1 border-black p-6 rounded-2xl w-1/3">
                        <p className="text-2xl">Nerves</p>
                        <p className="font-light mt-4">
                            Save yourself from endless rabbit hole of recipes
                            and “the most effective diet”. Get a meal plan
                            tailored to your everyday lifestyle, given your
                            goals, limitations and preferences.
                        </p>
                    </div>
                    <div className="border border-1 border-black p-6 rounded-2xl w-1/3">
                        <p className="text-2xl">Money</p>
                        <p className="font-light mt-4">
                            Get a grocery list for your meal plan that fits in
                            your budget. We compare local stores&apos;s prices
                            and give you the best options. Healthy meal plan
                            without salmon or chia seeds is still a healthy meal
                            plan.
                        </p>
                    </div>
                </div>
                {/* create a lifestyle */}
                <div className="flex flex-col gap-y-4 text-end text-black w-10/12 mx-auto mt-20">
                    <p className="text-4xl font-medium">
                        Create a lifestyle, not a diet
                    </p>
                    <div className="font-light w-64 self-end">
                        Healthy lifestyle and diet are not limited to chicken
                        filet and broccoli.
                    </div>
                </div>
                {/* how to use */}
                <div className="mt-28 flex gap-x-10 mx-auto w-10/12">
                    <img
                        src="https://imgur.com/0pU3Ory.png"
                        alt="manDrinking"
                    />
                    <div className="flex flex-col self-center text-black">
                        <p className="font-medium text-xl mb-6">HOW TO USE?</p>
                        <div className="flex flex-col gap-y-3">
                            <hr className="border border-t-1 border-black" />
                            <div className="flex gap-x-4">
                                <p>01</p>
                                <p>Set your heath goals</p>
                            </div>
                            <hr className="border border-t-1 border-black" />
                            <div className="flex gap-x-4">
                                <p>02</p>
                                <p>Get the meal plan</p>
                            </div>
                            <hr className="border border-t-1 border-black" />
                            <div className="flex gap-x-4">
                                <p>03</p>
                                <p>Do Grocery delivery</p>
                            </div>
                            <hr className="border border-t-1 border-black" />
                            <div className="flex gap-x-4">
                                <p>04</p>
                                <p>Explore the menu with the recipe library</p>
                            </div>
                            <hr className="border border-t-1 border-black" />
                            <div className="flex gap-x-4">
                                <p>05</p>
                                <p>Track the progress and adjust the plan</p>
                            </div>
                            <hr className="border border-t-1 border-black" />
                        </div>
                        <button className="bg-black hover:bg-zinc-700 py-2 px-4 mt-8 text-white text-xs rounded-full w-fit self-end">
                            Join Now
                        </button>
                    </div>
                </div>
                {/* you can achieve */}
                <div className="flex my-20 mx-auto w-10/12 justify-between">
                    <div className="font-medium w-96">
                        <p className="text-4xl text-black">
                            You can achieve your healthy goals even if
                        </p>
                        <br />
                        <ul className="list-disc ml-4 text-zinc-600">
                            <li>You decided to change your life overnight.</li>
                            <li>Don&apos;t have time to cook.</li>
                            <li>You&apos;re on a tight budget.</li>
                            <li>You have bad habits. </li>
                        </ul>
                    </div>
                    {/* TODO: make a grid */}
                    <img
                        className="size-3/6"
                        src="https://imgur.com/HrfmYK6.png"
                        alt=""
                    />
                    <div className="absolute bg-white text-black font-medium rounded-3xl px-4 py-3 w-52 right-36 translate-y-96">
                    Get your plan even at
                    3 am in just 5 minutes
                    </div>
                </div>
            </div>
            {/* benefits you get */}
            {/* <div className="bg-zinc-900 h-[100px]" style={{borderRadius: "40% / 100%", borderBottomLeftRadius: 0, borderBottomRightRadius:0}}></div> */}
            <div className="pt-10 bg-no-repeat bg-cover" style={{backgroundImage: `url("https://imgur.com/wWffgQR.png")`}}>
                <p className="text-white text-4xl font-medium text-center pt-10">
                    Benefits you get
                </p>
                <br />
                <Carousel />
                <div className="w-7/12 my-10 mx-auto">
                    <div className="absolute border-[3px] border-white bg-transparent h-[445px] rounded-2xl -translate-x-5 translate-y-6 w-7/12"></div>
                        <div className="bg-zinc-900 border-[3px] border-white p-14 rounded-2xl text-white">
                            <p className="text-4xl mb-4">
                                Get a 20% discount and a personalized solution
                                at our first launch
                            </p>
                            <form
                                action="post"
                                className="flex flex-col gap-y-6"
                            >
                                <input
                                    className="bg-zinc-900 border-b-2 border-b-white p-1 w-6/12"
                                    type="text"
                                    placeholder="Name"
                                />
                                <input
                                    className="bg-zinc-900 border-b-2 border-b-white p-1 w-6/12"
                                    type="text"
                                    placeholder="Email"
                                />
                                <input
                                    className="bg-zinc-900 border-b-2 border-b-white p-1 w-6/12"
                                    type="text"
                                    placeholder="Phone"
                                />
                                <button className="bg-amber-200 font-medium text-zinc-900 mt-6 px-4 py-2 rounded-full w-fit">
                                    Reserve your spot
                                </button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    );
};
