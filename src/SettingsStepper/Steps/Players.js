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

const Players = (props) => {

    const [Roles , setRoles] = React.useState(props.Roles ? props.Roles : [])

    const handleChange = (value , setFunc) => {
        setFunc(value)
    }

    const handleEventChange = (value , index , valueName) => {
        let UpdatedRoles = [...Roles]
        UpdatedRoles[index][valueName] = value
        setRoles(UpdatedRoles)
        props.ChangeRoles(UpdatedRoles)
        console.log(props.Roles)
    }

    const handleAddEvent = () => {
        let UpdatedRoles = [...Roles , {Role : '' , Description : ''}]
        setRoles(UpdatedRoles)
    }

    const handleDeleteEvent = (index) => {
        let UpdatedRoles = [...Roles]
        UpdatedRoles.splice(index,1)
        setRoles(UpdatedRoles)
        props.ChangeRoles(UpdatedRoles)
    }
    

    return(
        <Grid container spacing = {5} style ={{marginLeft : '30px'}}>
            <Grid item xs = {12}>
                <Typography style = {{fontSize : '32px'}}>Players And Roles</Typography>
                <Divider style = {{width: '20%'}}/>
            </Grid>
           
            
            <Grid item xs = {12}><Typography>Add your Roles</Typography></Grid>
            {Roles.map((Role , index) => {
                return(       
                <>
                    <Grid item xs = {3}>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <TextField  value = {Role['Role']} variant= {'outlined'}  onChange = {(event) => {handleEventChange(event.target.value , index , 'Role')}} fullWidth>
                        </TextField>
                    </Grid>
                    <Grid item xs = {3}>
                        <InputLabel id="demo-simple-select-label">Description</InputLabel>
                        <TextField multiline value = {Role.Description} variant= {'outlined'}  onChange = {(event) => {handleEventChange(event.target.value , index , 'Description')}} fullWidth>
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
        Roles : state.settings.Roles,
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
        ChangeRoles : (newRoles) => dispatch({type : 'ChangeRoles' , newRoles : newRoles}),    
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Players)
