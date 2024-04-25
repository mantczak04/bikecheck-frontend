export const load = async({fetch, params}) => {
    const sectionResponse = await fetch(`http://localhost:8080/api/v1/sections/${params.sectionId}`)
    const sectionData = await sectionResponse.json();
    const section = sectionData;

    return {
        section
    }
}