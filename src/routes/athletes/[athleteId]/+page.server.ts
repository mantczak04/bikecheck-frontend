export const load = async({fetch, params}) => {
    const athleteResponse = await fetch(`http://localhost:8080/api/v1/athlete/${params.athleteId}`)
    const athleteData = await athleteResponse.json();
    const athlete = athleteData;

    return {
        athlete
    }
}