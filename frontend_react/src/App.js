import React from 'react';
import { About, Header, Footer, Skills, Testimonial, Work} from './container'
import { Navbar } from './components';
import './App.scss'

const App = () => {
    return (
        <h1 className='app'>
            <Navbar/>
            <Header/>
            <About/>
            <Skills/>
            <Work/>
            <Testimonial/>
            <Footer/>
        </h1>
    );
}

export default App;
