import { BASE_URL } from './api';
export default function editPerson(id, person) {
    return fetch(`${BASE_URL}/people/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify(person) 
    })
    .then(response => response.json());
}