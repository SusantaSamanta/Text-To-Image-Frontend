import React from "react";

const Community = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center gap-4 p-4">
      {/* Chat Bubbles */}
      <div className="w-72 h-72 rounded-2xl bg-gradient-to-l from-[#e0e0e0] via-[#f0f0f0] to-[#e0e0e0] shimmer"></div>
      <div className="w-72 h-72 rounded-2xl bg-gradient-to-l from-[#e0e0e0] via-[#f0f0f0] to-[#e0e0e0] shimmer"></div>
      <div className="w-72 h-72 rounded-2xl bg-gradient-to-l from-[#e0e0e0] via-[#f0f0f0] to-[#e0e0e0] shimmer"></div>

{/* background: linear-gradient(
            90deg,
            #e0e0e0 25%,
            #f0f0f0 50%,
            #e0e0e0 75%
          ); */}
      <style>{`
        .shimmer {
          
          background-size: 200% 100%;
          animation: shimmer 1.8s infinite linear;
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Community;
