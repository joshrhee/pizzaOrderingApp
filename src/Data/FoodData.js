//This component includes pizza's name, image

export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza.png',
        section: 'Pizza'
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Veggie Pizza',
        img: '/img/healthy-pizza.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Burger',
        img: '/img/burger.jpeg',
        section: 'Sandwich'
    },
    {
        name: 'Gyro',
        img: '/img/gyro.jpeg',
        section: 'Sandwich'
    },
    {
        name: 'Shrimp PoBoy',
        img: '/img/sandwich.jpeg',
        section: 'Sandwich'
    },
    {
        name: 'Fries',
        img: '/img/fries.jpeg',
        section: 'Sides'
    },
];

//reduce function takes the same value which is called res and the current value which is food
export const foods = foodItems.reduce((res, food) => {
    //if we don't have a food.section inside of our res object, in this case section is a key, 
    //Take the res and add in the food.section as a key with adding an empty array
    if ( !res[food.section]) {
        res[food.section] = [];
    }
    //Then access that key which is food.section, and push food in there
    res[food.section].push(food);
    return res;
}, {});