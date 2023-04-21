import React from 'react';
import { useParams } from 'react-router-dom';

const Categorie = () => {
    const {idName} = useParams()
    return (
        <div>
            <h1>Categorie page {idName}</h1>
        </div>
    );
};

export default Categorie;