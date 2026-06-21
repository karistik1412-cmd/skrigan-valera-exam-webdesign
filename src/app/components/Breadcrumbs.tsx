import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
      <Link to="/" className="text-[#666666] hover:text-[#E63946] transition-colors">
        Главная
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="size-4 text-[#666666]" />
          {item.href ? (
            <Link to={item.href} className="text-[#666666] hover:text-[#E63946] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#222222]">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
