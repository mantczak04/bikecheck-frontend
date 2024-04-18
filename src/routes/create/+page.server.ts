export const actions = {
    default: async({request}) => {
        const formData = await request.formData()
        const fullName = formData.get('fullName')
        const biography = formData.get('biography')
        const country = formData.get('country');
        const birthDate = formData.get('birthDate');
        const imageUrl = formData.get('imageUrl');
        
        const athlete = {
            fullName,
            biography,
            country,
            birthDate,
            imageUrl
        }

        const response = await fetch('http://localhost:8080/api/v1/athlete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(athlete)
        })
    }
}