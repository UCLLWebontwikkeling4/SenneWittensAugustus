import Link from "next/link";
import { useState } from "react"
import UserService from "../services/UserService";
import { StatusMessage } from "../types";

const RegisterForm: React.FC = () => {
    const [firstnameInput, setFirstnameInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    const [lastnameInput, setLastnameInput] = useState<string>('');
    const [countryInput, setCountryInput] = useState<string>('');
    const [cityInput, setCityInput] = useState<string>('');
    const [typeOfRiderInput, setTypeOfRiderInput] = useState<string>('');

    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

    const Register = async (firstnameInput: string,lastnameInput: string , passwordInput: string, countryInput: string, cityInput: string, typeOfRiderInput: string) =>{
        UserService.Register(firstnameInput,lastnameInput, passwordInput, countryInput, cityInput, typeOfRiderInput)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault(); 
            Register(firstnameInput,lastnameInput, passwordInput, countryInput, cityInput, typeOfRiderInput);
    };

    return(
        <>
        <div className="d-flex justify-content-around align-items-center bg-white mx-5 px-0 mt-5 shadow-lg shadow-inset p-3 mb-5 bg-white rounded text-center ">

            <form onSubmit={handleSubmit}>
                <h2>Welcome to our platform</h2>
            <h4 className="mb-4">Please fill in the form below:</h4> 
                <label className="form-label">Firstname</label>
                
                <input
                    type="text"
                    placeholder="firstname"
                    value={firstnameInput}
                    onChange={(event)=> setFirstnameInput(event.target.value)}
                    className="form-control"
                />
                <label className="form-label">Lastname</label>
                 <input
                    type="text"
                    placeholder="lastname"
                    value={lastnameInput}
                    onChange={(event)=> setLastnameInput(event.target.value)}
                    className="form-control"
                />
                <label className="form-label">Password</label>
                 <input
                    type="password"
                    placeholder="password"
                    value={passwordInput}
                    onChange={(event)=> setPasswordInput(event.target.value)}
                    className="form-control"
                />
                <label className="form-label">Country</label>
                 <input
                    type="text"
                    placeholder="country"
                    value={countryInput}
                    onChange={(event)=> setCountryInput(event.target.value)}
                    className="form-control"
                />
                <label className="form-label">City</label>
                 <input
                    type="text"
                    placeholder="city"
                    value={cityInput}
                    onChange={(event)=> setCityInput(event.target.value)}
                    className="form-control"
                />
                <label className="form-label">Type of rider</label>
                 <input
                    type="text"
                    placeholder="Road,MTB, other"
                    value={typeOfRiderInput}
                    onChange={(event)=> setTypeOfRiderInput(event.target.value)}
                    className="form-control"
                />
                
                
    
                
                <button className="btn btn-primary btn-block mb-3 mt-3">
                <span className="button__text">Register</span>
					<i className="button__icon fas fa-chevron-right"></i>
                </button>

            </form>
            </div>
        </>

    )
}


export default RegisterForm