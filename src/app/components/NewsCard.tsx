import { Link } from 'react-router';
import { Calendar, User } from 'lucide-react';

interface NewsCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  date: string;
  author: string;
  imageUrl: string;
}

export function NewsCard({
  slug,
  title,
  excerpt,
  category,
  categorySlug,
  date,
  author,
  imageUrl,
}: NewsCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
      <Link to={`/news/${slug}`} className="block">
        <div className="aspect-video bg-gray-200 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4 lg:p-6">
        <Link
          to={`/category/${categorySlug}`}
          className="inline-block text-xs font-semibold text-[#E63946] hover:underline mb-2"
        >
          {category}
        </Link>
        <Link to={`/news/${slug}`}>
          <h3 className="font-playfair text-lg lg:text-xl font-bold text-[#222222] mb-2 group-hover:text-[#E63946] transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-[#666666] mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-[#666666]">
          <div className="flex items-center gap-1">
            <Calendar className="size-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="size-4" />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
