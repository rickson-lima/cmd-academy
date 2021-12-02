import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "./styles";

import Button from "../Button";

import ConnectIcon from "../../assets/connect.svg";

export default function UserCard({ user }) {
  const userLink = `/users/${user.id}`;

  return (
    <Card className="drop-shadow">
      <div>
        <img src={user["url_avatar"]} alt={`Avatar ${user.id}`} />
      </div>

      <Container>
        <h3>{user.name}</h3>

        <div>
          <Link to={userLink}>
            <Button title="Ver Perfil" sx="secondary" />
          </Link>

          <Button title="Conectar" icon={ConnectIcon} sx="primary" />
        </div>
      </Container>
    </Card>
  );
}
