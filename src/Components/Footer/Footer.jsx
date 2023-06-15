import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Bustamante Matias. Todos los derechos reservados.</p>
        <p>Dirección de la empresa, Cordoba, Argentina</p>
        <p>Teléfono: +54 11 3574432907</p>
        <p>Email: matias.dev7@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
