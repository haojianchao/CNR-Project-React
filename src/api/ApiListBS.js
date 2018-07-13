import store from '@/store/store.js'
import {LIST_BRANDSALE_URL} from '@/server/index.js'

export default {
	ListBS () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE',
					data: res[0]
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSThrBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_THRBD',
					data: res[0].ThrBd
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSThrProBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_THRBD_PROBD',
					data: res[0].ThrBd.ProBd
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSFourBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_FOURBD',
					data: res[0].FourBd
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSFourProBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_FOURBD_PROBD',
					data: res[0].FourBd.ProBd
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSFiveBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_FIVEBD',
					data: res[0].FiveBd
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSFiveProBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_FIVEBD_PROBD',
					data: res[0].FiveBd.ProBd
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSSixBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_SIXBD',
					data: res[0].SixBd
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSSixProBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_SIXBD_PROBD',
					data: res[0].SixBd.ProBd
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSSevBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_SEVBD',
					data: res[0].SevBd
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSSevProBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_SEVBD_PROBD',
					data: res[0].SevBd.ProBd
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSEigBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_EIGBD',
					data: res[0].EigBd
				})
			})
			.catch( (err) => { console.log(err) })
	},
	LBSEigProBd () {
		fetch(LIST_BRANDSALE_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_BRANDSALE_EIGBD_PROBD',
					data: res[0].EigBd.ProBd
				})
			})
			.catch( (err) => { console.log(err) })
	}
}