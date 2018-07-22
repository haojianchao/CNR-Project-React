import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
import { Carousel } from 'antd-mobile'


import ApiDetail from '@/api/ApiDetail'
import store from '@/store/store.js'

class Detail extends Component {
	
	constructor(props){
		super(props),
		this.state = {		
		    data: ['1', '2', '3'],
		    imgHeight: 375,
		    BodyL: []
		}
	}

	componentDidMount(){
		ApiDetail.DetailInfo()
		setTimeout(() => {
		    this.setState({
		        data: store.getState().DetailInfo.DeBan,
		        BodyL: store.getState().DetailInfo.DeBody
		    })
	    }, 100)
	}
	render () {
		
		
		return (
			<div className="container">
				<div className='main'>
					<header className="header">
						<div className='left'>
							<Link to='/home'>
								<i className='iconfont icon-fanhui' />
							</Link>
						</div>
						<div className='center'>DETAIL</div>
						<div className='right'>
							<i className='iconfont icon-eclips-horizonal-copy' />							
						</div>
					</header>
					<div className='content'>
				        <Carousel
				          autoplay={true}
				          infinite
				        >
					        {this.state.data.map((item, index) => (
					            <a
					              key={index}
					              href="http://www.alipay.com"
					              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
					            >
					               <img
					                src={item.imageUrl}
					                alt=""
					                style={{ width: '100%', verticalAlign: 'top' }}
					                onLoad={() => {
					                  // fire window resize event to change height
					                  window.dispatchEvent(new Event('resize'));
					                  this.setState({ imgHeight: 'auto' });
					                }}
					                />
					            </a>
					        ))}
				        </Carousel>
				        <div className='DeGoodsName'>
				        	<span>自营</span>
				        	{store.getState().DetailInfo.DeInfo.goodsName}
				        </div>
				        <div className='DeGoodsPrice'>{store.getState().DetailInfo.DeInfo.goodsPrice}</div>
				        <div className='DeArea'>
				        	<span>河北省</span>
				        	<span>保定市</span>
				        	<span>涿州市</span>
				        </div>
				        <div className='DeSerPro'>
				        	<span>服务承诺</span>
				        	15天无理由退货,30天只换不修
				        </div>
				        <div className='DeGoodsEvaluate'>
				        	<span>商品评价</span>
				        	好评率100%
				        </div>
				        <div className='DeGoodsRecommend'>店铺推荐</div>
				        <div className='DeBtmSlide'>请向下滑动查看商品详情</div>
				        <div className='DeGoodsDetail'>				        	
				        	<img src='https://pic1.cnrmall.com/picself/tv2/new_tv_title5.jpg' alt='' />
				        	<ul>
								{
									this.state.BodyL.map( (item, index) => {
										return (
											<li key={index}>
												<img src={item.imageUrl} alt='' />
											</li>
										)
									})								
								}
							</ul>
				        </div>
					</div>
					<footer className='DeFooter'>
						<div>客服</div>
						<div>购物车</div>
						<div>到货通知</div>
					</footer>
				</div>			
			</div>
		)
	}
}

export default Detail