import Button from "./Button";
import { BUTTON_DATA } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex justify-between">
      {BUTTON_DATA.map((data, index) => (
        <Button name = {data} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
