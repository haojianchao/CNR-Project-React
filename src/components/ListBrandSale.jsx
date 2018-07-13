import React, { Component } from 'react'
import { Link  } from 'react-router-dom'

import ApiListBS from '@/api/ApiListBS.js'
import store from '@/store/store.js'
import Footer from '@/components/Footer.jsx'

class ListNNC extends Component {
	
	componentDidMount () {
		ApiListBS.ListBS()
		ApiListBS.LBSThrBd()
		ApiListBS.LBSThrProBd()
		ApiListBS.LBSFourBd()
		ApiListBS.LBSFourProBd()
		ApiListBS.LBSFiveBd()
		ApiListBS.LBSFiveProBd()
		ApiListBS.LBSSixBd()
		ApiListBS.LBSSixProBd()
		ApiListBS.LBSSevBd()
		ApiListBS.LBSSevProBd()
		ApiListBS.LBSEigBd()
		ApiListBS.LBSEigProBd()
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
					<div className='center'>品牌特卖</div>
					<div className='right'>
						<i className='iconfont icon-eclips-horizonal-copy' />
					</div>
				</header>
				<div className='content'>
					<div className='TopBd'>
						<img src={store.getState().ListBS.TopBd} alt='' />
					</div>
					<div className='SecBd'>
						<img src={store.getState().ListBS.SecBd} alt='' />
					</div>
					<div className='LBSThrBd'>						
						<div className='BigBd'>
							<Link to='/detail'>
								<img src={store.getState().LBSThrBd.BigBd} alt='' />
							</Link>
						</div>
						<div className='ProList'>
							<ul className='goodslist'>
								{
									store.getState().LBSThrProBd.map( (item, index) => {
										return (
											<li key={index}>
												<Link to='/detail'>
													<div className='goodspic'>
														<img src={item.imageUrl} alt='' />
													</div>
													<dl className='goodsinfo'>
														<dt>{item.goodsName}</dt>
														<dd>{'￥'+item.goodsPrice+'.00'}</dd>
													</dl>											
												</Link>
											</li>
										)
									})									
								}
							</ul>
						</div>
					</div>
					<div className='LBSFourBd'>						
						<div className='BigBd'>
							<Link to='/detail'>
								<img src={store.getState().LBSFourBd.BigBd} alt='' />
							</Link>
						</div>
						<div className='ProList'>
							<ul className='goodslist'>
								{
									store.getState().LBSFourProBd.map( (item, index) => {
										return (
											<li key={index}>
												<Link to='/detail'>
													<div className='goodspic'>
														<img src={item.imageUrl} alt='' />
													</div>
													<dl className='goodsinfo'>
														<dt>{item.goodsName}</dt>
														<dd>{'￥'+item.goodsPrice+'.00'}</dd>
													</dl>											
												</Link>
											</li>
										)
									})									
								}
							</ul>
						</div>
					</div>
					<div className='LBSFiveBd'>						
						<div className='BigBd'>
							<Link to='/detail'>
								<img src={store.getState().LBSFiveBd.BigBd} alt='' />
							</Link>
						</div>
						<div className='ProList'>
							<ul className='goodslist'>
								{
									store.getState().LBSFiveProBd.map( (item, index) => {
										return (
											<li key={index}>
												<Link to='/detail'>
													<div className='goodspic'>
														<img src={item.imageUrl} alt='' />
													</div>
													<dl className='goodsinfo'>
														<dt>{item.goodsName}</dt>
														<dd>{'￥'+item.goodsPrice+'.00'}</dd>
													</dl>											
												</Link>
											</li>
										)
									})									
								}
							</ul>
						</div>
					</div>
					<div className='LBSSixBd'>						
						<div className='BigBd'>
							<Link to='/detail'>
								<img src={store.getState().LBSSixBd.BigBd} alt='' />
							</Link>
						</div>
						<div className='ProList'>
							<ul className='goodslist'>
								{
									store.getState().LBSSixProBd.map( (item, index) => {
										return (
											<li key={index}>
												<Link to='/detail'>
													<div className='goodspic'>
														<img src={item.imageUrl} alt='' />
													</div>
													<dl className='goodsinfo'>
														<dt>{item.goodsName}</dt>
														<dd>{'￥'+item.goodsPrice+'.00'}</dd>
													</dl>											
												</Link>
											</li>
										)
									})									
								}
							</ul>
						</div>
					</div>
					<div className='LBSSevBd'>						
						<div className='BigBd'>
							<Link to='/detail'>
								<img src={store.getState().LBSSevBd.BigBd} alt='' />
							</Link>
						</div>
						<div className='ProList'>
							<ul className='goodslist'>
								{
									store.getState().LBSSevProBd.map( (item, index) => {
										return (
											<li key={index}>
												<Link to='/detail'>
													<div className='goodspic'>
														<img src={item.imageUrl} alt='' />
													</div>
													<dl className='goodsinfo'>
														<dt>{item.goodsName}</dt>
														<dd>{'￥'+item.goodsPrice+'.00'}</dd>
													</dl>											
												</Link>
											</li>
										)
									})									
								}
							</ul>
						</div>
					</div>
					<div className='LBSEigBd'>						
						<div className='BigBd'>
							<Link to='/detail'>
								<img src={store.getState().LBSEigBd.BigBd} alt='' />
							</Link>
						</div>
						<div className='ProList'>
							<ul className='goodslist'>
								{
									store.getState().LBSEigProBd.map( (item, index) => {
										return (
											<li key={index}>
												<Link to='/detail'>
													<div className='goodspic'>
														<img src={item.imageUrl} alt='' />
													</div>
													<dl className='goodsinfo'>
														<dt>{item.goodsName}</dt>
														<dd>{'￥'+item.goodsPrice+'.00'}</dd>
													</dl>											
												</Link>
											</li>
										)
									})									
								}
							</ul>
						</div>
					</div>
					
					<Footer></Footer>
				</div>
			</div>
		)
	}
}

export default ListNNC