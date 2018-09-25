export const Filterservices = (services, request) => {
    let result = []
    Object.values(services).map(service => {
        if(service[request.field]===request.parameter)result.push(service)
    })
    return result;
}