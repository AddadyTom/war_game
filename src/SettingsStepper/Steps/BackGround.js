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

const BackGround = (props) => {

    const [Section, setSection] = React.useState('');
    const [Characters , setCharacters] = React.useState([])

    const handleChange = (value , setFunc) => {
        setFunc(value)
    }

    const handleCharChange = (value , index , valueName) => {
        let UpdatedCharacters = [...Characters]
        UpdatedCharacters[index][valueName] = value
        setCharacters(UpdatedCharacters)
        props.ChangeCharacters(UpdatedCharacters)
    }

    const handleAddChar = () => {
        let UpdatedCharacters = [...Characters , {Name : '' , Description : ''}]
        setCharacters(UpdatedCharacters)
        console.log(Characters)
    }

    const handleDeleteChar = (index) => {
        let UpdatedCharacters = [...Characters]
        UpdatedCharacters.splice(index,1)
        console.log(UpdatedCharacters,index)
        setCharacters(UpdatedCharacters)
        props.ChangeCharacters(UpdatedCharacters)
    }
    

    return(
        <Grid container spacing = {5} style ={{marginLeft : '30px'}}>
            <Grid item xs = {12}>
                <Typography>BackGround</Typography>
                <Divider style = {{width: '20%'}}/>
            </Grid>
            <Grid item xs = {3}>
                <InputLabel id="demo-simple-select-label">Section</InputLabel>
                <Select value = {props.Section} variant= {'outlined'}  onChange = {(value) => {handleChange(value , props.ChangeSection)}} fullWidth>
                    <MenuItem value={190}>190</MenuItem>
                    <MenuItem value={130}>130</MenuItem>
                    <MenuItem value={150}>150</MenuItem>
                    <MenuItem value={110}>110</MenuItem>
                    <MenuItem value={'Russia'}>Russia</MenuItem>
                    <MenuItem value={'United States'}>United States</MenuItem>
                </Select>
            </Grid>
            <Grid item xs = {9}></Grid>
            <Grid item xs = {12}><Typography>Add your Characters</Typography></Grid>
            {Characters.map((Char , index) => {
                return(       
                 <>
                    <Grid item xs = {3}>
                        <InputLabel id="demo-simple-select-label">Name</InputLabel>
                        <TextField  value = {Char['Name']} variant= {'outlined'}  onChange = {(event) => {handleCharChange(event.target.value , index , 'Name')}} fullWidth>
                        </TextField>
                    </Grid>
                    <Grid item xs = {3}>
                        <InputLabel id="demo-simple-select-label">Description</InputLabel>
                        <TextField multiline value = {Char.Description} variant= {'outlined'}  onChange = {(event) => {handleCharChange(event.target.value , index , 'Description')}} fullWidth>
                        </TextField>
                    </Grid> 
                    <Grid item xs = {5} style ={{display : 'flex' , alignItems : 'center'}}>
                        <Button onClick = {() => {handleDeleteChar(index)}}>
                            <DeleteIcon>
                            </DeleteIcon>
                        </Button>  
                    </Grid>
                </>)
            })}
           
            <Grid item xs = {6}>
            </Grid>
            <Grid item xs = {2}>
                <Button style = {{backgroundColor : '#06DB69' , color : 'white'}} onClick = {() => {handleAddChar()}}>
                    <Typography style = {{textTransform : 'none'}}>Add</Typography>
                </Button>
            </Grid>
        </Grid>
    )
}


const mapStateToProps = (state) => {
    return {
        Characters : state.settings.Characters,
        Section : state.settings.Section
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        ChangeSection: (newSection) => dispatch({type : 'ChangeSection' , newSection : newSection}),
        ChangeCharacters: (newCharacters) => dispatch({type : 'ChangeCharacters' , newCharacters : newCharacters}),    
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(BackGround)
