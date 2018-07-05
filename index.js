import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import PropTypes from "prop-types";
import ProfileImage from "./ProfileImage";
//Component
class AvatarList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    if (this.props.maxAvatarShow > 4) {
      console.error("You can show max 4 chip Avatar");
    }
  }

  renderItem = (item, index) => {
    if (index < this.props.maxAvatarShow) {
      const overlapMargin = index === 0 ? 0 : -(this.props.avatarSize / 4);
      return (
        <View>
          <ProfileImage
            background={[
              styles.background,
              {
                marginLeft: overlapMargin,
                height: this.props.avatarSize,
                width: this.props.avatarSize,
                borderRadius: this.props.avatarSize / 2
              }
            ]}
            label={item.name}
            labelStyle={styles.label}
            src={item.image}
            avatarSize={this.props.avatarSize}
          />
        </View>
      );
    }
  };
  showMoreViewer = () => {
    if (this.props.dataResult.length > this.props.maxAvatarShow) {
      return (
        <View style={styles.textContainer}>
          <Text
            style={{
              color: this.props.maxTextShowColor,
              fontSize: this.props.maxTextShowSize
            }}
          >
            {this.props.dataResult.length - this.props.maxAvatarShow}
            {" " + this.props.maxTextShow}
          </Text>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.dataResult}
            renderItem={({ item, index }) => this.renderItem(item, index)}
            keyExtractor={(item, index) => index}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {this.showMoreViewer()}
      </View>
    );
  }
}

//Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  background: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#555555",
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center"
  },

  label: {
    fontSize: 15,
    color: "#555555",
    textAlign: "center"
  },
  textContainer: {
    marginLeft: 10
  }
});

//To make this component available to the app
export default AvatarList;
AvatarList.propTypes = {
  dataResult: PropTypes.array,

  overlapMargin: PropTypes.number,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  labelTextColor: PropTypes.string,
  labelTextFontSize: PropTypes.number,
  avatarSize: PropTypes.number,
  maxAvatarShow: PropTypes.number,
  maxTextShow: PropTypes.string,
  maxTextShowColor: PropTypes.string,
  maxTextShowSize: PropTypes.number
};
AvatarList.defaultProps = {
  dataResult: [],
  avatarSize: 60,
  overlapMargin: -15,
  maxTextShowColor: "#000000",
  maxTextShowSize: 15
};
