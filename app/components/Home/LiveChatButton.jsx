// components/LiveChatButton.jsx
import React from 'react';
import { MessageCircle } from 'lucide-react';

const LiveChatButton = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <a
        href="https://wa.me/+923006407345" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <MessageCircle size={20} />
        <span>Chat with us</span>
      </a>
    </div>
  );
};

export default LiveChatButton;
