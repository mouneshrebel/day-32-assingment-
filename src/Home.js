import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(){
    return(
        <>
      <Carousel>
      <Carousel.Item>
        <img
        style={{height:"600px"}}
          className="d-block w-100"
          src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/09/04/Pictures/_f3521da4-eea9-11ea-8be1-d29c971a2cec.png"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"600px"}}
          className="d-block w-100"
          src="https://images.herzindagi.info/image/2020/Sep/teachers-day-main.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"600px"}}
          className="d-block w-100 "
          src="https://futureofworking.com/wp-content/uploads/2020/04/teacher-appreciation-image-quote-1.png"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
        </>
    )
}



