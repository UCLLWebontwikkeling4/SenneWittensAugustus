import Link from "next/link";
import { useState } from "react"
import TrainingService from "../../services/TrainingService";
import { StatusMessage } from "../../types";
import TrainingUpdate from "../../pages/updatetraining";

const TrainingUpdateForm: React.FC = () => {
    const [titleInput, setTitleInput] = useState<string>('');
    const [dateInput, setDateInput] = useState<Date>(new Date());
    const [kmInput, setKmInput] = useState<number>(0);
    const [avg_heartrateInput, setAvg_heartrateInput] = useState<number>(0);
    const [avg_speedInput, setAvg_speedInput] = useState<number>(0);

    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

    

    const handleSubmit = (event: any) => {
        event.preventDefault(); 
            TrainingService.updateTraining(titleInput,dateInput, kmInput, avg_heartrateInput, avg_speedInput, parseInt(sessionStorage.getItem('id')), 0)
    };

    return(
        <>
        <div className="d-flex justify-content-around align-items-center bg-white mx-5 px-0 mt-5 shadow-lg shadow-inset p-3 mb-5 bg-white rounded text-center ">

            <form onSubmit={handleSubmit}>
                <h2>Update training</h2>
            <h4 className="mb-4">Please fill in the form below:</h4> 
                <label className="form-label">Title</label>
                <input
                    type="text"
                    placeholder="title"
                    value={titleInput}
                    onChange={(event)=> setTitleInput(event.target.value)}
                    className="form-control"
                />
                <label className="form-label">Date</label>
                 <input
                    type="date"
                    placeholder="date"
                    //value={dateInput.toISOString()}
                    onChange={(event)=> setDateInput(new Date(event.target.value))}
                    className="form-control"
                />
                <label className="form-label">Km</label>
                 <input
                    type="number"
                    placeholder="km"
                    value={kmInput}
                    onChange={(event)=> setKmInput(parseInt(event.target.value))}
                    className="form-control"
                />
                <label className="form-label">Avg Heartrate</label>
                 <input
                    type="number"
                    placeholder="avg heartrate"
                    value={avg_heartrateInput}
                    onChange={(event)=> setAvg_heartrateInput(parseInt(event.target.value))}
                    className="form-control"
                />
                <label className="form-label">Avg Speed</label>
                 <input
                    type="number"
                    placeholder="avg speed"
                    value={avg_speedInput}
                    onChange={(event)=> setAvg_speedInput(parseInt(event.target.value))}
                    className="form-control"
                />
                
                
    
                
                <button className="btn btn-primary btn-block mb-3 mt-3">
                <span className="button__text">Update Training</span>
					<i className="button__icon fas fa-chevron-right"></i>
                </button>

            </form>
            </div>
        </>

    )
}


export default TrainingUpdateForm;