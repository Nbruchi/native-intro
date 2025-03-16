import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Button,
    StyleSheet,
    Platform,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    TouchableHighlight,
    Pressable,
} from "react-native";
import React from "react";

const Components = () => {
    const platformText = Platform.OS === "ios" ? "iOS" : "Android";

    return (
        <>
            {/* View */}
            <View style={{ padding: 20 }}>
                <Text>Content</Text>
            </View>

            {/* Text */}
            <Text style={{ fontSize: 20 }}>Hello World</Text>

            {/* Image */}
            <Image
                source={{ uri: "https://example.com/image.png" }}
                style={{ width: 100, height: 100 }}
            />

            {/* Touchables */}
            <TouchableOpacity onPress={() => alert("Pressed")}>
                <Text>Click Me</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={{ flex: 1, justifyContent: "center", padding: 20 }}
                >
                    <TextInput
                        placeholder="Type here"
                        style={{ borderBottomWidth: 1 }}
                    />
                </View>
            </TouchableWithoutFeedback>

            <TouchableHighlight
                onPress={() => alert("Highlighted!")}
                underlayColor="lightgray"
                style={{
                    padding: 10,
                    backgroundColor: "orange",
                    borderRadius: 5,
                }}
            >
                <Text style={{ color: "white" }}>Press Me</Text>
            </TouchableHighlight>

            <Pressable
                onPress={() => alert("Pressed!")}
                onLongPress={() => alert("Long Pressed!")}
                style={({ pressed }) => [
                    {
                        padding: 10,
                        backgroundColor: pressed ? "gray" : "blue",
                        borderRadius: 5,
                    },
                ]}
            >
                <Text style={{ color: "white" }}>Press Me</Text>
            </Pressable>

            {/* Button */}
            <Button title="Submit" onPress={() => alert("Submitted")} />

            <View style={styles.container}>
                <Text style={styles.text}>Styled Text</Text>
            </View>

            <Text onPress={() => Alert.alert("Created sucessfully!")}>
                {platformText}
            </Text>
        </>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    text: { color: "blue" },
});

export default Components;
