import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { NewsCard } from '../components/NewsCard';
import { ChevronLeft, ChevronRight, TrendingUp, Mail } from 'lucide-react';

const topNews = [
  {
    id: 1,
    title: 'Искусственный интеллект меняет мир технологий',
    excerpt: 'Новые достижения в области ИИ открывают невероятные возможности',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    category: 'Технологии',
    categorySlug: 'technology',
    slug: 'ai-changes-tech-world',
  },
  {
    id: 2,
    title: 'Крупнейшие технологические компании объявили о слиянии',
    excerpt: 'Сделка года в мире бизнеса может изменить рынок',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    category: 'Бизнес',
    categorySlug: 'business',
    slug: 'tech-companies-merger',
  },
  {
    id: 3,
    title: 'Олимпийские игры: новые рекорды установлены',
    excerpt: 'Спортсмены продолжают удивлять своими достижениями',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
    category: 'Спорт',
    categorySlug: 'sport',
    slug: 'olympic-games-records',
  },
];

const latestNews = [
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
    slug: 'tennis-grand-slam',
    title: 'Новая звезда тенниса выиграла турнир Большого шлема',
    excerpt: 'Молодая спортсменка удивила мир своей игрой',
    category: 'Спорт',
    categorySlug: 'sport',
    date: '20.05.2026',
    author: 'Ольга Волкова',
    imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop',
  },
];

const popularTags = [
  'Искусственный интеллект',
  'Инвестиции',
  'Футбол',
  'Космос',
  'Стартапы',
  'Олимпиада',
  'Экология',
  'Инновации',
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % topNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + topNews.length) % topNews.length);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за подписку! Письма будут приходить на: ${email}`);
    setEmail('');
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-6 lg:py-12">
      {/* Hero Banner / Slider */}
      <div className="relative mb-8 lg:mb-12 rounded-lg overflow-hidden shadow-xl">
        <div className="aspect-[16/9] lg:aspect-[21/9] relative">
          {topNews.map((news, index) => (
            <div
              key={news.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 text-white">
                <Link
                  to={`/category/${news.categorySlug}`}
                  className="inline-block text-xs lg:text-sm font-semibold text-[#E63946] bg-white px-3 py-1 rounded mb-2 lg:mb-4 hover:bg-[#E63946] hover:text-white transition-colors"
                >
                  {news.category}
                </Link>
                <Link to={`/news/${news.slug}`}>
                  <h2 className="font-playfair text-2xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-4 hover:text-[#E63946] transition-colors line-clamp-2">
                    {news.title}
                  </h2>
                </Link>
                <p className="text-sm lg:text-lg text-white/90 max-w-3xl line-clamp-2">
                  {news.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 size-10 lg:size-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-6 lg:size-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 size-10 lg:size-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="size-6 lg:size-8" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {topNews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`size-2 lg:size-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        {/* Latest News */}
        <div>
          <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-[#222222] mb-6 flex items-center gap-2">
            <TrendingUp className="size-6 lg:size-8 text-[#E63946]" />
            Последние новости
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestNews.map((news) => (
              <NewsCard key={news.slug} {...news} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:space-y-8">
          {/* Popular Tags */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-lg text-[#222222] mb-4">Популярные теги</h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => navigate(`/search?q=${encodeURIComponent(tag)}`)}
                  className="px-3 py-1.5 bg-white text-sm text-[#666666] rounded hover:bg-[#E63946] hover:text-white transition-colors shadow-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-[#E63946] rounded-lg p-6 shadow-md text-white">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="size-6" />
              <h3 className="font-bold text-lg">Подписка на новости</h3>
            </div>
            <p className="text-sm mb-4 text-white/90">
              Получайте свежие новости на вашу почту каждый день
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded bg-white text-[#222222] placeholder:text-[#666666] outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#1A2A3A] hover:bg-[#2A3A4A] text-white font-semibold py-2.5 rounded transition-colors"
              >
                Подписаться
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
