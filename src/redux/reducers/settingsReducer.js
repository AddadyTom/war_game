

const initial_state = {
    settings : {
        Section : '',
        SectionTeamTwo : '',
        Characters : [{Name : "ExampleName" , Description : 'ExampleDescription', Section : ''}],
        Time : '',
        Type : '',
        StartingPoint : '',
        Events : [{Title : "ExampleName" , Description : 'ExampleDescription' , Section : ''}],
        Roles :  [{Role : "ExampleName" , Description : 'ExampleDescription' , Section : ''}],
        Resources :  [{Resource : "ExampleName" , Description : 'Resources'}],
        GameType : '',
        TimeLimit : '',
        Stops :  [{Time : "ExampleName" , StopReason : 'Resources'}],
    }
}


const settingsReducer = (state = initial_state , action) => {
    switch (action.type){
        case 'ChangeSection':
            if(action.index === 0){
                return {
                    ...state,
                    Section : action.newSection
                }
            }
            else{
                return {
                    ...state,
                    SectionTeamTwo : action.newSection
                }
            }
          
            case 'ChangeTimeLimit':
                return {
                    ...state,
                    TimeLimit : action.newTimeLimit
                }
                case 'ChangeGameType':
                    return {
                        ...state,
                        GameType : action.newGameType
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
            case 'ChangeStops':
                return {
                    ...state,
                    Stops : action.newStops
                }
          
    }   
    return state
}


export default settingsReducer