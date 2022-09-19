import { View, ScrollView} from "react-native";
import { useState, useEffect } from "react";
// import { fetchMovies } from "./api/index";
import { TextInput } from "react-native-paper";
import { StatusBar } from "react-native";
import {Appbar} from "react-native-paper";
import {fetchMovies} from '../api/index';
import MovieCards from "./moviecards";

export default function mymovies() {
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState("prison break");

  const getMovies = async () => {
    setMovies(await fetchMovies(searchMovie));
    setSearchMovie("");
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {Object.keys(movies).length > 0 && (
        <View>
          <StatusBar barStyle="dark-content" />
          <Appbar>
           <Appbar.Content title="Movie app"></Appbar.Content>
          </Appbar>
          <TextInput
            placeholder="Search your movies here"
            value={searchMovie}
            onChangeText={(text) => setSearchMovie(text)}
            left={<TextInput.Icon name="magnify" />}
            onSubmitEditing={getMovies}
          />
          <ScrollView>
            {movies.Search.map((movie, event) => (
              <MovieCards movie={movie} key={event} />
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
}