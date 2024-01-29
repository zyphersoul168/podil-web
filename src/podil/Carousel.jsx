import { useState } from "react";
import Slider from "react-slick";
import { CarouselCard } from "./CarouselCard";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const cards = [
    {
        title: "meal plan",
        desc: "Meal plan with nutrition values (calories and macro-nutrients).",
        color: "#97A0E0",
    },
    {
        title: "price comparison",
        desc: "Grocery list with the price comparison from local markets.",
        color: "#D2E9ED",
    },
    {
        title: "know the body",
        desc: "Better well-being by understanding your body's needs and capabilities.",
        color: "#436570",
    },
    {
        title: "expert guidance",
        desc: "Pieces of advice curated to your case, expert guidance and reliable information.",
        color: "#A19F83",
    },
    {
        title: "body functions",
        desc: "Normalized work of the body functions.",
        color: "#E5C7AA",
    },
    {
        title: "preventive medicine",
        desc: "Minimized long-term chronic disease risk and illness prevention.",
        color: "#3F281D",
    },
    {
        title: "energy",
        desc: "Additional energy for everyday life.",
        color: "#A07777",
    },
    {
        title: "recipes",
        desc: "Diverse collection of 300 recipes from around the world.",
        color: "#F2DF9A",
    },
];

const NextArrow = ({ onClick }) => {
    return (
        <button
            className="absolute top-1/2 -right-10 bg-white hover:bg-zinc-300 transition duration-300 ease-in-out size-8 text-zinc-900 rounded-full p-2"
            onClick={onClick}
        >
            <ArrowRightIcon />
        </button>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <button
            className="absolute top-1/2 -left-10 bg-white hover:bg-zinc-300 transition duration-300 ease-in-out size-8 text-zinc-900 rounded-full p-2"
            onClick={onClick}
        >
            <ArrowLeftIcon />
        </button>
    );
};

export const Carousel = () => {

    const [cardIndex, setCardIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 4,
        centerMode: true,
        centerPadding: 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        beforeChange: (current, next) => setCardIndex(next),
    };

    return (
        <div className="w-10/12 mx-auto py-8">
            <Slider {...settings}>
                {cards.map((card, idx) => (
                    <div key={idx}>
                        <CarouselCard
                            className={
                                idx === cardIndex ? "bg-black" : "bg-red-400"
                            }
                            title={card.title}
                            desc={card.desc}
                            color={card.color}
                        />

                    </div>
                ))}
            </Slider>
        </div>
    );
};
