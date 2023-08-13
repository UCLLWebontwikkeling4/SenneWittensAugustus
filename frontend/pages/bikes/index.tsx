import Head from 'next/head';
import {Bike }from '../../types'
import * as bikeTables from '../../components/bikes/BikeOverviewTable'
import bikeService from '../../services/BikeService'
import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useInterval from 'react-useinterval';

import * as BikeStyles from '../../components/bikes/BikeOverviewTable_styles';

const Trainings: React.FC = () => {

    
    const [bikes, setBikes]  =useState<Array<Bike>>();
    const [yourBikes, setYourBikes] = useState<Array<Bike>>();
    const [userid, setUserID] = useState("");

    const getAllBikes = async () => {
        console.log("index-getBikes")
        bikeService.getAllBikes().then((res) => res.json().then((bikes)=> setBikes(bikes)))
    }

    const getYourBikes = async (id) =>{
        bikeService.getYourBikes(id).then((res) => res.json().then((bikes)=> setYourBikes(bikes)))
    }

    useEffect(() => {
        const interval = setInterval(() => {
          getAllBikes();
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    useEffect(() => {
        console.log("index-useEffect")
        getAllBikes()
        
        const id = JSON.parse(sessionStorage.getItem("id"));
        console.log(id)
        console.log("hihi")
        if (id) {
            getYourBikes(id)
            console.log( "dit is de id na 1000 ms: " + id)
    
       console.log( "dit is de id: " + id)
}
    
        
        
    }, [])
    return (
        <>
            <Head>
                <title>Bikes</title>
                <script src="https://kit.fontawesome.com/9cb4408983.js" crossOrigin="anonymous"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <main>
                <section>
                    <BikeStyles.bikeOverviews>
                        <bikeTables.BikeOverviewTableOfYourOwn bikes={bikes} />
                    </BikeStyles.bikeOverviews>
                    {/* <UpdateForm /> */}
                    {/* <FindForm /> */}
                </section>   
            </main>
            <Footer />
        </>
    )
}

export default Trainings;
