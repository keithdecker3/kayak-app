import API from './API'

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
  input: '',
  riverRuns: [],
  showRivers: true,
  showRuns: false

}

export const actions = {
  handleChange(input) {
    return {
      type: HANDLE_CHANGE,
      input
    }
  },
  getRiverRuns(currentRiver) {
    return {
      type: 'RIVER_RUNS',
      payload: API.search(currentRiver)
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
    case 'RIVER_RUNS_FULFILLED': {
      return {
        ...state,
        riverRuns: action.payload,
        showRivers: false,
        showRuns: true
      }
    }
    default:
      return state
  }
}