import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src={mealsImage}
          alt="A tabel full of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;