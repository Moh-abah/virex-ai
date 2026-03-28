// components/AssistantPopup.tsx
"use client";

import { useState } from "react";
import { X, Minimize2, Maximize2, MessageSquare } from "lucide-react"; // استخدم أي أيقونات متوفرة لديك

export default function AssistantPopup() {
 const [isOpen, setIsOpen] = useState(false); // true = الإطار مفتوح، false = الزر فقط

 const toggleOpen = () => setIsOpen(!isOpen);
 const close = () => setIsOpen(false);

 return (
  <>
   {/* الزر الذي يظهر عندما يكون الإطار مغلقاً */}
   {!isOpen && (
    <button
     onClick={toggleOpen}
     className="fixed bottom-5 right-5 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
     aria-label="open Assistant"
    >
     <MessageSquare className="w-6 h-6" />
    </button>
   )}

   {/* الإطار المنبثق عندما يكون مفتوحاً */}
   {isOpen && (
    <div className="fixed bottom-5 right-5 z-50">
     <div className="relative">
      {/* أزرار التحكم داخل الإطار */}
      <div className="absolute top-2 right-2 flex gap-2 z-10">
       <button
        onClick={close}
        className="bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition"
        aria-label="close"
       >
        <X className="w-4 h-4" />
       </button>
       {/* يمكن إضافة زر تصغير إذا أردت الإبقاء على الإطار لكن بتصغير حجمه */}
       {/* <button
                onClick={() => console.log("تصغير")}
                className="bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition"
                aria-label="تصغير"
              >
                <Minimize2 className="w-4 h-4" />
              </button> */}
      </div>

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