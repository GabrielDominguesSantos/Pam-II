const [people, setPeople] = useState();
useEffect(() => {
    fetch('http://localhost:3000/people')
      .then(response => response.json())
      .then(data => setPeople(data))
      .catch(error => console.error(error));
}, []);

fetch('http://localhost:3000/people', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPerson)
});
//method: 'POST' envia os dados.  JSON.stringfy(newPerson) transforma o objeto em JSON

fetch(`http://localhost:3000/people/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedPerson)
})
//PUT substitui os dados do registro.  Necessário passar o id na URL
