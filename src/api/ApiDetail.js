import {DETAIL_URL} from '@/server/index.js'
import store from '@/store/store.js'

export default {
	DetailInfo () {
		fetch (DETAIL_URL)
			.then(res => res.json())
			.then( (res) => {
				store.dispatch({
					type: 'DETAIL_GET_INFO',
					data: res[0]
				})
			})
			.catch((err) => {console.log(err)})
	}
}
