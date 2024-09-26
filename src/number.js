
import {connect , dispatch} from 'react-redux'
import {useEffect} from 'react'
import React from 'react'

const Number = (props) => {
    console.log(props.number)
  return (
    <div>
      {props.number}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    number : state.settings.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeNumber: (newNumber) => dispatch({type : 'ChangeNumber' , newNumber : newNumber}),   
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Number)
