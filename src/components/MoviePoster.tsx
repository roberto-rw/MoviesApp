import { View, Text, StyleSheet, Image } from "react-native";
import { Movie } from "../interfaces/movieInterfaces";

interface Props{
    movie: Movie;
    height?: number;
    width?: number;
}

export default function MoviePoster({movie, height = 420, width = 300}: Props) {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
        <View style={{
            height,
            width,
            marginHorizontal: 8
        }}>
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
    }
});