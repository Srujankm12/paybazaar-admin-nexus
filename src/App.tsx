import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/admin/LoginPage";
import { AdminLayout } from "./components/admin/AdminLayout";
import { Dashboard } from "./components/admin/Dashboard";
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
            <Route path="users" element={<div className="p-6">User Management (Coming Soon)</div>} />
            <Route path="logs" element={<div className="p-6">Transaction Logs (Coming Soon)</div>} />
            <Route path="commission" element={<div className="p-6">Commission System (Coming Soon)</div>} />
            <Route path="kyc" element={<div className="p-6">KYC Verification (Coming Soon)</div>} />
            <Route path="api" element={<div className="p-6">API Management (Coming Soon)</div>} />
            <Route path="support" element={<div className="p-6">Support Queries (Coming Soon)</div>} />
            <Route path="activity" element={<div className="p-6">Activity Logs (Coming Soon)</div>} />
            <Route path="analytics" element={<div className="p-6">Analytics (Coming Soon)</div>} />
            <Route path="security" element={<div className="p-6">Security (Coming Soon)</div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
