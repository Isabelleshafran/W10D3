
export const allTodos = (state) => {
    // [1, 2]
   let keys = Object.keys(state.todos);

    return keys.map((id) => {
        return state.todos[id]
    })
}


