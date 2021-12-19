import React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {connect , dispatch} from 'react-redux'
import {useEffect} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const GameRules = (props) => {

    const [Stops , setStops] = React.useState(props.Stops ? props.Stops : [])

    const handleChange = (value , setFunc) => {
        setFunc(value)
    }

    const handleEventChange = (value , index , valueName) => {
        let UpdatedStops = [...Stops]
        UpdatedStops[index][valueName] = value
        setStops(UpdatedStops)
        props.ChangeStops(UpdatedStops)
        console.log(props.Stops)
    }

    const handleAddEvent = () => {
        let UpdatedStops = [...Stops , {Time : '' , StopReason : ''}]
        setStops(UpdatedStops)
        props.ChangeStops(UpdatedStops)
        console.log(UpdatedStops)
    }

    const handleDeleteEvent = (index) => {
        let UpdatedStops = [...Stops]
        UpdatedStops.splice(index,1)
        setStops(UpdatedStops)
        props.ChangeStops(UpdatedStops)
    }
    

    return(
        <Grid container spacing = {5} style ={{marginLeft : '30px'}}>
            <Grid item xs = {12}>
                <Typography style = {{fontSize : '32px'}}>Game Rules</Typography>
                <Divider style = {{width: '20%'}}/>
            </Grid>
            <Grid item xs = {3}>
                <InputLabel id="demo-simple-select-label">GameType</InputLabel>
                <Select value = {props.GameType} variant= {'outlined'}  onChange = {(event) => {handleChange(event.target.value , props.ChangeGameType)}} fullWidth>
                    <MenuItem value={'דמוקרטיה'}>דמוקרטיה</MenuItem>
                    <MenuItem value={'דיקטטורה'}>דיקטטורה</MenuItem>
                </Select>
            </Grid>
            <Grid item xs = {4}>
                <InputLabel id="demo-simple-select-label">TimeLimit</InputLabel>
                <TextField type = {'datetime-local'} value = {props.TimeLimit} variant= {'outlined'}  onChange = {(event) => {handleChange(event.target.value , props.ChangeTimeLimit)}} fullWidth>
                </TextField>
            </Grid>

           
            <Grid item xs = {12}><Typography>Add your Time Stops</Typography></Grid>
            {Stops.map((Stop , index) => {
                return(       
                <>
                    <Grid item xs = {3}>
                        <InputLabel id="demo-simple-select-label">Time</InputLabel>
                        <TextField  value = {Stop['Time']} variant= {'outlined'} type = {'datetime-local'}  onChange = {(event) => {handleEventChange(event.target.value , index , 'Time')}} fullWidth>
                        </TextField>
                    </Grid>
                    <Grid item xs = {3}>
                        <InputLabel id="demo-simple-select-label">Stop Reason</InputLabel>
                        <TextField multiline value = {Stop['StopReason']} variant= {'outlined'}  onChange = {(event) => {handleEventChange(event.target.value , index , 'StopReason')}} fullWidth>
                        </TextField>
                    </Grid> 
                    <Grid item xs = {5} style ={{display : 'flex' , alignItems : 'center'}}>
                        <Button onClick = {() => {handleDeleteEvent(index)}}>
                            <DeleteIcon>
                            </DeleteIcon>
                        </Button>  
                    </Grid>
                </>)
            })}
           
            
            <Grid item xs = {12}>
                <Button style = {{backgroundColor : '#06DB69' , color : 'white'}} onClick = {() => {handleAddEvent()}}>
                    <Typography style = {{textTransform : 'none'}}>Add</Typography>
                </Button>
            </Grid>
        </Grid>
    )
}


const mapStateToProps = (state) => {
    return {
        Stops : state.settings.Stops,
        Section : state.settings.Section,
        Type : state.settings.Type,
        TimeLimit : state.settings.TimeLimit,
        GameType : state.settings.GameType,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        ChangeTimeLimit: (newTimeLimit) => dispatch({type : 'ChangeTimeLimit' , newTimeLimit : newTimeLimit}),
        ChangeGameType: (newGameType) => dispatch({type : 'ChangeGameType' , newGameType : newGameType}),
        ChangeStops : (newStops) => dispatch({type : 'ChangeStops' , newStops : newStops}),    
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(GameRules)
