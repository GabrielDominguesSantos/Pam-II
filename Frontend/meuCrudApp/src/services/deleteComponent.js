export default function deletePerson(id) {
    return fetch(`https://inclinational-cleopatra-craunchingly.ngrok-free.dev/people/${id}`, {
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