import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
const[data,setData]=React.useState([]);

React.useEffect(() => {
  console.log("useeffect call");
  getMoviesFromApiAsync();
},[]);

function Cat() {
  return (
    <View>
      {data.map((row) => (
             <Text>{row.firstname}</Text>  
          ))}
    </View>
  );
}

  function getMoviesFromApiAsync() {
    return fetch('http://localhost:8080/getuser/1')
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.status === true){
        setData(responseJson.result);
      }
    })
    .catch((error) => {
    console.error(error);
    });
    }

  return (
    <View style={styles.container}>
     <Cat/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
