
export function login_auth(Cpns) {
    return (props) => {
        let token = localStorage.getItem("token")
        if (token) {
            return <Cpns {...props} />
        } else {
            return <h2>请先登录</h2>
        }
    }
}