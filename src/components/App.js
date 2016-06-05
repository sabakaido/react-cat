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
			    	append={this.props.append}
			    	gridView={this.props.gridView}
			    	getViewList={this.props.getViewList} />
			</div>
  		)
	}
}

App.propTypes = {
	append: PropTypes.func.isRequired,
	getViewList: PropTypes.func.isRequired,
	gridView: PropTypes.array.isRequired
}