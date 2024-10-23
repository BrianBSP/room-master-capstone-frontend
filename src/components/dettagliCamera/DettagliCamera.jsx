import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cameraByIdAction, eliminaCameraAction } from "../../redux/actions/camereAction";
import { ArrowLeft } from "react-bootstrap-icons";

const DettagliCamera = () => {
  const { cameraId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cameraByIdAction(cameraId));
  }, [dispatch, cameraId]);

  const { camera, loading, error } = useSelector((state) => state.cameraDettaglio);

  console.log(camera);

  const handleIndietro = () => {
    navigate("/gestione-camere");
  };

  const handleModifica = () => {
    dispatch();
  };

  const handleEliminaCamera = () => {
    dispatch(eliminaCameraAction(camera.id));
    navigate("/gestione-camere");
  };

  return (
    <Container className="dettaglio-preventivo-section">
      <div>
        {loading ? (
          <p>Caricamento...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="prev-card-section">
            <div className="indietro-button">
              <Button variant="secondary" onClick={handleIndietro}>
                <ArrowLeft /> Torna Indietro
              </Button>
            </div>
            <Card>
              <Card.Body>
                <Card.Title>Camera numero {camera.numeroCamera}</Card.Title>
                <Card.Text className="mt-4">
                  <p>Capienza: {camera.capienzaCamera}</p>
                  <p>Tipo di Camera: {camera.tipoCamera}</p>
                  <p>Stato della Camera: {camera.statoCamera}</p>
                  {/* <p>Hotel: {camera.hotel.nome}</p> */}
                </Card.Text>
                <Button className="ms-3" variant="primary" onClick={handleModifica}>
                  Modifica
                </Button>
                <Button className="ms-3" variant="danger" onClick={handleEliminaCamera}>
                  Cancella Camera
                </Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </Container>
  );
};
export default DettagliCamera;
