import { useEffect } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { accettaPreventivoAction, preventiviAction } from "../../redux/actions/preventiviAction";

import { useNavigate } from "react-router-dom";

const ListaPreventiviUtente = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { preventivi, loading, error } = useSelector((state) => state.preventivi);

  useEffect(() => {
    dispatch(preventiviAction());
  }, [dispatch]);

  console.log(preventivi);

  const handleAccettaPreventivo = (preventivoId) => {
    dispatch(accettaPreventivoAction(preventivoId));
  };

  const handleClickPreventivo = (preventivoId) => {
    navigate(`/preventivi/${preventivoId}`);
  };

  return (
    <Container className="lista-preventivi-section">
      <h2 className="bg-body-tertiary pb-3 rounded-3">I tuoi preventivi: </h2>
      <div className="list-section">
        {loading && <p>Caricamento in corso...</p>}
        {error && <p>{error}</p>}
        {preventivi.length === 0 && !loading && <p>Nessun preventivo trovato.</p>}

        <ListGroup>
          {preventivi.map((preventivo) => (
            <ListGroup.Item
              action
              variant="light"
              key={preventivo.id}
              onClick={() => handleClickPreventivo(preventivo.id)}
            >
              Data richiesta: {preventivo.data} - € {preventivo.totalePrezzoPreventivo}
              {!preventivo.accettato && (
                <Button
                  className="ms-3"
                  variant="success"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAccettaPreventivo(preventivo.id);
                  }}
                >
                  Accetta
                </Button>
              )}
              {preventivo.accetta && <span className="ms-3">Accettato</span>}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};
export default ListaPreventiviUtente;
