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
          width: 25,
          height:20,
          margin: 14,
        },
        btnArea:{
          flex:1,
          flexDirection: 'row',
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: props.cor,
          borderRadius: 6,
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
            <Icon name='arrow-left' color="black" size={24}/>
            </View>
            <View>
              <Text style={this.styles.btnTexto}>{this.props.nome}</Text>
            </View>
            
          </View>
        </TouchableOpacity>
      );
    }
  
  
}

export default Botao;