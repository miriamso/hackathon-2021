import { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Tabs, Tab } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
// import ListItem from "./listItem";
import Background from "./assets/background.svg";
// import Tab from "@mui/material/Tab";
import Img from "./assets/listImage.svg";
// import Tabs from "@mui/material/Tabs";
import "./App.css";

const Main = () => {
  let params = useParams();
  const [value, setValue] = useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App" style={{ background: `url(${Background})` }}>
      <header className="App-header">
        <Typography variant="h3" component="div" gutterBottom>
          We got you covered
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
          Vul name {params.vulname}
        </Typography>
        <TabContext>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            <Tab
              icon={<img src={Img} alt="" />}
              label={"Genaral informatoion"}
              value={"1"}
            />
            <Tab
              icon={<img src={Img} alt="" />}
              label={"Lessons"}
              value={"2"}
            />
            <Tab icon={<img src={Img} alt="" />} label={"CWE"} value={"3"} />
            <Tab
              icon={<img src={Img} alt="" />}
              label={"Stackoverflow results"}
              value={"4"}
            />
            ;
          </Tabs>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
        <div></div>
      </header>
    </div>
  );
};

export default Main;
