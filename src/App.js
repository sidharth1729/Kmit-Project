import React from 'react'
import Signin from './components/Signin/Signin';
import {BrowserRouter  , Route, Switch} from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Registration from './components/Registration/Registration'
import Jobs from './components/Jobs/Job'
import Details from './components/Details/Details';

const App = () => {
    return (
        
            <BrowserRouter >
                <Switch>
                    <Route exact path="/login" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>  
                    <Route exact path ="/registration" component={Registration}/>  
                    <Route exact path = "/jobs" component = {Jobs}/>
                    <Route exact path="/details" component={Details}/>
                </Switch>
            </BrowserRouter >
    )
}

export default App
