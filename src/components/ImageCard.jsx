import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ImageCard = ({ title }) => {
    return (
        <Card
            sx={{
                width: 140,
                // height: '85px',
                borderRadius: '20px 0 0 20px',
                // borderRight: '1px solid gray',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: 'lightgray',
                // height: '100%',
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
                <div
                    style={{
                        // backgroundColor: 'yellow'
                        marginBottom: '-5px',
                    }}
                >
                    <AccountCircleIcon sx={{ fontSize: '42px' }} />
                </div>
                <span
                    style={{
                        // backgroundColor: 'blue',
                        height: '100%',
                        // width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
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
                </span>
            </div>
        </Card>
    );
};

ImageCard.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ImageCard;
