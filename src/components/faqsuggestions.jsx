import { faqs } from "../data/faqdata";
import styles from "./FAQSuggestions.module.css";

const FAQSuggestions = ({ onSelect }) => (
  <div className={styles.suggestionContainer}>
    {faqs.map((faq, index) => (
      <button
        key={index}
        onClick={() => onSelect(faq.question)}
        className={styles.suggestionButton}
      >
        {faq.question}
      </button>
    ))}
  </div>
);

export default FAQSuggestions;
