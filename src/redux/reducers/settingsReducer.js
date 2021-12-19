

const initial_state = {
    number : 0
}


const settingsReducer = (state = initial_state , action) => {
    switch (action.type){
        case 'ChangeNumber':
            return {
                ...state,
                number : action.newNumber
            }
    }
    return state
}


export default settingsReducer