import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons';



function Login() {
  return (
    <div className="container p-5 bg-light rounded">
      <div className="row justify-content-center">
        <div className="col-12 py-3">
          <h1 className="welcome-text pb-3 px-5"><FontAwesomeIcon icon={faWallet} /> GastosApp</h1>
          <div>
            <form action="" className="d-flex flex-column" id="login">
              <label htmlFor="">Usuario</label>
              <input type="text" />
              <label htmlFor="">Contraseña</label>
              <input type="password" />
              <button type="submit">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
