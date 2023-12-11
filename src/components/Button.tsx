import { memo } from "react";

interface ButtonProps {
    name: string,
    onClick: () => void,
}

const Button = ({name, onClick}: ButtonProps) => {
    return (
        <button
            className="before:ease text-[#272635] relative h-12 w-40 overflow-hidden text-xl border-2 rounded-lg font-medium border-[#272635] shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:-rotate-180"
            onClick={onClick}><span className="relative z-10">{name}</span></button>
    )
};

export default memo(Button);