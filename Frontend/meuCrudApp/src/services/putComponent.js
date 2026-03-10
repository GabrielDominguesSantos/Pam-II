export default function editPerson(id, person) {
    return fetch(`https://inclinational-cleopatra-craunchingly.ngrok-free.dev/people/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify(person) 
    })
    .then(response => response.json());
}