import { useSearchParams } from 'react-router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { NewsCard } from '../components/NewsCard';

const allNews = [
  {
    slug: 'ai-changes-tech-world',
    title: 'Искусственный интеллект меняет мир технологий',
    excerpt: 'Новые достижения в области ИИ открывают невероятные возможности',
    category: 'Технологии', categorySlug: 'technology',
    date: '23.05.2026', author: 'Иван Петров',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: 'искусственный интеллект ии инновации',
  },
  {
    slug: 'quantum-computing-breakthrough',
    title: 'Прорыв в квантовых вычислениях обещает революцию',
    excerpt: 'Ученые достигли нового уровня стабильности квантовых битов',
    category: 'Технологии', categorySlug: 'technology',
    date: '23.05.2026', author: 'Иван Петров',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
    tags: 'квантовые вычисления технологии инновации',
  },
  {
    slug: 'startup-unicorn-valuation',
    title: 'Российский стартап достиг оценки в $1 млрд',
    excerpt: 'Компания в сфере финтеха привлекла крупные инвестиции',
    category: 'Бизнес', categorySlug: 'business',
    date: '22.05.2026', author: 'Мария Смирнова',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
    tags: 'стартапы инвестиции бизнес финтех',
  },
  {
    slug: 'football-championship-results',
    title: 'Чемпионат Европы: итоги четвертьфиналов',
    excerpt: 'Определились полуфиналисты главного футбольного турнира',
    category: 'Спорт', categorySlug: 'sport',
    date: '22.05.2026', author: 'Алексей Иванов',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
    tags: 'футбол спорт олимпиада чемпионат',
  },
  {
    slug: 'green-energy-investment',
    title: 'Инвестиции в зеленую энергетику достигли рекорда',
    excerpt: 'Мировые лидеры вкладывают триллионы в возобновляемые источники',
    category: 'Бизнес', categorySlug: 'business',
    date: '21.05.2026', author: 'Елена Кузнецова',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
    tags: 'инвестиции экология зеленая энергетика',
  },
  {
    slug: 'space-mission-success',
    title: 'Успешный запуск новой космической миссии',
    excerpt: 'Ракета с научной аппаратурой отправилась к Марсу',
    category: 'Технологии', categorySlug: 'technology',
    date: '21.05.2026', author: 'Дмитрий Соколов',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop',
    tags: 'космос технологии инновации',
  },
  {
    slug: 'tennis-grand-slam',
    title: 'Новая звезда тенниса выиграла турнир Большого шлема',
    excerpt: 'Молодая спортсменка удивила мир своей игрой',
    category: 'Спорт', categorySlug: 'sport',
    date: '20.05.2026', author: 'Ольга Волкова',
    imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop',
    tags: 'теннис спорт олимпиада',
  },
  {
    slug: '5g-network-expansion',
    title: 'Расширение 5G сети по всей стране',
    excerpt: 'Новые вышки обеспечат скоростной интернет в удаленных регионах',
    category: 'Технологии', categorySlug: 'technology',
    date: '20.05.2026', author: 'Светлана Орлова',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    tags: '5g технологии инновации интернет',
  },
  {
    slug: 'ai-revolution-2026',
    title: 'ИИ-революция 2026: что изменилось за год',
    excerpt: 'Обзор главных достижений в области искусственного интеллекта',
    category: 'Технологии', categorySlug: 'technology',
    date: '23.05.2026', author: 'Иван Петров',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: 'искусственный интеллект ии инновации технологии',
  },
  {
    slug: 'stock-market-rally',
    title: 'Фондовый рынок показывает рекордный рост',
    excerpt: 'Инвесторы оптимистично настроены на второй квартал',
    category: 'Бизнес', categorySlug: 'business',
    date: '20.05.2026', author: 'Андрей Павлов',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    tags: 'инвестиции бизнес фондовый рынок',
  },
  {
    slug: 'ecommerce-trends-2026',
    title: 'Тренды электронной коммерции в 2026 году',
    excerpt: 'Онлайн-ритейл продолжает трансформацию покупательского опыта',
    category: 'Бизнес', categorySlug: 'business',
    date: '19.05.2026', author: 'Ирина Белова',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: 'бизнес стартапы инновации торговля',
  },
  {
    slug: 'robotics-healthcare',
    title: 'Роботы в медицине: новые возможности лечения',
    excerpt: 'Хирургические роботы повышают точность операций',
    category: 'Технологии', categorySlug: 'technology',
    date: '19.05.2026', author: 'Александр Новиков',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    tags: 'роботы инновации технологии медицина',
  },
  {
    slug: 'cybersecurity-threats-2026',
    title: 'Киберугрозы 2026: как защитить свои данные',
    excerpt: 'Эксперты предупреждают о новых методах хакерских атак',
    category: 'Технологии', categorySlug: 'technology',
    date: '18.05.2026', author: 'Екатерина Морозова',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
    tags: 'безопасность технологии кибер',
  },
  {
    slug: 'basketball-playoffs',
    title: 'Плей-офф баскетбольной лиги: сенсационные результаты',
    excerpt: 'Андердоги продолжают удивлять болельщиков',
    category: 'Спорт', categorySlug: 'sport',
    date: '19.05.2026', author: 'Сергей Козлов',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop',
    tags: 'баскетбол спорт олимпиада',
  },
  {
    slug: 'swimming-world-records',
    title: 'Чемпионат мира по плаванию: новые мировые рекорды',
    excerpt: 'Пловцы установили сразу три новых рекорда за день',
    category: 'Спорт', categorySlug: 'sport',
    date: '18.05.2026', author: 'Наталья Федорова',
    imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop',
    tags: 'плавание спорт рекорды олимпиада',
  },
  {
    slug: 'tech-companies-merger',
    title: 'Крупнейшие технологические компании объявили о слиянии',
    excerpt: 'Сделка года в мире бизнеса может изменить рынок',
    category: 'Бизнес', categorySlug: 'business',
    date: '23.05.2026', author: 'Мария Смирнова',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: 'бизнес стартапы инвестиции слияние',
  },
  {
    slug: 'olympic-games-records',
    title: 'Олимпийские игры: новые рекорды установлены',
    excerpt: 'Спортсмены продолжают удивлять своими достижениями',
    category: 'Спорт', categorySlug: 'sport',
    date: '23.05.2026', author: 'Алексей Иванов',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
    tags: 'олимпиада спорт рекорды',
  },
];

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = query.trim()
    ? allNews.filter((n) => {
        const q = query.toLowerCase();
        return (
          n.title.toLowerCase().includes(q) ||
          n.excerpt.toLowerCase().includes(q) ||
          n.tags.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-6 lg:py-12">
      <Breadcrumbs items={[{ label: 'Поиск' }]} />
      <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-[#222222] mb-2">
        Результаты поиска
      </h1>
      {query && (
        <p className="text-[#666666] mb-8">
          По запросу «<span className="text-[#E63946] font-semibold">{query}</span>»
          {results.length > 0
            ? ` найдено ${results.length} ${results.length === 1 ? 'материал' : results.length < 5 ? 'материала' : 'материалов'}`
            : ' ничего не найдено'}
        </p>
      )}
      {!query && (
        <p className="text-[#666666] mb-8">Введите запрос в поле поиска выше</p>
      )}
      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((news) => (
            <NewsCard key={news.slug} {...news} />
          ))}
        </div>
      )}
    </div>
  );
}

export { allNews };
