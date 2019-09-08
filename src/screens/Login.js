import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import icon from '../../assets/imgs/icon.png';

import { connect } from 'react-redux';
import { login } from '../store/actions/user';
import { USER_LOGGED_IN } from '../store/actions/actionTypes';

class Login extends React.Component {
    state = {
        name: 'kkk',
        email: '',
        password: '',
    };

    login = () => {
        this.props.onLogin({ ...this.state })
        const { navigation } = this.props;

        navigation.navigate('Profile')
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.text}>Bem vindo ao Instagramas !</Text>

                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    keyboardType='email-address'
                />

                <TextInput
                    placeholder='Senha'
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    keyboardType='visible-password'
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.button}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 50,
        resizeMode: 'contain',
    },
    text: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);