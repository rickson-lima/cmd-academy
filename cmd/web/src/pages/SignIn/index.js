import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../../assets/logo.png";

import { Form, Container } from "./styles";
import styles from "../../styles/components/Button.module.css";

class SignIn extends Component {
  componentDidMount() {
    document.title = "Entrar | CMD Academy";
  }

  state = {
    email: "",
    password: "",
  };

  handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    if (!email || !password) {
      toast.error("Por favor, preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await toast.promise(
          api.post("/auth", { email, password }),
          {
            pending: "Entrando...",
            success: "Logado com sucesso!",
            error:
              "Falha ao fazer login. Verifique suas credencias e tente de novo.",
          }
        );

        login(response.data);

        this.props.history.push("/home");
        this.props.history.go();
      } catch (err) {
        toast.error("Erro: " + err.response.data.error);
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn} className="drop-shadow">
          <img src={Logo} alt="CMD Academy logo" />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button className={`${styles["primary-container"]}`} type="submit">
            Entrar
          </button>
          <hr />
          <Link to="/signup">Criar uma conta</Link>
        </Form>
        <ToastContainer />
      </Container>
    );
  }
}

export default withRouter(SignIn);
