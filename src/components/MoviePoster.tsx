import { View, Text, StyleSheet, Image } from "react-native";
import { Movie } from "../interfaces/movieInterfaces";

interface Props{
    movie: Movie;
}

export default function MoviePoster({movie}: Props) {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
        <View style={styles.view}>
            <Image
                source={{uri}}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18
    },
    view:{
        width:300,
        height:420,
    }
});