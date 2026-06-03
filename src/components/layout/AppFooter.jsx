import { Mail, Phone, Globe, Info, Settings, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL = 'https://wa.me/573228352645?text=Hola%2C%20deseo%20una%20consulta%20personalizada%20de%20numerolog%C3%ADa.';
const EMAIL_URL = 'mailto:angelusignis777@gmail.com?subject=Consulta%20Numerol%C3%B3gica%20Personalizada';

export default function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="glass-container px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 py-10 sm:py-12 lg:py-14">
          <div>
            <h4 className="footer-heading"><Mail size={18} /> Información de Contacto</h4>
            <p>
              <a href={EMAIL_URL} className="footer-link" target="_blank" rel="noopener noreferrer">
                <Mail size={16} /> angelusignis777@gmail.com
              </a>
            </p>
            <p>
              <a href={WHATSAPP_URL} className="footer-link" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} style={{ color: '#25D366' }} /> +57 3228352645
              </a>
            </p>
            <p><Globe size={16} /> Centro Místico Universal</p>
          </div>

          <div>
            <h4 className="footer-heading"><Info size={18} /> Sobre la Numerología</h4>
            <p>La numerología es una ciencia sagrada milenaria que estudia la vibración de los números y su influencia en nuestras vidas.</p>
            <p style={{ marginTop: 8 }}>Cada número posee una energía única que revela aspectos profundos de nuestra personalidad, destino y propósito espiritual.</p>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="footer-heading"><Settings size={18} /> Nuestros Servicios</h4>
            <ul className="footer-services">
              <li>Análisis Numerológico Completo</li>
              <li>Compatibilidad de Parejas</li>
              <li>Numerología Empresarial</li>
              <li><Link to="/contact" className="footer-link">Consultas Personalizadas</Link></li>
              <li>Cursos de Numerología</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Código Ancestral. Todos los derechos reservados.</p>
          <p>Desarrollado con amor por Oswaldo Castañeda</p>
          <p className="footer-quote">
            &ldquo;Los números son el lenguaje universal con el que Dios escribió el universo&rdquo; &mdash; Galileo Galilei
          </p>
        </div>
      </div>
    </footer>
  );
}
