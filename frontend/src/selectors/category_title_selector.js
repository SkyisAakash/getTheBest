import values from 'lodash/values';
export const getCategoryTitles = categories => {
    let result = [];
    let cats = Object.values(categories);
    cats.forEach(cat => {
        result.push(cat.title)
    })
    return result;
}