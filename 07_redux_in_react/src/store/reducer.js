import * as actionType from './constant'

const initCouter = {
    counter: 100,
    bannerList: [],
    recommends: []
}

function reducer(state = initCouter, action) {
    switch (action.type) {
        case actionType.ADD_COUNTER:
            return { ...state, counter: state.counter + action.num };
        case actionType.SUB_COUNTER:
            return { ...state, counter: state.counter - action.num };
        case actionType.CHANGE_BANNERLIST:
            return { ...state, bannerList: action.bannerList }
        case actionType.CHANGE_RECOMMEND:
            return { ...state, recommends: action.recommends }
        default:
            break;
    }

    return state
}

export default reducer