import * as Types from '../actions/actionTypes';

const initialState = {
    posts: [{
        id: Math.random,
        author: 'Karl Marx',
        email: 'karlosmarkos.commie@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
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
        image: require('../../../assets/imgs/bw.jpg'),
        comments: [],
    }]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer