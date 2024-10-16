import { Button, Card, Container } from "react-bootstrap";
import { ArrowLeft, BoxArrowRight } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions/logoutAction";

const MyProfile = () => {
  const utente = JSON.parse(localStorage.getItem("utente"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIndietro = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };

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
      <div className="d-flex justify-content-between indietro-button">
        <Button variant="secondary" onClick={handleIndietro}>
          <ArrowLeft /> Torna Indietro
        </Button>
        <Button variant="secondary" onClick={handleLogout}>
          <BoxArrowRight /> LOGOUT
        </Button>
      </div>

      <div>
        <Card>
          <div className="row">
            <div className="col-4 img-contain-profilo">
              <img src={utente.avatar} alt="avatar utente" />
            </div>
            <div className="col-8 mt-5">
              <p>
                Nome: {utente.nome} {utente.cognome}
              </p>
              <p>Email: {utente.email}</p>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
};
export default MyProfile;
