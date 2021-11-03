import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home'
import Qulture from '../pages/qulture';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/qulture' component={Qulture} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;