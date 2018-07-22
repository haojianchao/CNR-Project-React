import React, { Component } from 'react'

class Register extends Component {

	
	render () {
		
		return (
			<div className='container'>
				<div className='main'>
					<header className="header">
						<div className='left'>返回</div>
						<div className='center'></div>
						<div className='right regrig'>登录</div>
					</header>
					<div className='content'>
						
						<div className='Register'>
							<h1>注册</h1>
							<input type="text" name='username' ref='username' placeholder='用户名'/>
							<br />
							<input type="password" name='password' ref='password' placeholder='密码'/>
							<button>注册</button>
						</div>						
					</div>
				</div>
			</div>
		)
	}
}

export default Register