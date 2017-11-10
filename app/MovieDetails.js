import React from 'react';
import {StyleSheet, TextInput, Button, View, Image, TouchableOpacity} from 'react-native';
import { NavigationActions } from 'react-navigation'


export default class MovieListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            year: 0,
            image: "",
        };

        if (this.props.navigation.state.params.id !== undefined) {
            let m = this.props.navigation.state.params;
            this.state.id = m.id;
            this.state.name = m.name;
            this.state.year = m.year;
            this.state.image = m.image;
        }
    }

    save() {
        let movie = this.state;

        if(!Number.isInteger(movie.year)) {
            alert("Year is not a valid integer");
            return;
        }
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === movie.id) {
                movies[i] = movie;
            }
        }

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'})
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View>
                <TextInput style={styles.input} onChangeText={(name) => this.setState({name})} value={this.state.name}/>
                <TextInput style={styles.input} keyboardType='numeric' onChangeText={(year) => this.setState({year})}
                           value={this.state.year.toString()}/>
                <Button title="save" onPress={() => this.save()}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        height: 50,
    }
});
