import React, { Component, PropTypes } from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

import CircularProgress from 'material-ui/CircularProgress'


const styles = {
	root: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around',
	},
	gridList: {
	    overflowY: 'auto',
	    marginBottom: 24,
	},
};

export default class GridLayout extends Component {
	constructor(props) {
		super(props)

		this.props.getViewList()

		this.state = {
			loading: true
		}
	}

	componentWillReceiveProps() {
		this.setState({
			loading: false
		})
	}

	onClick() {
		this.props.getViewList()
	}

	onScroll() {
		let scrollTop = document.documentElement.scrollTop !== 0 ? document.documentElement.scrollTop : document.body.scrollTop
		let windowHeight = window.innerHeight || screen.height
		let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight

        if (scrollTop + windowHeight + 100 > scrollHeight) {
        	if (! this.state.loading) {
        		this.setState({
        			loading: true
        		})
        		this.props.append(this.props.gridView[this.props.gridView.length - 1].id)
        	}
        }
	}

	render() {
		return (
			<div style={styles.root} onScroll={this.onScroll.bind(this)} onWheel={this.onScroll.bind(this)} onTouchMove={this.onScroll.bind(this)}>
				{(() => {
					if (this.props.gridView.length > 0) {
						return <GridList
							    	onClick={this.onClick.bind(this)}
					      			cellHeight={500}
							      	style={styles.gridList}
			    				>
							        {this.props.gridView.map((tile) => (
								        <GridTile
									          key={tile.url}
									          title={tile.id}
									          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
						    		    >
								          <img src={tile.url} />
								        </GridTile>
								    ))}
							    </GridList>
					}
				})()}
			    
			    {(() => {
			    	if (this.state.loading) {
				    	return <CircularProgress size={2} />
				    }
			    })()}
			</div>
		)
	}
}

GridLayout.propTypes = {
	append: PropTypes.func.isRequired,
	getViewList: PropTypes.func.isRequired,
	gridView: PropTypes.array.isRequired
}