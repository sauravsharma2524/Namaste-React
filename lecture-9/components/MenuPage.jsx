// import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import useRestaurantInfo from "../constants/useRestaurantHook";
import { useParams } from "react-router-dom";

const MenuPage = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantInfo(resId);
  console.log(resInfo);
  console.log(resId);

  if (resInfo === null) return <Shimmer />;   

  // Here we are Fetching the Name of the restaurant
  const { name } = resInfo?.cards[0]?.card?.card?.info;

  // Here We Are fetching the MenuItems of that Restaurant
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h2>Menu Items</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} Rs-
            {parseInt(item?.card?.info?.defaultPrice / 100, 10)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
