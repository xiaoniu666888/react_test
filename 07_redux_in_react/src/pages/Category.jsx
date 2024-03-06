import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { changeBnnerListAction, changeRecommendAction } from '../store/actionCreators'
export class Category extends PureComponent {
    componentDidMount() {
        axios.get('http://123.207.32.32:8000/home/multidata').then(res => {

            const { banner: bannerList, recommend: recommends } = res.data.data
            const list = bannerList.list
            this.props.changeRecommend(recommends.list)
            this.props.changeBanner(list)
        })
    }
    render() {
        return (
            <div>Category</div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    changeBanner(bannerList) {
        dispatch(changeBnnerListAction(bannerList))
    },
    changeRecommend(recommends) {
        dispatch(changeRecommendAction(recommends))
    }
})
export default connect(null, mapDispatchToProps)(Category)