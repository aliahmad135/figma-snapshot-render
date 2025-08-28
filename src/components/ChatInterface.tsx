import React from "react";
import { MoreVertical } from "lucide-react";

const ChatInterface = () => {
  // Calculate text alignment - using second card as reference point
  const referenceTextStart = 376 + 523.64 - 80; // 819.64px from screen left

  const profiles = [
    {
      name: "Tests",
      username: "@sarahchen5556",
      lastMessage: "Last message 1 week ago",
      firstSeen: "First seen 1 weeks ago",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      // First card specifications
      width: 554,
      height: 73,
      borderRadius: 20,
      top: 23,
      left: 361,
      borderWidth: 0.94,
      borderOpacity: 0.5,
      shadowBlur: 30.01,
      textMarginRight: 361 + 554 - referenceTextStart, // 95.36px
    },
    {
      name: "Martin S",
      username: "@martin254234",
      lastMessage: "Last message 2 week ago",
      firstSeen: "First seen 2 weeks ago",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      // Second card specifications (reference)
      width: 523.64,
      height: 69,
      borderRadius: 18.9,
      top: 73,
      left: 376,
      borderWidth: 0.89,
      borderOpacity: 0.3,
      shadowBlur: 25,
      textMarginRight: 80, // Keep as reference
    },
    {
      name: "Rylee Kee",
      username: "@rygree",
      lastMessage: "Last message 3 week ago",
      firstSeen: "First seen 3 weeks ago",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      // Third card specifications
      width: 478.11,
      height: 63,
      borderRadius: 17.26,
      top: 125,
      left: 399,
      borderWidth: 0.81,
      borderOpacity: 0.3,
      shadowBlur: 20,
      textMarginRight: 399 + 478.11 - referenceTextStart, // 57.47px
    },
  ];

  // Function to create border gradient for each card
  const getBorderGradient = (opacity: number) => {
    return `radial-gradient(42.19% 194.24% at 30.88% 57.81%, rgba(255, 255, 255, ${opacity}) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06))`;
  };

  return (
    <div
      style={{
        width: 936,
        height: 261,
        borderRadius: 20,
        position: "relative",
        overflow: "hidden",
        border: "0px solid #FFFFFF1A",
      }}
    >
      {/* Three gradient rectangles as background layers */}

      {/* First rectangle - bottom gradient */}
      <div
        style={{
          position: "absolute",
          width: 931,
          height: 228,
          top: 29,
          left: 2.5,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          background:
            "linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 100%) 80%)",
          zIndex: 11,
        }}
      />

      {/* Second rectangle - right gradient */}
      <div
        style={{
          position: "absolute",
          width: 257,
          height: 257,
          left: 697,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          background:
            "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0 0 0 / 100%) 100%)",
        }}
      />

      {/* Third rectangle - top highlight */}
      <div
        style={{
          position: "absolute",
          width: 931,
          height: 72,
          top: 0,
          left: 2.5,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          background:
            "linear-gradient(181deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
          transform: "rotate(-180deg)",
          zIndex: 11,
        }}
      />

      {/* Text block on the left */}
      <div
        style={{
          position: "absolute",
          width: 267,
          height: 87,
          top: 49,
          left: 20,
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: 24,
          lineHeight: "130%",
          letterSpacing: "0%",
          color: "white",
          zIndex: 12,
        }}
      >
        Test Tests Tests Test
        <br />
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: "130%",
            letterSpacing: "0%",
            color: "rgba(255, 255, 255, 0.25)",
          }}
        >
          Test Tests, Test Tests.
        </span>
        <br />
        Tests Tests Tests.
      </div>

      {/* Start a Conversation Button */}
      <div
        style={{
          position: "absolute",
          width: 216,
          height: 40,
          top: 188,
          left: 23,
          borderRadius: 20,
          borderStyle: "solid",
          borderColor: "transparent",
          background:
            "linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06)) padding-box padding-box, radial-gradient(42.19% 194.24% at 30.88% 57.81%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%) border-box border-box",
          boxShadow: "rgba(0, 0, 0, 0.5) 0px 5.72px 45.79px",
          padding: "10px 19px",
          gap: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 12,
        }}
      >
        {/* Ellipse background inside button */}
        <div
          style={{
            position: "absolute",
            width: 213.77,
            height: 39.15,
            top: 1.37,
            left: 1.12,
            background: "rgba(21, 18, 21, 0.31)",
            backdropFilter: "blur(60.42px)",
            borderRadius: "inherit",
            zIndex: 13,
          }}
        />

        <span
          style={{
            fontFamily: "Inter",
            fontSize: 17,
            fontWeight: 400,
            color: "white",
            position: "relative",
            zIndex: 14,
          }}
        >
          Start a Conversation
        </span>
      </div>

      {/* Profile cards - stacked and overlapping */}
      {profiles.map((profile, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: profile.width,
            height: profile.height,
            top: profile.top,
            left: profile.left,
            borderRadius: profile.borderRadius,
            border: `${profile.borderWidth}px solid transparent`,
            background: "#FFFFFF0F",
            borderImage: getBorderGradient(profile.borderOpacity),
            borderImageSlice: 1,
            boxShadow: `0px 3.75px ${profile.shadowBlur}px 0px #00000080`,
            backdropFilter: "blur(500px)",
            zIndex: 10 - index, // Higher z-index for cards on top
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          {/* Profile content */}
          <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
            {/* Avatar with online indicator */}
            <div style={{ position: "relative", marginRight: 12 }}>
              <img
                src={profile.avatar}
                alt={`${profile.name} avatar`}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              {/* Online indicator */}
              <div
                style={{
                  position: "absolute",
                  top: -2,
                  right: -2,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#22c55e",
                  border: "2px solid #1a1a1a",
                }}
              />
            </div>

            {/* Profile info */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "white",
                  marginBottom: 2,
                }}
              >
                {profile.name}
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontSize: 13,
                  color: "rgba(255, 255, 255, 0.25)",
                }}
              >
                {profile.username}
              </div>
            </div>

            {/* Timestamp info */}
            <div
              style={{
                textAlign: "left",
                marginRight: profile.textMarginRight,
              }}
            >
              <div
                style={{
                  fontFamily: "Inter",
                  fontSize: 14,
                  color: "rgba(255, 255, 255, 0.6)",
                  marginBottom: 2,
                }}
              >
                {profile.lastMessage}
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontSize: 14,
                  color: "rgba(255, 255, 255, 0.25)",
                }}
              >
                {profile.firstSeen}
              </div>
            </div>

            {/* 3-dot menu icon */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 20,
                height: 20,
                cursor: "pointer",
                color: "rgba(255, 255, 255, 0.5)",
                marginLeft: 4,
              }}
            >
              <MoreVertical size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatInterface;
