import React from "react";
import { Training } from "../../types";
import styles from '../../styles/Home.module.css';
import * as trainingStyle from './TrainingOverViewTable_styles'
import Link from "next/link";
import TrainingService from "../../services/TrainingService";


type Props = {
    trainings: Array<Training>
}

const deleteTraining = async (id: number) => {
    await TrainingService.deleteTraining(id);
    console.log("Training deleted with id {}", id);
};
const updateTraining = async (training: Training) => {
    await TrainingService.updateTraining(training.avg_heartrate, training.avg_speed, training.date, training.id, training.km, training.likes, training.title);
    console.log("Training updates with id {}", training.id);
};


export const TrainingOverviewTable : React.FC<Props> =({trainings}: Props) => {
    
    return (
        <>
        <div>
            <h2>
                Add Training
            </h2>
            <Link href="/addtraining">
                      Add training
                    </Link>
        </div>
            <div className="mx-5  shadow-lg shadow-inset p-3 mb-5 bg-white rounded text-center mt-5">

                <h2>Training Overview</h2>
                {trainings && (
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">date</th>
                                <th scope="col">title</th>
                                <th scope="col">km</th>
                                <th scope="col">avg heartrate</th>
                                <th scope="col">avg speed</th>
                                <th scope="col">likes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trainings &&
                            trainings.map((training, index)=>(
                                <tr key={index}>
                                    <td scope="row">{training.id}</td>
                                    <td>{training.date}</td>
                                    <td>{training.title}</td>
                                    <td>{training.km}</td>
                                    <td>{training.avg_heartrate}</td>
                                    <td>{training.avg_speed}</td>
                                    <td>{training.likes}</td>  
                                    {/* put delete button */}
                                    <button onClick={() => deleteTraining(training.id) } >Delete</button>
                                    <button onClick={() => updateTraining(training) } >Update</button>
                                         

                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}
export const TrainingOverviewTableOfYourOwn : React.FC<Props> =({trainings}: Props) => {
    
    return (
        <>
            <trainingStyle.Summary>
                <h2>Your last 5 trainings:</h2>
                
                {trainings && trainings.length > 0 ? (
                    trainings.map((training, index) => (
                        <trainingStyle.SummaryPerItem key={index}>
                        <h2>{training.title}</h2>
                        <trainingStyle.subhead>Date: {training.date}</trainingStyle.subhead>
                        <trainingStyle.technicalDetails>
                            <p>KM: {training.km}</p>
                            <p>
                            <i className="fa-regular fa-heart-pulse"></i> Heartrate: {training.avg_heartrate}
                            </p>
                            <p>Speed: {training.avg_speed}</p>
                        </trainingStyle.technicalDetails>
                        </trainingStyle.SummaryPerItem>
                    ))
                    ) : (
                    <div>
                        <p>You have not done any trainings yet!</p>
                    </div>
                    )}
            </trainingStyle.Summary>
        </>
    )
}

export default {TrainingOverviewTable, TrainingOverviewTableOfYourOwn}