import {createStore, combineReducers} from 'redux'

//Home
const HomeText = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_TEXT') {
		state = data
	}
	return state
}
const HomeNav = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_NAV') {
		state = data
	}
	return state
}
const HomeNNC = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_NNC') {
		state = data
	}
	return state
}
const HomeNNCList = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_NNC_LIST') {
		state = data
	}
	return state
}
const HomeBrandSale = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_BRANDSALE') {
		state = data
	}
	return state
}
const HomeBSList = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_BRANDSALE_LIST') {
		state = data
	}
	return state
}
const HomeBdPic = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_BDPIC') {
		state = data
	}
	return state
}
const HomeHotTop10 = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_HOTTOP10') {
		state = data
	}
	return state
}
const HomeHT10List = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_HOTTOP10_LIST') {
		state = data
	}
	return state
}

//ListBrandSale
const ListBS = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE') {
		state = data
	}
	return state
}
const LBSThrBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_THRBD') {
		state = data
	}
	return state
}
const LBSThrProBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_THRBD_PROBD') {
		state = data
	}
	return state
}
const LBSFourBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_FOURBD') {
		state = data
	}
	return state
}
const LBSFourProBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_FOURBD_PROBD') {
		state = data
	}
	return state
}
const LBSFiveBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_FIVEBD') {
		state = data
	}
	return state
}
const LBSFiveProBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_FIVEBD_PROBD') {
		state = data
	}
	return state
}
const LBSSixBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_SIXBD') {
		state = data
	}
	return state
}
const LBSSixProBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_SIXBD_PROBD') {
		state = data
	}
	return state
}
const LBSSevBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_SEVBD') {
		state = data
	}
	return state
}
const LBSSevProBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_SEVBD_PROBD') {
		state = data
	}
	return state
}
const LBSEigBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_EIGBD') {
		state = data
	}
	return state
}
const LBSEigProBd = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_BRANDSALE_EIGBD_PROBD') {
		state = data
	}
	return state
}

//ListHotTop10
const ListHT10 = (state = [], action) => {
	const {type, data} = action
	if (type === 'LIST_GET_HTOTOP10') {
		state = data
	}
	return state
}

const DetailInfo = ( state = {
		DeInfo: [],
		DeBan: [],
		DeBody: []
		
}, action ) => {
	const {type, data} = action
	if (type === 'DETAIL_GET_INFO') {
		state.DeInfo = data
		state.DeBan = data.banner,
		state.DeBody = data.BodyList
	}
	return state
}

const reducer = combineReducers({
	HomeText,
	HomeNav,
	HomeNNC,
	HomeNNCList,
	HomeBrandSale,
	HomeBSList,
	HomeBdPic,
	HomeHotTop10,
	HomeHT10List,
	ListBS,
	LBSThrBd,
	LBSThrProBd,
	LBSFourBd,
	LBSFourProBd,
	LBSFiveBd,
	LBSFiveProBd,
	LBSSixBd,
	LBSSixProBd,
	LBSSevBd,
	LBSSevProBd,
	LBSEigBd,
	LBSEigProBd,
	ListHT10,
	DetailInfo
})

const store = createStore(reducer)

export default store