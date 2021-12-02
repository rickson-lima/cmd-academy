import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Header from "../../components/Header";
import Modal from "../../components/Modal";
import NewTopic from "../../components/NewTopic";
import Sidebar from "../../components/Sidebar";

import { Container } from "./styles";
import { AppBackground } from "../../styles/global";

export default function Notifications() {
  const [students, setStudents] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.title = "Notificações | CMD Academy";

    // async function fetchStudents() {
    //   try {
    //     const response = await api.get("/users/students");

    //     setStudents(response.data);
    //   } catch (err) {
    //     alert("Erro ao listar os usarios.");
    //   }
    // }

    // fetchStudents();
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
            {/* {students &&
              students.map((student, index) => (
                <UserCard user={student} key={index} />
              ))} */}
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
