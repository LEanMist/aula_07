import Container from "./components/Container";
import MainForm from "./components/MainForm";
import DefaultInput from "./components/DefaultInput";
import DefaultButton from "./components/DefaultButton";

import { Mail, Lock } from "lucide-react";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <Container>
      <MainForm>
        <form className="form">
          <h2 style={{ textAlign: "center" }}>Login</h2>

          <DefaultInput
            icon={Mail}
            type="email"
            placeholder="E-mail"
            required
          />

          <DefaultInput
            icon={Lock}
            type="password"
            placeholder="Senha"
            required
          />

          <DefaultButton type="submit">
            Entrar
          </DefaultButton>
        </form>
      </MainForm>
    </Container>
  );
}