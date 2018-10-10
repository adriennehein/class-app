import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClassTable from './ClassTable.js';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
})

class Dashboard extends Component {
  state = {
    value: 0,
  }

  handleChange = (e,value) => {
    this.setState({value})
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Spanish I" />
          <Tab label="Spanish II" />
          <Tab label="History" />
        </Tabs>
        {value === 0 && <TabContainer><ClassTable /></TabContainer>}
        {value === 1 && <TabContainer>Item 2</TabContainer>}
        {value === 2 && <TabContainer>Item 3</TabContainer>}

      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard);
