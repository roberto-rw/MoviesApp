import { Text, View } from "react-native";
import { useEffect } from "react";
import movieDB from "../api/movieDB";
import { MovieDBNowPlaying } from "../interfaces/movieInterfaces";

export default function HomeScreen() {
    useEffect(() => {
        movieDB.get<MovieDBNowPlaying>('/now_playing')
        .then(resp => {
            console.log(resp.data.results[0].title)
        })
    }, [])

    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
}