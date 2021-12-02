import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Post from "../../components/Post";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import NewTopic from "../../components/NewTopic";
import Sidebar from "../../components/Sidebar";

import { Container, PostsContainer } from "./styles";
import { AppBackground } from "../../styles/global";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.title = "Home | CMD Academy";

    async function getPosts() {
      try {
        const response = await api.get("/feed");

        setPosts(response.data);
      } catch (err) {
        alert("Erro ao listar os posts.");
      }
    }

    getPosts();
  }, []);

  return (
    <>
      <AppBackground />
      <Container>
        <Sidebar openModal={setOpenModal} />

        <PostsContainer>
          <Header />

          {posts &&
            posts.map((post) => {
              return <Post data={post} key={post.id} />;
            })}
        </PostsContainer>

        {openModal && (
          <Modal closeModal={setOpenModal}>
            <NewTopic />
          </Modal>
        )}
      </Container>
    </>
  );
}
