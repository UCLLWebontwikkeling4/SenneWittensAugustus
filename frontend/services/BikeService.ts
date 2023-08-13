const getAllBikes = () => {
    console.log("bikeService")
    return fetch(process.env.NEXT_PUBLIC_API_URL + '/bike/all')
}

const getYourBikes = (id) =>{
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/bike/yours?id=${id}`)
}
const addBike = (brand: string, type: string,  shifting_system:string, userid: number) => {
    try {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/bike/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                brand: brand,
                type: type,
                shifting_system: shifting_system,
                userid: userid
           
            }),
            // Set the mode to 'cors' to handle CORS
            mode: 'cors'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            window.location.href = '/bikes';
            return response.json();
            
        })
        .catch(error => {
            console.error(error);  
        });
    } catch (err) {
        console.log(err);
    }
}
const deleteBike = (id) => {
    try{ 
        fetch(process.env.NEXT_PUBLIC_API_URL + `/bike/delete?id=${id}`, {
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
const updateBike = (bike) => {
    try {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/bike/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               training:{
                    brand: bike.brand,
                    type: bike.type,
                    weight: bike.weight,
                    shifting_system: bike.shifting_system,
           
            }}),
            // Set the mode to 'cors' to handle CORS
            mode: 'cors'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            window.location.href = '/bikes';
            return response.json();
            
        })
        .catch(error => {
            console.error(error);  
        });
    } catch (err) {
        console.log(err);
    }
}

const BikeService = {
    getAllBikes,
    getYourBikes,
    addBike,
    deleteBike,
    updateBike
}

export default BikeService