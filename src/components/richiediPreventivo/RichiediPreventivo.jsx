import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { richiediPreventivoAction } from "../../redux/actions/preventiviAction";

const RichiediPreventivo = () => {
  const [arrivo, setArrivo] = useState("");
  const [partenza, setPartenza] = useState("");
  const [tipoCamera, setTipoCamera] = useState("");
  const [tipoServizio, setTipoServizio] = useState("");
  const [numeroAdulti, setNumeroAdulti] = useState("");
  const [numeroBambini, setNumeroBambini] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRichiediPreventivo = (e) => {
    e.preventDefault();
    const preventivo = { arrivo, partenza, tipoCamera, tipoServizio, numeroAdulti, numeroBambini };
    dispatch(richiediPreventivoAction(preventivo));
    navigate("/preventivi");
  };

  const handleIndietro = () => {
    navigate("/dashboard");
  };

  return (
    <Container className="richiesta-prev-section">
      <div>
        <h2 className="bg-body-tertiary pb-3 rounded-3">Richiesta Preventivo</h2>
      </div>
      <div className="indietro-button">
        <Button variant="secondary" onClick={handleIndietro}>
          <ArrowLeft /> Torna Indietro
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleRichiediPreventivo} className="form-section">
          <Form.Group className="mb-3" controlId="formArrivo">
            <Form.Label>Inserisci la Data di ARRIVO</Form.Label>
            <Form.Control
              type="date"
              placeholder="Inserisci qui la data di arrivo"
              value={arrivo}
              onChange={(e) => setArrivo(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPartenza">
            <Form.Label>Inserisci la Data di Partenza</Form.Label>
            <Form.Control
              type="date"
              placeholder="Inserisci qui la data di partenza"
              value={partenza}
              onChange={(e) => setPartenza(e.target.value)}
              min={arrivo}
            />
          </Form.Group>
          <p className="mt-4">Seleziona il Tipo di Camera</p>
          <Form.Select
            aria-label="Seleziona Tipo Camera"
            value={tipoCamera}
            onChange={(e) => setTipoCamera(e.target.value)}
          >
            <option>- Seleziona il tipo di camera -</option>
            <option value="FAMILY_ROOM">Family Room</option>
            <option value="STANDARD">Standard</option>
            <option value="SUITE">Suite</option>
          </Form.Select>
          <p className="mt-4">Seleziona il Tipo di Servizio</p>
          <Form.Select
            aria-label="Seleziona Tipo Servizio"
            value={tipoServizio}
            onChange={(e) => setTipoServizio(e.target.value)}
          >
            <option>- Seleziona il tipo di servizio -</option>
            <option value="ALL_INCLUSIVE">All Inclusive</option>
            <option value="PENSIONE_COMPLETA">Pensione Completa</option>
            <option value="MEZZA_PENSIONE">Mezza Pensione</option>
            <option value="BAD_BREAKFAST">Bad & Breakfast</option>
          </Form.Select>
          <p className="mt-4">Seleziona il Numero di Adulti</p>
          <Form.Select
            aria-label="Seleziona Numero Adulti"
            value={numeroAdulti}
            onChange={(e) => setNumeroAdulti(parseInt(e.target.value))}
          >
            <option>- Seleziona il numero di adulti -</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </Form.Select>
          <p className="mt-4">Seleziona il Numero di Adulti</p>
          <Form.Select
            aria-label="Seleziona Numero Bambini"
            value={numeroBambini}
            onChange={(e) => setNumeroBambini(parseInt(e.target.value))}
          >
            <option>- Seleziona il numero di bambini -</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </Form.Select>
          <Button type="submit" className="mt-5">
            Invia Richiesta
          </Button>
        </Form>
      </div>
    </Container>
  );
};
export default RichiediPreventivo;
