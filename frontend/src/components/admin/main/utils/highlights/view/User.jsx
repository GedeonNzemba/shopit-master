import React, { useEffect } from 'react'

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Link } from 'react-router-dom'

import Loader from '../../../../../layout/Loader'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, deleteUser, clearErrors } from '../../../../../../actions/userActions'
import { DELETE_USER_RESET } from '../../../../../../constants/userConstants'



export const User = () => {

    useEffect(() => {
        const upProfil = document.getElementById('UpdateProfile');
        upProfil.style.display = 'none';


        const app = document.getElementsByClassName('App')[0];
        app.classList.add('dashboard_main');

        const newPass = document.getElementById('NewPassword');
        newPass.style.display = 'none';


        return () => {
            app.classList.remove('dashboard_main');
            upProfil.style.display = 'block';
            newPass.style.display = 'block';
        }
    }, [])

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, users } = useSelector(state => state.allUsers);
    const { isDeleted } = useSelector(state => state.user)

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
    }

    return (
        <MDBTable bordered className='mdb__table-container'>
        {loading ? <Loader /> 
        : 
        (
            <>
                <MDBTableHead className='mdb__table-head'>
                <tr className='mdb__table-row'>
                    <th className="all_users__table-head">#</th>
                    <th className="all_users__table-head">User ID</th>
                    <th className="all_users__table-head">Name</th>
                    <th className="all_users__table-head">Email</th>
                    <th className="all_users__table-head">Role</th>
                    <th className="all_users__table-head">Actions</th>
                </tr>
            </MDBTableHead>

            <MDBTableBody className='mdb__table-body'>
                {users && users.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Link to={`/admin/user/${user._id}`} className="btn btn-primary py-1 px-2">
                                    <i className="fa fa-pencil"></i>
                                </Link>
                                <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteUserHandler(user._id)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </MDBTableBody>
            </>
        )
        
        }
        </MDBTable>

    )
}

export default User