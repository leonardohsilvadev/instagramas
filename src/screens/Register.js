import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.text}>
                        Não perca tempo, comece a compartilhar suas fotos agora!
                </Text>

                <TextInput
                    placeholder='Nome'
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />

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
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={() => {}} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
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
    text: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
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
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: '#333',
    }
})

export default Register;