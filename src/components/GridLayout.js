import React, { Component, PropTypes } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
	root: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around',
	},
	gridList: {
	    width: 500,
	    height: 500,
	    overflowY: 'auto',
	    marginBottom: 24,
	},
};

export default class GridLayout extends Component {
	constructor(props) {
		super(props)
	}

	onClick() {
		this.props.receiveView()
	}

	render() {
		return (
			<div style={styles.root}>
			    <GridList
			    	onClick={this.onClick.bind(this)}
			      	cellHeight={200}
			      	style={styles.gridList}
			    	>
				        {this.props.gridView.map((tile) => (
					        <GridTile
					          key={tile.id}
					          title={tile.id}
					          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
					        >
					          <img src={tile.url} />
					        </GridTile>
				        ))}
			    </GridList>
			</div>
		)
	}
}

GridLayout.propTypes = {
	receiveView: PropTypes.func.isRequired,
	gridView: PropTypes.array.isRequired
}