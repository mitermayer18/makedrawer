import React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';
import { DrawerNavigatorItems} from 'react-navigation-drawer';

function CustomDrawer({...props}){
    return (
        <View style={styles.container}>
            <View style={styles.userArea}>
                <Image 
                    source={require('../../assets/user.png')}
                    style={styles.user}
                />
                <Text style={styles.nome}>Seu Jose</Text>
                <Text style={styles.nome}>4.5</Text>
            </View>

            <DrawerNavigatorItems {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
         flex:1,
         backgroundColor: '#4EB362',
         fontSize:18
    },
    userArea:{
        marginTop: 15,
        marginLeft:10,
        marginBottom:10
    },
    user:{
        width:55,
        height:55
    },
    nome:{
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default CustomDrawer;