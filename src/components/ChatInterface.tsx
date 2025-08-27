import React from "react";

const ChatInterface = () => {
  const cards = [
    {
      name: "Tests",
      username: "@sarahchen5556",
      last: "Last message 1 week ago",
      first: "First seen 1 weeks ago",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      w: 554,
      h: 73,
      top: 23,
      left: 361,
      radius: 20,
      borderWidth: 0.94,
      strength: "strong" as const,
      z: 30,
    },
    {
      name: "Martin S",
      username: "@martin234234",
      last: "Last message 2 week ago",
      first: "First seen 2 weeks ago",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      w: 523.6438598632812,
      h: 69,
      top: 73,
      left: 376,
      radius: 18.9,
      borderWidth: 0.89,
      strength: "medium" as const,
      z: 20,
    },
    {
      name: "Rylee Kee",
      username: "@ryleekee23",
      last: "Last message 3 week ago",
      first: "First seen 3 weeks ago",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      w: 478.109619140625,
      h: 63,
      top: 125,
      left: 399,
      radius: 17.26,
      borderWidth: 0.81,
      strength: "medium" as const,
      z: 10,
    },
  ];

  const borderSource = (strength: "strong" | "medium") =>
    strength === "strong"
      ?
        // radial + linear as provided in Figma
        "radial-gradient(42.19% 194.24% at 30.88% 57.81%, hsl(0 0% 100% / 0.5) 0%, hsl(0 0% 100% / 0) 100%), linear-gradient(0deg, hsl(0 0% 100% / 0.1), hsl(0 0% 100% / 0.1))"
      :
        "radial-gradient(42.19% 194.24% at 30.88% 57.81%, hsl(0 0% 100% / 0.3) 0%, hsl(0 0% 100% / 0) 100%), linear-gradient(0deg, hsl(0 0% 100% / 0.06), hsl(0 0% 100% / 0.06))";

  return (
    <div
      className="bg-chat-background"
      style={{
        width: "936px",
        height: "261px",
        borderRadius: 20,
        position: "relative",
        overflow: "hidden",
        border: "1px solid hsl(0 0% 100% / 0.1)",
      }}
      aria-label="Chat preview component"
    >
      {/* Gradient overlays (3 rectangles) */}
      <div
        style={{
          position: "absolute",
          left: 2.5,
          right: 2.5,
          top: 29,
          height: 228,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          background:
            "linear-gradient(180deg, hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.8) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 29,
          width: 257,
          height: 228,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          background:
            "linear-gradient(90deg, hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.8) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 2.5,
          right: 2.5,
          top: 0,
          height: 72,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          background:
            "linear-gradient(180deg, hsl(0 0% 100% / 0) 0%, hsl(0 0% 100% / 0.05) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Left text block */}
      <div
        className="text-chat-text-primary"
        style={{ top: 49, left: 20, width: 267, height: 87, position: "absolute" }}
      >
        <h1 className="text-[24px] leading-[100%] font-medium drop-shadow-[0_4px_4px_hsl(0_0%_0%_/0.25)]">
          Test Tests Tests Test
          <br />
          <span>Test Tests, Test Tests.</span>
          <br />
          Tests Tests Tests.
        </h1>
      </div>

      {/* CTA Button */}
      <button
        className="text-chat-text-primary text-sm font-medium"
        style={{
          position: "absolute",
          top: 188,
          left: 23,
          width: 219,
          height: 42,
          padding: "10px 19px",
          borderRadius: 20,
          background: "hsl(0 0% 100% / 0.06)",
          border: "1.43px solid transparent",
          borderImageSource:
            "radial-gradient(42.19% 194.24% at 30.88% 57.81%, hsl(0 0% 100% / 0.3) 0%, hsl(0 0% 100% / 0) 100%), linear-gradient(0deg, hsl(0 0% 100% / 0.06), hsl(0 0% 100% / 0.06))",
          borderImageSlice: 1,
          boxShadow: "0px 5.72px 45.79px 0px hsl(0 0% 0% / 0.5)",
          overflow: "hidden",
          backdropFilter: "blur(38.415px)",
          positionBehavior: "relative" as any,
        }}
      >
        <span
          style={{
            position: "absolute",
            inset: 1.5,
            borderRadius: 18,
            background: "hsl(0 0% 100% / 0.15)",
            filter: "blur(38.415px)",
            pointerEvents: "none",
          }}
        />
        <span style={{ position: "relative", zIndex: 1 }}>Start a Conversation</span>
      </button>

      {/* Stacked glass cards on the right side */}
      {cards.map((u, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            top: u.top,
            left: u.left,
            width: u.w,
            height: u.h,
            borderRadius: u.radius,
            borderWidth: u.borderWidth,
            borderStyle: "solid",
            borderColor: "transparent",
            background: "hsl(0 0% 100% / 0.06)",
            boxShadow: "0px 3.75px 30.01px 0px hsl(0 0% 0% / 0.5)",
            borderImageSlice: 1,
            borderImageSource: borderSource(u.strength),
            backdropFilter: "blur(500px)",
            zIndex: u.z,
          }}
        >
          <div className="flex items-center justify-between h-full px-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={u.avatar}
                  alt={`${u.name} avatar`}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div
                  className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                  style={{ background: "hsl(142 70% 45%)", borderColor: "hsl(var(--chat-background))" }}
                />
              </div>
              <div>
                <div className="text-chat-text-primary text-sm font-medium">{u.name}</div>
                <div className="text-chat-text-secondary text-xs">{u.username}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-chat-text-secondary text-xs">{u.last}</div>
              <div className="text-chat-text-secondary text-xs mt-0.5">{u.first}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatInterface;
