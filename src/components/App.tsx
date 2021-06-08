import React from 'react';
import GistContext  from '../contexts/GistContext';
import GistList from './GistList';
import Navbar from './Navbar';

const App = () => {
    return (
        <GistContext>
            <div className="uk-container">
                <Navbar></Navbar>
                    <h1>Largão Gist</h1>
                    <p>Bem-vindo ao seu espaço de compatilhamento de código, notas</p>
                <GistList></GistList>
            </div>
        </GistContext>

    )
}

export default App;