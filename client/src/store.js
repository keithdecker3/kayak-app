import API from './API'

const HANDLE_CHANGE = 'HANDLE_CHANGE'
const SELECT_RUN = 'SELECT_RUN'

const initialState = {
  riverImages: [
    {
      text: 'Poudre',
      value: 'Poudre',
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
    },
    {
      text: 'Colorado',
      value: 'Colorado',
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
    },
    {
      text: 'Animas',
      value: 'Animas',
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
    },
    {
      text: 'Arkansas',
      value: 'Arkansas',
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
    },
    {
      text: 'Clear Creek',
      value: 'Clear Creek',
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
    },
    {
      text: 'Blue River',
      value: 'Blue River',
      image: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg',
    }
  ],
  input: '',
  riverRuns: [],
  selectedRun: {},
  showRivers: true,
  showRuns: false,
  showRunDetails: false
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
  },
  selectRun(selectedRun) {
    return {
      type: 'SELECT_RUN',
      selectedRun
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
        showRuns: true,
        showRunDetails: false
      }
    }
    case 'SELECT_RUN': {
      return {
        ...state,
        selectedRun: action.selectedRun,
        showRivers: false,
        showRuns:false,
        showRunDetails: true
      }
    }
    default:
      return state
  }
}