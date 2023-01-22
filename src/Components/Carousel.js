import Carousel from 'react-bootstrap/Carousel';
import '../Carousel.css';
function IndividualIntervalsExample() {
  return (
    <Carousel className="Carousel">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://durhammagazine.co.uk/wp-content/uploads/2016/04/airbnb-a8707ed9_original.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/10/Airbnb-review.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;