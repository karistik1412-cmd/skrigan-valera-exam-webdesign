import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { NewsArticle } from "./pages/NewsArticle";
import { Subscription } from "./pages/Subscription";
import { About } from "./pages/About";
import { Search } from "./pages/Search";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "category/:categorySlug", Component: Category },
      { path: "news/:newsSlug", Component: NewsArticle },
      { path: "subscription", Component: Subscription },
      { path: "about", Component: About },
      { path: "search", Component: Search },
      { path: "*", Component: NotFound },
    ],
  },
]);
