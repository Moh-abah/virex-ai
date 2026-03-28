import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Permissions-Policy",
            // السماح للموقع الأساسي (self) وللنطاق الخارجي باستخدام الميكروفون والكاميرا
            value: "microphone=(self https://virex1-ai-1hicmx.sandbox.livekit.io), camera=(self https://virex1-ai-1hicmx.sandbox.livekit.io)",
          },
          // إذا كان لديك CSP (سياسة أمان المحتوى) يمكن إضافتها أيضاً لتأكيد السماح بالإطار
          {
            key: "Content-Security-Policy",
            value: "frame-src https://virex1-ai-1hicmx.sandbox.livekit.io;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;