import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SaoPaulo from '../pages/SaoPaulo';
import { LocationContext } from '../contexts/LocationContext';
import { useState } from 'react';
import Header from '../components/Header';


const Routes = () => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    return(
        <LocationContext.Provider value={{city, setCity, state, setState}}>
            <Header/>
            <Switch>
                <Route path="/:state/:city" element={<Home/>}/>
            </Switch>
        </LocationContext.Provider>
    );
}

export default Routes;