import Link from "next/link";
import { useState } from "react"
import BikeService from "../../services/BikeService";
import { StatusMessage } from "../../types";
import BikeAdd from "../../pages/addbike";

const BikeAddForm: React.FC = () => {
    const [brandInput, setBrandInput] = useState<string>('');
    const [typeInput, setTypeInput] = useState<string>('');
    const [shifting_systemInput, setShifting_systemInput] = useState<string>('');

    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

    

    const handleSubmit = (event: any) => {
        console.log("test")
        event.preventDefault(); 
            BikeService.addBike(brandInput,typeInput, shifting_systemInput , parseInt(sessionStorage.getItem('id')))
    };

    return(
        <>
        <div className="d-flex justify-content-around align-items-center bg-white mx-5 px-0 mt-5 shadow-lg shadow-inset p-3 mb-5 bg-white rounded text-center ">

            <form onSubmit={handleSubmit}>
                <h2>Add a new bike</h2>
            <h4 className="mb-4">Please fill in the form below:</h4> 
                <label className="form-label">Brand</label>
                <input
                    type="text"
                    placeholder="brand"
                    value={brandInput}
                    onChange={(event)=> setBrandInput(event.target.value)}
                    className="form-control"
                />
                <label className="form-label">Type</label>
                 <input
                    type="text"
                    placeholder="type"
                    value={typeInput}
                    onChange={(event)=> setTypeInput(event.target.value)}
                    className="form-control"
                />
                <label className="form-label">Shifting System</label>
                 <input
                    type="text"
                    placeholder="shifting system"
                    value={shifting_systemInput}
                    onChange={(event)=> setShifting_systemInput(event.target.value)}
                    className="form-control"
                />
            
                
                <button className="btn btn-primary btn-block mb-3 mt-3">
                <span className="button__text">Add Bike</span>
					<i className="button__icon fas fa-chevron-right"></i>
                </button>

            </form>
            </div>
        </>

    )
}


export default BikeAddForm;