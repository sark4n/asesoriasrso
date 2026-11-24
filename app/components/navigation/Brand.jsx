export function Logo() {
  return <svg className="rso-logo" viewBox="0 0 126 46" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="round">
      <path d="M5 35V7H22C35 7 35 22 22 22H7M22 22L34 35" />
      <path d="M74 7H53C42 7 42 21 53 21H62C73 21 73 35 62 35H42" />
      <path d="M98 7H105C123 7 123 35 105 35H98C80 35 80 7 98 7Z" />
    </g>
    <path className="logo-connection" d="M33 42H85" stroke="currentColor" strokeWidth="2" />
    <circle cx="33" cy="42" r="2" fill="currentColor" /><circle cx="85" cy="42" r="2" fill="currentColor" />
  </svg>;
}

export default function Brand() {
  return <><Logo /><span className="brand-descriptor">TECNOLOGÍA<br />CON PROPÓSITO</span></>;
}
