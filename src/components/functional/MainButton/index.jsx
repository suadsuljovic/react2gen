import style from "./mainButton.module.css";

const MainButton = (props) => {
  const { text = "Click me", color = "dark" } = props;

  const getColor = () => {
    switch (color) {
      case "dark":
        return style.main;
      case "red":
        return style.red;
      case "yellow":
        return style.yellow;
      case "white":
        return style.white;
      default:
        return style.main;
    }
  };

  return <button className={`${getColor()} ${style.normal}`}>{text}</button>;
};

export default MainButton;
