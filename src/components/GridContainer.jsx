import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from './ImageCard';
import { dataHandling } from '../helpers/routes';

const GridContainer = ({ data, route }) => {
    const dataFinal = data?.data;
    return (
        <section className="grid-container_section">
            <div className="grid-container_grid">
                {dataFinal.map((element, index) => {
                    const props = dataHandling(route, data.users, element);
                    // eslint-disable-next-line react/prop-types
                    const user = props?.user;
                    // eslint-disable-next-line react/prop-types
                    const title = props?.title;
                    // eslint-disable-next-line react/prop-types
                    const url = props?.url;
                    return (
                        <div className="grid-container_cell" key={index}>
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
