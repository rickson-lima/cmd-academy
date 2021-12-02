import React, { useState } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

import {
  Container,
  AuthorInfo,
  LeftContainer,
  CenterContainer,
  RightContainer,
} from "./styles";

import formattedUserName from "../../utils/formatUserName";

import SolidHandshakeIcon from "../../assets/handshake-solid.svg";
import LightHandshakeIcon from "../../assets/handshake-light.svg";
import CommentIcon from "../../assets/comment.svg";

import { Link } from "react-router-dom";
import { useSession } from "../../providers/userSession";

function Post({ data }) {
  const [likesAmount, setLikesAmount] = useState(10);
  const [isLiked, setIsLiked] = useState(false);

  const { user } = useSession();

  const post = data;

  const handlePostLike = () => {
    if (isLiked) {
      setLikesAmount(likesAmount - 1);
      setIsLiked(false);
    } else {
      setLikesAmount(likesAmount + 1);
      setIsLiked(true);
    }
  };

  dayjs.extend(relativeTime);

  return (
    <Container className="drop-shadow">
      <LeftContainer>
        <Link to={`users/${post.author_id}`}>
          <AuthorInfo>
            <img
              src={post["author_avatar"]}
              alt={post["author_name"] + " Avatar"}
            />

            <small>
              {user.id == post.author_id
                ? "Você"
                : formattedUserName(post.author_name)}
            </small>
            <small>Aluno</small>
          </AuthorInfo>
        </Link>

        <span>{dayjs(post.created_at).fromNow(true)}</span>
      </LeftContainer>

      <CenterContainer>
        <article>
          <header>
            <h3>{post.title}</h3>
          </header>

          <p>{post.content}</p>

          <footer>
            <div title="Curtir tópico" onClick={handlePostLike}>
              <img
                src={isLiked ? SolidHandshakeIcon : LightHandshakeIcon}
                alt="Curtir tópico"
              />
              {likesAmount}
            </div>

            <div title="Comentar tópico">
              <img src={CommentIcon} alt="Comentar tópico" /> 5
            </div>
          </footer>
        </article>
      </CenterContainer>

      <RightContainer>
        {post["url_image"] && <img src={post["url_image"]} alt={post.id} />}
      </RightContainer>
    </Container>
  );
}

export default Post;
