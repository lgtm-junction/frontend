import { CustomType, MenuType, RestaurantType } from "@/types/type"

export const testMenus: Omit<MenuType, "id">[] = [
  {
  // id: "rbKVdjTkqNAjfXghIDxH"
    name: "Spiced Chicken",
    price: 20000,
    options: ["지코특제양념", "지코특제양념", "설탕", "소금"],
    customizations: [
      {
        menuId: "rbKVdjTkqNAjfXghIDxH",
        id: "1",
        name: "ZICO YANGNYUM",
        author: {
          id: "Gikoba",
          image: "http://ai.esmplus.com/campcam/top/logo.jpg",
        },
        tags: ["ZICO", "Spice"],
        price: 100,
        options: [
          {
            id: "1",
            name: "Strength of YANGNYUM",
            isBoolean: false,
            unit: "%",
            min: 1,
            max: 100,
            value: 1,
          },
        ]
      }
    ],
    allergyInfo: [],
    imageUrl: "/cafeLatte.jpeg",
    description: "Gikoba is a Korean chicken brand. It has an exceptionally unique format among brands. A type of chicken cut into small pieces, grilled, stir-fried in spices, and put in a box. Just like tteokbokki, bar rice cakes are also stir-fried, and you can increase the amount of bar rice cakes by adding a fee of 1,000 to 2,000 won. Tteoksari can be added only to seasoned grilled chicken, and it is impossible to add rice cakes to salt-grilled chicken, whether it is boneless or bone-in chicken.",
  },
  {
    name: "Cappuccino",
    price: 45000,
    description: "Smooth and rich espresso with a layer of frothy milk.",
    imageUrl: "/cafeLatte.jpeg",
    allergyInfo: ["Milk"],
    customizations: [],
    options: ["Regular", "Large"],
  },
  {
    name: "Mocha Latte",
    price: 55000,
    description: "Espresso and steamed milk with a touch of chocolate.",
    imageUrl: "/cafeLatte.jpeg",
    allergyInfo: ["Milk", "Chocolate"],
    customizations: [
      {
        menuId: "rbKVdjTkqNAjfXghIDxH",
        id: "1",
        name: "Extra Shot",
        author: {
          id: "shiftpsh",
          image: "https://pbs.twimg.com/profile_images/1559136628609732608/hoYcE2w6_400x400.jpg",
        },
        tags: ["Espresso"],
        price: 5000,
        options: [
          {
            id: "1",
            name: "Add Extra Shot",
            isBoolean: true,
            unit: "shot",
            value: 1,
          },
        ],
      },
    ],
  },
]

export const testRestaurants: Omit<RestaurantType, "id">[] = [
  {
    // id: "G91GZDuaAepwXonMlV40"
    name: "BBQ Chicken",
    geoInformation: {
      address: "234-9, Centumnam-daero, Haeundae-gu, Busan",
      marker: {
        latitude: 35.1600161,
        longitude: 129.1630504,
      },
      pseudoDistance: 2.1,
    },
    searchKeywords: ["치킨"],
    robot: {
      modelName: "JAKA Zu 18",
      lastBathDateTime: new Date(),
      comment: "I will serve you delicious chicken!",
    },
    menuIds: [
      "rbKVdjTkqNAjfXghIDxH"
    ],
    imageUrl: "/bbq.jpg",
  },
  {
    name: "BUSAN EXPO 2030 WORLD CAFE",
    geoInformation: {
      address: "234-9, Centumnam-daero, Haeundae-gu, Busan",
      marker: {
        latitude: 35.1600161,
        longitude: 129.1630504,
      },
      pseudoDistance: 2.1,
    },
    searchKeywords: ["카페", "엑스포"],
    robot: {
      modelName: "JAKA Zu 12",
      lastBathDateTime: new Date(),
      comment: "Korea's challenge to host the World EXPO! Busan begins the challenge, and Korea achieves it together.",
    },
    menuIds: [],
    imageUrl: "/expo.png",
  },
  {
    name: "Hexagon wrench French",
    geoInformation: {
      address: "234-9, Centumnam-daero, Haeundae-gu, Busan",
      marker: {
        latitude: 35.1600161,
        longitude: 129.1630504,
      },
      pseudoDistance: 2.1,
    },
    searchKeywords: ["french"],
    robot: {
      modelName: "JAKA Zu 18",
      lastBathDateTime: new Date(),
      comment: "Supreme quality French cuisine like Hexagon",
    },
    menuIds: [],
    imageUrl: "/gcova.png",
  },
]


export const exampleCustoms: CustomType = {
  menuId: "rbKVdjTkqNAjfXghIDxH",
  id: "customTypeTest",
  name: "Almond Extra",
  author: {
    id: "shiftpsh",
    image: "/coffee.jpg",
  },
  tags: [],
  price: 0,
  options: [
    {
      id: "1",
      name: "Maple Syrup (pump)",
      min: 0,
      max: 100,
      unit: "pump",
      value: 10,
    },
    {
      id: "2",
      name: "Mango Syrup (pump)",
      min: 0,
      max: 100,
      unit: "pump",
      value: 49,
    },
    {
      id: "3",
      name: "Orange Syrup (pump)",
      min: 0,
      max: 100,
      unit: "pump",
      value: 90,
    },
    {
      id: "4",
      name: "Busan Syrup (pump)",
      min: 0,
      max: 100,
      unit: "pump",
      value: 47,
    },
    {
      id: "5",
      name: "Apple Syrup (pump)",
      min: 0,
      max: 100,
      unit: "pump",
      value: 33,
    },
  ]
}
