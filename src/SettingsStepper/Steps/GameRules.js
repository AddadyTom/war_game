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

    const [Events , setEvents] = React.useState(props.Events ? props.Events : [])

    const handleChange = (value , setFunc) => {
        setFunc(value)
    }

    const handleEventChange = (value , index , valueName) => {
        let UpdatedEvents = [...Events]
        UpdatedEvents[index][valueName] = value
        setEvents(UpdatedEvents)
        props.ChangeEvents(UpdatedEvents)
        console.log(props.Events)
    }

    const handleAddEvent = () => {
        let UpdatedEvents = [...Events , {Title : '' , Description : ''}]
        setEvents(UpdatedEvents)
    }

    const handleDeleteEvent = (index) => {
        let UpdatedEvents = [...Events]
        UpdatedEvents.splice(index,1)
        setEvents(UpdatedEvents)
        props.ChangeEvents(UpdatedEvents)
    }
    

    return(
        <Grid container spacing = {5} style ={{marginLeft : '30px'}}>
            <Grid item xs = {12}>
                <Typography style = {{fontSize : '32px'}}>Setting</Typography>
                <Divider style = {{width: '20%'}}/>
            </Grid>
            <Grid item xs = {3}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select value = {props.Type} variant= {'outlined'}  onChange = {(event) => {handleChange(event.target.value , props.ChangeType)}} fullWidth>
                    <MenuItem value={'טקטי'}>טקטי</MenuItem>
                    <MenuItem value={'אסטרטגי'}>אסטרטגי</MenuItem>
                </Select>
            </Grid>
            <Grid item xs = {4}>
                <InputLabel id="demo-simple-select-label">Time</InputLabel>
                <TextField type = {'datetime-local'} value = {props.Time} variant= {'outlined'}  onChange = {(event) => {handleChange(event.target.value , props.ChangeTime)}} fullWidth>
                </TextField>
            </Grid>
            <Grid item xs = {4}>
                <InputLabel id="demo-simple-select-label">Starting Point Desctiption</InputLabel>
                <TextField value = {props.StartingPoint} variant= {'outlined'}  onChange = {(event) => {handleChange(event.target.value , props.ChangeStartingPoint)}} fullWidth>
                </TextField>
            </Grid>
           
            <Grid item xs = {12}><Typography>Add your Time Stops</Typography></Grid>
            {Events.map((Event , index) => {
                return(       
                <>
                    <Grid item xs = {3}>
                        <InputLabel id="demo-simple-select-label">Title</InputLabel>
                        <TextField  value = {Event['Title']} variant= {'outlined'}  onChange = {(event) => {handleEventChange(event.target.value , index , 'Title')}} fullWidth>
                        </TextField>
                    </Grid>
                    <Grid item xs = {3}>
                        <InputLabel id="demo-simple-select-label">Description</InputLabel>
                        <TextField multiline value = {Event.Description} variant= {'outlined'}  onChange = {(event) => {handleEventChange(event.target.value , index , 'Description')}} fullWidth>
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
        Events : state.settings.Events,
        Section : state.settings.Section,
        Type : state.settings.Type,
        Time : state.settings.Time,
        StartingPoint : state.settings.StartingPoint,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        ChangeTime: (newTime) => dispatch({type : 'ChangeTime' , newTime : newTime}),
        ChangeType: (newType) => dispatch({type : 'ChangeType' , newType : newType}),
        ChangeStartingPoint: (newStartingPoint) => dispatch({type : 'ChangeStartingPoint' , newStartingPoint : newStartingPoint}),
        ChangeEvents : (newEvents) => dispatch({type : 'ChangeEvents' , newEvents : newEvents}),    
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(GameRules)
