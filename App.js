import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {StackNavigator} from 'react-navigation';

import MovieList from './app/MovieList';
import MovieDetails from './app/MovieDetails';

const ScreenNavigator = StackNavigator({
    Home: {screen: MovieList},
    Details: {
        path: 'movieDetails/:movie',
        screen: MovieDetails}
});

global.movies = [{
    'id': 0,
    'name': 'IT',
    'year': '2017',
    'image': require('./img/it.jpg'),
}, {
    'id': 1,
    'name': 'Moana1',
    'year': '2019',
    'image': require('./img/moana.jpg'),
}, {
    'id': 2,
    'name': 'Moana2',
    'year': '2019',
    'image': require('./img/moana.jpg'),
}, {
    'id': 3,
    'name': 'Moana3',
    'year': '2019',
    'image': require('./img/moana.jpg'),
}, {
    'id': 4,
    'name': 'Moana',
    'year': '2019',
    'image': require('./img/moana.jpg'),
}];

export default ScreenNavigator;

