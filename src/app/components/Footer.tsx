import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A2A3A] text-white mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 bg-[#E63946] rounded flex items-center justify-center font-bold text-xl">
                N
              </div>
              <span className="text-xl font-bold font-playfair">NewsPortal</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Ваш надежный источник актуальных новостей из мира технологий, бизнеса и спорта.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-[#E63946] transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/category/technology" className="text-white/70 hover:text-[#E63946] transition-colors">
                  Технологии
                </Link>
              </li>
              <li>
                <Link to="/category/business" className="text-white/70 hover:text-[#E63946] transition-colors">
                  Бизнес
                </Link>
              </li>
              <li>
                <Link to="/category/sport" className="text-white/70 hover:text-[#E63946] transition-colors">
                  Спорт
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-white/70 hover:text-[#E63946] transition-colors">
                  Подписка
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-[#E63946] transition-colors">
                  О проекте
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 flex-shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 flex-shrink-0" />
                <span>info@newsportal.ru</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 bg-white/10 hover:bg-[#E63946] rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 bg-white/10 hover:bg-[#E63946] rounded flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 bg-white/10 hover:bg-[#E63946] rounded flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 bg-white/10 hover:bg-[#E63946] rounded flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/60">
          <p>&copy; 2026 NewsPortal. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
