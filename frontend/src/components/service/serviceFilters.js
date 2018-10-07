export const ServiceFilter = (services, filters) => {
    let result = []
    services.map(service => {
        if(filters.categories.length > 0) {
            if (filters.categories.includes(service.category))result.push(service)
        }
    })
    return result;
}

export const serviceForBusiness = (services, business) => {
    let result = []
    services.map(service => {
        if(service.business===business)result.push(service)
    })
    return result
}