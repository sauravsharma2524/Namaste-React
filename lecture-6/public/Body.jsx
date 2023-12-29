import Rescard from "./Rescard";

import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSarchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    // console.log(restaurantList)
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <button
      className="top-rated"
        onClick={() => {
          const filteredList = filteredRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setFilteredRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="search">
        <input
          type="text"
          placeholder="Search Restaurants..."
          value={searchText}
          onChange={(e) => setSarchText(e.target.value)}
        />
        <button
          onClick={() => {
            const filteredRestaurants = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          search
        </button>
      </div>
      <div className="cards-container">
        {filteredRestaurants.map((restaurant) => (
          <Rescard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
