import { FC } from "react";
import { useCount } from "../hooks/useCount.tsx";
import Button from "./Button.tsx";

const Counter: FC = () => {
    const {count, resetCount, incrementCount, decrementCount} = useCount();
    return (
        <div className="border-8 border-[#272635] rounded-3xl p-8 shadow-2xl">
            <div
                className="flex flex-col justify-center items-center border-8 border-[#272635] rounded-3xl p-12 gap-8 shadow-inner">
                <h1 className="text-5xl font-bold text-[#272635]">Counter</h1>
                <p className="text-5xl font-bold text-[#272635]">{count}</p>
                <div className="flex gap-4">
                    <Button onClick={decrementCount} name="Decrement"/>
                    <Button onClick={incrementCount} name="Increment"/>
                </div>
                <Button onClick={resetCount} name="Reset"/>
            </div>
        </div>
    )
};

export default Counter;