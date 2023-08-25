import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './Components/App';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 

<BrowserRouter>
<App/>
</BrowserRouter>
);


