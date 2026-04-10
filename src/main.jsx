import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
//import './index.css'
import App from './App.jsx'
import Blog from "./Blog.jsx";
import Profiles from "./Profiles.jsx";
import Matching from "./Matching.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tabs>
        <TabList>
            <Tab>Blog</Tab>
            <Tab>Profiles</Tab>
            <Tab>Matching Game</Tab>
            <Tab>Sign In</Tab>
        </TabList>
        <TabPanel>
            <Blog />
        </TabPanel>
        <TabPanel>
            <Profiles />
        </TabPanel>
        <TabPanel>
            <Matching />
        </TabPanel>
        <TabPanel>
            <p>Login</p>
        </TabPanel>
    </Tabs>
  </StrictMode>,
)
