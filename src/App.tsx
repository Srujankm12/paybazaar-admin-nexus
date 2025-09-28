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
import { Security } from "./components/admin/Security";
import { Analytics } from "./components/admin/Analytics";
import { ActivityLogs } from "./components/admin/ActivityLog";
import { SupportQueries } from "./components/admin/Support";
import { OtpPage } from "./pages/admin/Otp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="logs" element={<TransactionLogs />} />
            <Route path="commission" element={<CommissionSystem />} />
            <Route path="kyc" element={<KYCVerification />} />
            <Route path="api" element={<APIManagement />} />
            <Route path="support" element={<SupportQueries/>} />
            <Route path="activity" element={<ActivityLogs/>} />
            <Route path="analytics" element={<Analytics/>} />
            <Route path="security" element={<Security/>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
