import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../../assets/logo.png";

import styles from "../../styles/components/Button.module.css";
import { Form, Container } from "./styles";

class SignUp extends Component {
  componentDidMount() {
    document.title = "Cadastrar | CMD Academy";
  }

  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Por favor, preencha todos os campos para continuar!");
    } else {
      try {
        await toast.promise(
          api.post("/users", { name, email, password, confirmPassword }),
          {
            pending: "Cadastrando novo usuário...",
            success: "Cadastrado com sucesso! Redirecionando para o login...",
            error:
              "Erro ao cadastrar. Verifique suas credenciais e tente de novo.",
          }
        );

        setTimeout(() => this.props.history.push("/signin"), 5000);
      } catch (err) {
        const error = err.response.data.error;

        toast.error(error);
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp} className="drop-shadow">
          <img src={Logo} alt="CMD Academy Logo" />
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
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
          <input
            type="password"
            placeholder="Confirme a senha"
            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
          />
          <button className={`${styles["primary-container"]}`} type="submit">
            Cadastrar
          </button>
          <hr />
          <Link to="/signin">Fazer login</Link>
        </Form>
        <ToastContainer />
      </Container>
    );
  }
}

export default withRouter(SignUp);
