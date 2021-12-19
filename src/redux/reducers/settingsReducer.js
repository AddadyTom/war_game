

const initial_state = {
    settings : {
        Section : '',
        Characters : [{Name : "ExampleName" , Description : 'ExampleDescription'}]
    }
}


const settingsReducer = (state = initial_state , action) => {
    switch (action.type){
        case 'ChangeSection':
            return {
                ...state,
                Section : action.newSection
            }
        case 'ChangeCharacters':
            return {
                ...state,
                Characters : action.newCharacters
            }
          
    }   
    return state
}


export default settingsReducer