
import './App.css';
import {connect , dispatch} from 'react-redux'
import Number from './number'
import SettingStepper from './SettingsStepper/SettingStepper'
import MainPage from './MainPage/MainPage'
import Button from '@material-ui/core/Button'
import GameClient from './api-client/Game'
import Chat from './chat'

const App = (props) => {
  let client = new GameClient()
  return (
  //  <SettingStepper>
  //  </SettingStepper>
  <MainPage></MainPage>
  // <>
    
//    <Button onClick = {() => {client.createGame({content : {
//     "name": "Civil War",
//     "sections": [
//         "United States",
//         "Russia"
//     ],
//     "characters": [
//         {
//             "name": "Captain America",
//             "description": "יש לו מגן",
//             "section": "United States"
//         },
//         {
//             "name": "Thor",
//             "description": "מייצר ברקים",
//             "section": "United States"
//         },
//         {
//             "name": "Loki",
//             "description": "אח של תור",
//             "section": "Russia"
//         }
//     ],
//     "game_mode": "Tactic",
//     "game_date": "2000-03-12 09:30:00",
//     "start_time": "2012-04-05 09:30:00",
//     "end_time": "2012-04-05 19:30:00",
//     "time_stops": [
//         {
//             "time": "2012-04-05 12:30:00",
//             "stop_reason": "discussion"
//         }
//     ],
//     "starting_point": {
//         "description": "the battle is starting"
//     },
//     "roles": [
//         {
//             "name": "leader",
//             "description": "the leader of the group",
//             "section": "United States"
//         },
//         {
//             "name": "leader",
//             "description": "the leader of the group",
//             "section": "Russia"
//         }
//     ],
//     "resources": [
//         {
//             "name": "missiles",
//             "description": "boom boom",
//             "section": "United States"
//         }
//     ],
//     "rule_type": "dictatorship"
// }})}}>Send</Button>
  // </>
  )
}



export default  App
