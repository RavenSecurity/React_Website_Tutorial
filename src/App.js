import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DevicesIcon from '@material-ui/icons/Devices';
import BrushIcon from '@material-ui/icons/Brush';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#000",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles();
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Rayane Kaddoury is passionate about software !
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          With a background in art and a lifelong interest in tech, I'm training myself to become a programmer and UX/UI designer.I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. Being a diligent, hardworking and result oriented person, I always work towards achieving best outcomes on each project I lay my hands on.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>} title="Secure" btnTitle="Show me More"/>
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>} title="Performant" btnTitle="Show me More"/>
        </div>

        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<PeopleAltIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>} title="Scalable" btnTitle="Show me More" />
          <Grid icon={<DevicesIcon style={{fill: "#E69426", height:"125", width:"125"}}/>} title="Multi-Platform" btnTitle="Show me More" />
          <Grid icon={<BrushIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Creative" btnTitle="Show me More" />
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
