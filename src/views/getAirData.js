async function getAirData(lat, lng){
    const breezeResponse = await fetch(`https://api.breezometer.com/baqi/?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}&key=3c0af79d81a64c6dba946d5b84933564`)
    
    if (Math.floor(breezeResponse.status/100) !== 2) {
        throw new Error(`invalid status code ${breezeResponse.status}`) 
    }

    return await breezeResponse.json()
}

export default getAirData;