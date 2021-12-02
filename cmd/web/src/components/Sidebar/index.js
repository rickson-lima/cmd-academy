import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

import Logo from "../../assets/logo.png";
import NewIcon from "../../assets/new.svg";

import { SidebarData } from "./Data";
import { Sidenav, UserOptions } from "./styles";

import { logout } from "../../services/auth";

import UserIcon from "../../assets/user.svg";
import LogoutIcon from "../../assets/logout.png";

function Sidebar(props) {
  const currentLocation = props.history.location.pathname;

  return (
    <Sidenav className="drop-shadow">
      <img src={Logo} alt="CMD Logo" />

      <nav>
        <ul>
          {SidebarData.map((item, index) => {
            const isCurrent = item.path === currentLocation ? true : false;
            return (
              <li key={index}>
                <NavLink to={item.path} activeClassName="current-page">
                  <img
                    src={item.icon}
                    alt={`Icon ${item.path}`}
                    className={isCurrent ? "fill-white" : ""}
                  />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}

          <button
            className="button"
            type="button"
            onClick={() => props.openModal(true)}
          >
            <img
              src={NewIcon}
              className="white"
              alt="Novo tópico"
              title="Criar novo tópico"
            />
            Novo tópico
          </button>
        </ul>
      </nav>
      <UserOptions>
        <NavLink to="/profile" activeClassName="current-page">
          <img src={UserIcon} alt="User" />
          Editar Perfil
        </NavLink>
        <Link to="/" onClick={logout}>
          <img src={LogoutIcon} alt="Logout" />
          Sair
        </Link>
      </UserOptions>
    </Sidenav>
  );
}

export default withRouter(Sidebar);
