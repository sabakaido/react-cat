import React, { Component } from 'react'
import { render } from 'react-dom'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const styles = {
	appBar: {
		height: "76px"
	}
}

export default class Header extends Component {
	render () {
		return (
			<AppBar
			    title="ねこあつめ"
			    style={styles.appBar}
			    iconElementRight={
				    <IconMenu
				        iconButtonElement={
				          <IconButton><MoreVertIcon /></IconButton>
				        }
				        targetOrigin={{horizontal: 'right', vertical: 'top'}}
				        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
				    >
				        <MenuItem primaryText="Refresh" />
				        <MenuItem primaryText="Help" />
				        <MenuItem primaryText="Sign out" />
				    </IconMenu>
			    }
	    	/>
  		)
	}
}