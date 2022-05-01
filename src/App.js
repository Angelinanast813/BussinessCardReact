import React from 'react';
import logo from './logo.svg';
//import './App.css';
import {
  BrowserRouter as Router,
    Switch,
    Link,
    Route,
    Redirect
} from 'react-router-dom';
import Annotation from './components/Annotation'
import ToolBar from './components/ToolBar'
import PicBack from './components/PicBack'
import Description from './components/Description'
import 'bootstrap/dist/css/bootstrap.css'
import Bio from './components/Bio'
import Footer from './components/Footer'
import Test from './components/Test'
import Portfolio from './components/Portfolio'
import $ from 'jquery'
import CardDetail from "./components/CardDetail";
import CardsDetail from "./components/CardsDetail";



function App() {

  var arr = [
    {src: "video5.webm", title: "Shooting and editing", desc: "Сlip for Malkovich rent ", fulldesc: "The video was made specifically for advertising a dress rental service - Malkovich rent. My camera almost blew out at the sight of these impeccable dresses and looks by @malkovich_rent.\n" +
            "\n" +
            " Now I need a new prom, girlfriends weddings and a thousand photo shoots to rent these dresses! Makeup - @sokolova_makeup\n" +
            "Model - @anniutapetrovskis"},
    {src: "video2.webm", title: "Shooting and editing", desc: "Сlip for Malkovich rent", fulldesc: "You didn't think there was only one image on the set?\n" +
            "The sorceresses from Malkovich rent always work to their maximum potential, so today before you is the Queen of Romance and Tenderness 🦋\n" +
            "\n" +
            "Makeup - @sokolova_makeup\n" +
            "Model - @galaaagan"},
    {src: "video3.webm", title: "Shooting and editing", desc: "Сlip for Malkovich rent", fulldesc: ""},
    {src: "video4.webm", title: "Shooting and editing", desc: "Сlip for Malkovich rent", fulldesc: ""},
    {src: "video5.webm", title: "Shooting and editing", desc: "Сlip for Malkovich rent", fulldesc: ""}
  ];

  return (

      <Router>
    <div className="App ">
      <header className="App-header">
        <ToolBar />
        <Switch>
     /*     <Route exact path="/" component={Test} /> */

          <Route exact path="/" component={(props) => <Test {...props} cardarr={arr}/>} />
          <Route  path="/portfolio" component={(props) => <Portfolio {...props} cardarr={arr}/>} />
          <Route  path="/card/:index" component={ (props) => <CardsDetail {...props} cardarr={arr} />}/>
        </Switch>
        <Footer />
      </header>
    </div>
      </Router>
  );
}


export default App;

