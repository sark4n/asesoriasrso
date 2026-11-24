import HomePage from './components/HomePage';
import { pageMetadata } from './lib/site';
export const metadata = pageMetadata({ title: 'RSO | Software a medida, ERP e IA en Chile', description: 'Empresa chilena de TI. Desarrollamos software y ERP a medida, conectamos sistemas y aplicamos IA a procesos de negocio. Conversemos sobre tu proyecto.', path: '/' });
export default function Home() { return <HomePage />; }
