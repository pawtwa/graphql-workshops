const { paginateResults } = require('./utils');
const { RESTDataSource } = require('apollo-datasource-rest');
const { UserInputError } = require('apollo-server');

module.exports = {
	Query: {
		me: async (_, __, ___) => ___.models.User.me(),
		restaurants: async (_, __, ___) => ___.dataSources.restaurantAPI.getRestaurants({category: __.category}),
		restaurant: async (_, __, ___) => ___.dataSources.restaurantAPI.getRestaurant({id: __.id}),
		categories: async (_, __, ___) => ___.dataSources.categoryAPI.getCategories(),
		category: async (_, __, ___) => ___.dataSources.categoryAPI.getCategory({id: __.id})
	}
};
