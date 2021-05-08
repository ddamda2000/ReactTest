import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './components/Main';
import Insert from './components/Insert';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className='black-nav'>
                    <Link to='/'>Main</Link>
                    <Link to='/add'>Add</Link>
                </div>

                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/add' component={Insert} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;