import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import ReceitaResumo from './ReceitaResumo';
import ReceitaIngredientes from './ReceitaIngredientes';
import ReceitaModo from './ReceitaModo';

const Navegador = createMaterialTopTabNavigator({
	ReceitaResumo:{
		screen:ReceitaResumo
	},
	ReceitaIngredientes:{
		screen:ReceitaIngredientes
	},
	ReceitaModo:{
		screen:ReceitaModo
	}
}, {
	tabBarPosition:'top',
	animationEnabled:true,
	tabBarOptions:{
		showIcon:false,
		style:{
			backgroundColor:'#0abab5'
		},
		labelStyle:{
			fontSize:14
		},
		activeTintColor:'#000000',
		inactiveTintColor:'#cccccc'
		
	}
});

const Abas = createAppContainer(Navegador);

export default class Receita extends Component {

	static navigationOptions = {
		title:'Receita',
		header:null
	};

	constructor(props) {
		super(props);
		this.goBack = this.goBack.bind(this);
	}

	goBack() {
		this.props.navigation.goBack();
	}

	render() {
		return(
			<View style={styles.container}>
				<TouchableHighlight underlayColor='#CCCCCC' onPress={this.goBack} style={styles.backButton}>
					<Image style={styles.backImage} source={require('./images/back.png')} />
				</TouchableHighlight>
				<Image style={styles.receitaImagem} source={{uri:this.props.navigation.state.params.imagem}} />
				<Abas screenProps={this.props.navigation.state.params} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:30,
	},
	backImage:{
		width:26,
		height:26,
	},
	backButton:{
		width:26,
		height:26,
		marginTop:5,
		marginLeft:10,
		zIndex:99,
		backgroundColor:'#000000'
	},
	receitaImagem:{
		height:200,
		width:414,
		marginTop:-61
		
	}
});