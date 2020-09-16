const API_ROOT = `http://localhost:3000`

// const headers = {
//     'Content-Type' : 'application/json',
//     Accepts : 'application/json',
// }

const fetchCards = () => {
    return fetch(`${API_ROOT}/cards`).then(r=>r.json())
}

export const Api = {
    cards: {
        fetchCards
    }
}