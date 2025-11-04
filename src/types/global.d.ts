
type RootStackParamList = {
    AuthScreen: undefined;
    OTPVerificationScreen: { mobilenumber: string };
    HomeScreen: undefined;
    OrderScreen: { DishItem: Restaurant_Dish_Data_Type };
    ExtraItemAdd: { ExtraItem: Extra_Addon_Data_Type };
    CheckOutScreen: undefined
    HelpScreen: undefined;
    ProScreen: undefined;
    DineInScreen: undefined;
    MedicineScreen: undefined;
    FoodScreen: { FoodItem: Dish_Data_Type }
    SettingsScreen: undefined
};
type RootDrawerParamList = {
    Main: undefined;
    Help: undefined;
};

type OTPScreenProps = {
    route: RouteProp<RootStackParamList, 'OTPVerificationScreen'>;
};
type FoodPageProps = {
    route: RouteProp<RootStackParamList, 'FoodScreen'>;
};
type AddonBottomSheetProps = {
    route: RouteProp<RootStackParamList, 'ExtraItemAdd'>;
};

type OrderScreenProps = {
    route: RouteProp<RootStackParamList, 'OrderScreen'>;
};

type OrderScreen = NativeStackScreenProps<RootStackParamList, 'OrderScreen'>;
type OTPScreenType = NativeStackScreenProps<RootStackParamList, 'OTPVerificationScreen'>;

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
    ratingCount: number,
    Image: Image,
    description: string,
    isVeg: boolean,
    addon: Addon_Type[]
}

type DeliveryInfo_Type = {
    Time: string,
    Price: number,
    OfferaPercent: number,
    OfferAmount: number,
    Address: string,
    customerName: string,
    mobileNumber: number,
    profileImage?: Image,
    Timing: number,
    TotalPrice: number,
    DeliveryCharge: number,
    Taxed: number,
    Grand_Total: number
}

type Tip_Data_Type = {
    image: Image,
    price: number | string,
    isMostTipped: boolean,
}