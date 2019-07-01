import { StyleSheet } from 'react-native';

export default StyleSheet.create({

      container:{
        flex: 1,
        backgroundColor: "white"
      },
      containerLista:{
        backgroundColor: "white"
      },
      viewBotao:{
        flexDirection: 'row', 
        justifyContent: 'center',
      },
      viewEspaco:{
        padding: 10,
        margin: 0,
      },
      tituloCampo:{
        fontSize: 20, 
        fontWeight: 'bold',
        flexDirection: 'row'
      },
      tituloCampo2:{
        fontSize: 30, 
        fontWeight: 'bold',
        color: 'rgb(64,212,93)',
        flexDirection: 'row'
      },
      textoPrincipal:{
        fontSize: 27,
        margin: 10,
        color: 'black',
      },
      textoColor:{
        color: 'red'
      },
      corpoPag:{
        padding: 10,
        borderWidth: 0.5,
        height: 97
      },
      corpoSwitch:{
        padding: 10,
        borderWidth: 0.5,
        height: 60,
        flexDirection: 'row', 
        alignItems: 'center'
      },
      corpoImg:{
        justifyContent:'center',
        flexDirection:'column',
        padding: 15
      },
      corpoPagUl:{
        padding: 10,
        borderWidth: 0.5,
        height: 97
      },
      corpoPagList:{
        padding: 10,
        borderWidth: 0.57,
        height: 90,
        flexDirection: 'row', 
        flex: 1
      },
      corpoView:{
        padding: 10,
        margin: 10,
      },
      corpoViewLista:{
        padding: 10,
        margin: 10,
        flex: 1
      },
      corpoView2:{
        justifyContent:'center',
        flexDirection:'column',
        padding: 10,
        alignItems: "center"
      },
      botaoVoltar:{
        width: 10,
        height: 15,
        backgroundColor: 'rgb(230,230,230)',
        color: 'rgb(230,230,230)'
      },
      tituloPag:{
        backgroundColor: 'rgb(236,230,230)', 
        borderBottomWidth: 1
      }
    });