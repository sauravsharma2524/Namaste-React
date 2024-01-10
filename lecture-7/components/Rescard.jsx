const Rescard = (props) => {
  const { resData } = props;

  const { sla, cuisines, avgRating, name, cloudinaryImageId  } = resData?.info;

  // console.log(resData);
  return (
    <div className="rescard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="food image"
      />{" "}
      <br />
      <b>{name}</b> <br />
      <br />
      <span>{avgRating} stars</span> &nbsp; &nbsp; &nbsp;
      <span>{sla.slaString} </span>
      <br /> <br />
      <span>{cuisines.map((item) => item).join(", ")} </span> <br />
    </div>
  );
};

export default Rescard;
