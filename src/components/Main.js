import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={5} >
          <div className="hero-image">
          <div className="overlay"></div>
          <div className="hero-title">Help your students grow</div>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="hero-block">
          </div>
        </Grid>




        <Grid item xs={7}>
          <div className="node">
            <div className="intro-text">
              <p>Keep track of how your students feel they are performing in class. Know where to focus your efforts based on how a student scores his or herself on their performance in class. Pellentesque mauris turpis, auctor a magna a, maximus euismod tortor.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas augue pretium tellus imperdiet, eget ornare ligula congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque non lobortis dolor, ut vestibulum elit. Vivamus malesuada augue at pulvinar aliquet. Fusce feugiat viverra orci. Sed ultricies id nisl eget lobortis.</p>

              <p>Duis eu ligula sollicitudin, lobortis mi ut, consectetur velit. Vivamus vestibulum nibh eu eros luctus feugiat. Nunc commodo cursus metus ut tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam maximus quam vitae tempus rutrum. Vestibulum varius aliquam neque malesuada pharetra. Donec feugiat nec dui at fermentum.</p>

            </div>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className="node-image-about">
          </div>
        </Grid>


        <Grid item xs={12}>
          <div className="cta">
            <div className="cta-title">Get Started</div>
            <div className="cta-subtext">Duis eu ligula sollicitudin, lobortis mi ut</div>
            <div className="cta-buttons">
              <div className="cta-button">
                Register
              </div>
              <div className="cta-button">
                Learn More
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className="footer-bar">
            &copy; ClassApp 2018
          </div>
        </Grid>
      </Grid>

    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
