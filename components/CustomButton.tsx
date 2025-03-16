import { View, Text, Pressable } from "react-native";
import React from "react";

interface CustomButtonProps {
    title: string;
    className?: string;
    onPress: () => void;
}

const CustomButton = ({ title, onPress, className }: CustomButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            className={`${className} bg-green-500 p-4 rounded-lg`}
        >
            <Text>{title}</Text>
        </Pressable>
    );
};

export default CustomButton;
