import { useEffect } from "react";

const N8NChat = () => {
  useEffect(() => {
    // Load n8n chat CSS
    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load n8n chat script
    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'YOUR_PRODUCTION_WEBHOOK_URL',
        initialMessages: [
          'Hey there! 👋',
          'I\\'m Jervis, your personal AI assistant. How can I help you today?'
        ],
        i18n: {
          en: {
            title: 'JERVIS',
            subtitle: 'Personal AI Agent',
            inputPlaceholder: 'Ask me anything...',
            getStarted: 'Start Conversation',
            footer: '',
          },
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      link.remove();
      script.remove();
    };
  }, []);

  return null;
};

export default N8NChat;
