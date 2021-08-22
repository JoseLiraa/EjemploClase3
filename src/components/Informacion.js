import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Informacion = () => {
    return(
        <>
        <View style={contenedorPrincipal.container}>
            <View style={contenedorArriba.container}>
                <View style={contenedorArriba.contenedorImagen}>
                    <Image
                    style={contenedorArriba.contenedorImagenEstilo}
                    source={require('../../assets/foto.jpeg')}
                    />
                </View>
            <View style={Texto.container}>
                <Text style={Texto.container}>José Antonio Morales Lira</Text>
                <Text style={Texto.container}>Carnet: ML161665</Text>
            </View>
            </View>
            <View style={contenedorAbajo.container}>
                <Text style={estiloParrafo.container}>
                Mis hobbies: Me gusta empezar el día yendo a correr, disfruto mucho de cocinar,
                me gusta tener una alimentación variada y nutritiva, por la tarde noche voy al
                gimnasio. Además, que busco aprender sobre temas relacionados al desarrollo web y movil.
                </Text>
                <Text style={estiloParrafo.container}>
                Lenguaje de programación que mas me guste: El lenguaje de programación que más domino es
                c#, pero el lenguaje de programación que más me gusta es JavaScript, me sorprende lo
                versatil que se ha vuelto este lenguaje, y las multiples cosas que se pueden desarrollar
                con él.
                </Text>
            </View>
        </View>
        </>
    );
}


const contenedorPrincipal= StyleSheet.create({
    container:{
        backgroundColor: '#E0FFFF',
        padding:15,
        margin:20,
        borderRadius:5,
        opacity:1
    },
});
const contenedorArriba = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        padding:15
    },
    contenedorImagen: {
        margin:'auto',
        width:400,
        height:350,
    },
    contenedorImagenEstilo:{
        display: 'flex',
        margin:'auto',
        alignItems: 'center',
        width:250,
        height:250,
        borderRadius:120
    },
});

const Texto = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        color: '#000',
        fontSize:50,
        fontWeight:'100',
        textAlign:'center',

    },
});

const contenedorAbajo = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin:10
    },
});

const estiloParrafo = StyleSheet.create({
    container: {
        color: '#000',
        fontSize:25,
        fontWeight:'100',
        textAlign:'justify',
        marginBottom:25,
        marginLeft:45,
        marginRight:45
    },
});

export default Informacion;