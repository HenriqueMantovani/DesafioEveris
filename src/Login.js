import React, { Component } from 'react';
import{
  View,
  Text,
  TextInput,
} from 'react-native';

import firebase from './Connection/firebaseConnection';
import Botao from './Botao/BotaoEntrar';
import {NavigationActions, StackActions } from 'react-navigation';
import styles from './Style/Style';

export default class Login extends Component{
  
    static navigationOptions = {
      title: 'Login',
      headerStyle:{
          backgroundColor: 'rgb(230,230,230)',
      },
    }
    
    constructor(props){
      super(props);
      this.state = {
        email: '',
        senha: '',
        matricula: ''
      };

      this.logar = this.logar.bind(this);

      firebase.auth().onAuthStateChanged((user)=>{
        if(user){

            alert('Bem Vindo!');
            this.props.navigation.navigate('Lista', {email: this.state.email});

        }
      })

    }


  logar(){

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
      if(error.code == 'auth/wrong-password'){
        alert('Senha Incorreta'); 
      }else{
        alert('Email Incorreto')
      }
    })
  }

  
    render(){    
  
      return(
        <View style={styles.container}>
  
  
          <View style={styles.corpoView}>

            <View style={styles.corpoPag}>               
              <Text style={styles.tituloCampo}>Matrícula</Text>
              <TextInput style={{fontSize: 18}}underlineColorAndroid="transparent" 
              placeholder="Matricula everis" onChangeText={(matricula)=>{this.setState({matricula})}}></TextInput>                  
            </View>

            <View style={styles.corpoPag}>               
              <Text style={styles.tituloCampo}>E-mail</Text>
              <TextInput style={{fontSize: 18}}underlineColorAndroid="transparent" 
              placeholder="E-mail everis" onChangeText={(email)=>{this.setState({email})}}/>                  
            </View>

            <View style={styles.corpoPag}>               
              <Text style={styles.tituloCampo}>Senha</Text>
              <TextInput secureTextEntry={true} style={{fontSize: 18}}underlineColorAndroid="transparent" 
              placeholder="Digite aqui a senha" onChangeText={(senha)=>{this.setState({senha})}}/>                
            </View>
          </View>

  
          <View style={{flexDirection: 'row', justifyContent: 'center',}}>
          <Botao cor='rgb(64,212,93)' nome='Entrar' onPress={this.logar}/>
            
          </View>
          <View>
          </View>
        </View>
  
          
      );
    }
  }