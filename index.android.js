import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import getStore from './store/configureStore';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';

import Routes from './config/routes';

const AppNavigator = StackNavigator(Routes, {
  navigationOptions: {
    title: ({ state }) => {
      if (state.params) {
        return `${state.params.title}`;
      }
    },
  },
});

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const store = getStore(navReducer);

class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    nav: state.nav,
  };
};
var ConnectedAppWithNavigationState = connect(mapStateToProps)(
  AppWithNavigationState
);

class FlightCATcher extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedAppWithNavigationState style={styles.container} />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('FlightCATcher', () => FlightCATcher);

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80,
  },
  container: {
    flex: 1,
  },
});
