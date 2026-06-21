import { useState } from 'react';
import { useParams } from 'react-router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { NewsCard } from '../components/NewsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categoryData: Record<string, { name: string; news: any[] }> = {
  technology: {
    name: 'Технологии',
    news: [
      {
        slug: 'ai-revolution-2026',
        title: 'ИИ-революция 2026: что изменилось за год',
        excerpt: 'Обзор главных достижений в области искусственного интеллекта',
        category: 'Технологии',
        categorySlug: 'technology',
        date: '23.05.2026',
        author: 'Иван Петров',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      },
      {
        slug: 'quantum-computing-breakthrough',
        title: 'Прорыв в квантовых вычислениях обещает революцию',
        excerpt: 'Ученые достигли нового уровня стабильности квантовых битов',
        category: 'Технологии',
        categorySlug: 'technology',
        date: '23.05.2026',
        author: 'Иван Петров',
        imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
      },
      {
        slug: 'space-mission-success',
        title: 'Успешный запуск новой космической миссии',
        excerpt: 'Ракета с научной аппаратурой отправилась к Марсу',
        category: 'Технологии',
        categorySlug: 'technology',
        date: '21.05.2026',
        author: 'Дмитрий Соколов',
        imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop',
      },
      {
        slug: '5g-network-expansion',
        title: 'Расширение 5G сети по всей стране',
        excerpt: 'Новые вышки обеспечат скоростной интернет в удаленных регионах',
        category: 'Технологии',
        categorySlug: 'technology',
        date: '20.05.2026',
        author: 'Светлана Орлова',
        imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      },
      {
        slug: 'robotics-healthcare',
        title: 'Роботы в медицине: новые возможности лечения',
        excerpt: 'Хирургические роботы повышают точность операций',
        category: 'Технологии',
        categorySlug: 'technology',
        date: '19.05.2026',
        author: 'Александр Новиков',
        imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      },
      {
        slug: 'cybersecurity-threats-2026',
        title: 'Киберугрозы 2026: как защитить свои данные',
        excerpt: 'Эксперты предупреждают о новых методах хакерских атак',
        category: 'Технологии',
        categorySlug: 'technology',
        date: '18.05.2026',
        author: 'Екатерина Морозова',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      },
    ],
  },
  business: {
    name: 'Бизнес',
    news: [
      {
        slug: 'startup-unicorn-valuation',
        title: 'Российский стартап достиг оценки в $1 млрд',
        excerpt: 'Компания в сфере финтеха привлекла крупные инвестиции',
        category: 'Бизнес',
        categorySlug: 'business',
        date: '22.05.2026',
        author: 'Мария Смирнова',
        imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
      },
      {
        slug: 'green-energy-investment',
        title: 'Инвестиции в зеленую энергетику достигли рекорда',
        excerpt: 'Мировые лидеры вкладывают триллионы в возобновляемые источники',
        category: 'Бизнес',
        categorySlug: 'business',
        date: '21.05.2026',
        author: 'Елена Кузнецова',
        imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
      },
      {
        slug: 'stock-market-rally',
        title: 'Фондовый рынок показывает рекордный рост',
        excerpt: 'Инвесторы оптимистично настроены на второй квартал',
        category: 'Бизнес',
        categorySlug: 'business',
        date: '20.05.2026',
        author: 'Андрей Павлов',
        imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      },
      {
        slug: 'ecommerce-trends-2026',
        title: 'Тренды электронной коммерции в 2026 году',
        excerpt: 'Онлайн-ритейл продолжает трансформацию покупательского опыта',
        category: 'Бизнес',
        categorySlug: 'business',
        date: '19.05.2026',
        author: 'Ирина Белова',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      },
    ],
  },
  sport: {
    name: 'Спорт',
    news: [
      {
        slug: 'football-championship-results',
        title: 'Чемпионат Европы: итоги четвертьфиналов',
        excerpt: 'Определились полуфиналисты главного футбольного турнира',
        category: 'Спорт',
        categorySlug: 'sport',
        date: '22.05.2026',
        author: 'Алексей Иванов',
        imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
      },
      {
        slug: 'tennis-grand-slam',
        title: 'Новая звезда тенниса выиграла турнир Большого шлема',
        excerpt: 'Молодая спортсменка удивила мир своей игрой',
        category: 'Спорт',
        categorySlug: 'sport',
        date: '20.05.2026',
        author: 'Ольга Волкова',
        imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop',
      },
      {
        slug: 'basketball-playoffs',
        title: 'Плей-офф баскетбольной лиги: сенсационные результаты',
        excerpt: 'Андердоги продолжают удивлять болельщиков',
        category: 'Спорт',
        categorySlug: 'sport',
        date: '19.05.2026',
        author: 'Сергей Козлов',
        imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop',
      },
      {
        slug: 'swimming-world-records',
        title: 'Чемпионат мира по плаванию: новые мировые рекорды',
        excerpt: 'Пловцы установили сразу три новых рекорда за день',
        category: 'Спорт',
        categorySlug: 'sport',
        date: '18.05.2026',
        author: 'Наталья Федорова',
        imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop',
      },
    ],
  },
};

const ITEMS_PER_PAGE = 6;

export function Category() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  const category = categoryData[categorySlug || 'technology'];
  const totalPages = Math.ceil(category.news.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentNews = category.news.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-6 lg:py-12">
      <Breadcrumbs items={[{ label: category.name }]} />

      <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-[#222222] mb-8">
        {category.name}
      </h1>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentNews.map((news) => (
          <NewsCard key={news.slug} {...news} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="size-10 rounded bg-white border border-gray-300 flex items-center justify-center hover:bg-[#E63946] hover:text-white hover:border-[#E63946] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#222222] disabled:hover:border-gray-300"
            aria-label="Previous page"
          >
            <ChevronLeft className="size-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`size-10 rounded flex items-center justify-center font-semibold transition-colors ${
                page === currentPage
                  ? 'bg-[#E63946] text-white'
                  : 'bg-white border border-gray-300 hover:bg-[#E63946] hover:text-white hover:border-[#E63946]'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="size-10 rounded bg-white border border-gray-300 flex items-center justify-center hover:bg-[#E63946] hover:text-white hover:border-[#E63946] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#222222] disabled:hover:border-gray-300"
            aria-label="Next page"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
}
