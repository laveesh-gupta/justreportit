async function getCoordinates(address){
    const geoCodeResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyBcbqDz3RsAHe5j_5StY6DlxVsgIj_f9mA`)
    
    if (Math.floor(geoCodeResponse.status/100) !== 2) {
        throw new Error(`invalid status code ${geoCodeResponse.status}`) 
    }
    const result = (await geoCodeResponse.json()).results[0]
    if (!result) {
        // throw new Error("no result found")
        // OR

        return null
    }

    const {lat, lng} = result.geometry.location

    return {lat, lng}
}

// console.log(getCoordinates('362 W Concord Pl Saratoga Springs UT'));

export default getCoordinates;