import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/index.jsx'
import admissão from '../pages/admissão/index.jsx'
import Qulture from '../pages/qulture/index.jsx';
import Footer from '../pages/Footer/index.jsx';
import Header from '../pages/header/header.jsx';
import academias from '../pages/academias-page/academias-page.jsx';




const Routes = () => {

    return (

        <BrowserRouter>
            <Header/>

                <Switch>

                    <Route path='/' component={Home} exact/>

                    <Route path='/qulture' component={Qulture} />

                    <Route path='/admissão' component={admissão}/>

                    <Route path='/academias' component={academias}/>

                </Switch>


            <Footer/>

        </BrowserRouter>

    );

};



export default Routes;