import { redirect } from "next/dist/server/api-utils"

const getAllTrainings = () => {
    console.log("trainingService")
    return fetch(process.env.NEXT_PUBLIC_API_URL + '/training/all')
}

const getYourTrainings = (id) =>{
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/training/yours?id=${id}`)
}

const addTraining = (title, date, km, avg_heartrate, avg_speed, userid, likes) => {
    try {
        
        
        fetch(process.env.NEXT_PUBLIC_API_URL + '/training/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               
                    title: title,
                    date: date,
                    km: km,
                    avg_heartrate: avg_heartrate,
                    avg_speed: avg_speed,
                    userid: userid,
                    likes: likes
           
            }),
            // Set the mode to 'cors' to handle CORS
            mode: 'cors'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            window.location.href = '/trainings';
            return response.json();
            
        })
        .catch(error => {
            console.error(error);  
        });
    } catch (err) {
        console.log(err);
    }
}
const deleteTraining = (id) => {
    try{ 
        fetch(process.env.NEXT_PUBLIC_API_URL + `/training/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => {
            if (!response.ok) {
                
                throw new Error('Network response was not ok');
                
            }
            return response.json();
        })
        .catch(error => {
            console.error(error);  
    })
} catch (err) {
    console.log(err)
}
}
const updateTraining = (title, date, km, avg_heartrate, avg_speed, userid, likes) => {
    try {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/training/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               training:{
                    title: title,
                    date: date,
                    km: km,
                    avg_heartrate: avg_heartrate,
                    avg_speed: avg_speed,
                    userid: userid,
                    likes: likes
           
            }}),
            // Set the mode to 'cors' to handle CORS
            mode: 'cors'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            window.location.href = '/trainings';
            return response.json();
            
        })
        .catch(error => {
            console.error(error);  
        });
    } catch (err) {
        console.log(err);
    }
}

const TrainingService = {
    getAllTrainings,
    getYourTrainings,
    addTraining,
    deleteTraining,
    updateTraining
}

export default TrainingService