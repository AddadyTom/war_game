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

const Resources = (props) => {

    const [Resources , setResources] = React.useState(props.Resources ? props.Resources : [])

    const handleChange = (value , setFunc) => {
        setFunc(value)
    }

    const handleEventChange = (value , index , valueName) => {
        let UpdatedResources = [...Resources]
        UpdatedResources[index][valueName] = value
        setResources(UpdatedResources)
        props.ChangeResources(UpdatedResources)
        console.log(props.Resources)
    }

    const handleAddEvent = () => {
        let UpdatedResources = [...Resources , {Resource : '' , Description : ''}]
        setResources(UpdatedResources)
    }

    const handleDeleteEvent = (index) => {
        let UpdatedResources = [...Resources]
        UpdatedResources.splice(index,1)
        setResources(UpdatedResources)
        props.ChangeResources(UpdatedResources)
    }
    

    return(
        <Grid container spacing = {5} style ={{marginLeft : '30px'}}>
            <Grid item xs = {12}>
                <Typography style = {{fontSize : '32px'}}>Players And Resources</Typography>
                <Divider style = {{width: '20%'}}/>
            </Grid>
            <Grid item xs = {12}><Typography>Add your Resources</Typography></Grid>
            {Resources.map((Resource , index) => {
                return(       
                <>
                    <Grid item xs = {3}>
                        <InputLabel id="demo-simple-select-label">Resource</InputLabel>
                        <TextField  value = {Resource['Resource']} variant= {'outlined'}  onChange = {(event) => {handleEventChange(event.target.value , index , 'Resource')}} fullWidth>
                        </TextField>
                    </Grid>
                    <Grid item xs = {3}>
                        <InputLabel id="demo-simple-select-label">Description</InputLabel>
                        <TextField multiline value = {Resource.Description} variant= {'outlined'}  onChange = {(event) => {handleEventChange(event.target.value , index , 'Description')}} fullWidth>
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
        Resources : state.settings.Resources,
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
        ChangeResources : (newResources) => dispatch({type : 'ChangeResources' , newResources : newResources}),    
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Resources)
