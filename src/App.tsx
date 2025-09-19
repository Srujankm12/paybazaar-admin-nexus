import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/admin/LoginPage";
import { AdminLayout } from "./components/admin/AdminLayout";
import { Dashboard } from "./components/admin/Dashboard";
import { UserManagement } from "./components/admin/UserManagement";
import { TransactionLogs } from "./components/admin/TransactionLogs";
import { CommissionSystem } from "./components/admin/CommissionSystem";
import { KYCVerification } from "./components/admin/KYCVerification";
import { APIManagement } from "./components/admin/APIManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="logs" element={<TransactionLogs />} />
            <Route path="commission" element={<CommissionSystem />} />
            <Route path="kyc" element={<KYCVerification />} />
            <Route path="api" element={<APIManagement />} />
            <Route path="support" element={<div className="p-6 text-center text-muted-foreground">Support Queries (Coming Soon)</div>} />
            <Route path="activity" element={<div className="p-6 text-center text-muted-foreground">Activity Logs (Coming Soon)</div>} />
            <Route path="analytics" element={<div className="p-6 text-center text-muted-foreground">Analytics (Coming Soon)</div>} />
            <Route path="security" element={<div className="p-6 text-center text-muted-foreground">Security (Coming Soon)</div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
