import * as actionType from './constant'

export const addNumberAction = (num) => ({
    type: actionType.ADD_COUNTER,
    num
})

export const subNubmerAction = (num) => ({
    type: actionType.SUB_COUNTER,
    num
})

export const changeBnnerListAction = (bannerList) => ({
    type: actionType.CHANGE_BANNERLIST,
    bannerList
})

export const changeRecommendAction = (recommends) => ({
    type: actionType.CHANGE_RECOMMEND,
    recommends
})