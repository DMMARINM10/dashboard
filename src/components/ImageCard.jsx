import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { capitalizedWord } from '../helpers/textUtils';

const ImageCard = ({ title, route, subTitle, url }) => {
    const card = route === 'albums' || route === 'photos';
    const borderRadius = card ? '20px' : '20px 0 0 20px';
    return (
        <Card
            className="image-card_container"
            sx={{
                width: card ? 180 : 140,
                borderRadius,
                backgroundColor: 'lightgray',
                backgroundImage: url ? `url('${url}')` : '',
            }}
        >
            <div className="image-card_inner-container">
                {!url && (
                    <div>
                        <AccountCircleIcon sx={{ fontSize: '42px' }} />
                    </div>
                )}
                <span
                    style={{
                        justifyContent: url ? 'flex-end' : 'center',
                    }}
                >
                    <h5>{title}</h5>
                    {card && <p>{capitalizedWord(subTitle || '')}</p>}
                </span>
            </div>
        </Card>
    );
};

ImageCard.propTypes = {
    title: PropTypes.string,
    route: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    url: PropTypes.string,
};

export default ImageCard;
