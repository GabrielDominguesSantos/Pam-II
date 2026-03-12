import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  itemCard: { 
    paddingVertical: 15, 
    borderBottomWidth: 1, 
    borderColor: '#eee', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: { 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  emailText: { 
    color: '#666' 
  },
  buttonsContainer: { 
    flexDirection: 'row', 
    gap: 15 
  },
  editBtn: { 
    padding: 5
  },
  deleteBtn: { 
    padding: 5 
  }
});