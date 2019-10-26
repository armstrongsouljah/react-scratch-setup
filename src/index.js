import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';
import "./styles/main.less";

const App = () => {
    return (
        <div className="header">
            <Welcome message="Welcome to scratch react"/>
        </div>
    );
};

const rootElem = document.querySelector("#app");
ReactDOM.render(<App/>, rootElem);
