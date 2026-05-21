/**
 * Configuracao centralizada do WhatsApp
 * Edite a mensagem aqui — ela sera aplicada em TODOS os botoes do site
 */

const WHATSAPP_NUMBER = '5551999223888';

const WHATSAPP_MESSAGE = 'Olá Dra. Ítala Chinazzo. Vim através do seu site...';

/** URL completa do WhatsApp com mensagem pre-preenchida */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
