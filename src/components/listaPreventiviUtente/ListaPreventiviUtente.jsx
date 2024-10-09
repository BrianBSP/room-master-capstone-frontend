import { useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { preventiviAction } from "../../redux/actions/preventiviAction";

const ListaPreventiviUtente = () => {
  const dispatch = useDispatch();

  const { preventivi, loading, error } = useSelector((state) => state.preventivi);

  useEffect(() => {
    dispatch(preventiviAction());
  }, [dispatch]);

  console.log(preventivi);

  return (
    <Container className="lista-preventivi-section">
      <h2 className="bg-body-tertiary pb-3 rounded-3">I tuoi preventivi: </h2>
      <div className="list-section">
        {loading && <p>Caricamento in corso...</p>}
        {error && <p>{error}</p>}
        {preventivi.length === 0 && !loading && <p>Nessun preventivo trovato.</p>}

        <ListGroup>
          {preventivi.map((preventivo) => (
            <ListGroup.Item action variant="light" key={preventivo}>
              Data {preventivo.data} - € {preventivo.totalePrezzoPreventivo}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};
export default ListaPreventiviUtente;
