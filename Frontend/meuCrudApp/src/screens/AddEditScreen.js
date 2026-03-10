import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import addPerson from '../services/postComponent'; 
import editPerson from '../services/putComponent';
import { styles } from '../styles/addEditScreen.styles'; 

export default function AddEditScreen({ route, navigation }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  
  const personId = route?.params?.id; 

  const handleSave = () => {
    if (!firstname || !email) {
      Alert.alert("Erro", "Por favor, preencha nome e e-mail.");
      return;
    }

    const personData = { 
      firstname: firstname, 
      lastname: lastname, 
      email: email 
    };

    if (personId) {
      editPerson(personId, personData)
        .then(() => {
          Alert.alert("Sucesso", "Atualizado!");
          navigation.goBack();
        })
        .catch(err => console.error(err));
    } else {
      addPerson(personData)
        .then(() => {
          Alert.alert("Sucesso", "Salvo!");
          navigation.goBack();
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.namesContainer}>
        <TextInput
          style={styles.inputName}
          placeholder="Nome"
          value={firstname}
          onChangeText={setFirstname}
        />
        <TextInput
          style={styles.inputName}
          placeholder="Sobrenome"
          value={lastname}
          onChangeText={setLastname}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <Button 
        title={personId ? "Atualizar Dados" : "Salvar no Banco"} 
        onPress={handleSave} 
      />
    </View>
  );
}