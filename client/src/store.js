const HANDLE_CHANGE = 'HANDLE_CHANGE'

const initialState = {
  riverImages: [
    {
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
      river: 'Poudre'
    },
    {
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
      river: 'Colorado'
    },
    {
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
      river: 'Animas'
    },
    {
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
      river: 'Arkansas'
    },
    {
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
      river: 'Clear Creek'
    },
    {
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
      river: 'Blue River'
    }
  ],
  input: ''
}

export const actions = {
  handleChange(input) {
    return {
      type: HANDLE_CHANGE,
      input
    }
  }
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_CHANGE: {
      return {
        ...state,
        input: action.input
      }
    }
    default:
      return state
  }
}