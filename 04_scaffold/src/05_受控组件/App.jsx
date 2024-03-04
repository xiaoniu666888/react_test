import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            username: '',
            fruits: ['苹果'],
            book: '西游记',
            isAgree: true,
            hobbies: [
                { value: "sing", text: "唱", isChecked: false },
                { value: "dance", text: "跳", isChecked: false },
                { value: "rap", text: "rap", isChecked: false }
            ]
        }
    }
    // 处理提交表单
    handleForm(event) {
        event.preventDefault()
        console.log('账号', this.state.username);
        console.log('水果', this.state.fruits);
        console.log('书籍', this.state.book)
        console.log('爱好', this.state.hobbies.filter(item => item.isChecked).map(item => item.value));
    }
    handleUserChange(event) {
        this.setState({ username: event.target.value })
    }
    handleFruit(event) {
        const fruits = Array.from(event.target.selectedOptions, item => item.value)
        this.setState({ fruits })
    }
    handleBook(event) {
        const book = event.target.value
        this.setState({ book })
    }
    handleAgree(event) {
        this.setState({
            isAgree: event.target.checked
        })
    }
    handleHobbies(event, index) {
        const hobbies = [...this.state.hobbies]
        hobbies[index].isChecked = event.target.checked
        this.setState({ hobbies })
    }
    render() {
        const { username, fruit, book, isAgree, hobbies } = this.state
        return (
            <div>
                <div>
                    <form onSubmit={(e) => this.handleForm(e)}>
                        {/* 账号 */}
                        <label htmlFor="username">
                            账号：  <input
                                id='username'
                                type="text"
                                value={username}
                                onChange={(e) => this.handleUserChange(e)}
                            />
                        </label>
                        {/* 单选checkbox */}
                        <div>
                            <label htmlFor="agree">
                                同意
                                <input
                                    id='agree'
                                    type="checkbox"
                                    checked={isAgree}
                                    onChange={(e) => this.handleAgree(e)}
                                />
                            </label>
                        </div>
                        {/* 多选checkbox */}
                        <div>
                            您的爱好:
                            {
                                hobbies.map((item, index) => {
                                    return <label htmlFor={item.value} key={item.value}>
                                        <input
                                            type="checkbox"
                                            id={item.value}
                                            checked={item.isChecked}
                                            onChange={(e) => this.handleHobbies(e, index)}
                                        />
                                        {item.text}
                                    </label>
                                })
                            }
                        </div>

                        {/* select多选 */}
                        <div>
                            <select
                                value={fruit}
                                onChange={(e) => this.handleFruit(e)}
                                multiple
                            >
                                <option value="苹果">苹果</option>
                                <option value="香蕉">香蕉</option>
                                <option value="菠萝">菠萝</option>
                            </select>
                        </div>
                        {/* select单选 */}
                        <div>
                            <select
                                value={book}
                                onChange={(e) => this.handleBook(e)}
                            >
                                <option value="西游记">西游记</option>
                                <option value="三国演义">三国演义</option>
                                <option value="红楼梦">红楼梦</option>
                                <option value="水浒传">水浒传</option>
                            </select>

                        </div>
                        <div>
                            <button type='submit'>提交</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default App