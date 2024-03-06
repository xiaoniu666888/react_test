const { createStore } = require('redux')

const initState = {
    name: '萧炎',
    age: 18
}

function reducer(state = initState, action) {
    if (action.type === 'change_name') {
        return { ...state, name: action.name }
    }
    return state
}

// 创建store
const store = createStore(reducer)

module.exports = store