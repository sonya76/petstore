import axios from "axios";
import { useState } from "react";

export default function ContactForm() {
   const [nom, setNom] = useState();
   const [mail, setMail] = useState();
   const [message, setMessage] = useState();
   const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const contacts = { nom, mail, message };
    // console.log(contacts);

    axios
      .post("http://localhost:4000/contacts", contacts)
      .then((reponse) => {
        console.log(reponse);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  
    };

    if (submitted) {
      return (
        <>
          <p> Merci de votre message.</p>
        </>
      );
    }

  
  return (
   <>
      <div class="hearder">
        <h2>Contacter Nous</h2>
      </div>

      <div class="box">
        <div class="left">
          <div class="box-left">
            <form onSubmit={handleSubmit} method="post">
              <div class="form-group">
                <label for="nom"> Nom :</label>
                <input
                  type="text"
                  name="nom"
                  required
                  onChange={(event) => setNom(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="mail ">Email:</label>
                <input
                  type="mail"
                  name="mail"
                  required
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="telephone">Numéro de téléphone: </label>
                <input type="text" name="telephone" required />
              </div>
              <div class="form-group">
                <label for="message">Comment pouvons-nous vous aider ?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div
                class="boutonMsg"
                style="display: flex; justify-content: center"
              >
                <input type="submit" value="Envoyer" id="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
  );

}