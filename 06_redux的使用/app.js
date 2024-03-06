const store = require('./src/store')

console.log(store.getState());

const nameAction = {
    type: 'change_name',
    name: '小医仙'
}

store.dispatch(nameAction)
console.log(store.getState())



const nameAction2 = {
    type: 'change_name',
    name: '美杜莎女王'
}

store.dispatch(nameAction2)
console.log(store.getState())