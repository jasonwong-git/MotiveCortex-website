import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | Motive Cortex";
    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", "The page you are looking for does not exist. Return to Motive Cortex for technology consulting services.");
    setMeta('meta[property="og:title"]', "content", "Page Not Found | Motive Cortex");
    setMeta('meta[property="og:description"]', "content", "This page does not exist. Return to the Motive Cortex homepage.");
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);


  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
