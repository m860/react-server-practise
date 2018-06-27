// import 'script!react-polyfill'
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {render} from 'react-dom';
import App from './components/App'
import routes from "./configuration/routes.config";

// window.addEventListener('error', (event) => {
//     event.preventDefault();
//     api.post('/clientlogs', {
//         message: event.error ? event.error.message : event.message,
//         stack: event.error ? event.error.stack : ''
//     });
//     store.dispatch(showToast({
//         type: 'error',
//         message: event.message
//     }));
//     return false;
// }, false);

render(
    <BrowserRouter>
        <App>
            <Switch>
                {routes.map((item, index) => {
                    return (
                        <Route {...item} key={index}></Route>
                    );
                })}
            </Switch>
        </App>
    </BrowserRouter>
    , document.getElementById('view')
);

