import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'

import Header from './Header'
import GridLayout from './GridLayout'

export default class App extends Component {
	render () {
		return (
			<div>
			    <Header />
			    <GridLayout
			    	gridView={this.props.gridView}
			    	receiveView={this.props.receiveView} />
			</div>
  		)
	}
}

App.propTypes = {
	receiveView: PropTypes.func.isRequired,
	gridView: PropTypes.array.isRequired
}