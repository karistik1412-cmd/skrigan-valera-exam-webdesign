import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-playfair text-8xl lg:text-9xl font-bold text-[#E63946] mb-4">404</h1>
        <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-[#222222] mb-4">
          Страница не найдена
        </h2>
        <p className="text-[#666666] mb-8">
          К сожалению, страница, которую вы ищете, не существует или была перемещена
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-[#E63946] hover:bg-[#d32f3c] text-white font-semibold rounded transition-colors"
          >
            <Home className="size-5" />
            На главную
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white font-semibold rounded transition-colors"
          >
            <Search className="size-5" />
            Поиск новостей
          </Link>
        </div>
      </div>
    </div>
  );
}
