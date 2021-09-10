import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
        <Image
          style={styles.picture}
                source={require('./images/Burger.jpg')}
                    
                />
                <Text style={styles.titleText}>Delicious Food</Text>
                <Text style={styles.bodyText}>Let us help you order the best food!</Text>
                <View style={styles.space} /> 
                <Button
                style={styles.homeButton}
                    title="Learn More"
                    color="#4EEAF3"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 175,
        justifyContent: 'center',
        alignItems: 'center',
      },
      picture: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height:300,
        resizeMode: 'center',
        borderRadius: 400/ 2
      },
      titleText: {
          fontSize: 30,
      },
      bodyText: {
          fontSize:20
      },
      space: {
        width: 20, // or whatever size you need
        height: 20,
      },
      homeButton: {
        width: '10%',
        fontSize: 20
      }

});


export default Home;
