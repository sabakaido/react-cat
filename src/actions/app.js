import request from 'superagent'

export const RECEIVE_VIEW = 'RECEIVE_VIEW'
export const APPEND_VIEW = 'APPEND_VIEW'
export const FAVORITE = 'FAVORITE'

export function favorite(tile) {
	return {
		type: FAVORITE,
		tile: tile
	}
}

export function getViewList() {
	return dispatch => {
		request
		    .get('/get/CatApartment')
		    .end(function(err, res) {
		    	return dispatch(receiveView(res.body))
			})
	}
}

export function receiveView(gridView) {
	return {
		type: RECEIVE_VIEW,
		gridView: gridView
	}
}

export function append(id) {
	return dispatch => {
		request
			.get('/get/CatApartment')
			.query({ max_id: id })
			.end(function(err, res) {
				return dispatch(appendView(res.body))
			})
	}
}

export function appendView(gridView) {
	return {
		type: APPEND_VIEW,
		gridView: gridView
	}
}