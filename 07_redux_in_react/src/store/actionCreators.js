import * as actionType from './constant'

export const addNumberAction = (num) => ({
    type: actionType.ADD_COUNTER,
    num
})

export const subNubmerAction = (num) => ({
    type: actionType.SUB_COUNTER,
    num
})