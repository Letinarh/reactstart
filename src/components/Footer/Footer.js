import React from "react";
import s from './Footer.module.css';

const Footer = () =>{
    return <footer className={s.footer}>
            <p>Prosto footer</p>
        <div className={s.fContent}>
        
            <img src="https://icon-library.com/images/waiting-icon-gif/waiting-icon-gif-29.jpg" width="70" height="70" alt=""/>
        </div>
        
    </footer>
}
export default Footer