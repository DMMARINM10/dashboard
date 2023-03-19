import React from 'react';
import PropTypes from 'prop-types';
import { capitalizedWord } from '../helpers/textUtils';

const TextCard = ({ title, body, footer }) => {
    return (
        <div
            style={{
                // backgroundColor: 'blue',
                width: '100%',
                // width: '850px',
                // width: '70%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                padding: '0px 8px',
                // borderRadius: '0 20px 20px 0'
            }}
        >
            <h3
                style={{
                    margin: '0',
                    marginLeft: '10px',
                }}
            >
                {capitalizedWord(title || '')}
            </h3>
            <span
                style={{
                    fontSize: '14px',
                    textAlign: 'center',
                }}
            >
                {capitalizedWord(body || '')}
            </span>
            <footer
                style={{
                    fontSize: '13px',
                    paddingRight: '5px',
                    textAlign: 'end',
                }}
            >
                {footer}
            </footer>
        </div>
    );
};

TextCard.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
};

export default TextCard;
