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
import ImageCard from './ImageCard';
import UserInfo from './UserInfo';
import TodoInfo from './TodoInfo';

const multipleColumns = (route, props) => {
    if (route === 'users') {
        if (props) {
            const { user, userInfo } = props;
            return [
                <ImageCard key={`${route}-1`} title={user} />,
                <UserInfo key={`${route}-2`} userInfo={userInfo} column={1} />,
                <UserInfo key={`${route}-3`} userInfo={userInfo} column={2} />,
            ];
        } else {
            return [1, 1, 1];
        }
    }
    if (route === 'todos') {
        if (props) {
            const { user, title, completed } = props;
            return [
                <ImageCard key={`${route}-1`} title={user} />,
                <TodoInfo key={`${route}-2`} check={false} prop={title} />,
                <TodoInfo key={`${route}-3`} check={true} prop={completed} />,
            ];
        } else {
            return [1, 1, 1];
        }
    }
};

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

    const multCol = route === 'users' || route === 'todos';
    const tableStyle = multCol
        ? {
              // border: '1px solid gray',
              // marginBottom: '8px',
              boxShadow: '1px 1px 4px 1px gray',
              // backgroundColor: 'yellow',
              // width: '70%',
              borderRadius: '20px',
              // display: 'flex',
              // height: '80px',
              // width: '80%'
          }
        : {};

    return (
        <>
            {data.loading ? (
                <Loader />
            ) : (
                <>
                    <table
                        // border={1}
                        width={
                            route === 'users'
                                ? '70%'
                                : route === 'todos'
                                ? '50%'
                                : '100%'
                        }
                        style={{
                            // backgroundColor: 'yellow',
                            height: '580px',
                            borderCollapse: 'separate',
                            borderSpacing: '0 8px',
                        }}
                    >
                        {route === 'todos' && (
                            <thead>
                                <tr>
                                    <th
                                        style={{
                                            width: '140px',
                                        }}
                                    >
                                        User
                                    </th>
                                    <th>Title</th>
                                    <th style={{
                                            width: '80px',
                                        }}>Done</th>
                                </tr>
                            </thead>
                        )}
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
                                        <tr style={tableStyle} key={index}>
                                            {multCol ? (
                                                multipleColumns(
                                                    route,
                                                    props
                                                ).map((element, index) => {
                                                    return (
                                                        <td
                                                            style={{
                                                                height: '85px',
                                                            }}
                                                            key={index}
                                                        >
                                                            {element}
                                                        </td>
                                                    );
                                                })
                                            ) : (
                                                <td
                                                    style={{
                                                        // backgroundColor: 'yellow',
                                                        display: 'flex',
                                                        justifyContent:
                                                            'center',
                                                        // height: 'px',
                                                    }}
                                                >
                                                    <Route
                                                        route={route}
                                                        {...props}
                                                    />
                                                </td>
                                            )}
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
                                            {multCol ? (
                                                multipleColumns(route).map(
                                                    (_, index) => {
                                                        return (
                                                            <td
                                                                style={{
                                                                    height: '85px'
                                                                    // backgroundColor: 'yellow'
                                                                }}
                                                                key={index}
                                                            >
                                                                {extra}
                                                            </td>
                                                        );
                                                    }
                                                )
                                            ) : (
                                                <td
                                                    style={{
                                                        // backgroundColor: 'yellow',
                                                        display: 'flex',
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                >
                                                    {extra}
                                                </td>
                                            )}
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
    column: PropTypes.number,
};

export default Table;
