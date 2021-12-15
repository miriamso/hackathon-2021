import { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Tabs, Tab } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import Background from "./assets/background.svg";
import InfoIcon from "./assets/infoIcon.svg";
import LessonsIcon from "./assets/lessonsIcon.svg";
import StackIcons from "./assets/stackIcons.svg";
import {Link} from '@mui/icons-material'
import data from "./dmsData.json";
import "./App.css";

const Main = () => {
  let params = useParams();
  const [value, setValue] = useState("2");
  const queryId = parseInt(params.vulname, 10) || 1503;
  const dataItem = data.find((x) => x.id === queryId);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="App"
      style={{
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="App-header">
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          className="vul-name"
        >
          {dataItem?.name.replaceAll("_", " ")}
        </Typography>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          className="sub-title"
        >
          We got you covered
        </Typography>

        <TabContext value={value}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            <Tab
              icon={<img src={InfoIcon} alt="" />}
              label={"Genaral informatoion"}
              value={"1"}
            />
            <Tab
              icon={<img src={LessonsIcon} alt="" />}
              label={"Lessons"}
              value={"2"}
            />
            <Tab
              icon={<img src={StackIcons} alt="" />}
              label={"Stackoverflow results"}
              value={"3"}
            />
          </Tabs>
          <TabPanel value="1" className="tab-1">
            <a className="link"><Link className="aa"></Link> CWE-1503</a>
            <div className="infor-title">
              Description \
              <span className="sub-title-span"> What might happen</span>
            </div>
            <div className="infor-desc">{dataItem?.resultDescription}</div>
            <div className="infor-title">
              Risk \ <span className="sub-title-span"> How does it happen</span>
            </div>
            <div className="infor-desc">{dataItem?.risk}</div>
            <div className="infor-title">
              Cause \ <span className="sub-title-span"> How to avoid it </span>
            </div>
            <div className="infor-desc">{dataItem?.cause}</div>

            <div className="infor-title">
              General Recommendations \{" "}
              <span className="sub-title-span"> What can be done </span>
            </div>
            <div className="infor-desc">{dataItem?.generalRecommendations}</div>
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
