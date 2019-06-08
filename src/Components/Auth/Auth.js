import React, { Component } from 'react'
import {connect} from 'react-redux'

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    login = (e) => {
        this.props.history.push('/dashboard')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="Username" name="username" onChange={this.handleChange} value={this.state.username}/>
                    <input type="password" placeholder="Pasword" name="password" onChange={this.handleChange} value={this.state.password}/>
                    <button onClick={this.login}>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(Auth);