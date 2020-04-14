import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Item from './common/Item';
import { connect } from 'react-redux';
// import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import DescriptionIcon from '@material-ui/icons/Description';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WebIcon from '@material-ui/icons/Web';

const projects = [
    // {
    //     id: 11,
    //     checked: false,
    //     name: 'hasProject',
    //     title: 'Mam już projekt',
    //     price: 0,
    //     desc: "Jeżeli posiadasz już projekt graficzny do pocięcia i użycia w produkcji zlecenia",
    //     icon: <EmojiEmotionsIcon />
    // },
    {
        id: 79,
        checked: false,
        name: 'businessCard',
        title: 'Wizytówka',
        price: 999,
        desc: "1 podstrona, do 10h pracy grafika",
        icon: <DescriptionIcon />
    },
    {
        id: 6,
        checked: false,
        name: 'simpleProject',
        title: 'Prosty',
        price: 1750,
        desc: 'Do 5 podstron, do 20h pracy grafika',
        icon: <VerticalSplitIcon />
    },
    {
        id: 10,
        checked: false,
        name: 'standardProject',
        title: 'Rozszerzony',
        price: 2250,
        desc: 'Do 10 podstron, do 30h pracy grafika',
        icon: <MenuBookIcon />
    },
    {
        id: 24,
        checked: false,
        name: 'PremiumProject',
        title: 'Premium',
        price: 3500,
        desc: 'Do 15 podstron, do 50h pracy grafika',
        icon: <WebIcon />
    }  
]

class FormWebsiteProject extends Component {
  render(){
    return (
        <Container className="has-icons mb-5">
            <Row>
                <Col xs="12" sm="12" md="12" lg={{offset: 1, size: 10}} className="mx-auto">
                    <h2 className="mb-3">Zaawansowanie witryny</h2>
                    <p className="description mb-3">Tworzę produkt dostosowany do Ciebie, Twojej firmy lub marki, który będzie prezentacją Twojej jakości. Dzięki temu taki projekt wymaga indywidualnego dopasowania części wizualnej. Wybierz z poniższych opcji tę, która najbardziej spełnia Twoje potrzeby i wyrazi Twój profesjonalizm.</p>
                </Col>
            </Row>
            <Row className="d-flex flex-row justify-content-center">
                {
                    projects.map((item) => {
                        return (
                            <Item
                                key={item.id}
                                xl="2"
                            >
                                <div>{item.icon}</div>
                                <p className="mb-2">{item.title}</p>
                                <p className="my-1 price">{item.price > 0 ? item.price + " zł" : null}</p>
                                <p className="item-desc">{item.desc}</p>
                                <strong className="small">{item.discount ? item.discountTitle : null}</strong>
                            </Item>
                        );
                    })
                }
            </Row>
        </Container>
    );
  }
}

function mapStateToProps(state){
  return{
    global: state.global,
    project: state.websiteProject,
  }
}

export default connect(mapStateToProps)(FormWebsiteProject);
