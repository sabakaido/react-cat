import { RECEIVE_VIEW, APPEND_VIEW } from '../actions/app'

export default function app(state = {
	gridView: [
	]
}, action) {
	switch (action.type) {
		case APPEND_VIEW:
			return Object.assign({}, state, {
				gridView: state.gridView.concat(action.gridView)
			})
		case RECEIVE_VIEW:
			return Object.assign({}, state, {
				gridView: action.gridView
			})
		default:
			return Object.assign({}, state, {})
	}
}