import React, { useState } from "react";
import { withRouter } from "react-router";

import { Container, UserInfo, FilePicker, Form } from "./styles";
import { useSession } from "../../providers/userSession";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";

import DocumentIcon from "../../assets/document.svg";
import ImageIcon from "../../assets/image.svg";
import VideoIcon from "../../assets/video.svg";
import NewIcon from "../../assets/new.svg";

import styles from "../../styles/components/Button.module.css";
import formattedUserName from "../../utils/formatUserName";

function NewTopic(props) {
  const { user } = useSession();

  const [state, setState] = useState({
    title: "",
    content: "",
    image: "",
  });

  const onFileChange = (event) => {
    setState((prev) => ({ ...prev, image: event.target.files[0] }));
  };

  const displayImage = () => {
    if (!state.image) return;
    const outputImage = URL.createObjectURL(state.image);
    return outputImage;
  };

  const handleTopicPost = async (e) => {
    e.preventDefault();

    const { title, content, image } = state;

    if (!title || !content) {
      toast.error("Por favor, preencha os campos Título e Descrição...");
    } else {
      try {
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("content", content);

        await toast.promise(api.post("/posts", formData, config), {
          pending: "Criando postagem...",
          success: "Post criado com sucesso!",
          error: "Falha ao criar seu post... Tente novamente.",
        });

        props.history.go();
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <Container>
      <aside>
        <UserInfo>
          <img src={user.avatar} alt={`Avatar ${user.id}`} />
          <small>{formattedUserName(user.name)}</small>
        </UserInfo>

        <FilePicker>
          <input type="file" name="document" id="doc" accept=".pdf" />

          <label htmlFor="doc">
            <img src={DocumentIcon} alt="Documento" />
            Documento
          </label>

          <input
            type="file"
            form="new-topic"
            name="image"
            id="image"
            accept=".png"
            onChange={(e) => onFileChange(e)}
          />

          <label htmlFor="image">
            <img src={ImageIcon} alt="Imagem" />
            Imagem
          </label>

          <input type="file" id="video" name="video" accept=".mp4" />

          <label htmlFor="video">
            <img src={VideoIcon} alt="Vídeo" />
            Vídeo
          </label>
        </FilePicker>

        <button
          type="submit"
          form="new-topic"
          title="Publicar tópico"
          className={`${styles["primary-container"]} button`}
        >
          <img src={NewIcon} alt="Novo tópico" className="fill-white" />
          Publicar
        </button>
      </aside>

      <Form id="new-topic" onSubmit={handleTopicPost}>
        <fieldset>
          <header>
            <input
              type="text"
              name="title"
              placeholder="Digite o titulo aqui..."
              onChange={(e) =>
                setState((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </header>

          <main>
            <textarea
              name="content"
              rows="12"
              maxLength="400"
              placeholder="Digite o texto aqui..."
              onChange={(e) =>
                setState((prev) => ({ ...prev, content: e.target.value }))
              }
            ></textarea>

            <div id="output-file">
              <img src={state.image && displayImage()} alt="" />
            </div>
          </main>
        </fieldset>
      </Form>
      <ToastContainer />
    </Container>
  );
}

export default withRouter(NewTopic);
