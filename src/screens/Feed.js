import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends React.Component {
    state = {
        posts: [{
            id: Math.random,
            author: 'Karl Marx',
            email: 'karlosmarkos.commie@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                author: 'Friedrich Angels',
                comment: 'Bela foto caro amigo!'
            }, {
                author: 'Charles Darwin',
                comment: 'Ta evoluindo em garoto'
            }]
        }, {
            id: Math.random,
            author: 'Aleister Crowley',
            email: 'crowleyzin@thelemail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: [],
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed;