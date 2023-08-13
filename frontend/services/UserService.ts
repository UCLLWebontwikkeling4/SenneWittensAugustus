
const getAllUsers = () => {
    console.log("Userservice")
    return fetch(process.env.NEXT_PUBLIC_API_URL + '/user/all')
}

const getYourInfo = (id: number) =>{
    try{
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/get?id=${id}`)    
    }catch (err) {
        console.log(err)  
    }
}

const login = (firstname: string | null, lastname: string | null, password: string | null) =>{
    try{ 
        fetch(process.env.NEXT_PUBLIC_API_URL + '/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            password: password
        })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
            
        })
        .then(data => {
            const user = data['user'];
            sessionStorage.setItem('id', user.id.toString());
            sessionStorage.setItem('firstname', user.firstname);
            sessionStorage.setItem('lastname', user.lastname);
            window.location.replace("/")
        })
        .catch(error => {
            console.error(error);  
    })
} catch (err) {
    console.log(err)
}
    
}


const Register = (firstname: string | null, lastname: string | null, password: string | null, country: string, city: string, typeOfRider: string) =>{
    try{ 
        fetch(process.env.NEXT_PUBLIC_API_URL + '/user/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
                firstname: firstname,
                lastname: lastname,
                password: password,
                country: country,
                city: city,
                typeOfRider: typeOfRider
            
        })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            sessionStorage.setItem('userData', JSON.stringify(data['user']));
            window.location.replace("/")
        })
        .catch(error => {
            console.error(error);  
    })
} catch (err) {
    console.log(err)
}
    
}

const logout = () => {
    sessionStorage.clear();
    window.location.replace("/")
}

const UserService = {
    getAllUsers,
    login,
    logout,
    Register,
    getYourInfo
}

export default UserService