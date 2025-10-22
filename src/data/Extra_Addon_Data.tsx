import Images from "../utils/LocalImages"

export const Extra_Addon_Data: Extra_Addon_Data_Type[] = [
    {
        name: "Plant Protein Bowl",
        price: 220,
        rating: 4.5,
        ratingCount : 11 , 
        Image: Images.Plant_Protin,
        description: "[Veg preparation] Spring mix, plant based, organic...",
        isVeg: true,
        addon: [
            { extraItemName: 'Pesto Paneer', price: 40 },
            { extraItemName: 'Paneer', price: 30 },
            { extraItemName: 'Extra Veggies', price: 20 },
            { extraItemName: 'Mushroom', price: 25 },
            { extraItemName: 'Corn', price: 15 },
            { extraItemName: 'Chilli Paneer', price: 50 }
        ]
    },
    {
        name: "Grilled Chicken Topping",
        price: 120,
        rating: 4.2,
        ratingCount : 11 , 
        Image: Images.Mask_Group,
        description: "Grilled chicken breast strips, high protein, keto-friendly.",
        isVeg: false,
         addon: [
            { extraItemName: 'Pesto Paneer', price: 40 },
            { extraItemName: 'Paneer', price: 30 },
            { extraItemName: 'Extra Veggies', price: 20 },
            { extraItemName: 'Mushroom', price: 25 },
            { extraItemName: 'Corn', price: 15 },
            { extraItemName: 'Chilli Paneer', price: 50 }
        ]
    },
    {
        name: "Avocado Smash",
        price: 80,
        rating: 4.7,
        ratingCount : 11 , 
        Image: Images.Plant_Protin,
        description: "[Veg preparation] Creamy smashed avocado with herbs and lime.",
        isVeg: true,
        addon: [
            { extraItemName: 'Pesto Paneer', price: 40 },
            { extraItemName: 'Paneer', price: 30 },
            { extraItemName: 'Extra Veggies', price: 20 },
            { extraItemName: 'Mushroom', price: 25 },
            { extraItemName: 'Corn', price: 15 },
            { extraItemName: 'Chilli Paneer', price: 50 }
        ]
    },
    {
        name: "Cheese Burst Filling",
        price: 60,
        rating: 4.0,
        ratingCount : 11 , 
        Image: Images.Mask_Group,
        description: "[Veg preparation] Melty cheese center, perfect for extra richness.",
        isVeg: true,
         addon: [
            { extraItemName: 'Pesto Paneer', price: 40 },
            { extraItemName: 'Paneer', price: 30 },
            { extraItemName: 'Extra Veggies', price: 20 },
            { extraItemName: 'Mushroom', price: 25 },
            { extraItemName: 'Corn', price: 15 },
            { extraItemName: 'Chilli Paneer', price: 50 }
        ]
    },
    {
        name: "Boiled Egg Halves",
        price: 50,
        rating: 4.3,
        ratingCount : 11 , 
        Image: Images.Plant_Protin,
        description: "Protein-rich boiled eggs, lightly seasoned.",
        isVeg: false,
         addon: [
            { extraItemName: 'Pesto Paneer', price: 40 },
            { extraItemName: 'Paneer', price: 30 },
            { extraItemName: 'Extra Veggies', price: 20 },
            { extraItemName: 'Mushroom', price: 25 },
            { extraItemName: 'Corn', price: 15 },
            { extraItemName: 'Chilli Paneer', price: 50 }
        ]
    },
];
