import React from 'react';
import Main from '../templates/main';

export default props => 
    <Main icon="home" title="Início"
    subtitle="Projeto CRUD em React.">
        <div className='display-4'>Bem vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a construção 
            de um cadastro desenvolvido em
            <strong style={{color:"rgba(97, 184, 255, 0.959)"}}> React</strong>
    .</p>
    </Main>