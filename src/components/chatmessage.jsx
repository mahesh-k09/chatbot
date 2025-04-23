
import styles from "./ChatMessage.module.css";
import botAvatar from "../assets/robot.png";
import userAvatar from "../assets/user.png";

const ChatMessage = ({ from, text }) => {
  const isUser = from === "user";

  return (
    <div className={`${styles.messageRow} ${isUser ? styles.user : styles.bot}`}>
      {!isUser && <img src={botAvatar} alt="bot" className={styles.avatar} />}
      <div className={styles.bubble}>{text}</div>
      {isUser && <img src={userAvatar} alt="user" className={styles.avatar} />}
    </div>
  );
};

export default ChatMessage;
