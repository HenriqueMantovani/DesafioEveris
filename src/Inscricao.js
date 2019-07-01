import React, { Component } from 'react';
import{
  View,
  Text,
  TextInput,
  Switch,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationActions, StackActions } from 'react-navigation';
import Botao from './Botao/BotaoInscricao';
import firebase from './Connection/firebaseConnection';
import Botao2 from './Botao/BotaoEvento';
import styles from './Style/Style';



export default class Inscricao extends Component{

    static navigationOptions =({navigation}) => ({
        title: 'Inscrição',
        headerStyle:{
            backgroundColor: 'rgb(230,230,230)',
        },
      });

      constructor(props){
          super(props);
          this.state = {
              status: false,
              nome: '',
              email: '',
              telefone: ''
          };

          this.inscricao = this.inscricao.bind(this);
      }
      

      inscricao(){

        if(this.state.nome != '' && this.state.email != '' && this.state.telefone != ''){

          let key = this.props.navigation.state.params.key

          let inscricao = firebase.database().ref('Eventos').child(key).child('Inscritos');
          let chave = inscricao.push().key;

          inscricao.child(chave).set({

            Conhecimento: 'Não',
            Email: this.state.email,
            Nome: this.state.nome,
            Telefone: this.state.telefone
          })

          alert('Inscrição Efetuada com sucesso')

      }
    }
        

    
  
    render(){

      const { nome, email, telefone } = this.state;
      const isEnabled = nome.length > 0 && email.length > 0 && telefone.length > 0;
      
      return(
        <View style={styles.container}>
  
        <View style={styles.corpoView2}>
            <Text style={styles.tituloCampo2}>{this.props.navigation.state.params.nome}</Text>
            <Text style={styles.tituloCampo}>{this.props.navigation.state.params.cidade} - {this.props.navigation.state.params.data}</Text>
            <Text style={styles.tituloCampo}>{this.props.navigation.state.params.local} - {this.props.navigation.state.params.horario}</Text>
        </View>
  
          <View style={styles.corpoView}>

            <View style={styles.corpoPag}>               
              <Text style={styles.tituloCampo}>Nome</Text>
              <TextInput style={{fontSize: 18}}underlineColorAndroid="transparent" 
              placeholder="Digite aqui o nome" onChangeText={(nome)=>{this.setState({nome})}}/>                  
            </View>

            <View style={styles.corpoPag}>               
              <Text style={styles.tituloCampo}>E-mail</Text>
              <TextInput style={{fontSize: 18}}underlineColorAndroid="transparent" 
              placeholder="Digite aqui o e-mail" onChangeText={(email)=>{this.setState({email})}}/>                  
            </View>

            <View style={styles.corpoPag}>               
              <Text style={styles.tituloCampo}>Telefone</Text>
              <TextInput style={{fontSize: 18}}underlineColorAndroid="transparent" 
              placeholder="Digite aqui o telefone" onChangeText={(telefone)=>{this.setState({telefone})}} keyboardType={'numeric'}/>                
            </View>

            <View style={styles.corpoSwitch}>

                <View>
                    <Text style={styles.tituloCampo}>Conhecimento Sobre o Tema?</Text>
                </View>    
                
                <View>     
                <Switch style={styles.corpoImg}value={this.state.status} 
                    onValueChange={(valorSelecionado) => this.setState({status: valorSelecionado})}
                    />
                </View>          

                  
            </View>
            <View style={styles.viewEspaco}/>
            
            <View style={{flexDirection: 'row', justifyContent: 'center',}}>
            <TouchableOpacity disabled={!isEnabled}style={stilo.botao} onPress={this.inscricao}>
              <View style={stilo.btnArea}>
                <View> 
                  <Icon name='check' color="white" size={32}/>
                </View>
              <View>
                <Text style={stilo.btnTexto}> Inscrição</Text>
              </View>
            
                </View>
            </TouchableOpacity>
            </View>
            

          </View>
        </View>
      )
        
    }
  }

  const stilo = StyleSheet.create({
    botao:{
      width: 360,
      height:50,
    },
    btnArea:{
      flex:1,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: 'rgb(64,212,93)',
      borderRadius: 6,
    },
    btnTexto:{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    }
    
    
   
      
    
  });