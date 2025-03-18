import { DivideIcon as LucideIcon } from "lucide-react";

interface LinkProps {
  Icon: LucideIcon;
  label: string;
  href: string;
  isExpanded: boolean;
  className?: string;
}

export function Link({
  Icon,
  label,
  href,
  isExpanded,
  className = "",
}: LinkProps) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-all ${className}`}
    >
      <Icon size={24} className="min-w-[24px]" />
      <span
        className={`text-sm font-medium transition-all ${isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}
      >
        {label}
      </span>
    </a>
  );
}
