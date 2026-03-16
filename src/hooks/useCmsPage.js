import { useEffect, useState } from "react";
import { getPageBySlug } from "../lib/cms";

const pageCache = {};

export default function useCmsPage(slug) {
  const [pageData, setPageData] = useState(pageCache[slug] || null);
  const [loading, setLoading] = useState(!pageCache[slug]);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    // If data already exists in cache, use it instantly
    if (pageCache[slug]) {
      setPageData(pageCache[slug]);
      setLoading(false);
      return;
    }

    async function loadPage() {
      try {
        const data = await getPageBySlug(slug);

        if (isMounted) {
          pageCache[slug] = data; // store in cache
          setPageData(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Something went wrong");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPage();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return { pageData, loading, error };
}