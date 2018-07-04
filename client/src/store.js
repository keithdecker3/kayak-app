import API from './API'

const HANDLE_CHANGE = 'HANDLE_CHANGE'
const SELECT_RUN = 'SELECT_RUN'
const GO_HOME = 'GO_HOME'
const LOGGED_IN = 'LOGGED_IN'

const initialState = {
  riverImages: [
    {
      text: 'Poudre',
      value: 'Poudre',
      image: 'https://boofingtonheights.files.wordpress.com/2011/08/dsc_0589.jpg',
    },
    {
      text: 'Colorado',
      value: 'Colorado',
      image: 'https://www.colorado.com/sites/default/files/styles/1000x685/public/Glenwood-Canyon-Kayaker-Glenwood-Springs.jpg',
    },
    {
      text: 'Animas',
      value: 'Animas',
      image: 'https://www.americanwhitewater.org/photos/archive/medium/885497.jpg',
    },
    {
      text: 'Arkansas',
      value: 'Arkansas',
      image: 'http://mtntownmagazine.com/wp-content/uploads/2014/08/buena_vista_river_park-00001-3.jpg',
    },
    {
      text: 'Clear Creek',
      value: 'Clear Creek',
      image: 'http://www.goldenvisitorsbureau.com/gvcimages/gvckayaking.jpg',
    },
    {
      text: 'Blue River',
      value: 'Blue River',
      image: 'https://www.summitdaily.com/wp-content/uploads/2016/08/KayakBlue-Sdn-090613-a-1-325x217.jpg',
    }
  ],
  river: '',
  date: '',
  difficulty: '0',
  startTime: '',
  endTime: '',
  meetLat: '',
  meetLong: '',
  description: '',
  riverRuns: [],
  selectedRun: {},
  showRivers: true,
  showRuns: false,
  showRunDetails: false,
  loggedIn: false,
}

export const actions = {
  handleChange(input, name) {
    return {
      type: HANDLE_CHANGE,
      name: name,
      input: input
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
  },
  goHome() {
    return {
    type: 'GO_HOME',
    }
  },
  loggedIn() {
    return {
      type: 'LOGGED_IN'
    }
  }
}

export function reducer(state = initialState, action) {
  const name = action.name
  switch(action.type) {
    case HANDLE_CHANGE: {
      return {
        ...state,
       [name]: action.input
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
      }
    }
    case 'GO_HOME': {
      return {
        ...state,
        showRivers: true,
        showRuns: false,
        showRunDetails: false
      }
    }
    case 'LOGGED_IN': {
      return {
        ...state,
        loggedIn: true,
      }
    }
    default:
      return state
  }
}