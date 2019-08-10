import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import house from "./data/houseData";
export default class MagicHome extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            ROOT MAP OF HOME
          </Text>
          <Text style={styles.greeting}>
            {house.House.roomName}
          </Text>
        </View>

        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Room Details
          </Text>
          <Text >
            {house.House.info}
          </Text>
        </View>


       

      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection : "row",
    justifyContent: 'space-between',
   
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  }  
});

AppRegistry.registerComponent('MagicHome', () => MagicHome);
