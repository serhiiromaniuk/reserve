import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage } from './Pages'

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {
                        // Main Pages 
                    }
                    <Route exact path='/'>
                        <MainPage/>
                    </Route>

                    {
                        // Auth Pages 
                    }

                    {
                        // Middlware Pages 
                    }
                </Switch>
            </BrowserRouter>
        </div>
    )
}
