import { View, Text, StyleSheet } from "react-native";


export default function MoviePoster() {
    return (
        <View>
            <Text>MoviePoster</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10
    },
    image: {
        flex: 1,
        borderRadius: 18
    }
});