import React from 'react';
import PropTypes from 'prop-types';
import { capitalizedWord } from '../helpers/textUtils';

const TextCard = ({ title, body, footer }) => {
    return (
        <div className="text-card_container">
            <h3>{capitalizedWord(title || '')}</h3>
            <span>{capitalizedWord(body || '')}</span>
            <footer>{footer}</footer>
        </div>
    );
};

TextCard.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
};

export default TextCard;
