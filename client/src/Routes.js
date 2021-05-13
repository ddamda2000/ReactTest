import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './components/Main';
import Insert from './components/Insert';
import Chart from './components/Chart';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className='black-nav'>
                    <Link to='/'>Main</Link>
                    <Link to='/add'>Add</Link>
                    <Link to='/chart'>Chart</Link>
                </div>

                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/add' component={Insert} />
                    <Route exact path='/chart' component={Chart} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;