import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Tanstack from "./Tanstack.jsx";
import InfiniteScroll from "./InfiniteScroll.jsx";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* <Tanstack /> */}
    <InfiniteScroll />
  </QueryClientProvider>
);
