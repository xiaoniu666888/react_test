import { useNavigate } from 'react-router-dom'

function withRouter(WrapCompontent) {
    return function (props) {
        const navigate = useNavigate()
        return <WrapCompontent {...props} router={{ navigate }} />
    }
}

export default withRouter