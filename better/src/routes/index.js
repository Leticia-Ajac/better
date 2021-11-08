import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home'
import admissão from '../pages/admissão/index.jsx'
import Qulture from '../pages/qulture';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/qulture' component={Qulture} />
                <Route path='/admissão' component={admissão}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;