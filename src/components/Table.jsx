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
import GridContainer from './GridContainer';

const multipleColumns = (route, props) => {
    if (route === 'users') {
        if (props) {
            const { user, userInfo } = props;
            return [
                <ImageCard key={`${route}-1`} title={user} route="users" />,
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
                <ImageCard key={`${route}-1`} title={user} route="todos" />,
                <TodoInfo key={`${route}-2`} check={false} prop={title} />,
                <TodoInfo key={`${route}-3`} check={true} prop={completed} />,
            ];
        } else {
            return [1, 1, 1];
        }
    }
};

const Table = ({ route }) => {
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
        const element = <div className="table_empty-element"></div>;
        if (!dataLoaded[page]) {
            func(perPage * (page - 1), perPage)
                .then((data) => {
                    const payload = {
                        page,
                        data,
                    };
                    if (users) {
                        getUsers(0, 10)
                            .then((users) => {
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
                            })
                            .catch((e) => console.log(e));
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
                })
                .catch((e) => console.log(e));
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
    const grid = route === 'albums' || route === 'photos';
    const tableStyle = multCol
        ? {
              boxShadow: '1px 1px 4px 1px gray',
              borderRadius: '20px',
          }
        : {};

    return (
        <>
            {data.loading ? (
                <Loader />
            ) : (
                <>
                    {grid ? (
                        <GridContainer data={data} route={route} />
                    ) : (
                        <table
                            width={
                                route === 'users'
                                    ? '80%'
                                    : route === 'todos'
                                    ? '50%'
                                    : '100%'
                            }
                        >
                            {route === 'todos' && (
                                <thead>
                                    <tr className="table_head">
                                        <th>User</th>
                                        <th>Title</th>
                                        <th>Done</th>
                                    </tr>
                                </thead>
                            )}
                            <tbody>
                                {data.data.map((element, index) => {
                                    const props = dataHandling(
                                        route,
                                        data.users,
                                        element
                                    );
                                    return (
                                        <tr style={tableStyle} key={index}>
                                            {multCol ? (
                                                multipleColumns(
                                                    route,
                                                    props
                                                ).map((element, index) => {
                                                    return (
                                                        <td
                                                            className="table_mult-td"
                                                            key={index}
                                                        >
                                                            {element}
                                                        </td>
                                                    );
                                                })
                                            ) : (
                                                <td className="table_one-td">
                                                    <Route
                                                        route={route}
                                                        {...props}
                                                    />
                                                </td>
                                            )}
                                        </tr>
                                    );
                                })}
                                {emptyRows.map((extra, index) => {
                                    return (
                                        <tr key={index}>
                                            {multCol ? (
                                                multipleColumns(route).map(
                                                    (_, index) => {
                                                        return (
                                                            <td
                                                                className="table_mult-td"
                                                                key={index}
                                                            >
                                                                {extra}
                                                            </td>
                                                        );
                                                    }
                                                )
                                            ) : (
                                                <td className="table_one-td">
                                                    {extra}
                                                </td>
                                            )}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
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
