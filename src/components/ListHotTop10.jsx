import React, { Component } from 'react'
import { Link  } from 'react-router-dom'

import store from '@/store/store.js'
import Footer from '@/components/Footer.jsx'
import ApiListHT10 from '@/api/ApiListHT10.js'

class ListNNC extends Component {
	
	componentDidMount () {
		ApiListHT10.ListHT10()
	}
	render () {
		
		return (
			
			<div className='main'>
				<header className="header">
					<div className='left'>
						<Link to='/home'>
							<i className='iconfont icon-fanhui' />
						</Link>
					</div>
					<div className='center'>热销TOP榜</div>
					<div className='right'>
						<i className='iconfont icon-eclips-horizonal-copy' />
					</div>
				</header>
				<div className='content'>
					<div className='LHT10'>
						<ul>
							{
								store.getState().ListHT10.map( (item, index) => {
									return (
										<li key={index}>
											<Link to='/detail'>
												<img src={item.imageUrl} alt='' />
											</Link>
										</li>
									)
								})
															
							}
						</ul>	
					</div>	
					<Footer></Footer>
				</div>
			</div>
		)
	}
}

export default ListNNC