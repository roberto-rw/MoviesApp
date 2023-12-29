import { FlatList } from "react-native-gesture-handler";
import { Movie } from "../interfaces/movieInterfaces";
import MoviePoster from "./MoviePoster";
import { StyleSheet, Text, View } from "react-native";

interface Props{
    title: string;
    movies: Movie[];
}

export default function HorizontalSlider({title, movies}: Props){
    
    return(
        <View style={{ height: 260}}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={movies}
                renderItem={({item}: any) => <MoviePoster movie={item} width={140} height={200} />}
                keyExtractor={ (item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        color: 'black',
        marginLeft: 10,
        padding: 10
    },
})