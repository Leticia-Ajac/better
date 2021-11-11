import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Home from '../pages/home'

import admissão from '../pages/admissão/index.jsx'

import Qulture from '../pages/qulture';

import Footer from '../pages/Footer/index.jsx';
import Header from '../pages/header/header.jsx';

import Header from '../pages/header/header.jsx';



const Routes = () => {

    return (

        <BrowserRouter>

            <Header/>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/qulture' component={Qulture} />
                    <Route path='/admissão' component={admissão}/>
                </Switch>
=======

            <Header/>

                <Switch>

                    <Route path='/' component={Home} exact/>

                    <Route path='/qulture' component={Qulture} />

                    <Route path='/admissão' component={admissão}/>

                </Switch>


            <Footer/>

        </BrowserRouter>

    );

};



export default Routes;