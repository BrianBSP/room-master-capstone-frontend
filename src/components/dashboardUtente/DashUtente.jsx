import { useEffect, useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hotelsAction, hotelSelezionatoAction } from "../../redux/actions/hotelsAction";

const DashUtente = () => {
  const autenticato = localStorage.getItem("accessToken");
  const utente = JSON.parse(localStorage.getItem("utente"));
  const ruolo = utente.ruoloUtente;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { hotels, loading, error, hotelSelezionato } = useSelector((state) => state.hotels);
  const [hotelSelStato, setHotelSelStato] = useState("");
  console.log(hotels);
  console.log(hotelSelezionato);

  useEffect(() => {
    dispatch(hotelsAction());
  }, [dispatch]);

  if (!autenticato) {
    navigate("/login");
  }

  useEffect(() => {
    if (hotelSelStato) {
      dispatch(hotelSelezionatoAction(hotelSelStato));
    }
  });

  if (ruolo === "ADMIN") {
    return (
      <Container className="dash-section">
        <div>
          <h2 className="bg-body-tertiary pb-3 rounded-3">Dashboard ADMIN</h2>
        </div>
        <Container>
          {loading ? (
            <p>Caricamento hotel...</p>
          ) : error ? (
            <p className="text-danger">Errore: {error}</p>
          ) : (
            <Form.Group>
              <Form.Label>Seleziona Hotel</Form.Label>
              <Form.Select value={hotelSelStato} onChange={(e) => setHotelSelStato(e.target.value)}>
                <option>- Seleziona l&rsquo;hotel -</option>
                {hotels.map((hotel) => (
                  <option key={hotel.id} value={hotel.id}>
                    {hotel.nome}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          )}
        </Container>
        <Container>
          <Link className="text-decoration-none" to="/gestione-utenti">
            <Card>
              <h4>Gestione Utenti</h4>
            </Card>
          </Link>
          <Link className="text-decoration-none" to="/gestione-preventivi">
            <Card>
              <h4>Gestione Preventivi</h4>
            </Card>
          </Link>
          <Link className="text-decoration-none" to="/gestione-prenotazioni">
            <Card>
              <h4>Gestione Prenotazioni</h4>
            </Card>
          </Link>
          <Link className="text-decoration-none" to="/gestione-camere">
            <Card>
              <h4>Gestione Camere</h4>
            </Card>
          </Link>
        </Container>
      </Container>
    );
  }
  return (
    <Container className="dash-section">
      <h2 className="bg-body-tertiary pb-3 rounded-3">La tua DASHBOARD</h2>

      <Container className="card-dash-section">
        <Link className="text-decoration-none" to="/preventivi">
          <Card className="p-3">
            <h5>I tuoi preventivi</h5>
          </Card>
        </Link>
        <Link className="text-decoration-none" to="/prenotazioni">
          <Card className="p-3">
            <h5>Le tue prenotazioni</h5>
          </Card>
        </Link>
        <Link className="text-decoration-none" to="/richiesta-preventivo">
          <Card className="p-3">
            <h5>Richiedi un preventivo</h5>
          </Card>
        </Link>
      </Container>
    </Container>
  );
};
export default DashUtente;
