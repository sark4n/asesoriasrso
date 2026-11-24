import HomePage from './components/HomePage';
import { pageMetadata } from './lib/site';
export const metadata = pageMetadata({ title: 'Software y ERP a medida para pymes en Chile | RSO', description: 'Software y ERP a medida para pymes chilenas. Conecta ventas, inventario y procesos con integraciones e IA aplicada. Trato directo y desarrollo por etapas.', path: '/' });
export default function Home() { return <HomePage />; }
