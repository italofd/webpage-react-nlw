import styles from "./styles.module.scss";
import { VscGithubInverted } from "react-icons/vsc";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export function LoginBox() {
  const { signUrl } = useContext(AuthContext);

  return (
    <>
      <div className={styles.loginBoxWrapper}>
        <strong>Entre e compartilhe sua mensagem</strong>
        <a href={signUrl} className={styles.signInWithGithub}>
          <VscGithubInverted />
          Entrar com github
        </a>
      </div>
    </>
  );
}
