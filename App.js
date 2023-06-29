import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Register from './src/pages/Register';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Perfil from './src/pages/Perfil';
import RegisterProduct from './src/pages/RegisterProduct';
import RegisterEndereco from './src/pages/RegisterEndereco';
import Details from './src/pages/Detail';
import Sale from './src/pages/Sale';
import Cart from './src/pages/Cart';
import Pedidos from './src/pages/Pedidos';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MyTab'>
        <Stack.Screen 
          name="login" 
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="register" 
          component={Register}
          options={{
            headerShown: true,
            title: "Cadastro de Usuário",
            headerStyle: {
              height: '30%',
              width: '100%',
              backgroundColor: '#00aaff',
              border: '0.01px',
              borderBottomEndRadius: 80,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="registerProduct" 
          component={RegisterProduct}
          options={{
            headerShown: true,
            title: 'Cadastro de Produto',
            headerStyle: {
              height: '30%',
              width: '100%',
              backgroundColor: '#00aaff',
              border: '0.01px',
              borderBottomEndRadius: 80,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="registerEndereco" 
          component={RegisterEndereco}
          options={{
            headerShown: true,
            title: 'Cadastro de Endereço',
            headerStyle: {
              height: '30%',
              width: '100%',
              backgroundColor: '#00aaff',
              border: '0.01px',
              borderBottomEndRadius: 80,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="details" 
          component={Details}
          options={{
            headerShown: true,
            title: 'Detalhes',
            headerStyle: {
              height: '30%',
              width: '100%',
              backgroundColor: '#00aaff',
              border: '0.01px',
              borderBottomEndRadius: 80,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="sale" 
          component={Sale}
          options={{
            headerShown: true,
            title: 'Finalizar Compra',
            headerStyle: {
              height: '30%',
              width: '100%',
              backgroundColor: '#00aaff',
              border: '0.01px',
              borderBottomEndRadius: 80,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="MyTab" 
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function MyTabs(){
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        /> 
        <Tab.Screen
          name='Carrinho'
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='Pedidos'
          component={Pedidos}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="box" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="Perfil"
          component={Perfil}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
    
  }
}