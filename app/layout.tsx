// File: /app/layout.tsx

export const metadata = {
  title: 'JuriAudit',
  description: 'AI-powered legal content verification',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#fdf6e3] font-['Press_Start_2P'] text-black">
        {children}
      </body>
    </html>
  );
}
