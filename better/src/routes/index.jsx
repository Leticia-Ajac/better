import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
const Home = React.lazy(()=>import ('../pages/home/index.jsx'));
const admissão = React.lazy(()=>import ('../pages/admissão/index.jsx'));
const Qulture = React.lazy(()=>import ('../pages/qulture/index.jsx'));
const Footer = React.lazy(()=>import('../pages/Footer/index.jsx'));
const Header = React.lazy(()=>import('../pages/header/header.jsx'));
const academias = React.lazy(()=> import('../pages/academias-page/academias-page.jsx'));

const Routes = () => {

    return (

        <BrowserRouter>
            <Suspense fallback={<div></div>}>
            <Header/>

                <Switch>

                    <Route path='/' component={Home} exact/>

                    <Route path='/qulture' component={Qulture} />
                      
                      <Route path='/admissão' component={admissão}/>

                    <Route path='/academias' component={academias}/>

                </Switch>

            <Footer/>
            </Suspense>
        </BrowserRouter>

    );

};


export default Routes;