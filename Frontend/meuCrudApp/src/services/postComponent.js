export default function addPerson(person) {
    return fetch('https://inclinational-cleopatra-craunchingly.ngrok-free.dev/people', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify(person)
    })
    .then(response => response.json());
}