import { Link, Outlet, useLocation } from "react-router-dom"
import { Home } from "./Home"
import { Drawer } from "antd"
import { useState } from "react";
import { MenuOutlined } from '@ant-design/icons';

export const Root = () => {

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div id="welcome">
        <h1 className="left">Catriel</h1>
        <h1 className="right">Nanthaveth</h1>
      </div>
      <header>
        <MenuOutlined style={{ color: "white" }} onClick={showDrawer} />
        <Drawer title="C. Nanthaveth" placement="right" onClose={onClose} open={open} className="drawer">
          <div id="drawer-links">
            <Link to='/' onClick={onClose}>Home</Link>
            <Link to='/projects' onClick={onClose}>Projects</Link>
            <Link to='/knowledge' onClick={onClose}>Knowledge</Link>
            <Link to='/aboutme' onClick={onClose}>About me</Link>
          </div>
        </Drawer>
      </header>
      {useLocation().pathname === "/" ? <Home /> : <Outlet />}
    </div>
  )
}
