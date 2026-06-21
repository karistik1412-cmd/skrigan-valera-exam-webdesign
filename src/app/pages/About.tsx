import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, Phone, MapPin, Clock, Target, Users, Award } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-6 lg:py-12">
      <Breadcrumbs items={[{ label: 'О проекте' }]} />

      <div className="max-w-4xl mx-auto">
        <h1 className="font-playfair text-3xl lg:text-5xl font-bold text-[#222222] mb-6">
          О проекте NewsPortal
        </h1>

        <div className="prose prose-lg mb-12">
          <p className="text-lg text-[#666666] leading-relaxed">
            NewsPortal — это современный новостной портал, предоставляющий актуальную и достоверную
            информацию из мира технологий, бизнеса и спорта. Мы стремимся быть вашим надежным
            источником новостей, помогая оставаться в курсе самых важных событий.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center size-14 bg-[#E63946]/10 rounded-full mb-4">
              <Target className="size-7 text-[#E63946]" />
            </div>
            <h3 className="font-bold text-lg text-[#222222] mb-2">Наша миссия</h3>
            <p className="text-sm text-[#666666]">
              Предоставлять качественную и своевременную информацию, помогая людям принимать
              обоснованные решения
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center size-14 bg-[#E63946]/10 rounded-full mb-4">
              <Users className="size-7 text-[#E63946]" />
            </div>
            <h3 className="font-bold text-lg text-[#222222] mb-2">Наша команда</h3>
            <p className="text-sm text-[#666666]">
              Профессиональные журналисты и редакторы с многолетним опытом работы в индустрии
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center size-14 bg-[#E63946]/10 rounded-full mb-4">
              <Award className="size-7 text-[#E63946]" />
            </div>
            <h3 className="font-bold text-lg text-[#222222] mb-2">Наши ценности</h3>
            <p className="text-sm text-[#666666]">
              Объективность, достоверность и оперативность в освещении событий
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#1A2A3A] rounded-lg p-8 lg:p-12 mb-12 text-white">
          <h2 className="font-playfair text-2xl lg:text-3xl font-bold mb-8 text-center">
            NewsPortal в цифрах
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#E63946] mb-2">10+</div>
              <p className="text-sm text-white/80">Лет на рынке</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#E63946] mb-2">50K+</div>
              <p className="text-sm text-white/80">Подписчиков</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#E63946] mb-2">1M+</div>
              <p className="text-sm text-white/80">Читателей в месяц</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#E63946] mb-2">5000+</div>
              <p className="text-sm text-white/80">Публикаций в год</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="font-playfair text-2xl font-bold text-[#222222] mb-6">
            Контактная информация
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="size-10 bg-[#E63946]/10 rounded flex items-center justify-center flex-shrink-0">
                <MapPin className="size-5 text-[#E63946]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Адрес</h3>
                <p className="text-sm text-[#666666]">
                  Россия, г. Москва
                  <br />
                  ул. Примерная, д. 123
                  <br />
                  офис 456
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-10 bg-[#E63946]/10 rounded flex items-center justify-center flex-shrink-0">
                <Phone className="size-5 text-[#E63946]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Телефон</h3>
                <p className="text-sm text-[#666666]">
                  +7 (495) 123-45-67
                  <br />
                  +7 (495) 123-45-68
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-10 bg-[#E63946]/10 rounded flex items-center justify-center flex-shrink-0">
                <Mail className="size-5 text-[#E63946]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Email</h3>
                <p className="text-sm text-[#666666]">
                  info@newsportal.ru
                  <br />
                  press@newsportal.ru
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-10 bg-[#E63946]/10 rounded flex items-center justify-center flex-shrink-0">
                <Clock className="size-5 text-[#E63946]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Часы работы</h3>
                <p className="text-sm text-[#666666]">
                  Пн-Пт: 09:00 - 18:00
                  <br />
                  Сб-Вс: Выходной
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
            <div className="text-center">
              <MapPin className="size-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Карта местоположения</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
