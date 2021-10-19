import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Telas Sistema
    import Preload from '../screens/Preload';
    import SignIn from '../screens/SignIn';
    import SignUp from '../screens/SignUp';    
    import CalcScreen from '../screens/CalcScreen';
    import DetailHist from '../screens/DetailHist';
    import EditarPerfil from '../screens/EditarPerfil';
    import EditarSenha from '../screens/EditarSenha';
    import ForgotPassword from '../screens/ForgotPassword';

//Telas Consumidor
    import MainTab from './MainTab';
    import JoinMesa from '../screens/JoinMesa';
    
//Telas Estabelecimento
    import EMainTab from './EMainTab';
    import NovaMesa from '../screens/NovaMesa';
    import DetailMesa from '../screens/DetailMesa';
    import Payment from '../screens/Payment';   
    //Produtos    
        import MesaAddProd from '../screens/MesaAddProd';
        import MeusProdutos from '../screens/MeusProdutos';
        import NovoProduto from '../screens/NovoProduto';   
        import EditarProduto from '../screens/EditarProduto';
        import AddSelected from '../screens/AddSelected'; //adicionar o produto que foi clicado na lista
    
// Relatorios
    //Consumidor
        import uHistorico from '../screens/uHistorico';
    //Estabelecimento
        import eHistorico from '../screens/eHistorico';
        import VendasPorData from '../screens/relatorios/VendasPorData';
            import VendasPorDataRes from '../screens/relatorios/VendasPorData/Result';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{headerShown : false }} initialRouteName="Preload">
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="EMainTab" component={EMainTab} />
        <Stack.Screen name="DetailHist" component={DetailHist} />
        <Stack.Screen name="NovaMesa" component={NovaMesa} />
        <Stack.Screen name="DetailMesa" component={DetailMesa} />
        <Stack.Screen name="MesaAddProd" component={MesaAddProd} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="MeusProdutos" component={MeusProdutos} />
        <Stack.Screen name="NovoProduto" component={NovoProduto} />
        <Stack.Screen name="EditarProduto" component={EditarProduto} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
        <Stack.Screen name="EditarSenha" component={EditarSenha} />
        <Stack.Screen name="JoinMesa" component={JoinMesa} />
        <Stack.Screen name="AddSelected" component={AddSelected} />
        <Stack.Screen name="CalcScreen" component={CalcScreen} />
        <Stack.Screen name="eHistorico" component={eHistorico} />
        <Stack.Screen name="uHistorico" component={uHistorico} />
        <Stack.Screen name="VendasPorData" component={VendasPorData} />
        <Stack.Screen name="VendasPorDataRes" component={VendasPorDataRes} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
);