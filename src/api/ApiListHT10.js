import {LIST_HOTTOP10_URL} from '@/server/index.js'
import store from '@/store/store.js'

export default {
	ListHT10 () {
		fetch(LIST_HOTTOP10_URL)
			.then( res => res.json() )
			.then( (res) => {
				store.dispatch({
					type: 'LIST_GET_HTOTOP10',
					data: res
				})
			})
	}
	
}
