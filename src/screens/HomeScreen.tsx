import { ActivityIndicator, Dimensions, Text, View } from "react-native";
import useMovies from "../hooks/useMovies";
import MoviePoster from "../components/MoviePoster";
import Carousel from 'react-native-snap-carousel';


const windowWidth = Dimensions.get('window').width;

export default function HomeScreen() {
    const {movies, isLoading} = useMovies();

    if(isLoading){
        return (
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )
    }

    return (
        <View>
            <Carousel
                data={movies}
                renderItem={({item}: any) => <MoviePoster movie={item}/>}
                sliderWidth={windowWidth}
                itemWidth={300}
            />
        </View>
    );
}