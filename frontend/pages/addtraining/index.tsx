import TrainingAdd from "../../components/trainings/TrainingAdd";
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AddTraining: React.FC = () => {
    
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
        
            <AddTraining />
            </main>
        </>
        
    )
}

export default TrainingAdd;