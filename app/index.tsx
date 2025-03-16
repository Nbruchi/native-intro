import CustomButton from "@/components/CustomButton";
import { View } from "react-native";

export default function Index() {
    return (
        <View className="flex-col items-center justify-center w-full h-screen">
            <CustomButton
                title="Click me"
                onPress={() => alert("Pressed")}
                className="hover:border hover:border-yellow-800"
            />
            <CustomButton
                title="Login"
                onPress={() => alert("Logged in successfully")}
                className="hover:border hover:border-emerald-800"
            />
            <CustomButton
                title="Sign Up"
                onPress={() => alert("Registered successfully")}
                className="hover:border hover:border-purple-800"
            />
        </View>
    );
}
