import React, { Component } from 'react';
import{
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationActions, StackActions } from 'react-navigation';
import firebase from './Connection/firebaseConnection';
import Botao3 from './Botao/BotaoVoltar';
import styles from './Style/Style';
import Listagem from './Listagem';




export default class ListaEventos extends Component{
    

  static navigationOptions = ({ navigation}) => ({
    title: 'Eventos Everis',
    headerStyle:{
      backgroundColor: 'rgb(230,230,230)',
    },
    headerLeft: (
      <Botao3
          cor='rgb(230,230,230)'
          style={styles.botaoVoltar}
          title=''
          onPress={()=>{ navigation.navigate('Home') 
          ListaEventos.sair()}} >
       </Botao3>
  )})
    
    static sair(){
      firebase.auth().signOut();
      alert('Deslogado com sucesso!');
      
    }


    constructor(props){
      super(props);
      this.state = { 
        lista: []
       };

       
      console.ignoredYellowBox =true;
    
      this.inscricao = this.inscricao.bind(this);
      this.cadastro = this.cadastro.bind(this);

      firebase.database().ref('Eventos').on('value', (snapshot) =>{
        let state = this.state;
        state.lista = [];

        snapshot.forEach((childItem) =>{
          state.lista.push({
            key: childItem.key,
            nome: childItem.val().Nome,
            local: childItem.val().Local,
            data: childItem.val().Data,
            horario: childItem.val().Horário,
            cidade: childItem.val().Cidade,

          });
        });

        this.setState(state);

      })
    }

    inscricao(x){
      
      this.props.navigation.navigate('Inscricao', {nome: x.nome, cidade: x.cidade, local: x.local, data: x.data, horario: x.horario, key: x.key});
    }

    cadastro(){
      this.props.navigation.navigate('Cadastro');
    }
  
  
    render(){

      const isEnabled = this.props.navigation.state.params.email != 'henrique.mantovani@everis.com'? false: true;
      
      return(
        <View style={styles.container}>
            
            <View style={styles.corpoViewLista}>
              <FlatList data={this.state.lista}
                          renderItem={({item}) => <TouchableOpacity onPress={() => this.inscricao(item)}>
                                                      <Listagem data={item}/>
                                                  </TouchableOpacity>}/>
            </View>
          
             
              <View style={styles.viewBotao}>
              <TouchableOpacity disabled={!isEnabled}style={stilo.botao} onPress={this.cadastro}>
              <View style={stilo.btnArea}>
                <View> 
                  <Icon name='plus' color="white" size={32}/>
                </View>
              <View>
                <Text style={stilo.btnTexto}> Novo Evento</Text>
              </View>
            
                </View>
            </TouchableOpacity>     
             </View>
                 
        </View>

      )
        
    }
  }

  const stilo = StyleSheet.create({
    botao:{
      width: 360,
      height:50,
      marginBottom: 60
    },
    btnArea:{
      flex:2,
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