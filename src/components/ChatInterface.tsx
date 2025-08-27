const ChatInterface = () => {
  const users = [
    {
      name: "Tests",
      username: "@sarahchen5556",
      lastMessage: "Last message 1 week ago",
      firstSeen: "First seen 1 weeks ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
    },
    {
      name: "Martin S",
      username: "@martin234234", 
      lastMessage: "Last message 2 week ago",
      firstSeen: "First seen 2 weeks ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
    },
    {
      name: "Rylee Kee",
      username: "@ryleekee23",
      lastMessage: "Last message 3 week ago", 
      firstSeen: "First seen 3 weeks ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
    }
  ];

  return (
    <div 
      className="bg-chat-background border border-border rounded-xl overflow-hidden"
      style={{ width: '936px', height: '261px' }}
    >
      <div className="flex h-full">
        {/* Left Section */}
        <div className="flex flex-col justify-between p-8" style={{ width: '360px' }}>
          <div>
            <h1 className="text-chat-text-primary text-2xl font-medium leading-tight mb-6">
              Test Tests Tests Test<br />
              Test Tests, Test Tests.<br />
              Tests Tests Tests
            </h1>
          </div>
          <button className="bg-chat-button hover:bg-chat-button-hover text-chat-text-primary px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 self-start">
            Start a Conversation
          </button>
        </div>
        
        {/* Right Section */}
        <div className="flex-1 p-6" style={{ width: '576px' }}>
          <div className="space-y-4">
            {users.map((user, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-chat-background"></div>
                  </div>
                  <div>
                    <div className="text-chat-text-primary text-sm font-medium">
                      {user.name}
                    </div>
                    <div className="text-chat-text-secondary text-xs">
                      {user.username}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-chat-text-secondary text-xs">
                    {user.lastMessage}
                  </div>
                  <div className="text-chat-text-secondary text-xs mt-0.5">
                    {user.firstSeen}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;