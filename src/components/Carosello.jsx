import Carousel from "react-bootstrap/Carousel";

const Carosello = () => {
  return (
    <Carousel className="myCarosello">
      <Carousel.Item interval={1000}>
        <div className="carosello-img-container">
          <img src="../public/foto2.jpeg" alt="tavolo apparecchiato1" width={500} className="carosello-img" />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="carosello-img-container">
          <img src="../public/foto3.jpeg" alt="camera matrimoniale" width={500} className="carosello-img" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carosello-img-container">
          <img src="../public/foto4.jpeg" alt="camera tripla" width={500} className="carosello-img" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carosello-img-container">
          <img src="../public/foto5.jpeg" alt="sala colazione" width={500} className="carosello-img" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
export default Carosello;
