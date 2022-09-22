import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, Pressable } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase';

const SignInPage = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        alert("Signed In! Welcome")
        navigation.navigate('Bottom7h  5 ')
      })
      .catch(error => {
      })
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
      </View>
      <View style={styles.footer}>
        <Pressable onPress={handleSignIn} style={styles.buttonSignIn} >
          <Text style={styles.textSıgnIn}>LOG IN</Text>
        </Pressable>
        <Text style={styles.textAccount}>Don't you have an account?</Text>
        <Pressable style={styles.buttonSignUp} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.textSıgnUp}>SIGN UP</Text>
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
    borderRadius: 30,
    fontSize: 23,
    backgroundColor: "#1eb955",
    justifyContent: "center",
    flexDirection: "column",
    bottom: 70
  },
  buttonSignUp: {
    width: "70%",
    height: "18%",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 30,
    fontSize: 23,
    marginVertical: 10,
    backgroundColor: "gray",
    justifyContent: "center"

  },
  textSıgnIn: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textAccount: {
    fontSize: 23,
    fontWeight: "700",
  },
  textSıgnUp: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
})

export default SignInPage;
