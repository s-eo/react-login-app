import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    render(){
        return(
            !this.props.isLoggedIn &&
            <div className="Login container">
                <div className="container-fluid">
                    <form>
                        <div class="form-group">
                            <label for="inputLogin">Login</label>
                            <input type="text" class="form-control" id="inputLogin" aria-describedby="emailHelp" placeholder="Enter login" />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword">Password</label>
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;