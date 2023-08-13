import Head from 'next/head';
import {User }from '../../types'
import UserOverview from '../../components/users/UserOverviewTable'
import UserService from '../../services/UserService'
import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Users: React.FC = () => {
    
    const [users, setusers]  =useState<Array<User>>();
    
    const getAllUsers = async () => {
        console.log("index-getusers")
        UserService.getAllUsers().then((res) => res.json().then((users)=> setusers(users)))
    }

    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <>
            <Head>
                <title>Users</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet" />
            </Head>
            <main>
                <section>
                    <UserOverview users={users} />
                </section>   
            </main>
            <Footer />
        </>
    )
}

export default Users;
