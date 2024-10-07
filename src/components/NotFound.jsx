import { Card, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

const NotFound = () => {
  const autenticato = localStorage.getItem("accessToken");
  if (!autenticato) {
    return <Navigate to="/" />;
  }
  return (
    <Container className="notFound-section">
      <h2 className="bg-body-tertiary pb-3 rounded-3">NOT FOUND - 404</h2>
      <div className="d-flex justify-content-center">
        <p className="fs-1">🚫</p>
        <p className="ms-4">Indirizzo NON trovato!</p>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Link to="/dashboard" className="text-decoration-none">
          <Card className="p-3">Torna alla HOME</Card>
        </Link>
      </div>
    </Container>
  );
};
export default NotFound;
