import * as actionType from './constant'

const initCouter = {
    counter: 100
}

function reducer(state = initCouter, action) {
    switch (action.type) {
        case actionType.ADD_COUNTER:
            return { ...state, counter: state.counter + action.num };
        case actionType.SUB_COUNTER:
            return { ...state, counter: state.counter - action.num };
        default:
            break;
    }

    return state
}

export default reducer