export const load = async({fetch, params}) => {
    const sectionResponse = await fetch(`http://localhost:8080/api/v1/sections/${params.sectionId}`)
    const sectionData = await sectionResponse.json();
    const section = sectionData;

    return {
        section
    }
}



export const actions = {
    default: async({request, params}) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const imageUrl = formData.get('imageUrl');
        const part = formData.get('part');

        const item = {
            name,
            imageUrl,
            part
        }

    }
    
    
}