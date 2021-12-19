

const initial_state = {
    settings : {
        Section : '',
        Characters : [{Name : "ExampleName" , Description : 'ExampleDescription'}],
        Time : '',
        Type : '',
        StartingPoint : '',
        Events : [{Title : "ExampleName" , Description : 'ExampleDescription'}],
        Roles :  [{Role : "ExampleName" , Description : 'ExampleDescription'}],
        Resources :  [{Resource : "ExampleName" , Description : 'Resources'}],
        GameType : '',
        TimeLimit : '',
        Stops :  [{StopTime : "ExampleName" , StopReason : 'Resources'}],
    }
}


const settingsReducer = (state = initial_state , action) => {
    switch (action.type){
        case 'ChangeSection':
            return {
                ...state,
                Section : action.newSection
            }
            case 'ChangeStopTime':
                return {
                    ...state,
                    Section : action.newSection
                }
                case 'ChangeStopReason':
                    return {
                        ...state,
                        Section : action.newSection
                    }    
        case 'ChangeTime':
            return {
                ...state,
                Time : action.newTime
            }
        case 'ChangeType':
            return {
                ...state,
                Type : action.newType
            }
        case 'ChangeCharacters':
            return {
                ...state,
                Characters : action.newCharacters
            }
        case 'ChangeEvents':
            return {
                ...state,
                Events : action.newEvents
            }
        case 'ChangeRoles':
            return {
                ...state,
                Roles : action.newRoles
            }
        case 'ChangeResources':
            return {
                ...state,
                Resources : action.newResources
            }
        case 'ChangeStartingPoint':
            return {
                ...state,
                StartingPoint : action.newStartingPoint
            }
          
    }   
    return state
}


export default settingsReducer