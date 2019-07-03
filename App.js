import { StackNavigator } from 'react-navigation';
import Login from './src/Login';
import ListaEventos from './src/ListaEventos';
import Inscricao from './src/Inscricao';
import Cadastro from './src/Cadastro';

console.disableYellowBox=true;

const Navegador = StackNavigator({
  Home: { screen: Login },
  Lista: { screen: ListaEventos},
  Inscricao: { screen: Inscricao},
  Cadastro: { screen: Cadastro}

});

export default Navegador;
