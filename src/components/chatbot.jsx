import { useState, useEffect, useRef } from "react";
import { faqs } from "../data/faqdata";
import ChatMessage from "./chatmessage";
import ChatInput from "./chatinput";
import FAQSuggestions from "./faqsuggestions";
import styles from "./ChatBot.module.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleUserMessage = (text) => {
    setMessages((prev) => [...prev, { from: "user", text }]);
    setIsTyping(true);
  
    setTimeout(() => {
      const input = text.toLowerCase();
  
      const matched = faqs.find((faq) =>
        faq.keywords.some((keyword) => input.includes(keyword))
      );
  
      const response = matched
        ? matched.answer
        : "Sorry, I don't have an answer for that.";
  
      setMessages((prev) => [...prev, { from: "bot", text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        {messages.map((msg, i) => (
          <ChatMessage key={i} from={msg.from} text={msg.text} />
        ))}
        {isTyping && (
          <div className={styles.typingIndicator}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <FAQSuggestions onSelect={handleUserMessage} />
      <ChatInput onSend={handleUserMessage} />
    </div>
  );
};

export default ChatBot;
