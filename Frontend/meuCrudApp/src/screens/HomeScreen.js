import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { BASE_URL } from '../services/api';
import { useState, useCallback } from 'react'; 
import { useFocusEffect } from '@react-navigation/native'; 
import deletePerson from '../services/deleteComponent';
import { styles } from '../styles/HomeScreen.styles';

export default function HomeScreen({ navigation }) {
  const [people, setPeople] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchData = () => {
        fetch(`${BASE_URL}/people`, {
          headers: { 
            'ngrok-skip-browser-warning': 'true'
          }
        })
          .then(response => response.json())
          .then(data => setPeople(data))
          .catch(error => console.error("Erro ao carregar lista:", error));
      };
      fetchData();
    }, [])
  );

  const handleDelete = (id) => {
    deletePerson(id)
      .then(() => {
        setPeople(people.filter(person => person.id !== id));
      })
      .catch(error => console.error("Erro ao deletar:", error));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity  
        onPress={() => navigation.navigate('AddEditScreen')}
        style={styles.editBtn} 
      >
        <Text style={{color: 'blue', textAlign: 'center', fontSize: 16}}>Criar Novo Usuário</Text>
      </TouchableOpacity>

      <FlatList
        data={people}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.firstname} {item.lastname}</Text>
              <Text style={styles.emailText}>{item.email}</Text>
            </View>
            
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                onPress={() => navigation.navigate('AddEditScreen', { id: item.id })}
                style={styles.editBtn}
              >
                <Text style={{color: 'blue'}}>Editar</Text>
              </TouchableOpacity>  

              <TouchableOpacity 
                onPress={() => handleDelete(item.id)}
                style={styles.deleteBtn}
              >
                <Text style={{color: 'red'}}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}