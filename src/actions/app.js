import request from 'superagent'

export const RECEIVE_VIEW = 'RECEIVE_VIEW'

export function getViewList() {
	return dispatch => {
		request
		    .get('http://catroid.net:3000/get/CatApartment')
		    .end(function(err, res) {
		    	let result = JSON.parse(res.text)
		    	return dispatch(receiveView(result))
			}
		)
	}
}

export function receiveView(gridView) {
	return {
		type: RECEIVE_VIEW,
		gridView: gridView
	}
}