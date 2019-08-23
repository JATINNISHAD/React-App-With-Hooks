import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Series from '../../containers/series/indexx';
import SingleSeries from '../../components/SingleSeries/SingleSeriess';
import Intro from '../Intro/IntroComponent';
import NotFound from '../NotFound/NotFound';

const Main =()=>{
    return(
        <div>
                <header className="App-header">
                  <Intro message="Series Hub"/>
                </header>
                <Switch>
                    <Route exact path="/" component={Series}/>
                    <Route path="/series/:id" component={SingleSeries}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
    )
}

export default Main;