// WhatsApp comercial confirmado por el propietario el 23 de noviembre de 2026.
export const CONTACT_PHONE = '56983401461';
export const CONTACT_DISPLAY = '+56 9 8340 1461';
export const whatsappUrl = (message = 'Hola RSO, me gustaría conversar sobre un proyecto para mi empresa.') =>
  `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(message)}`;
