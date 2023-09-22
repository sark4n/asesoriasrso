import Footer from './components/navigation/Footer'
import Navbar from './components/navigation/Navbar'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import { Titillium_Web} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const titillium = Titillium_Web({ subsets: ['latin'], weight:'700'})

export const metadata = {
  title: 'Asesorias RSO - Crece en internet con nosotros',
  description: 'Diseño Web, Manejo de Redes y contabilidad.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={titillium.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
