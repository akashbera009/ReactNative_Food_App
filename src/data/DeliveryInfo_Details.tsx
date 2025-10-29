import Images from "../utils/LocalImages"
export const DeliveryInfo_Details: DeliveryInfo_Type = {
    Time: '40',
    Price: 25,
    OfferaPercent: 30,
    OfferAmount: 75,
    Address: 'Flat no: 301, SVR Enclave, Hyper Nagar, vasavi...',
    Timing: 42,
    TotalPrice: 279 ,
    DeliveryCharge : 50 , 
    Taxed: 5 , 
    Grand_Total: 334
}

export const Tip_Data: Tip_Data_Type[] = [
    { image: Images.Soda_Bottle, price: 20, isMostTipped: false },
    { image: Images.Popcorn_Icon, price: 30, isMostTipped: true },
    { image: Images.Donut_Icon, price: 50, isMostTipped: false },
    { image: Images.Donut_Icon, price: 'Custom', isMostTipped: false },
]