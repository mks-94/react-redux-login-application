import React from "react";
import { connect } from "react-redux";
import { login } from "../redux/reducer";

import "./loginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleEmail(e) {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }
  handlePassword(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  render() {
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <form name="loginForm" onSubmit={this.onSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={this.handleEmail}
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.handlePassword}
              value={this.state.password}
            />
          </div>
        </div>

        <input type="submit" value="Login" />

        <div className="message">
          {isLoginPending && <div>Please Wait...</div>}
          {isLoginSuccess && <div>Success.</div>}
          {loginError && <div>{loginError.message}</div>}
        </div>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Email>>>", this.state.email);
    console.log("Password>>>", this.state.password);
    this.props.login(this.state.email, this.state.password);
    this.setState({
      email: "",
      password: ""
    });
  }
}
const mapStateProps = state => {
  console.log("state>>>>>", state);
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.isLoginError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};
export default connect(
  mapStateProps,
  mapDispatchToProps
)(LoginForm);
