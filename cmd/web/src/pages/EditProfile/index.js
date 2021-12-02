import React, { useState, useEffect } from "react";

import Modal from "../../components/Modal";
import NewTopic from "../../components/NewTopic";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";

import { useHistory } from "react-router";

import {
  Container,
  FormContainer,
  Form,
  ProfilePicture,
  InputGroup,
} from "./styles";

import { AppBackground } from "../../styles/global";

import { useSession } from "../../providers/userSession";

import api from "../../services/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditProfile() {
  const { user } = useSession();
  const history = useHistory();

  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");

  const [userData, setUserData] = useState({
    bio: "",
    name: "",
    email: "",
    url_avatar: "",
    profession: "",
  });

  useEffect(() => {
    document.title = "Seu Perfil | CMD Academy";

    if (!user.id) return;

    async function fetchUser() {
      try {
        const response = await api.get(`/users/${user.id}`);

        setUserData(response.data.user);
        setImage(response.data.user.url_avatar);
      } catch (err) {
        alert("Erro ao listar usuario.");
      }
    }

    fetchUser();
  }, [user]);

  const isEmpty = (value) => (value === "null" ? "" : value);

  const onFileChange = (event) => {
    setUserData((prev) => ({ ...prev, url_avatar: event.target.files[0] }));
  };

  useEffect(() => {
    if (!userData.url_avatar) return;
    displayImage();
  }, [userData.url_avatar]);

  const displayImage = () => {
    const avatar = userData.url_avatar;

    if (typeof avatar === "string") return;

    const outputImage = URL.createObjectURL(avatar);
    setImage(outputImage);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    // axios headers config
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      const formData = new FormData();
      formData.append("bio", userData.bio);
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("avatar", userData.url_avatar);
      formData.append("profession", userData.profession);

      const response = await toast.promise(
        api.put(`/users/${user.id}`, formData, config),
        {
          pending: "Atualizando...",
          success: "Perfil atualizado com sucesso!",
          error: "Ocooreu um erro ao tentar atualizar seu perfil.",
        }
      );

      console.log(response.data);
    } catch (err) {
      toast.error("Erro: " + err.response.data.error);
    }
  };

  return (
    <>
      <AppBackground />
      <Container>
        <Sidebar openModal={setOpenModal} />

        <FormContainer className="drop-shadow">
          <Form id="update-profile" onSubmit={handleUpdateProfile}>
            <fieldset>
              <div>
                <InputGroup>
                  <label htmlFor="user-name">Nome</label>
                  <input
                    type="text"
                    value={userData.name}
                    id="user-name"
                    maxLength="60"
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                  <p>O nome exibido em seu perfil</p>
                </InputGroup>

                <InputGroup>
                  <label htmlFor="user-email">Email</label>
                  <input
                    type="email"
                    value={userData.email}
                    id="user-email"
                    disabled
                  />
                  <p>O seu email para login e contato com outros usuários</p>
                </InputGroup>

                <InputGroup>
                  <label htmlFor="user-bio">Profissão</label>
                  <input
                    type="text"
                    id="user-profession"
                    value={isEmpty(userData.profession)}
                    maxLength="20"
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        profession: e.target.value,
                      }))
                    }
                  />
                  <p>
                    Informe a sua profissão atual <small>(max. 20)</small>
                  </p>
                </InputGroup>

                <InputGroup>
                  <label htmlFor="user-bio">Bio</label>
                  <textarea
                    id="user-bio"
                    maxLength="255"
                    value={isEmpty(userData.bio)}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        bio: e.target.value,
                      }))
                    }
                  ></textarea>

                  <p>
                    Uma breve descrição sobre quem é você{" "}
                    <small>(max. 255)</small>
                  </p>
                </InputGroup>
              </div>

              <ProfilePicture>
                <h3>Foto de Perfil</h3>
                <img src={image} alt={`${userData.name} Avatar`} />
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept=".png"
                  onChange={(e) => onFileChange(e)}
                />
              </ProfilePicture>

              <div
                style={{
                  display: "flex",
                  width: "80%",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  title="Atualizar Perfil"
                  formId="update-profile"
                />

                <Button title="Cancelar" sx="secondary" onPress={history.go} />
              </div>
            </fieldset>
          </Form>
        </FormContainer>

        {openModal && (
          <Modal closeModal={setOpenModal}>
            <NewTopic />
          </Modal>
        )}

        <ToastContainer />
      </Container>
    </>
  );
}
