import React from "react";
import { User } from "../../types";
import styles from '../../styles/Home.module.css';

type Props = {
    users: Array<User>
}

const UserOverviewTable : React.FC<Props> =({users}: Props) => {
    return (
        <>
            
            <div className="mx-5  shadow-lg shadow-inset p-3 mb-5 bg-white rounded text-center mt-5">
                <h2>User Overview</h2>
                {users && (
                    <table className="table bg-blue ">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">firstname</th>
                                <th scope="col">lastname</th>
                                <th scope="col">birth date</th>
                                <th scope="col">password</th>
                                <th scope="col">country</th>
                                <th scope="col">city</th>
                                <th scope="col">type of rider</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                            users.map((user, index)=>(
                                <tr key={index}>
                                    <td scope="row">{user.id}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.birth_date}</td>
                                    <td>{user.password}</td>
                                    <td>{user.country}</td>
                                    <td>{user.city}</td>
                                    <td>{user.type_of_rider}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default UserOverviewTable