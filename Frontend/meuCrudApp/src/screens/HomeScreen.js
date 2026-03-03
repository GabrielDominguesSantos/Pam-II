<FlatList
  data={people}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <View>
      <Text>{item.firstname} {item.lastname}</Text>
      <Text>{item.email}</Text>
    </View>
  )}
/>
//fetch realiza uma requisição GET.  setPeople(data) armazena os dados no estado

fetch(`http://localhost:3000/people/${id}`, {
    method: 'DELETE'
})
//DELETE remove um item do JSON Server.  O id na URL indica qual item será removido