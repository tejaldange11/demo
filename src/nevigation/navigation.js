

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn  from '../components/signIn'
import SignUp  from '../components/signUp'
import Home  from '../components/home'

const NaviAppStack = createStackNavigator({

    SignIn:SignIn,
    SignUp:SignUp,
    Home:Home,
},{
    initialRouteName: "SignIn"


});

export default createAppContainer(NaviAppStack);
