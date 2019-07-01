import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity, 
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Botao extends Component{

    constructor(props){
      super(props);
      this.state = {};
  
      this.styles = StyleSheet.create({
        botao:{
          width: 180,
          height:50,
        },
        btnArea:{
          flex:1,
          flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: props.cor,
          borderBottomLeftRadius: 6,
          borderTopLeftRadius: 6
        },
        btnTexto:{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'white',
        }
      })
    
    };
  
    render(){
      return(
        <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
          <View style={this.styles.btnArea}>
            <View> 
            <Icon name='close' color="white" size={32}/>
            </View>
            
              <Text style={this.styles.btnTexto}>{this.props.nome}</Text>
            
            
          </View>
        </TouchableOpacity>
      );
    }
  
  
}

export default Botao;