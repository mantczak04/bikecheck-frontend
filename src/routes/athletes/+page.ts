export const load = async({fetch}) => {
    const athleteResponse = await fetch('http://localhost:8080/api/v1/athlete')
    const athleteData = await athleteResponse.json();
    const athletes = athleteData;

    return {
        athletes
    }
}