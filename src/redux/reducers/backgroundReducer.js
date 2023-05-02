import { backgrounds } from '../../data'

const initState = {
   current: backgrounds[0],
   backgrounds,
}

function reducer(state = initState, action) {
   switch (action.type) {
      case 'change-background':
         return { ...state, current: state.backgrounds.find(bg => bg.id === action.id) }

      default:
         return state
   }
}

export default reducer
