'use client';
import { useEffect, useRef, useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import Brand from './Brand';
import { CONTACT_DISPLAY, whatsappUrl } from '../../lib/contact';

const links = [
  { id: 'soluciones', label: 'Soluciones' },
  { id: 'enfoque', label: 'Nuestro enfoque' },
  { id: 'proceso', label: 'Cómo trabajamos' },
];

export default function RemakeNavbar({ home = true }) {
  const [scrolled, setScrolled] = useState(!home);
  const [active, setActive] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    let frame;
    const update = () => {
      setScrolled(!home || window.scrollY > 88);
      const ids = ['inicio', 'enfoque', 'soluciones', 'proceso', 'contacto'];
      const current = ids.filter(id => document.getElementById(id)?.getBoundingClientRect().top <= 170).pop();
      setActive(home ? (current || 'inicio') : '');
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, [home]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 901px)');
    const onResize = () => { if (media.matches) setMenuOpen(false); };
    media.addEventListener('change', onResize);
    return () => media.removeEventListener('change', onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const background = [...document.querySelectorAll('main, footer, .header, .skip-link')];
    const previousInert = background.map(element => element.inert);
    background.forEach(element => { element.inert = true; });
    const focusable = () => [...drawerRef.current.querySelectorAll('a[href], button')];
    drawerRef.current.querySelector('button').focus();
    const onKey = event => {
      if (event.key === 'Escape') { event.preventDefault(); setMenuOpen(false); }
      if (event.key === 'Tab') {
        const items = focusable();
        if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items.at(-1).focus(); }
        else if (!event.shiftKey && document.activeElement === items.at(-1)) { event.preventDefault(); items[0].focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      document.removeEventListener('keydown', onKey);
      toggleRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  const navLinks = (drawer = false) => <>{links.map(link => <a key={link.id} href={`${home ? '' : '/'}#${link.id}`} aria-current={active === link.id ? 'location' : undefined} onClick={() => setMenuOpen(false)}><span>{link.label}</span>{drawer && <span className="drawer-link-symbol" aria-hidden="true">+</span>}</a>)}<a href="/proyectos" onClick={() => setMenuOpen(false)}><span>Proyectos</span>{drawer && <span className="drawer-link-symbol" aria-hidden="true">+</span>}</a></>;

  return <>
    <header className={`header remake-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href={home ? '#inicio' : '/'} aria-label="RSO, inicio"><Brand /></a>
        <nav className="desktop-nav" aria-label="Navegación principal">{navLinks()}<a className="button button-lime nav-cta" href="#contacto" aria-current={active === 'contacto' ? 'location' : undefined}>Conversemos <FiMessageCircle /></a></nav>
        <div className="mobile-nav-actions"><a className="mobile-contact" href="#contacto">Hablemos <FiMessageCircle /></a><button ref={toggleRef} id="menu-toggle" className={`remake-menu-toggle ${menuOpen ? 'is-open' : ''}`} aria-label="Abrir menú" aria-expanded={menuOpen} aria-controls="mobile-drawer" onClick={() => setMenuOpen(true)}><span className="menu-lines" aria-hidden="true"><i /><i /></span><span className="menu-label">Menú</span></button></div>
      </div>
    </header>
    <div className={`drawer-layer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen} {...(!menuOpen ? { inert: '' } : {})}>
      <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} />
      <aside ref={drawerRef} className="mobile-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <div className="drawer-top"><a className="brand" href={home ? '#inicio' : '/'} aria-label="RSO, inicio" onClick={() => setMenuOpen(false)}><Brand /></a><button className="drawer-close remake-menu-toggle is-open" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}><span className="menu-lines" aria-hidden="true"><i /><i /></span></button></div>
        <p className="drawer-eyebrow" id="drawer-title">CONECTEMOS TU PRÓXIMO PASO</p>
        <nav className="drawer-nav" aria-label="Navegación móvil">{navLinks(true)}</nav>
        <a className="button button-lime drawer-cta" href="#contacto" onClick={() => setMenuOpen(false)}>Cuéntanos tu proyecto <FiMessageCircle /></a>
        <div className="drawer-bottom"><p>Una pyme TI chilena.<br />Una conversación directa.</p><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><FiMessageCircle /> {CONTACT_DISPLAY}</a><span>SOFTWARE · INTEGRACIONES · IA</span></div>
      </aside>
    </div>
  </>;
}
