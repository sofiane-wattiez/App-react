import { View } from 'react-native';
import React from 'react';
// import HomeHelloScreen from './components/HelloPage';
// import NavBar from './components/NavigationBar/NavBar';
// import Login from './components/MainContent/Log/Login';
import Register from './components/MainContent/Log/Register';






export default function App() {
 
  return (
    <View style={{ flex: 1 }}>      
      {/* <HomeHelloScreen style={{ flex: 1}}/>  */}
      {/* <Login/> */}
      <Register/>
      {/* <NavBar style={{ flex: 1 }}/> */}
    </View>
  );
}

