import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrowseJobs from "./pages/BrowseJobs";
import Companies from "./pages/Companies";
import Resources from "./pages/Resources";
import SignIn from "./pages/SignIn";
import PostJob from "./pages/PostJob";
import JobDetail from "./pages/JobDetail";
import Technology from "./pages/Technology";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import ITEngineering from "./pages/ITEngineering";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browse-jobs" element={<BrowseJobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/job/:jobId" element={<JobDetail />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/it-engineering" element={<ITEngineering />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
