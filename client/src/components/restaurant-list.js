import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { Loading } from "../components";

const GET_RESTAURANTS = gql`
  query restaurantList($category: ID) {
    restaurants(category: $category) {
      id
      name
      category {
        id
        name
      }
    }
  }
`;

export default function RestaurantList() {
  const { data, loading, error } = useQuery(GET_RESTAURANTS, {
    variables: { category: 1 }
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR {error.toString()}</p>;

  console.log(data);

  return (
    <Fragment>
      {data.restaurants &&
        data.restaurants.map(item => (
          <div key={item.id}>Name: {item.name}</div>
        ))}
    </Fragment>
  );
}
