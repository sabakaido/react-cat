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
			    	favorite={this.props.favorite}
			    	append={this.props.append}
			    	gridView={this.props.gridView}
			    	getViewList={this.props.getViewList} />
			</div>
  		)
	}
}

App.propTypes = {
	favorite: PropTypes.func.isRequired,	
	append: PropTypes.func.isRequired,
	getViewList: PropTypes.func.isRequired,
	gridView: PropTypes.array.isRequired
}