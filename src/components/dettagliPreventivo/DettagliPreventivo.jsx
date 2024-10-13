import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DettagliPreventivo = () => {
  const { preventivoId } = useParams();
  const dispatch = useDispatch();

  /* const {preventivo, loading, error} = useSelector((state)=>) */
};

export default DettagliPreventivo;
