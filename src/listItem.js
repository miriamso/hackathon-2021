import Tab from "@mui/material/Tab";
import Img from "./assets/listImage.svg";

import "./listItem.css";

function ListItem({ title, value }) {
  return <Tab icon={<img src={Img} alt="" />} label={title} value={value} />;
}

export default ListItem;
