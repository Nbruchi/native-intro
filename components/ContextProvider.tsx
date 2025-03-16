import CountProvider, { CountContext } from "@/context/CounterProvider";
import { useContext } from "react";
import { View, Text, Button } from "react-native";

// Consuming the context in a component
const Counter = () => {
    const { count, setCount } = useContext(CountContext);
    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
        </View>
    );
};

// Wrapping the root component with the provider
export default function App() {
    return (
        <CountProvider>
            <Counter />
        </CountProvider>
    );
}
