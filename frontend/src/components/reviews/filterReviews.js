export const filterReviews = (reviews, serviceId) => {
    let result = []
    Object.values(reviews).map(review => {
        if (review.serviceId===serviceId)result.push(review);
    })
    return result;
}