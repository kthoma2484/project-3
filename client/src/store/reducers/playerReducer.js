const initState = {
  players: [
    {id: 1, username: 'testing1', email: 'testing1@email.com'},
    {id: 2, username: 'testing2', email: 'testing2@email.com'},
    {id: 3, username: 'testing3', email: 'testing3@email.com'},
  ]
}

const playerReducer = (state = initState, action) => {
  return state
}

export default playerReducer