import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@mui/icons-material/Check';
import { capitalizedWord } from '../helpers/textUtils';

const TodoInfo = ({ prop, check }) => {
    return check ? (
        <div
            style={{
                // backgroundColor: 'blue',
                width: '80px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    backgroundColor: prop ? 'black' : 'white',
                    width: '25px',
                    height: '25px',
                    border: '1px solid black',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CheckIcon sx={{ fontSize: '18px', color: 'white' }} />
            </div>
        </div>
    ) : (
        <div
            style={{
                // backgroundColor: 'red',
                // width: '80%',
                textAlign: 'center',
                marginLeft: '1%',
                // height: '100%'
            }}
        >
            <h4>{capitalizedWord(prop || '')}</h4>
        </div>
    );
};

TodoInfo.propTypes = {
    prop: PropTypes.any,
    check: PropTypes.bool,
};

export default TodoInfo;
