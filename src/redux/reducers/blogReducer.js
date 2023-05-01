import { blogs, slugify } from '../../data'

const initState = blogs

const findIndex = (state, id) => {
   let index = -1
   state.forEach((datum, i) => {
      if (slugify(datum.title) === id) {
         index = i
      }
   })
   return index
}

function reducer(state = initState, action) {
   let index = -1
   switch (action.type) {
      case 'like':
         index = findIndex(state, action.id)
         if (index !== -1) {
            state[index].like = !state[index].like
         }
         return [...state]

      default:
         return state
   }
}

export default reducer
