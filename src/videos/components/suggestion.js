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
          source={{
           uri:props.medium_cover_image
          }}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}>{props.genres[0]}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>{props.year}</Text>
        <Text style={styles.rating}>{props.rating} Estrellas</Text>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',

  },
  cover:{
    height:150,
    width:100,
    resizeMode:'contain',
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
