import './App.css';
import React, {component} from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Nav";
import Profile from "./components/Profiles/Profile";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
            <Footer />
        </div>
    )
}


export default App;
