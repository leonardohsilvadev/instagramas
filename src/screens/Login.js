import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };

    login = () => {
        const { navigation } = this.props;

        navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='email'
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    keyboardType='email-address'
                    autoFocus={true}
                />

                <TextInput
                    placeholder='password'
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    keyboardType='visible-password'
                    secureTextEntry={true}
                    autoFocus={true}
                />

                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create new account</Text>
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

export default Login;