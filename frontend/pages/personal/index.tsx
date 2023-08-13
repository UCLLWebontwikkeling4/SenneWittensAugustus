import Head from 'next/head';
import {Training, User }from '../../types'
import * as trainingTables from '../../components/trainings/TrainingOverviewTable'
import trainingService from '../../services/TrainingService'
import UserService from '../../services/UserService';
import UserInfoTable from '../../components/users/UserInfoTable';
import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as PersonalPage from './PersonalPage_styles'

import * as TrainingStyles from '../../components/trainings/TrainingOverViewTable_styles';

const Trainings: React.FC = () => {

    
    
    const [trainings, setTrainings]  =useState<Array<Training>>();
    const [yourTrainings, setYourTrainings] = useState<Array<Training>>();
    const [yourInfo, setYourInfo] = useState<User>();
    const [userid, setUserID] = useState("");
    
    
    const getYourTrainings = async (id) =>{
        trainingService.getYourTrainings(id).then((res) => res.json().then((trainings)=> setYourTrainings(trainings)))
    }
    
    const getYourInfo = async (id) => {
        UserService.getYourInfo(id).then((res) => res.json().then((user) => setYourInfo(user)))
    }

    useEffect(() => {        
        const id = JSON.parse(sessionStorage.getItem("id"));
        console.log(id)
        if (id) {
            getYourTrainings(id)
            getYourInfo(id)
        }
        
  
    }, [])
    return (
        <>
            <Head>
                <title>Trainings</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <main>
                <PersonalPage.InfoPage>
                    
                        <PersonalPage.Item>
                            <TrainingStyles.trainingOverviews>
                                <trainingTables.TrainingOverviewTableOfYourOwn trainings={yourTrainings} />
                            </TrainingStyles.trainingOverviews>
                        </PersonalPage.Item>
                        <PersonalPage.Item>
                            <UserInfoTable user={yourInfo} />
                        </PersonalPage.Item>
                    
                    {/* <FindForm /> */}
                    
                </PersonalPage.InfoPage>   
            </main>
            <Footer />
        </>
    )
}

export default Trainings;
