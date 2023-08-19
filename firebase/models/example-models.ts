import { MenuType, RestaurantType } from "@/types/type"


export const testRestaurant: Omit<RestaurantType, "id"> = {
// id: "G91GZDuaAepwXonMlV40"
  name: "BBQ치킨",
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
    comment: "마쉿는 케이크를 만들어 드릴게욤,,",
  },
  menuIds: [],
}

export const testFood: Omit<MenuType, "id"> = {
// id: "rbKVdjTkqNAjfXghIDxH"
  name: "황금올리브치킨",
  basePrice: 20000,
  customizations: [
    {
      id: "zicoyangnyum",
      name: "ZICO YANGNYUM",
      additionalPrice: 21000,
      tags: ["SWEET", "NUTS", "ZICO"],
      marketingSlug: "지코의 \n지코바보다 맛있는 \n특제양념소스치킨",
      customizations: ["지코특제양념", "지코특제양념", "설탕", "소금"],
      author: "zicova",
    }
  ]
}