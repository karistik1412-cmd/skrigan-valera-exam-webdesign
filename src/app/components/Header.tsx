import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Search, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const q = searchQuery.trim();
    if (q) {
      navigate(`/search?q=${encodeURIComponent(q)}`);
      setMobileMenuOpen(false);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <header className="bg-[#1A2A3A] text-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 lg:size-10 bg-[#E63946] rounded flex items-center justify-center font-bold text-lg lg:text-xl">
              N
            </div>
            <span className="text-lg lg:text-xl font-bold font-playfair">NewsPortal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="hover:text-[#E63946] transition-colors">
              Главная
            </Link>
            <Link to="/category/technology" className="hover:text-[#E63946] transition-colors">
              Технологии
            </Link>
            <Link to="/category/business" className="hover:text-[#E63946] transition-colors">
              Бизнес
            </Link>
            <Link to="/category/sport" className="hover:text-[#E63946] transition-colors">
              Спорт
            </Link>
            <Link to="/subscription" className="hover:text-[#E63946] transition-colors">
              Подписка
            </Link>
            <Link to="/about" className="hover:text-[#E63946] transition-colors">
              О проекте
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center gap-2 bg-white/10 rounded px-3 py-2 w-64">
            <button onClick={handleSearch} aria-label="Найти" className="flex-shrink-0">
              <Search className="size-5 text-white/60 hover:text-white transition-colors" />
            </button>
            <input
              type="text"
              placeholder="Поиск новостей..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="bg-transparent outline-none text-sm flex-1 placeholder:text-white/60"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded px-3 py-2">
                <button onClick={handleSearch} aria-label="Найти" className="flex-shrink-0">
                  <Search className="size-5 text-white/60 hover:text-white transition-colors" />
                </button>
                <input
                  type="text"
                  placeholder="Поиск новостей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  className="bg-transparent outline-none text-sm flex-1 placeholder:text-white/60"
                />
              </div>
              <Link
                to="/"
                className="py-2 hover:text-[#E63946] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                to="/category/technology"
                className="py-2 hover:text-[#E63946] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Технологии
              </Link>
              <Link
                to="/category/business"
                className="py-2 hover:text-[#E63946] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Бизнес
              </Link>
              <Link
                to="/category/sport"
                className="py-2 hover:text-[#E63946] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Спорт
              </Link>
              <Link
                to="/subscription"
                className="py-2 hover:text-[#E63946] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Подписка
              </Link>
              <Link
                to="/about"
                className="py-2 hover:text-[#E63946] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                О проекте
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
