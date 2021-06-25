import React from 'react';
import { StyleSheet, Image } from 'react-native';
import LogoIcon from './../assets/logo.png';



const Logo = ()=>{
    return(
        <Image Source={LogoIcon}/>
    );
};

export default Logo;

const styles = StyleSheet.create({});