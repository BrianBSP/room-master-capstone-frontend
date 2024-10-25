import { Container } from "react-bootstrap";

const Contatti = () => {
  return (
    <Container className="contatti-section">
      <div>
        <h1 className="bg-titoli pb-3 rounded-3">Contatti</h1>

        <div className="contatti-azienda">
          <h2>Contatti dell&rsquo;Azienda</h2>
          <p>
            <strong>Indirizzo:</strong> Via Del Mare 123, Cattolica, Italia
          </p>
          <p>
            <strong>Email:</strong> info@room.master.com
          </p>
          <p>
            <strong>Telefono:</strong> +39 320 955 1234
          </p>
        </div>

        <div className="contatti-direttore">
          <h2>Contatti del Direttore</h2>
          <p>
            <strong>Nome:</strong> Brian Pelinku
          </p>
          <p>
            <strong>Email:</strong> bryanpelinku@gmail.com
          </p>
          <p>
            <strong>Telefono:</strong> +39 320 954 5299
          </p>
        </div>

        <div>
          <h2>Come raggiungerci</h2>

          <iframe
            title="Mappa della sede"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.2197419895364!2d12.738727015622944!3d43.966507979111594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cbfd5c8a711e5%3A0x7a3be394cced38d9!2sCattolica%2C%20Provincia%20di%20Rimini%2C%20Italia!5e0!3m2!1sit!2sit!4v1696584307212!5m2!1sit!2sit"
            className="mappa-sede"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};
export default Contatti;
