export const filterReviews = (reviews, serviceId) => {
    let result = []
    // debugger
    Object.values(reviews).map(review => {
        if (review.serviceId===serviceId)result.push(review);
    })
    return result;
}