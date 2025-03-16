import React, { createContext, useState, useContext } from "react";

interface CounterProviderProps {
    children: React.ReactNode;
}

interface CounterContextType {
    count: number;
    setCount: (count: number) => void;
}

// Create a context
export const CountContext = createContext<CounterContextType>({
    count: 0,
    setCount: () => {},
});

// Provider component to manage state
const CountProvider = ({ children }: CounterProviderProps) => {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
};

export default CountProvider;
