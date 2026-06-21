import { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, Check } from 'lucide-react';

export function Subscription() {
  const [formData, setFormData] = useState({ name: '', email: '', agree: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', agree: false });
    }, 3000);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-6 lg:py-12">
      <Breadcrumbs items={[{ label: 'Подписка' }]} />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center size-16 lg:size-20 bg-[#E63946] rounded-full mb-4">
            <Mail className="size-8 lg:size-10 text-white" />
          </div>
          <h1 className="font-playfair text-3xl lg:text-5xl font-bold text-[#222222] mb-4">
            Подпишитесь на рассылку
          </h1>
          <p className="text-lg text-[#666666]">
            Получайте самые важные и интересные новости прямо на вашу почту
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center size-16 bg-green-500 rounded-full mb-4">
              <Check className="size-8 text-white" />
            </div>
            <h2 className="font-bold text-2xl text-green-800 mb-2">Спасибо за подписку!</h2>
            <p className="text-green-700">
              Письмо с подтверждением отправлено на ваш email
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-xl p-6 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#222222] mb-2">
                  Ваше имя <span className="text-[#E63946]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:border-[#E63946] transition-colors text-lg"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#222222] mb-2">
                  Email адрес <span className="text-[#E63946]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:border-[#E63946] transition-colors text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-[#222222] mb-3">Вы будете получать:</h3>
                <ul className="space-y-2 text-sm text-[#666666]">
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                    <span>Дайджест главных новостей каждое утро</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                    <span>Эксклюзивные материалы и аналитику</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                    <span>Уведомления о важных событиях в реальном времени</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                    <span>Доступ к закрытым вебинарам и мероприятиям</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  required
                  className="mt-1 size-5 accent-[#E63946] cursor-pointer"
                />
                <label htmlFor="agree" className="text-sm text-[#666666] cursor-pointer">
                  Я согласен с{' '}
                  <a href="#" className="text-[#E63946] hover:underline">
                    политикой конфиденциальности
                  </a>{' '}
                  и даю согласие на обработку персональных данных
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E63946] hover:bg-[#d32f3c] text-white font-bold text-lg py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Подписаться на рассылку
              </button>

              <p className="text-center text-xs text-[#666666]">
                Вы можете отписаться в любое время, нажав на ссылку в письме
              </p>
            </form>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-[#E63946] mb-2">50K+</div>
            <p className="text-sm text-[#666666]">Подписчиков</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-[#E63946] mb-2">1000+</div>
            <p className="text-sm text-[#666666]">Новостей в месяц</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-[#E63946] mb-2">24/7</div>
            <p className="text-sm text-[#666666]">Актуальная информация</p>
          </div>
        </div>
      </div>
    </div>
  );
}
