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



  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((res) => {
        console.log("Richiesta inviata");
        console.log("Risposta API:", res.data);
      })
      .catch((err) => {
        console.log("Errore:", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crea un nuovo post</h2>

      <label>Author:</label>
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
      />

        <label>Author:</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
              />

              <br />

              <label>Author:</label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                    />

                    <br />

                    <label>Author:</label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                    />

                    <br />
                    <label>Author:</label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                    />

                    <br />
                    <label>Author:</label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                    />

                    <br />
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
