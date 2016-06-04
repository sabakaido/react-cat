import { RECEIVE_VIEW } from '../actions/app'

export default function app(state = {
	gridView: [
	    {
	    	id: 739110738480926700,
	    	url: "https://pbs.twimg.com/media/CkHZTPjVEAQ2rFi.jpg",
	    },
	]
}, action) {
	switch (action.type) {
		case RECEIVE_VIEW:
			return Object.assign({}, state, {
				gridView: action.gridView
			})
		default:
			return Object.assign({}, state, {})
	}
}