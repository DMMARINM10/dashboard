import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userInfo, column }) => {
    const userKeys = Object.keys(userInfo);
    const { address, company } = userInfo;
    const name = company?.name;
    const street = address?.street;
    const suite = address?.suite;
    const city = address?.city;
    const totalAddress = `${street}, ${suite}, ${city}`;
    const companyName = name;
    const newInfo = {
        ...userInfo,
        address: totalAddress,
        company: companyName,
    };
    return (
        <div className="user-info_container">
            <ul>
                {userKeys.map((key, index) => {
                    const exp =
                        column === 1 ? index > column + 1 : index < column + 1;
                    if (exp) return;
                    const value = newInfo[key];
                    return (
                        <li key={key}>
                            <span>{key}:</span> {value}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

UserInfo.propTypes = {
    userInfo: PropTypes.object.isRequired,
    column: PropTypes.number.isRequired,
};

export default UserInfo;
