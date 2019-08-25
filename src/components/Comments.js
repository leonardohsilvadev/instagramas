import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Comments extends React.Component {
    render() {
        let view = null

        if (this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.author}>{item.author}: </Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                )
            })
        }

        return (
            <View styles={styles.container}>{view}</View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    author: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555'
    }
})

export default Comments;