const API_URL = 'http://localhost:3000'

export default {
  search(currentRiver) {
    const url = `${API_URL}/runs/${currentRiver}`;
    return fetch(url)
      .then(response => response.json())
      .then(result => {
        return result
      })
  },
}