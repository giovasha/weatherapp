import React, { useState, useEffect, } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import linkUse from '../components/linkUse'
import link from "../links/link"
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const HomeScreen = () =>{
  const [term, setTerm] = useState('')
  const [results, setResults] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setApiData] = useState ('272')
  const [status, setStatus] = useState(null)
  const [city, setCity] = useState ()
  const [name, setName] = useState()
  const getWholeAndDecimal = value => {
    const [whole, decimal] = String(value).split('.');
    return [Number(whole)];
  }
  
     
  async function findCurrentLocationAsync (){
    let statusPerm= await Permissions.askAsync(Permissions.LOCATION);
    if (statusPerm.status !=='granted'){
     setStatus("Permission to access location was denied")
    }
    else   
    {setStatus(null)
    let loc = await Location.getCurrentPositionAsync ({});
   
    lon = JSON.stringify( loc.coords.longitude );
    lat = JSON.stringify( loc.coords.latitude );
    console.log(lat)
    console.log(lon)
    console.log(1);
    const response = await link.get(`weather?lat=${lat}&lon=${lon}&APPID=e0e5bd503498e2eb3a40b0e5331d2acc` );
    setApiData(response.data.main.temp,);
    setCity(response.data.name)
    console.log(data)
    }}

  const getApiData = async () => {
    console.log(1111);
    
    const response = await link.get(`weather?q=${term}&APPID=e0e5bd503498e2eb3a40b0e5331d2acc` );
    setApiData(response.data.main.temp,);
    setCity(response.data.name)
    console.log(data)
    
  };
  let text = ''
  let lon=''
  let lat=''
if(status){
text=status
}

    return (
      
        <View style={styles.background}>
          
          <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={ ()=>getApiData(term)}
      />

          <TouchableOpacity onPress={findCurrentLocationAsync} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>weather at your location {text}</Text>
  </TouchableOpacity>

           {errorMessage ? <Text>{errorMessage} </Text> : null}
           <Text style={styles.header}>{city}</Text>
    <Text style={styles.text}> temperature:{getWholeAndDecimal(data-272) }*c</Text>
        </View>
      );
    }
  

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgb( 75, 75, 230)",
   flex: 1,
   marginTop: 30
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  text: {
fontSize: 20

  },
  header: {
    fontSize: 50,
    
 }
});
export default HomeScreen