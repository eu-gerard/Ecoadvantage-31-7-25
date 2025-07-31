import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageTransition from "@/components/page-transition";
import ScrollProgress from "@/components/scroll-progress";
import { initializeScrollBehavior } from "@/lib/scroll-utils";
import { useEffect } from "react";
import Home from "@/pages/home";
import Blog from "@/components/blog";
import BlogPost from "@/pages/blog-post";
import BlogAdmin from "@/pages/blog-admin";
import WindowCleaning from "@/pages/window-cleaning";
import PowerWashing from "@/pages/power-washing";
import HealthcareCleaning from "@/pages/healthcare-cleaning";
import CarpetFloorCare from "@/pages/carpet-floor-care";
import ConsultingTraining from "@/pages/consulting-training";
import ThankYouPage from "@/components/thank-you-page";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services/window-cleaning" component={WindowCleaning} />
        <Route path="/services/power-washing" component={PowerWashing} />
        <Route path="/services/healthcare-cleaning" component={HealthcareCleaning} />
        <Route path="/services/carpet-floor-care" component={CarpetFloorCare} />
        <Route path="/services/consulting-training" component={ConsultingTraining} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/thank-you" component={ThankYouPage} />
        <Route path="/admin/blog" component={BlogAdmin} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function App() {
  useEffect(() => {
    return initializeScrollBehavior();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollProgress height={4} color="#dc2626" className="scroll-progress-bar" />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;