// components/AssistantPopup.tsx
"use client";

import { useState } from "react";
import { Phone, Minimize2 } from "lucide-react"; // or any icon library

export default function AssistantPopup() {
 const [isExpanded, setIsExpanded] = useState(false); // false = minimized, true = expanded

 const expand = () => setIsExpanded(true);
 const minimize = () => setIsExpanded(false);

 return (
  <>
   {/* Minimized state: just a button */}
   {!isExpanded && (
    <button
     onClick={expand}
     className="fixed bottom-5 right-5 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all z-50 flex items-center gap-2"
     aria-label="Open assistant"
    >
     <Phone className="w-5 h-5" />
     <span className="hidden sm:inline">Assistant</span>
    </button>
   )}

   {/* Expanded state: iframe with minimize button */}
   {isExpanded && (
    <div className="fixed bottom-5 right-5 z-50">
     <div className="relative">
      <button
       onClick={minimize}
       className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition z-10"
       aria-label="Minimize"
      >
       <Minimize2 className="w-4 h-4" />
      </button>

      <iframe
       src="https://virex1-ai-1hicmx.sandbox.livekit.io"
       style={{
        width: "360px",
        height: "600px",
        border: "none",
        borderRadius: "16px",
        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.02)",
       }}
       allow="microphone; camera"
       title="VIREX AI Voice Assistant"
      />
     </div>
    </div>
   )}
  </>
 );
}