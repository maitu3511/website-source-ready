import { useNavigate } from "@tanstack/react-router";
import type { PageId } from "../types";

export function useWebsiteActions() {
  const navigate = useNavigate();
  return {
    onNavigate: (page: PageId) => {
      navigate({ to: page === "home" ? "/" : `/${page}` });
      window.scrollTo(0, 0);
    },
    onOpenQuote: () => {
      window.dispatchEvent(new Event("advay:open-quote"));
    },
  };
}
