import React from 'react';
import {StyleSheet, Text, View, Image, ListView, TouchableOpacity, TextInput, Button, Linking} from 'react-native';


export default class MovieList extends React.Component {

    constructor() {
        super();
        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
        this.state = {
            movieDataSource: dataSource.cloneWithRows(movies),
            db: movies,
            suggestion: "",
        };
    }

    details(movie) {
        this.props.navigation.navigate('Details', movie);
    }

    renderRow(movie) {
        return (
            <TouchableOpacity
                style={styles.touchable}
                onPress={() => this.details(movie)}>
            <Image
                source={movie.image}
                style={styles.thumbnail}
                />
                <Text style={styles.movieText}>{movie.name}</Text>
                <Text style={styles.movieText}>({movie.year})</Text>
            </TouchableOpacity>
        )
    }

    share() {
        if(this.state.suggestion) {
            Linking.openURL("mailto:movietrackeradm@gmail.com?subject=Movie Tracker Suggestion&body=" + JSON.stringify(this.state.suggestion));
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.suggestion}>
                    <TextInput
                        style={styles.suggestionsText}
                        placeholder={"Suggestions"}
                        onChangeText={(suggestion) => this.setState({suggestion})} value={this.state.suggestion}
                    />

                    <View style={styles.suggestionButton}>
                        <Button  title="Send" onPress={() => this.share()}/>
                    </View>
                </View>

                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        MOVIES
                    </Text>
                </View>

                <ListView dataSource={this.state.movieDataSource} renderRow={this.renderRow.bind(this)}/>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    suggestion: {
        marginTop: 5,
        flexDirection: 'row',
    },
    suggestionsText: {
        paddingLeft: 10,
        height: 50,
        width: '70%'
    },
    suggestionButton: {
        width: '30%',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        // backgroundColor: '#fab',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 15,
        borderBottomColor: '#fff',

    },
    headerText: {
        color: '#000',
        fontSize: 25,
        padding: 26,

    },
    scrollContainer: {
        flex: 1,
    },
    touchable: {
        flex: 1,
        flexDirection: 'row',
    },
    movieText: {
        flex: 1,
    },
    thumbnail: {
        flex: 1,
        height: 150,
        resizeMode: 'contain',
    }
});