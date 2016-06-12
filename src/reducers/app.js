import { RECEIVE_VIEW, APPEND_VIEW, FAVORITE } from '../actions/app'

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
		case FAVORITE:
			// 配列の値渡し
			let gridView = state.gridView.concat()
			gridView.map((tile) => {
				if (tile.id == action.tile.id) {
					tile.favorite = !tile.favorite
				}
			})
			return Object.assign({}, state, {
				gridView: gridView
			})
		default:
			return Object.assign({}, state, {})
	}
}