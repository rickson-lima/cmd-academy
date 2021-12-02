import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Header from "../../components/Header";
import Modal from "../../components/Modal";
import NewTopic from "../../components/NewTopic";
import Sidebar from "../../components/Sidebar";

import { Container } from "./styles";
import { AppBackground } from "../../styles/global";
import UserCard from "../../components/UserCard";

export default function Instructors() {
  const [instructors, setInstructors] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.title = "Instrutores | CMD Academy";

    async function fetchInstructors() {
      try {
        const response = await api.get("/users/instructors");

        setInstructors(response.data);
      } catch (err) {
        alert("Erro ao listar os usarios.");
      }
    }

    fetchInstructors();
  }, []);

  return (
    <>
      <AppBackground />
      <Container>
        <Sidebar openModal={setOpenModal} />

        <div style={{ display: "block" }}>
          <Header />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {instructors &&
              instructors.map((instructor, index) => (
                <UserCard user={instructor} key={index} />
              ))}
          </div>
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
