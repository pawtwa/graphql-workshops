const { RESTDataSource } = require("apollo-datasource-rest");

class RestaurantAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://31161975.ngrok.io/";
  }

  async getRestaurants({ category }) {
    const response = await this.get("restaurants", {category: category});
    return this.restaurantsReducer(response);
  }

  async getRestaurant({ id }) {
    const response = await this.get("restaurants", { id });
    return this.restaurantReducer(response[0]);
  }

  // restaurantItem is an object probivied by REST API response
  restaurantReducer(restaurantItem) {
    return {
      id: restaurantItem.id || 0,
      name: restaurantItem.name,
      description: restaurantItem.description,
      address: restaurantItem.address,
      website: restaurantItem.description,
      avatar: restaurantItem.address,
      category: restaurantItem.category,
      reviews: []
    };
  }

  restaurantsReducer(restaurants) {
    return restaurants.map((restaurantItem) => this.restaurantReducer(restaurantItem));
  }
}
module.exports = RestaurantAPI;
