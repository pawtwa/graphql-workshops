const { RESTDataSource } = require("apollo-datasource-rest");

class CategoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://31161975.ngrok.io/";
  }

  async getCategories() {
    const response = await this.get("categories");
    return this.categoriesReducer(response);
  }

  async getCategory({ id }) {
    const response = await this.get("categories", { id });
    return this.categoryReducer(response[0]);
  }

  // categoryItem is an object probivied by REST API response
  categoryReducer(categoryItem) {
    return {
      id: categoryItem.id || 0,
      name: categoryItem.name,
      restaurants: this.restaurantsReducer(categoryItem.restaurants)
    };
  }

  categoriesReducer(categories) {
    return categories.map((categoryItem) => this.categoryReducer(categoryItem));
  }

  restaurantReducer(restaurantItem) {
    return {
      id: restaurantItem.id || 0,
      name: restaurantItem.name,
      category: restaurantItem.category,
    };
  }

  restaurantsReducer(restaurants) {
    return restaurants.map((restaurantItem) => this.restaurantReducer(restaurantItem));
  }
}
module.exports = CategoryAPI;
