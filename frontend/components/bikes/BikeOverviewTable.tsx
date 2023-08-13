import React from "react";
import { Bike } from "../../types";
import styles from '../../styles/Home.module.css';
import * as bikeStyle from './BikeOverviewTable_styles'
import Link from "next/link";
import BikeService from "../../services/BikeService";


type Props = {
    bikes: Array<Bike>
}

const deleteBike = async (id: number) => {
    await BikeService.deleteBike(id);
    console.log("Bike deleted with id {}", id);
};
const updateBike = async (bike: Bike) => {
    await BikeService.updateBike(bike);
    console.log("Bike updates with id {}", bike.id);
};


export const BikeOverviewTableOfYourOwn : React.FC<Props> =({bikes}: Props) => {
    
    return (
        <>
        <div>
            <h2>
                Add Bike
            </h2>
            <Link href="/addbike">
                      Add bike
                    </Link>
        </div>
            <div className="mx-5  shadow-lg shadow-inset p-3 mb-5 bg-white rounded text-center mt-5">

                <h2>Bike Overview</h2>
                {bikes && (
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">brand</th>
                                <th scope="col">type</th>
                                <th scope="col">shifting system</th>
                             
                                
                            </tr>
                        </thead>
                        <tbody>
                            {bikes &&
                            bikes.map((bike, index)=>(
                                <tr key={index}>
                                    <td scope="row">{bike.id}</td>
                                    <td>{bike.brand}</td>
                                    <td>{bike.type}</td>
                                    <td>{bike.shifting_system}</td>
                                    
                
                                    <button onClick={() => deleteBike(bike.id as number) } >Delete</button>
                                    <button onClick={() => updateBike(bike) } >Update</button>
                                         

                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default {BikeOverviewTableOfYourOwn}