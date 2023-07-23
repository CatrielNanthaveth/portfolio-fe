import { Outlet, useLocation } from "react-router-dom"
import { Home } from "./Home"

export const Root = () => {
  return (
    <div>
      <div id="welcome">
        <h1 className="left">Catriel</h1>
        <h1 className="right">Nanthaveth</h1>
      </div>
      {useLocation().pathname === "/" ? <Home /> : <Outlet />}
    </div>
  )
}
