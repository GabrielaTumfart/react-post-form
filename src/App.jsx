import { useState } from 'react'
import axios from "axios";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  return (
    <>
 
      <h1> Post Form</h1>
     
    </>
  )
}



/*ho fatto una chiamata post e mi ha ritornato questo {
    "title": "utilis sodalitas itaque",
    "author": "Derrick Considine",
    "body": "Civis villa acidus spectaculum autem dolorem vitae. Conspergo abscido conitor facilis thesis. Veniam demonstro terreo cubitum.",
    "public": false,
    "id": "118"
}}*/
