import { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Tabs, Tab } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
// import ListItem from "./listItem";
import Background from "./assets/background.svg";
// import Tab from "@mui/material/Tab";
import Img from "./assets/listImage.svg";
import data from "./dmsData.json";
// import Tabs from "@mui/material/Tabs";
import "./App.css";

const Main = () => {
  let params = useParams();
  const [value, setValue] = useState("2");
  const dataItem = data.find((x) => x.id === parseInt(params.vulname, 10));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App" style={{ background: `url(${Background})`, backgroundRepeat: "no-repeat" }}>
      <header className="App-header">
        <Typography variant="h3" component="div" gutterBottom>
          We got you covered
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
          {dataItem?.name.replaceAll("_", " ")}
        </Typography>

        <TabContext value={value}>
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
            <Tab
              icon={<img src={Img} alt="" />}
              label={"Stackoverflow results"}
              value={"3"}
            />
          </Tabs>
          <TabPanel value="1" className="tab-1">
            <Typography variant="h6" component="div" gutterBottom>
              Description
            </Typography>
            <div>{dataItem?.resultDescription}</div>
            <Typography variant="h6" component="div" gutterBottom>
            Risk
            </Typography>
            <div>{dataItem?.risk}</div>
            <Typography variant="h6" component="div" gutterBottom>
            Cause
            </Typography>
            <div>{dataItem?.cause}</div>

            <Typography variant="h6" component="div" gutterBottom>
            General Recommendations
            </Typography>
            <div>{dataItem?.generalRecommendations}</div>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
        <div></div>
      </header>
    </div>
  );
};

export default Main;
