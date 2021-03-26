import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from '../components/home/home';
import UserCrud from '../components/user/userCrud';

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' /> {/* redireciona para Home caso a url digita não for nenhuma das duas acima   */}
    </Switch>

    