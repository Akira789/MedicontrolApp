import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon, View} from 'native-base';
import {StyleSheet, ActivityIndicator, Switch, Alert} from 'react-native';
import api from '../data/api';


class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            username:'', 
            pass:''}
    }

    registros = () => {
        this.props.navigation.navigate('Registro');
    }


    login = async() => {
        let validarLog = await api.validarLog(this.state.username, this.state.pass)

        if(validarLog.status == 1){
            this.props.navigation.navigate('MyDatePicker');
        }
        else{
            Alert.alert('Usuario o Clave invalidos');
        }
    }
    state={
        showIndicator:false,
    }
    onButtonPress=()=>{
        this.setState({
            showIndicator:true
        }),
    this.props.navigation.navigate('Usuario',{contrasena:this.state.contrasena, usuario:this.state.usuario});
    }
    state = {switchValue:false}
    toggleSwitch = (value) => {
      this.setState({switchValue: value})
   }

    render(){
        const navegar = this.props.navigation;
        if(this.state.showIndicator){
            return(
                <View style={misEstilos.content}>
                    <ActivityIndicator size="large" color="FFFFFF"></ActivityIndicator>
                </View>
            );
        }else{
        return(
            <>

<Container>
      <Content padder contentContainerStyle={styles.content}>
        <Card>
          <CardItem bordered>
            <Text style={styles.textCenter}>Inicio de sesión</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Item inlineLabel>
                <Icon type='FontAwesome' name='user' />
                  <Input placeholder='Nombre de usuario' onChangeText={(user)=> this.setState({user}) }/>
                </Item>
                <Item inlineLabel last>
                  <Icon type='FontAwesome' name='lock' />
                  <Input placeholder='Contraseña' secureTextEntry={true} onChangeText={(pass)=> this.setState({pass}) }/>
                </Item>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Button info style={styles.boton} onPress={() => navegar.navigate('Accionador') }>
              <Text style={{fontWeight: 'bold', fontFamily: 'sans-serif-condensed'}}> Entrar </Text></Button>
          </CardItem>
            <Button info style={{justifyContent:'center', marginLeft: '30%', width: 150}}
            onPress={() => navegar.navigate('Registro', { 
              titulo: 'Registro de usuario'
              }) }>
              <Text style={{fontWeight: 'bold', fontFamily: 'sans-serif-condensed'}}>Registrarse</Text></Button>
        </Card>
      </Content>
    </Container>

        </>
        );
    }
}
}


const styles = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'center', // CENTRAR CONTENIDO
    },
    textCenter: {
      textAlign: 'center', // ALINEAR EL TEXTO
      width: '100%', // OCUPAR EL ANCHO DE CARD
      fontSize: 23,
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'bold'
    },
    boton: {
      marginLeft: '36%', // AVENTAR DE LADO DERECHO
    },
    modalBackground : {
      flex : 1 ,
      alignItems : 'center' ,
      flexDirection : 'column' ,
      justifyContent : 'space-around' ,
      backgroundColor : '#EEEBE1'
    } ,
    activityIndicator : {
      backgroundColor : '#FFFFFF' ,
      height : 100 ,
      width : 100 ,
      borderRadius : 10 ,
      display : 'flex' ,
      alignItems : 'center' ,
      justifyContent : 'space-around'
    }
  });

export default Login;