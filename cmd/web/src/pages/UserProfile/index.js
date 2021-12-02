import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

import Modal from "../../components/Modal";
import NewTopic from "../../components/NewTopic";
import Sidebar from "../../components/Sidebar";
import ProfileCard from "../../components/ProfileCard";
import Post from "../../components/Post";

import { Container } from "./styles";
import { AppBackground } from "../../styles/global";

import api from "../../services/api";

export default function UserProfile() {
  const [openModal, setOpenModal] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState({});

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    document.title = user.name + " | CMD Academy";

    async function fetchUser() {
      try {
        const response = await api.get(`/users/${id}`);

        setUser(response.data.user);
        setUserPosts(response.data.posts);
      } catch (err) {
        history.goBack();
      }
    }

    fetchUser();
  }, []);

  return (
    <>
      <AppBackground />
      <Container>
        <Sidebar openModal={setOpenModal} />

        <div style={{ display: "block" }}>
          {user && <ProfileCard user={user} />}

          {userPosts &&
            userPosts.map((post, index) => <Post data={post} key={index} />)}
        </div>

        {openModal && (
          <Modal closeModal={setOpenModal}>
            <NewTopic />
          </Modal>
        )}
      </Container>
    </>
  );
}
