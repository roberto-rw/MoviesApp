import { ActivityIndicator, Dimensions, Text, View } from "react-native";
import useMovies from "../hooks/useMovies";
import MoviePoster from "../components/MoviePoster";
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from "../components/HorizontalSlider";
import { ScrollView } from "react-native-gesture-handler";


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
        <ScrollView>
            <Carousel
                data={movies}
                renderItem={({item}: any) => <MoviePoster movie={item}/>}
                sliderWidth={windowWidth}
                itemWidth={300}
            />
            <HorizontalSlider movies={movies} title={"En cine 🚬"}/>
            <HorizontalSlider movies={movies} title={"Romanticas  💕"}/>
        </ScrollView>
    );
}