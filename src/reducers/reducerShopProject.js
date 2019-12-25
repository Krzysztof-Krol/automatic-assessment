import React from 'react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

export default function() {
    return [
        {
            id: 512,
            name: 'hasProject',
            title: 'Mam już projekt',
            price: 0,
            desc: "Jeżeli posiadasz już projekt graficzny do pocięcia i użycia w produkcji zlecenia",
            icon: <EmojiEmotionsIcon/>
        },
        {
            id: 743,
            name: 'simpleProject',
            title: 'Prosty',
            price: 2250,
            desc: '1 projekt str. głównej, 30h pracy grafika',
            icon: <ShoppingBasketIcon/>
        },
        {
            id: 432,
            name: 'standardProject',
            title: 'Rozszerzony',
            price: 3250,
            desc: '2 projekty str. głównej, 50h pracy grafika',
            icon: <LocalMallIcon />
        },
        {
            id: 543,
            name: 'PremiumProject',
            title: 'Premium',
            price: 4250,
            desc: '3 projekty str. głównej, 70h pracy grafika',
            icon: <LocalGroceryStoreIcon />
        }   
    ]
}