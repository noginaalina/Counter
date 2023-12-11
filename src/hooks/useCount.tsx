import { useCallback, useState } from "react";

const useCount = () => {
    const [count, setCount] = useState<number>(0);

    const incrementCount = useCallback(() => {
        setCount((prevCount) => prevCount + 1)
    }, [])

    const decrementCount = useCallback(() => {
        setCount((prevCount) => prevCount - 1)
        if (count === 0) setCount(0)
    }, [count]);

    const resetCount = useCallback(() => {
        setCount(0)
    }, []);

    return {count, incrementCount, resetCount, decrementCount}
};

export { useCount };