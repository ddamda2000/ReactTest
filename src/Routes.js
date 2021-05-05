import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './components/Main';
import Insert from './components/Insert';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to='/'>Main</Link></li>
                    <li><Link to='/add'>Add</Link></li>
                </ul>

                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/add' component={Insert} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;