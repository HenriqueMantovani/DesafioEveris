import React, { Component } from 'react';
import{
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationActions, StackActions } from 'react-navigation';
import Botao from './Botao/BotaoSair';
import firebase from './Connection/firebaseConnection';
import Botao2 from './Botao/BotaoEvento';
import styles from './Style/Style';

export default class Listagem extends Component{

    constructor(props){
      super(props);

      

    }

    render(){
      return(
        
          
          <View style={styles.corpoPagList}>
          <View style={styles.corpoImg}>
            <Image style={{width: 40, height: 30}} source={require('./Imagem/everisfoto.png')}/>            
          </View>
          <View>
            <Text style={styles.tituloCampo}>{this.props.data.nome}</Text>
            <Text>{this.props.data.cidade} - {this.props.data.data}</Text>                 
          </View>
          </View>
         
      
      )}
    }