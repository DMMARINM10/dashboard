import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@mui/icons-material/Check';
import { capitalizedWord } from '../helpers/textUtils';

const TodoInfo = ({ prop, check }) => {
    return check ? (
        <div className="todo-info_check-container">
            <div
                style={{
                    backgroundColor: prop ? 'black' : 'white',
                }}
            >
                <CheckIcon sx={{ fontSize: '18px', color: 'white' }} />
            </div>
        </div>
    ) : (
        <div className="todo-info_text">
            <h4>{capitalizedWord(prop || '')}</h4>
        </div>
    );
};

TodoInfo.propTypes = {
    prop: PropTypes.any,
    check: PropTypes.bool,
};

export default TodoInfo;
