import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const MenuPage = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const { resId } = useParams();
  const menuInfo = useRestaurantMenu()

  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json.data);
    setMenuInfo(json.data);
  };

  if (menuInfo === null) return <Shimmer />;

  // Here we are Fetching the Name of the restaurant
  const { name } = menuInfo?.cards[0]?.card?.card?.info;

  // Here We Are fetching the MenuItems of that Restaurant
  const { itemCards } =
    menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;

  // console.log(itemCards);
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
