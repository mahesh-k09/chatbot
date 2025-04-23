import { useState } from "react";
import ChatBot from "./chatbot";
import robot from "../assets/robot.png";
import styles from "./ChatWidget.module.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {!isOpen && (
        <button className={styles.chatButton} onClick={() => setIsOpen(true)}>
          <img src={robot} alt="Chatbot" className={styles.chatIcon} />
        </button>
      )}

      {isOpen && (
        <div className={styles.chatPopup}>
          {}
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <img src={robot} alt="Bot" className={styles.headerIcon} />
              <span>Chatbot</span>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
            >
              ✖
            </button>
          </div>

          <div className={styles.chatContent}>
            <ChatBot />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
