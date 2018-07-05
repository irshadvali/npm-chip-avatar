import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import PropTypes from "prop-types";
class ProfileImage extends Component {
  getProfileName = (firstName, lastName) => {
    let name;
    if (firstName && lastName) {
      name =
        firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    } else {
      let splitChannelName = firstName.split(" ");
      if (splitChannelName) {
        if (splitChannelName[0] && splitChannelName[1]) {
          name =
            splitChannelName[0].charAt(0).toUpperCase() +
            splitChannelName[1].charAt(0).toUpperCase();
        } else {
          name = splitChannelName[0].charAt(0).toUpperCase();
        }
      }
    }
    return name;
  };

  renderImage() {
    const circleImage = {
      height: this.props.avatarSize,
      width: this.props.avatarSize,
      borderRadius: this.props.avatarSize / 2
    };

    return (
      <View style={this.props.background}>
        {this.props.src ? (
          <Image source={{ uri: this.props.src }} style={circleImage} />
        ) : (
          <Text style={this.props.labelStyle}>
            {this.getProfileName(this.props.label, this.props.lastName)}
          </Text>
        )}
      </View>
    );
  }
  render() {
    return <View>{this.renderImage()}</View>;
  }
}

export default ProfileImage;

ProfileImage.propTypes = {
  src: PropTypes.string,
  avatarSize: PropTypes.number,
  label: PropTypes.string,
  lastName: PropTypes.string,
  background: PropTypes.any,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  onPress: PropTypes.func
};
ProfileImage.defaultProps = {
  background: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#555555",
    backgroundColor: "#d3d3d3",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  }
};
