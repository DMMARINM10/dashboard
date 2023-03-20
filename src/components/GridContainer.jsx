import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from './ImageCard';
import { dataHandling } from '../helpers/routes';

const GridContainer = ({ data, route }) => {
    const dataFinal = data?.data;
    return (
        <section
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '580px',
                overflow: 'hidden',
                // backgroundColor: 'green'
            }}
        >
            <div
                style={{
                    display: 'grid',
                    // padding: '5px',
                    width: '70%',
                    // border: '1px solid black',
                    gridTemplateColumns: 'repeat(4, 25%)',
                    gridTemplateRows: 'repeat(3, 160px)',
                }}
            >
                {dataFinal.map((element, index) => {
                    const props = dataHandling(route, data.users, element);
                    // console.log(props)
                    // eslint-disable-next-line react/prop-types
                    const user = props?.user;
                    // eslint-disable-next-line react/prop-types
                    const title = props?.title;
                    // eslint-disable-next-line react/prop-types
                    const url = props?.url;
                    // console.log(url)
                    return (
                        <div
                            key={index}
                            style={{
                                // backgroundColor: 'red',
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '5px 0',
                            }}
                        >
                            <ImageCard
                                title={user}
                                route={route}
                                subTitle={title}
                                url={url}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

GridContainer.propTypes = {
    data: PropTypes.object,
    route: PropTypes.string.isRequired,
};

export default GridContainer;
