import React, { Component, PropTypes } from "react";

import { connect } from "react-redux";

import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  Button,
  ListView,
  Text,
  Switch
} from "react-native";

export class SearchResults extends Component {
  static navigationOptions = {
    title: "Search results"
  };

  constructor(props) {
    super(props);

    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => true
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.listings !== this.props.listings) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.listings)
      });
    }
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight underlayColor="#dddddd">
        <View>
          <View style={styles.rowContainer}>
            <Image
              style={styles.thumb}
              source={{ uri: rowData.destinationImage }}
            >
              <View style={styles.textContainer}>
                <Text
                  style={styles.priceStyle}
                >{`${rowData.avgPrice} ${rowData.currency}`}</Text>
                <Text style={styles.cityNameStyle} numberOfLines={1}>
                  {rowData.destinationName}
                </Text>
              </View>
            </Image>

          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

SearchResults.propTypes = {
  listings: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    listings: state.flights
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

var styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  thumb: {
    flex: 1,
    resizeMode: "stretch",
    height: 250
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  separator: {
    height: 1,
    backgroundColor: "#dddddd"
  },
  cityNameStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    paddingLeft: 5
  },
  priceStyle: {
    fontSize: 20,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    paddingLeft: 5
  },
  rowContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  }
});
