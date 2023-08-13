import { User } from "../../types";
import * as UserInfoStyle from './UserInfoTable_styles'

type Props = {
    user: User
}


const UserInfoTable : React.FC<Props> =({user}: Props) => {

    return (
        <>
            {user && (
                
            <UserInfoStyle.PersonalInfo>
                <h2>Your personal information:</h2>
                <UserInfoStyle.PersonalInfoSummary>
                    <UserInfoStyle.Name>{user.firstname}{user.lastname}</UserInfoStyle.Name>
                    
                    <p>{user.birth_date}</p>
                    <p>{user.password}</p>
                    <p>{user.country}</p>
                    <p>{user.city}</p>
                    <p>{user.type_of_rider}</p>
                </UserInfoStyle.PersonalInfoSummary>
            </UserInfoStyle.PersonalInfo>
            )}
        </>
    )
}


export default UserInfoTable

