import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { capitalizedWord } from '../helpers/textUtils';

const ImageCard = ({ title, route, subTitle, url }) => {
    const card = route === 'albums' || route === 'photos';
    console.log(title);
    const borderRadius = card ? '20px' : '20px 0 0 20px';
    return (
        <Card
            sx={{
                width: card ? 180 : 140,
                // height: '85px',
                borderRadius,
                // borderRight: '1px solid gray',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: 'lightgray',
                // height: '120px' //'100%',
                height: '100%',
                backgroundImage: url ? `url('${url}')` : '',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // paddingBottom: '10px'
            }}
        >
            {/* <CardMedia
        component="img"
        alt={title}
        height="50"
        image={url}
      /> */}
            <div
                style={{
                    // backgroundColor: 'blue',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '5px',
                    // justifyContent: 'flex-start',
                    // alignItems: 'center',
                    // textAlign: 'center'
                }}
            >
                {!url && (
                    <div
                        style={{
                            // backgroundColor: 'yellow',
                            marginBottom: '-5px',
                        }}
                    >
                        <AccountCircleIcon sx={{ fontSize: '42px' }} />
                    </div>
                )}
                <span
                    style={{
                        // backgroundColor: 'blue',
                        height: '100%',
                        // width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: url ? 'flex-end' : 'center',
                        gap: '10px', //optional
                        // justifyContent: 'center',
                        alignItems: 'center',
                        // overflow: 'hidden'
                        // padding: '0px 25px'
                    }}
                >
                    <h5
                        style={{
                            margin: '0',
                            // textAlign: 'center'
                        }}
                    >
                        {title}
                    </h5>
                    {card && (
                        <p
                            style={{
                                fontSize: '12px',
                            }}
                        >
                            {capitalizedWord(subTitle || '')}
                        </p>
                    )}
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
