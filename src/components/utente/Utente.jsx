import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { utenteByIdAction } from "../../redux/actions/cercaUtentiAction";

const Utente = (utenteId) => {
  const { utenteId } = useParams();
  const { utente, loading, error } = useSelector((state) => state.utenteSelezionato);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(utenteByIdAction(utenteId));
  }, [dispatch, utenteId]);

  return (
    <Container>
      <div>{}</div>
    </Container>
  );
};
export default Utente;
