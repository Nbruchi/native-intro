import React from "react";
import { View, Text, Button } from "react-native";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { increment, decrement, setValue } from "@/redux/counterSlice";

export default function CounterScreen() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <View>
            <Text>Counter: {count}</Text>
            <Button title="Increase" onPress={() => dispatch(increment())} />
            <Button title="Decrease" onPress={() => dispatch(decrement())} />
            <Button title="Set to 10" onPress={() => dispatch(setValue(10))} />
        </View>
    );
}
