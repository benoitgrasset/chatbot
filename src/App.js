import mindsayLogo from './assets/mindsay-logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home';
import Chatbox from './components/Chatbox';
import { Menu } from 'element-react';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={mindsayLogo} className="App-logo" alt="logo" />
            </header>
            <Router>
                <div>
                    <Menu defaultActive="1" mode="horizontal">
                        <Menu.Item index="1">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item index="1">
                            <Link to="/chat">Chat</Link>
                        </Menu.Item>
                    </Menu>

                    <Switch>
                        <Route path="/chat">
                            <Chatbox />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
