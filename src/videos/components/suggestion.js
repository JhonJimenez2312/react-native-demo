import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

function Suggestion(props){
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover}
          source={require('../../../assets/logo.png')}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}>Acción</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>titulo</Text>
        <Text style={styles.year}>2007</Text>
        <Text style={styles.rating}>4 estrellas</Text>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    margin:8,
  },
  cover:{
    height:80,
    width:80,
    resizeMode:'contain',
    marginTop:38,
    margin:8,
  },
  left:{

  },
  right:{
    paddingLeft:8,
    justifyContent:'space-between'
  },
  title:{
    fontSize:18,
    color:'#44546b',
  },
  year:{
    backgroundColor: '#464C5B',
    paddingVertical: 4,
    paddingHorizontal:6,
    alignSelf:'flex-start',
    color: 'white',
    fontSize:11,
    borderRadius:4,
    overflow:'hidden',
  },
  rating:{
    color:'#626979',
    fontSize:14,
    fontWeight: 'bold',
  },
  genre:{
    position:'absolute',
    left:0,
    top:0,
    backgroundColor:'#0F1627',
    borderRadius:4,
    fontSize:11,
    paddingVertical:5,
    paddingHorizontal:7,
  },
  genreText:{
    color:'white',
  },
})

export default Suggestion
