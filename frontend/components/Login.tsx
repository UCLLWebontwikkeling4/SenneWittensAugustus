import Link from "next/link";
import { useState } from "react"
import UserService from "../services/UserService";
import { StatusMessage } from "../types";

const Login: React.FC = () => {
    const [firstnameInput, setFirstnameInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    const [lastnameInput, setLastnameInput] = useState<string>('');
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

    const login = async (firstnameInput: string,lastnameInput: string , passwordInput: string) =>{
        UserService.login(firstnameInput,lastnameInput, passwordInput)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (firstnameInput.trim() === '') {
            setStatusMessages([{ message: 'Please fill in firstname.', type: 'error' }]);
        } else {
            login(firstnameInput,lastnameInput, passwordInput);
        }
    };

    return(
        <>
            

            <form onSubmit={handleSubmit}>
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
                <button className="btn btn-primary btn-block mb-3 mt-3">
                <span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
                </button>

                <div>
                <h6>If you have no account, please <Link href="/register">register</Link>.</h6>
            </div>
            </form>
        </>
    )
}


export default Login