import React from 'react';

const Footer = () => {
  return (
    <footer className=" table-responsive text-center footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          Desenvolvido por{' '}
          <a
            href="https://github.com/vyctorcampos"
            target="_blank"
            rel="noreferrer"
          >
            João Vyctor
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Desafio técnico</strong>
            <br />
            Contato:
            <a
              href="https://www.linkedin.com/in/vyctorcampos/"
              target="_blank"
              rel="noreferrer"
            >
              /vyctorcampos
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
