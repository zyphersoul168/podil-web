import PropTypes from "prop-types";

export const CarouselCard = ({ title, desc, color }) => {
    return (
        <div className="bg-white p-6 rounded-lg mx-4 h-60 relative">
            <p className="text-sm text-gray-500 uppercase self-end">{title}</p>
            <p className="text-black">{desc}</p>
            <div
                className="mt-4 rounded-full size-8 absolute bottom-4"
                style={{ backgroundColor: `${color}`}}
            ></div>
        </div>
    );
};

CarouselCard.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    color: PropTypes.string,
};
