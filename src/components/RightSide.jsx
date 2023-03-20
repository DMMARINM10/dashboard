import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import { capitalizedText } from '../helpers/textUtils';

const RightSide = ({ route }) => {
    return (
        <section className="rightside_container">
            <span>
                <h1>{capitalizedText(route)}</h1>
            </span>
            <Table route={route} />
        </section>
    );
};

RightSide.propTypes = {
    route: PropTypes.string.isRequired,
};

export default RightSide;
