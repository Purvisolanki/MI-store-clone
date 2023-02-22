import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img from "../images/Capture.PNG";

function GridExample() {
  return (
    <div className='container'>
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card className="card">
          
            <Card.Body>
            <a href='https://www.mi.com/in/product/redmi-10a/'>
            <Card.Img  variant="top"  src={img } style={{width:"230px"}}/>
            
            </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row></div>
  );
}

export default GridExample;