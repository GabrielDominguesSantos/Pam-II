import { BASE_URL } from './api';
export default function addPerson(person) {
    return fetch(`${BASE_URL}/people`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify(person)
    })
    .then(response => response.json());
}