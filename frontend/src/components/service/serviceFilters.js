export const ServiceFilter = (services, filters) => {
    let result = []
    services.map(service => {
        if(filters.categories.length > 0) {
            if (filters.categories.includes(service.category))result.push(service)
        }
    })
    return result;
}