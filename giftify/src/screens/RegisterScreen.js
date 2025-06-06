import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    telephoneNumber: '',
    address: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        Alert.alert('Success', 'User registered successfully!', [
          { text: 'OK', onPress: () => navigation.navigate('LoginScreen') },
        ]);
      } else {
        const errorMsg = await response.text();
        Alert.alert('Registration Failed', errorMsg);
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to connect to the server.');
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Create Account</Text>
      {Object.entries(form).map(([key, value]) => (
        <TextInput
          key={key}
          style={styles.input}
          placeholder={key.replace(/([A-Z])/g, ' $1')}
          placeholderTextColor="#888"
          secureTextEntry={key === 'password'}
          value={value}
          onChangeText={(text) => handleChange(key, text)}
        />
      ))}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1F1',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#E53935',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  input: {
    width: width * 0.9,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#333',
    elevation: 2,
  },
  button: {
    backgroundColor: '#E53935',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: width * 0.9,
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#E53935',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
