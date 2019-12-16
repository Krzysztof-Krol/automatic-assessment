import { Container, Row, Col } from 'reactstrap'; 
import logo from './royalcode-logo.svg';
import WebIcon from '@material-ui/icons/Web';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SpeedIcon from '@material-ui/icons/Speed';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BuildIcon from '@material-ui/icons/Build';
import AppsIcon from '@material-ui/icons/Apps';
import CodeIcon from '@material-ui/icons/Code';


const Services = () => {
    return (
      <Container className="has-icons mb-5">
        <Row className="d-flex flex-row justify-content-center">
            
        </Row>
      </Container>
    );
  }
  
  const Service = (props) => {
    return (
      <Col sm="12" md="6" xl="3">
        <StorefrontIcon />
        <p>Sklep internetowy</p>
      </Col>
    );
  }
  