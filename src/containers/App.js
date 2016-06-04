import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'
import * as app from '../actions/app'

function mapStateToProps(state) {
	return {
		gridView: state.gridView
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(app, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)