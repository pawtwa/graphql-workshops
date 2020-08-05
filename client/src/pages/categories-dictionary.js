// import React, { Fragment } from "react";
// import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";

// import { Loading } from "../components";

// const GET_CATEGORIES_DICTIONARY = gql`
//   query restaurantList($category: ID) {
//     categories() {
//         id
//         name
//     }
//   }
// `;

// export default function RestaurantList() {
//   const { data, loading, error } = useQuery(GET_CATEGORIES_DICTIONARY);
//   if (loading) return <Loading />;
//   if (error) return <p>ERROR {error.toString()}</p>;

//   console.log(data);

//   return (
//     <Fragment>
//       {data.categories &&
//         data.categories.map(item => <div key={item.id}>Name: {item.name}</div>)}
//     </Fragment>
//   );
// }
