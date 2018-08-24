import React from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  Tabs,
  Tab,
  withStyles,
  Button,
  Toolbar
} from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import StarIcon from "@material-ui/icons/Star";
import EventIcon from "@material-ui/icons/Event";

const API_HOST = process.env.REACT_APP_API_HOST;

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  flexContainer: {
    justifyContent: "center"
  },
  tabs: {
    flexGrow: 1
  }
});

@withRouter
class ScrollableTabsButtonForce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.location.pathname
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar style={{ justifyContent: "center" }}>
            <Button href={`${API_HOST}/auth/google`}>Login</Button>
          </Toolbar>
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
            classes={{
              flexContainer: classes.flexContainer,
              root: classes.tabs
            }}
          >
            <Tab label="GAMES" icon={<ListIcon />} value="/games" />
            <Tab label="LEADERS" icon={<StarIcon />} value="/leaders" />
            <Tab
              label="TOURNAMENTS"
              icon={<EventIcon />}
              value="/tournaments"
            />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(ScrollableTabsButtonForce);
