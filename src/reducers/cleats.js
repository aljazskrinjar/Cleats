// src/reducers/cleats.js

const cleats = [
  {
    _id: 'a',
    title: 'Adidas Predator',
    summary: 'Leather boot',
    liked: true,
  },
  {
    _id: 'b',
    title: 'Nike Premiere Pro',
    summary: 'Old school boot with modern touch',
    liked: false,
  },
  {
    _id: 'c',
    title: 'Puma evoTouch',
    summary: 'sock boot combined with kenguru leather',
    liked: false,
  },
]

export default function(state = cleats, action = {}) {
  if (action.type === 'TOGGLE_LIKE_CLEAT') {
    return state.map((cleat) => {
      if (cleat._id !== action.payload) return cleat
      return { ...cleat, liked: !cleat.liked }
    })
  }
  return state
}
