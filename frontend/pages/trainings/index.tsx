import Head from 'next/head';
import {Training }from '../../types'
import * as trainingTables from '../../components/trainings/TrainingOverviewTable'
import trainingService from '../../services/TrainingService'
import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useInterval from 'react-useinterval';

import * as TrainingStyles from '../../components/trainings/TrainingOverViewTable_styles';

const Trainings: React.FC = () => {

    
    
    const [trainings, setTrainings]  =useState<Array<Training>>();
    const [yourTrainings, setYourTrainings] = useState<Array<Training>>();
    const [userid, setUserID] = useState("");
    
    const getAllTrainings = async () => {
        console.log("index-getTrainings")
        trainingService.getAllTrainings().then((res) => res.json().then((trainings)=> setTrainings(trainings)))
    }
    const getYourTrainings = async (id) =>{
        trainingService.getYourTrainings(id).then((res) => res.json().then((trainings)=> setYourTrainings(trainings)))
    }

    useEffect(() => {
        const interval = setInterval(() => {
          getAllTrainings();
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    useEffect(() => {
        console.log("index-useEffect")
        getAllTrainings()
        
        const id = JSON.parse(sessionStorage.getItem("id"));
        console.log(id)
        console.log("hihi")
        if (id) {
            getYourTrainings(id)
            console.log( "dit is de id na 1000 ms: " + id)
    
       console.log( "dit is de id: " + id)
}
    
        
        
    }, [])
    return (
        <>
            <Head>
                <title>Trainings</title>
                <script src="https://kit.fontawesome.com/9cb4408983.js" crossOrigin="anonymous"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <main>
                <section>
                    <TrainingStyles.trainingOverviews>
                        <trainingTables.TrainingOverviewTable trainings={trainings} />
                        <trainingTables.TrainingOverviewTableOfYourOwn trainings={yourTrainings} />
                    </TrainingStyles.trainingOverviews>
                    {/* <UpdateForm /> */}
                    {/* <FindForm /> */}
                </section>   
            </main>
            <Footer />
        </>
    )
}

export default Trainings;
