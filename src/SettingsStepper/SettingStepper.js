import React from 'react'
import {connect, dispatch} from 'react-redux'
import Stepper from '@material-ui/core/Stepper'
import Box from '@material-ui/core/Box'
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useState from 'react'
import BackGround from './Steps/BackGround'
import Setting from './Steps/Setting'
import Players from './Steps/Players'
import Resources from './Steps/Resources'
import GameRules from './Steps/GameRules'

const steps = ['BackGround', 'Setting', 'Players And Roles', 'Resources' , 'Game Rules'];

const SettingStepper = (props) => {

    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
      setActiveStep(0);
    };
  

    return(
      <Box sx={{width : '100%'}}>
        <Stepper  activeStep={activeStep}>
            {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
                <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
            );
            })}
        </Stepper>
        {activeStep === steps.length ? (
            <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
            </Box>''
            </React.Fragment>
        ) : (
        <React.Fragment>
            {activeStep === 0 ?
            <BackGround></BackGround> : activeStep === 1? <Setting></Setting>: activeStep == 2 ? <Players></Players> : activeStep === 3 ? <Resources></Resources> : activeStep === 4 ? <GameRules></GameRules> : <></>}
          
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 ,justifyContent : 'center'}}>
                <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                style = {{}}
                >
                 <Typography style = {{textTransform : 'none'}}>Back</Typography>
                </Button>
                <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? <Typography style = {{textTransform : 'none'}}>Finish</Typography> : <Typography style = {{textTransform : 'none'}}>Next</Typography>}
                </Button>
            </Box>
        </React.Fragment>
      )}
      
      </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
   
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SettingStepper)
  