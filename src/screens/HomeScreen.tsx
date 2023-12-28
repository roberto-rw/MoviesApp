import { ActivityIndicator, Text, View } from "react-native";
import useMovies from "../hooks/useMovies";

export default function HomeScreen() {
    const {movies, isLoading} = useMovies();

    if(isLoading){
        return (
            <View style={{flex:1}}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )
    }

    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
}