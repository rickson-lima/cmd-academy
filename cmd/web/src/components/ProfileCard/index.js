import React from "react";
import { Card, LeftCol, RightCol } from "./styles";

import EmailIcon from "../../assets/email.svg";
import ConnectIcon from "../../assets/connect.svg";
import WebsiteIcon from "../../assets/link.svg";

import Button from "../Button";

export default function UserCard({ user }) {
  return (
    <Card className="drop-shadow">
      <LeftCol>
        <img src={user["url_avatar"]} alt={`Avatar ${user.id}`} />

        <Button title="Email" icon={EmailIcon} sx="secondary" />
        <Button title="Conectar" icon={ConnectIcon} sx="secondary" />
        <Button title="Website" icon={WebsiteIcon} sx="secondary" />
      </LeftCol>

      <RightCol>
        <h4>{user.type}</h4>
        <h1>{user.name}</h1>
        <h3>{user.profession}</h3>

        <div>
          <h2>Sobre mim</h2>
          <p>{user.bio}</p>
        </div>
      </RightCol>
    </Card>
  );
}
