import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function Header(props){
  return (
      <View>
        <SafeAreaView>
          <View style = {styles.container}>
            <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
            />
            <View style={styles.right}>
              {props.children}
            </View>
          </View>
        </SafeAreaView>
      </View>
    )
}

const styles = StyleSheet.create({
  logo:{
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  container:{
    padding:8,
    flexDirection: 'row'
  },
  right:{
    flexDirection:'row',
    justifyContent: 'flex-end',
    flex: 1,

  }
})
export default Header;
