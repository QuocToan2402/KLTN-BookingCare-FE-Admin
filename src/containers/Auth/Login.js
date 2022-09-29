/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

/* import * as actions from '../store/actions'; */
import * as actions from '../../store/actions';
/* import { KeyCodeUtils, LanguageUtils } from '../utils';

import userIcon from '../../src/assets/images/user.svg';
import passIcon from '../../src/assets/images/pass.svg'; */
import './Login.scss';
/* import { FormattedMessage } from 'react-intl';

import adminService from '../services/adminService';
 */
class Login extends Component {
	//Khai bao state
	constructor(props) {
		super(props);
		//this.btnLogin = React.createRef();
		this.state = {
			username: '',
			password: '',
		};
	}
	HandleOnChangeUsername = (event) => {
		this.setState({ username: event.target.value });
	};
	HandleOnChangePassword = (e) => {
		this.setState({ password: e.target.value });
	};
	HandleLogin = () => {};

	render() {
		return (
			<div className='login-background'>
				<div className='login-container'>
					<div className='login-content row'>
						<div className='col-12 header-title'>SIGN IN</div>
						<div className='col-12 form-group login-input'>
							<label className='input-title'>Username</label>
							<input
								placeholder='Enter your username'
								type='text'
								className='form-control form-input'
								value={this.state.username}
								onChange={(event) => this.HandleOnChangeUsername(event)}
							/>
						</div>
						<div className='col-12 form-group login-input'>
							<label className='input-title'>Password</label>
							<input
								placeholder='Enter your password'
								type='password'
								className='form-control form-input'
								value={this.state.password}
								onChange={(event) => this.HandleOnChangePassword(event)}
							/>
						</div>
						<div className='col-12 btn-row'>
							<button
								className='btn-login'
								onClick={() => {
									this.HandleLogin();
								}}
							>
								Login
							</button>
							<a className='forgot-title'>Forgot your password?</a>
						</div>
						<div className='col-12'>
							<label className='other-login'>Or sign in with:</label>
						</div>
						<div className='col-12 social-login'>
							<i class='fab fa-google-plus-g google'></i>
							<i class='fab fa-facebook-f facebook'></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.app.language,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		navigate: (path) => dispatch(push(path)),
		adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
		adminLoginFail: () => dispatch(actions.adminLoginFail()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
