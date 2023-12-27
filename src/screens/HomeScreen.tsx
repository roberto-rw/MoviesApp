import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title="ir detalle"
                    onPress={() => navigation.navigate('Details' as never)}
                ></Button>
        </View>
    );
}