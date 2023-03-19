import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination, Stack } from '@mui/material';
import { getUsers } from '../services/requests';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { pages } from '../data/pages';
import { dataHandling, extraValues, request } from '../helpers/routes';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addAllUsers } from '../store/slices/users';
import Route from './Route';

const Table = ({ route }) => {
    // recibe children y espacios vacios (rellenar) y encabezado TODO:
    const dispatch = useDispatch();
    const dataLoaded = useSelector((state) => state[route]);
    const { users: usersLoaded } = useSelector((state) => state.users);
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const { perPage, func, users, dispatchFunc } = request[route];
    const totalPages = Math.ceil(pages[route] / perPage);
    const navigate = useNavigate();
    const [data, setData] = useState({
        users: [],
        data: [],
        loading: true,
    });
    const [emptyRows, setEmptyRows] = useState([]);
    useEffect(() => {
        if (
            !page ||
            !Number(page) ||
            Number(page) > Number(totalPages) ||
            Number(page) < 0
        ) {
            navigate(`/${route}?page=1`);
        }
        const element = (
            <div
                style={{
                    height: '93px',
                }}
            ></div>
        );
        if (!dataLoaded[page]) {
            func(perPage * (page - 1), perPage).then((data) => {
                const payload = {
                    page,
                    data,
                };
                if (users) {
                    getUsers(0, 10).then((users) => {
                        dispatch(dispatchFunc(payload));
                        dispatch(addAllUsers(users));
                        setData({
                            users,
                            data,
                            loading: false,
                        });
                        extraValues(
                            data,
                            perPage,
                            setEmptyRows,
                            emptyRows,
                            element
                        );
                    });
                } else {
                    dispatch(dispatchFunc(payload));
                    setData({
                        users: [],
                        data,
                        loading: false,
                    });
                    extraValues(
                        data,
                        perPage,
                        setEmptyRows,
                        emptyRows,
                        element
                    );
                }
            });
        } else {
            if (users) {
                setData({
                    users: usersLoaded,
                    data: dataLoaded[page],
                    loading: false,
                });
                extraValues(
                    dataLoaded[page],
                    perPage,
                    setEmptyRows,
                    emptyRows,
                    element
                );
            } else {
                setData({
                    users: [],
                    data: dataLoaded[page],
                    loading: false,
                });
                extraValues(
                    dataLoaded[page],
                    perPage,
                    setEmptyRows,
                    emptyRows,
                    element
                );
            }
        }
    }, [page, route]);

    const handlePage = (_, page) => {
        navigate(`/${route}?page=${page}`);
    };

    return (
        <>
            {data.loading ? (
                <Loader />
            ) : (
                <>
                    <table
                        width={'100%'}
                        style={{
                            // backgroundColor: 'yellow',
                            height: '580px',
                        }}
                    >
                        <tbody>
                            {
                                // !data.loading &&
                                data.data.map((element, index) => {
                                    const props = dataHandling(
                                        route,
                                        data.users,
                                        element
                                    );
                                    // console.log(props)
                                    return (
                                        <tr key={index}>
                                            <td
                                                style={{
                                                    // backgroundColor: 'yellow',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Route
                                                    route={route}
                                                    {...props}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                            {
                                // !data.loading &&
                                emptyRows.map((extra, index) => {
                                    // console.log(props)
                                    return (
                                        <tr key={index}>
                                            <td
                                                style={{
                                                    // backgroundColor: 'yellow',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {extra}
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                    <Stack spacing={2}>
                        <Pagination
                            count={totalPages}
                            page={Number(page)}
                            shape="rounded"
                            onChange={handlePage}
                        />
                    </Stack>
                </>
            )}
        </>
    );
};

Table.propTypes = {
    route: PropTypes.string.isRequired,
};

export default Table;
