"use client";

import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/auth-image.png"
            alt="Auth image"
            width={550}
            height={550}
            className="rounded-xl object-contain mr-40"
            style={{
              animation: "fly 4s infinite alternate",
            }}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes fly {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
