import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Item from './common/Item';
import { connect } from 'react-redux';
// import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const projects = [
    // {
    //     id: 512,
    //     checked: false,
    //     name: 'hasProject',
    //     title: 'Mam już projekt',
    //     price: 0,
    //     desc: "Jeżeli posiadasz już projekt graficzny do pocięcia i użycia w produkcji zlecenia",
    //     icon: <EmojiEmotionsIcon/>
    // },
    {
        id: 743,
        checked: false,
        name: 'simpleProject',
        title: 'Prosty',
        price: 2250,
        desc: '1 projekt str. głównej, 30h pracy grafika',
        icon: <ShoppingBasketIcon />
    },
    {
        id: 432,
        checked: false,
        name: 'standardProject',
        title: 'Rozszerzony',
        price: 3250,
        desc: '2 projekty str. głównej, 50h pracy grafika',
        icon: <LocalMallIcon />
    },
    {
        id: 543,
        checked: false,
        name: 'PremiumProject',
        title: 'Premium',
        price: 4250,
        desc: '3 projekty str. głównej, 70h pracy grafika',
        icon: <LocalGroceryStoreIcon />
    }   
]

class FormShopProject extends Component {
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
                            >
                                <div>{item.icon}</div>
                                <p className="mb-2">{item.title}</p>
                                <p className="my-1 price">{item.price > 0 ? item.price + " zł" : ""}</p>
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
    project: state.shopProject,
  }
}

export default connect(mapStateToProps)(FormShopProject);
