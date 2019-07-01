import React, { Component } from 'react';
import{
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationActions, StackActions } from 'react-navigation';
import Botao1 from './Botao/BotaoCancelar';
import firebase from './Connection/firebaseConnection';
import styles from './Style/Style';

export default class Cadastro extends Component{
    
  
    static navigationOptions ={
      title: 'Cadastro de Evento',
      headerStyle:{
        backgroundColor: 'rgb(230,230,230)',
    },
    }

    constructor(props){
      super(props);
      this.state = { 
          nome: '',
          cidade: '',
          local: '',
          data: '',
          horario: ''
       };

       

       
      console.ignoredYellowBox =true;
      this.goBack = this.goBack.bind(this);
      this.cadastrar = this.cadastrar.bind(this);
      
    }

    goBack(){
        this.props.navigation.navigate('Lista');
    }

    cadastrar(){

        if(this.state.nome != '' && this.state.cidade != '' && this.state.local != '' && this.state.data != '' && this.state.horario != ''){

            let eventos = firebase.database().ref('Eventos');
            let chave = eventos.push().key;

            eventos.child(chave).set({
                Nome: this.state.nome,
                Cidade: this.state.cidade,
                Local: this.state.local,
                Data: this.state.data,
                Horário: this.state.horario,
                Inscritos: ' '
            });

            let inscricao1 = firebase.database().ref('Eventos').child(chave).child('Inscritos');
            let chave2 = inscricao1.push().key;

            firebase.database().ref('Eventos').child(chave).child('Inscritos').child(chave2).set({

              Conhecimento: 'Não',
              Email: ' ',
              Nome: ' ',
              Telefone: ' '
            });

            alert("Cadastrado com sucesso!");

            this.props.navigation.navigate('Lista');

        }

    }
  
  
    render(){

      const { nome, cidade, local, data, horario } = this.state;
      const isEnabled = nome.length > 0 && cidade.length > 0 && local.length > 0 && data.length > 0 && horario.length > 0;
      
      return(
        <View style={styles.container}>
  
  
        <View style={styles.corpoView}>

          <View style={styles.corpoPag}>               
            <Text style={styles.tituloCampo}>Evento</Text>
            <TextInput style={{fontSize: 18}}underlineColorAndroid="transparent" 
            placeholder="Nome do evento" onChangeText={(nome)=>{this.setState({nome})}}/>                  
          </View>

          <View style={styles.corpoPag}>               
            <Text style={styles.tituloCampo}>Cidade</Text>
            <TextInput style={{fontSize: 18}}underlineColorAndroid="transparent" 
            placeholder="Cidade do evento" onChangeText={(cidade)=>{this.setState({cidade})}}/>                  
          </View>

          <View style={styles.corpoPag}>               
            <Text style={styles.tituloCampo}>Local</Text>
            <TextInput style={{fontSize: 18}}underlineColorAndroid="transparent" 
            placeholder="Local do evento" onChangeText={(local)=>{this.setState({local})}}/>                  
          </View>

          <View style={styles.corpoPag}>               
            <Text style={styles.tituloCampo}>Data</Text>
            <TextInput style={{fontSize: 18}}underlineColorAndroid="transparent" 
            placeholder="dd/mm/aaa" onChangeText={(data)=>{this.setState({data})}} keyboardType={'numeric'}/>                
          </View>

          <View style={styles.corpoPag}>               
            <Text style={styles.tituloCampo}>Horário</Text>
            <TextInput style={{fontSize: 18}}underlineColorAndroid="transparent" 
            placeholder="--:--" onChangeText={(horario)=>{this.setState({horario})}} keyboardType={'numeric'}/>                
          </View>
        </View>

        
        <View style={{flexDirection: 'row', justifyContent: 'center',}}>
            <Botao1 width='30' cor='rgb(255,0,0)' nome='Cancelar' onPress={this.goBack}/>   
            <TouchableOpacity disabled={!isEnabled}style={stilo.botao} onPress={this.cadastrar}>
              <View style={stilo.btnArea}>
                <View> 
                  <Icon name='check' color="white" size={32}/>
                </View>
              <View>
                <Text style={stilo.btnTexto}> Cadastro</Text>
              </View>
            
                </View>
            </TouchableOpacity>
        </View>
        
        <View>
        </View>
      </View>


      )
        
    }
  }

  const stilo = StyleSheet.create({
    botao:{
      width: 180,
      height:50,
    },
    btnArea:{
      flex:1,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: 'rgb(64,212,93)',
      borderBottomRightRadius: 6,
      borderTopRightRadius: 6
    },
    btnTexto:{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    }
    
  });