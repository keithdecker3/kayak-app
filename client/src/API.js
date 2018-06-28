const API_URL = 'https://kayak-app.herokuapp.com'

export default {
  search(currentRiver) {
    const url = `${API_URL}/runs/${currentRiver}`;
    return fetch(url)
      .then(response => response.json())
      .then(result => {
        return result
      })
  }
}