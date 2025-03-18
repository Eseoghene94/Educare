import { Home, LayoutDashboard, GraduationCap, Users, ListTodo, TrendingUp, Download, CreditCard, School, FileText, Bell, LogOut } from 'lucide-react';
import { Link } from './SidebarLink';
import { useSidebar } from '../../context/SidebarContext';

export function Sidebar() {
  const { isExpanded } = useSidebar();
  
  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: GraduationCap, label: 'My courses', href: '/my-courses' },
    { icon: Users, label: 'Community', href: '/community' },
    { icon: ListTodo, label: 'Task', href: '/task' },
    { icon: TrendingUp, label: 'Progress', href: '/progress' },
    { icon: Download, label: 'Downloads', href: '/downloads' },
    { icon: CreditCard, label: 'Subscription', href: '/subscription' },
    { icon: School, label: 'Scholarship', href: '/scholarship' },
    { icon: FileText, label: 'Policy', href: '/policy' },
    { icon: Bell, label: 'Notifications', href: '/notifications' },
  ];

  return (
    <aside className={`bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col justify-between scrollbar-hidden transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}>
      <div className="p-4 overflow-y-auto scrollbar-hidden">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            Icon={item.icon}
            label={item.label}
            href={item.href}
            isExpanded={isExpanded}
          />
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <Link
          Icon={LogOut}
          label="Logout"
          href="/logout"
          isExpanded={isExpanded}
          className="text-white bg-[var(--clr-primary)] hover:bg-[var(--clr-primary)]/90"
        />
      </div>
    </aside>
  );
}