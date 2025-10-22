
type Restaurant_Dish_Data_Type = {
    dishName: string,
    subTitle: string,
    image: Image,
    price: number,
    ratings: number,
    description1: string,
    description2: string,
    location: string,
}

type Dish_Data_Type = {
    name: string,
    image: Image
}


type Addon_Type = {
    extraItemName: string,
    price: number
}
type Extra_Addon_Data_Type = {
    name: string,
    price: number,
    rating: number,
    ratingCount: number , 
    Image: Image,
    description: string,
    isVeg: boolean,
    addon: Addon_Type[]
}

type DeliveryInfo_Type ={
    Time: string,
    Price: number,
    OfferaPercent: number , 
    OfferAmount:number ,
}