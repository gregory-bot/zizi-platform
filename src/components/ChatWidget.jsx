import { useState, useEffect, useRef } from 'react';
import { FaArrowUp, FaPhoneAlt } from 'react-icons/fa'; // Import icons

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false); // Typing indicator state
  const messagesEndRef = useRef(null); // Ref for auto-scrolling

  // Function to scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Automatically scroll to the bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user's message to the chat
    setMessages([
      ...messages,
      { text: newMessage, sender: 'user', timestamp: new Date() },
    ]);
    setNewMessage('');

    // Simulate bot's response after a delay
    setIsBotTyping(true); // Show typing indicator
    setTimeout(() => {
      const serviceResponses = {
        'ai-powered analytics':
        'Our platform uses advanced AI to analyze skill demands and curriculum content to identify mismatches and emerging trends. Would you like to learn more?',
      'blockchain security':
        'All credentials, curricula, and collaboration data are secured using blockchain technology for maximum integrity and trustworthiness. Can we provide more details?',
      'industry integration':
        'Organizations declare their skill needs, access talent insights, and directly collaborate with educational institutions. Would you like to explore this feature?',
      'curriculum enhancement':
        'Institutions receive real-time feedback to improve their training programs and align them with industry demands. Would you like to know how it works?',
      'public verification':
        'Customers can verify service providers, professionals, and institutions through our transparent dashboard. Would you like to see how verification works?',
      'continuous improvement':
        'Data-driven insights help track progress, measure impact, and adapt to changing market conditions. Would you like to explore our analytics tools?',
    };

      const greetings = ['hello', 'hi', 'hey', 'mambo', 'sasa', 'niaje', 'vipi', 'habari', 'how are you', 'good afternoon', 'good morning', 'good evening', 'uko aje', 'greetings'];
      const serviceKeywords = [
        'ai',
        'analytics',
        'blockchain',
        'security',
        'industry',
        'integration',
        'curriculum',
        'enhancement',
        'verification',
        'improvement',
        'data',
        'insights',
      ];

      const services = [
        { id: 1, name: 'AI-Powered Analytics' },
        { id: 2, name: 'Blockchain Security' },
        { id: 3, name: 'Industry Integration' },
        { id: 4, name: 'Curriculum Enhancement' },
        { id: 5, name: 'Public Verification' },
        { id: 6, name: 'Continuous Improvement' },
      ];

      const userRequest = newMessage.trim().toLowerCase();
      let botResponse = '';

      // Check for greetings
      const isGreeting = greetings.some((greeting) =>
        userRequest.includes(greeting)
      );
      if (isGreeting) {
        botResponse = 'sasa🙂 How can we assist you today?';
      }
      // Check for service-related keywords
      else {
        const matchedService = serviceKeywords.find((keyword) =>
          userRequest.includes(keyword)
        );
        if (matchedService) {
          botResponse = `We have a great selection of ${matchedService}. Here are some options:\n\n${services
            .map((service) => service.name)
            .join('\n')}\n\nCheck our website for more details!`;
        } else {
          botResponse =
          'I’m here to help! You can ask about features like "AI-Powered Analytics", "Blockchain Security", or "Curriculum Enhancement".';

        }
      }

      // Add bot's response to the chat
      setMessages((prev) => [
        ...prev,
        { text: botResponse, sender: 'bot', timestamp: new Date() },
      ]);
      setIsBotTyping(false); // Hide typing indicator
    }, 3000); // Simulate a 3-second delay for bot response
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-0 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-black transition duration-300 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Phone Call FAB */}
      <a
        href="tel:+254748163492"
        className="fixed bottom-6 left-2 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* Chat Widget */}
      <div
        className={`fixed bottom-24 right-2 w-72 sm:w-80 bg-white rounded-lg shadow-xl z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold">talk to us😊</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="h-72 sm:h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-lg p-3 ${
                  message.sender === 'user' ? 'bg-green-500 text-white' : 'bg-gray-100'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          {/* Typing Indicator */}
          {isBotTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-green-600 rounded-full animate-bounce delay-100"></div>
                  <div className="h-2 w-2 bg-green-600 rounded-full animate-bounce delay-200"></div>
                  <div className="h-2 w-2 bg-green-600 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </div>
          )}
          {/* Ref for auto-scrolling */}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="type a message..."
              className="flex-1 min-w-0 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}