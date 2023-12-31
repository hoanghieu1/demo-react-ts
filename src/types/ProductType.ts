type ProductRating = {
    "rate": number,
    "count": number
    }
export type ProductType = {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": ProductRating;
}