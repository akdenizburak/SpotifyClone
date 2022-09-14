import React,{useState} from 'react';
import { View, StyleSheet, Text, Image, TextInput, Pressable, Alert } from 'react-native';

const SignUpPage = ({navigation}) => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [passwordAgain,setPasswordAgain]=useState("");

const handleSıgnUp=()=>{
  password!==passwordAgain? alert("Passwords must be same"): alert("Sign Up Successful")
}

  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
          uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png',
        }} />
      </View>
      <View style={styles.middle}>
        <TextInput style={styles.inputEmail} placeholder="E-mail" value={email} onChangeText={setEmail} />
        <TextInput style={styles.inputPassword} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
        <TextInput style={styles.inputPasswordAgain} placeholder="PasswordAgain" value={passwordAgain} onChangeText={setPasswordAgain} secureTextEntry={true} />
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.buttonSignUp} onPress={handleSıgnUp} >
          <Text style={styles.textSıgnUp}>SIGN UP</Text>
        </Pressable>
        <Text style={styles.textAccount}>Do you have an account?</Text>
        <Pressable style={styles.buttonSignIn} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.textSıgnIn}>LOG IN</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  header: {
    width: "100%",
    height: "30%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: "70%",
    height: "50%",
    resizeMode: "contain",
    padding: 60
  },
  middle: {
    width: "100%",
    height: "30%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"

  },
  inputEmail: {
    width: "70%",
    height: "22%",
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 30,
    fontSize: 23,
    paddingLeft: 20,
    marginVertical: 10
  },
  inputPassword: {
    width: "70%",
    height: "22%",
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 30,
    fontSize: 23,
    paddingLeft: 20,
    marginVertical: 10
  },
  inputPasswordAgain: {
    width: "70%",
    height: "22%",
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 30,
    fontSize: 23,
    paddingLeft: 20,
    marginVertical: 10
  },
  footer: {
    width: "100%",
    height: "40%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonSignIn: {
    width: "70%",
    height: "18%",
    borderWidth:3,
    borderColor:"black",
    borderRadius: 30,
    fontSize: 23,
    backgroundColor: "lightgray",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttonSignUp: {
    width: "70%",
    height: "18%",
    borderRadius: 30,
    fontSize: 23,
    marginVertical: 10,
    backgroundColor: "#1eb955",
    justifyContent: "center",
    bottom:70

  },
  textSıgnIn: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textAccount: {
    fontSize: 23,
    fontWeight: "700",
    marginVertical:10
  },
  textSıgnUp: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
})

export default SignUpPage;
