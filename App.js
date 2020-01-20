import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'

import Inicio from './src/pages/Home';
import Barraquinha from './src/pages/Barraquinha';
import cadastrarProduto from './src/pages/Cadastrar Produto';
import contateNos from './src/pages/Contate-nos';
import reservasRealizadas from './src/pages/Reservas Realizadas';
import reservasRecebidas from './src/pages/Reservas Recebidas';
import sair from './src/pages/Sair';

import CustomDrawer from './src/components/CustomDrawer';

const Routes = createAppContainer(
    createDrawerNavigator({
        Inicio,
        Barraquinha,
        reservasRecebidas:{
            screen:reservasRecebidas,
            navigationOptions:{
                title:'Reservas Recebidas',
                headerTitle:(
                    <Image source={require('./src/assets/reservaRecebida-icon.png')} />
                ),
            }
        },
        reservasRealizadas:{
            screen:reservasRealizadas,
            navigationOptions:{
                title: 'Reservas Realizadas'
            }
        },
        cadastrarProduto:{
            screen: cadastrarProduto,
            navigationOptions: {
                title: 'Cadastrar Produto',                
            },
        },
        contateNos:{
            screen:contateNos,
            navigationOptions:{
                title:'Contate-nos'
            }
        },
        sair:{
            screen:sair,
            navigationOptions:{
                title:'Sair'
            }
        }
        
        
    },{
        initialRouteName: 'Inicio',
        contentComponent: CustomDrawer
    })
)

export default Routes;