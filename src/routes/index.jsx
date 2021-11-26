import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RioDeJaneiro from '../pages/RioDeJaneiro';
import SaoPaulo from '../pages/SaoPaulo';

const Routes = props => {
    return(
        <Router>
            <Switch>
                {/* <Route path="/:state/:city" element={<Home/>}/> */}
                <Route path="/sp/sao-paulo" element={<SaoPaulo city={props.city}/>}/>
                <Route path="/rj/rio-de-janeiro" element={<RioDeJaneiro city={props.city}/>}/>
            </Switch>
        </Router>
    );
}

export default Routes;