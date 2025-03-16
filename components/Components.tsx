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
    ScrollView,
} from "react-native";
import React from "react";

const Components = () => {
    const platformText = Platform.OS === "ios" ? "iOS" : "Android";

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            {/* View */}
            <Text style={{ fontSize: 20, color: "green" }}>View component</Text>
            <View style={{ padding: 20 }}>
                <Text>Basic view</Text>
            </View>

            <Text style={{ fontSize: 20, color: "green" }}>Text component</Text>
            {/* Text */}
            <Text style={{ fontSize: 20 }}>Hello World</Text>

            {/* Image */}
            <Text style={{ fontSize: 20, color: "green" }}>
                Image component
            </Text>
            <Image
                source={{
                    uri: "https://img.freepik.com/free-psd/3d-rendering-interface-icon_23-2151553990.jpg?t=st=1742118971~exp=1742122571~hmac=651ce4ca7cba566c8e2dcc6c19f2612c7ea359e2e6ef0e18f367bb8bd3969cb4&w=900",
                }}
                style={{ width: 100, height: 100 }}
            />

            <Image
                source={require("@/assets/images/bruce-dalle.png")}
                alt="image"
                style={{ width: 100, height: 100 }}
            />

            {/* Touchables */}
            <Text style={{ fontSize: 20, color: "green" }}>
                Touchable components
            </Text>

            <Text style={{ fontSize: 16, color: "blue" }}>
                Touchable Opacity
            </Text>
            <TouchableOpacity onPress={() => alert("Pressed")}>
                <Text>Click Me</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 16, color: "blue" }}>
                Touchable Without Feedback
            </Text>
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

            <Text style={{ fontSize: 16, color: "blue" }}>
                Touchable Highlight
            </Text>
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

            <Text style={{ fontSize: 16, color: "blue" }}>
                Touchable Pressable
            </Text>
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
            <Text style={{ fontSize: 20, color: "green" }}>Button</Text>
            <Button title="Submit" onPress={() => alert("Submitted")} />

            {/* Stylesheet */}
            <Text style={{ fontSize: 20, color: "green" }}>
                Stylesheet usage
            </Text>
            <View style={styles.container}>
                <Text style={styles.text}>Styled Text</Text>
            </View>

            {/* Alert and platform-specific codes */}
            <Text style={{ fontSize: 20, color: "green" }}>
                Alert & platform specific codes
            </Text>
            <Text onPress={() => Alert.alert("Created sucessfully!")}>
                {platformText}
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    text: { color: "blue" },
    scroll: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,
        gap: 2,
    },
});

export default Components;
