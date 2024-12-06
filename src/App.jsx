import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostlList";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Sidebar>
      <div className="content">
        <Header> </Header>
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost> </CreatePost>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
