import "./globals.css"
import Sidebar from "../components/sidebar/sidebar"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Game & Art",
  description: "Plataforma de jogos e artes",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Usando o menu lateral */}
        <aside className="fixed m-0 z-50 mr-5">
          <Sidebar />
        </aside>

        {/* Usando o conteúdo do site */}
        {children}
      </body>
    </html>
  )
}
