import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  FileText,
  DollarSign,
  UserCheck,
  Settings,
  HelpCircle,
  Activity,
  Bell,
  Menu,
  X,
  CreditCard,
  BarChart3,
  Shield,
  Wallet,
  ChevronDown,
  ChevronRight,
  History,
  Send,
  ArrowLeftRight,
  RotateCcw,
  Edit,
  Undo,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import payBazaarLogo from '@/assets/paybazaar-logo.png';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'User Management', href: '/admin/users', icon: Users },
  { name: 'Transaction Logs', href: '/admin/logs', icon: FileText },
  { name: 'Commission System', href: '/admin/commission', icon: DollarSign },
  { name: 'KYC Verification', href: '/admin/kyc', icon: UserCheck },
  { name: 'API Management', href: '/admin/api', icon: CreditCard },
  { name: 'Support Queries', href: '/admin/support', icon: HelpCircle },
  { name: 'Activity Logs', href: '/admin/activity', icon: Activity },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Security', href: '/admin/security', icon: Shield },
];

const fundsSubMenu = [
  { name: 'E-Wallet History', href: '/admin/funds/history', icon: History },
  { name: 'E-Wallet Request', href: '/admin/funds/request', icon: Send },
  { name: 'E-Wallet Transfer', href: '/admin/funds/transfer', icon: ArrowLeftRight },
  { name: 'E-Wallet Request Reversal', href: '/admin/funds/reversal', icon: RotateCcw },
  { name: 'E-Wallet Request Edit', href: '/admin/funds/edit', icon: Edit },
  { name: 'Amount Revert', href: '/admin/funds/revert', icon: Undo },
  { name: 'Bank Mapping', href: '/admin/funds/mapping', icon: MapPin },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const location = useLocation();
  const [fundsExpanded, setFundsExpanded] = useState(false);
  
  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  const isFundsActive = location.pathname.startsWith('/admin/funds');

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col bg-card shadow-elevated border-r border-border">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <img src={payBazaarLogo} alt="PayBazaar" className="h-8 w-auto" />
              <div>
                <h1 className="font-poppins font-semibold text-lg text-primary">PayBazaar</h1>
                <p className="text-xs text-muted-foreground">Admin Panel</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive(item.href)
                      ? "gradient-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                    isActive(item.href) ? "text-primary-foreground" : "text-muted-foreground group-hover:text-secondary-foreground"
                  )} />
                  {item.name}
                </NavLink>
              );
            })}

            {/* Funds Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => setFundsExpanded(!fundsExpanded)}
                className={cn(
                  "group flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                  isFundsActive
                    ? "gradient-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                )}
              >
                <div className="flex items-center">
                  <Wallet className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                    isFundsActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-secondary-foreground"
                  )} />
                  Funds
                </div>
                {fundsExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {/* Funds Submenu */}
              {fundsExpanded && (
                <div className="ml-6 space-y-1">
                  {fundsSubMenu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={cn(
                          "group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                          isActive(item.href)
                            ? "bg-primary/10 text-primary border-l-2 border-primary"
                            : "text-muted-foreground hover:bg-secondary/50 hover:text-secondary-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className={cn(
                          "mr-3 h-4 w-4 flex-shrink-0 transition-colors",
                          isActive(item.href) ? "text-primary" : "text-muted-foreground group-hover:text-secondary-foreground"
                        )} />
                        {item.name}
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Admin Profile */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-sm font-semibold text-primary-foreground">A</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-card-foreground">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@paybazaar.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}