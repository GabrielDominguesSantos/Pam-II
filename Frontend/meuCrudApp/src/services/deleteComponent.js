import { BASE_URL } from './api';
export default function deletePerson(id) {
    return fetch(`${BASE_URL}/people/${id}`, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao deletar no servidor');
        }
        return response.json();
    });
}