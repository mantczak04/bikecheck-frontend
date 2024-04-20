export const load = async({fetch, params}) => {
    const athleteResponse = await fetch(`http://localhost:8080/api/v1/athlete/${params.athleteId}`)
    const athleteData = await athleteResponse.json();
    const athlete = athleteData;

    return {
        athlete
    }
}

interface Item {
    name: string,
    amazonUrl: string
}

export const actions = {
    default: async({request, params}) => {
        const formData = await request.formData();
        const sectionName = formData.get('sectionName');
        const itemNames: string[] = formData.getAll('items[]').map(item => item.toString());
        const parts: string[] = formData.getAll('parts[]').map(part => part.toString());
        const images: string[] = formData.getAll('images[]').map(image => image.toString());

        const items: Item[] = itemNames.map( (name, index) => ({
            name,
            amazonUrl: 'https://www.amazon.com/s?k='.concat(name.split(' ').join('+')),
            part: parts[index],
            imageUrl: images[index]
        }))
        
        const section = {
            name : sectionName,
            items
        }

        const response = await fetch(`http://localhost:8080/api/v1/athlete/${params.athleteId}/sections`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(section)
        })
    }
}