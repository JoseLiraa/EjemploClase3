import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Pie = () => {
    return(
    <>
        <View style={contenedorPrincipal.container}>
                <Text style={contenedorPrincipal.texto}>Universidad Don Bosco</Text>
                <Text style={contenedorPrincipal.texto}>Diseño y Programación de Software Multiplataforma</Text>
        </View>
        </>
    );
}


const contenedorPrincipal= StyleSheet.create({
    container:{
        backgroundColor: '#E0FFFF',
        padding:15,
        marginTop:2,
        marginBottom:20,
        borderRadius:5,
        opacity:1
    },
    texto: {
        textAlign: 'center',
        color:'#000'
    },
});

export default Pie;