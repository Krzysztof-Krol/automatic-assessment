import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';

export default function() {
    return [
        {
            id: 679,
            checked: false,
            name: 'additionalLanguages',
            title: 'Dodatkowe języki - Tak',
            price: 0,
            multiple: 0.2,
            multipleTitle: '+20% wyceny / język',
            desc: "Czy życzysz sobie więcej języków, niż jeden?",
            icon: <LanguageIcon />
        }
    ]
}