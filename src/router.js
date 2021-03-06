import React, { Component } from "react";
//引入路由
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//引入组件
import Home from './pages/Home'
import HouseDetail from './pages/HouseDetail'
import Main from './pages/Main'
import LayoutNav from './pages/LayoutNav'
import Houses from './pages/Houses'
import CityList from './pages/CityList'
import News from './pages/News'
import Profile from './pages/Profile'
import Login from './pages/Login'


class Routers extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} render={() => <Navigate to="/home" />}>
            <Route path="home" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="citylist" element={<CityList />} />
            <Route path="houses" element={<Houses />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/nav" element={<LayoutNav />}>
            <Route path="house-detail" element={<HouseDetail />} />
          </Route>
        </Routes>

      </Router >
    )
  }
}
export default Routers