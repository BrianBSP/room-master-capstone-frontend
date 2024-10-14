import { Card, Container } from "react-bootstrap";

const MyProfile = () => {
  const { utente } = localStorage.getItem("utente");

  if (!utente) {
    return (
      <Container className="myProfile-section">
        <div>
          <h2 className="bg-body-tertiary pb-3 rounded-3">PROFILO</h2>
        </div>
        <p className="text-center">Utente non trovato. Effettua il login per visualizzare il profilo.</p>
      </Container>
    );
  }
  return (
    <Container className="myProfile-section">
      <div>
        <h2 className="bg-body-tertiary pb-3 rounded-3">PROFILO</h2>
      </div>

      <div>
        <Card>
          <div className="row g-2">
            <div className="col-4">
              <img src={utente.avatar} alt="avatar utente" />
            </div>
            <div className="col-8">
              <p>
                Nome: {utente.nome} {utente.cognome}
                Email: {utente.email}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
};
export default MyProfile;
