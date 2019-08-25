import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddComment extends React.Component {
    state = {
        comment: '',
        editMode: false
    }

    handleAddComment = () => {
        Alert.alert('Comentário Adicionado', this.state.comment)
    }

    render() {

        if (this.state.editMode) {
            return (
                <View style={styles.container}>
                    <TextInput
                        placeholder= "Comente aqui..."
                        style={styles.input}
                        autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment}
                    />
                    <TouchableWithoutFeedback onPress={() => this.setState({ editMode: false })}>
                        <Icon name='times' size={15} color='#555' />
                    </TouchableWithoutFeedback>
                </View>
            )
        } else {
            return (
                <TouchableWithoutFeedback onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={25} color='#555' />
                        <Text style={styles.caption}>Adicione um comentário...</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC',
    },
    input: {
        width: '90%'
    }
})

export default AddComment;