const CMS_BASE_URL = "https://cms.agpnlimited.com/wp-json/wp/v2";

async function fetchAPI(endpoint) {
  const response = await fetch(`${CMS_BASE_URL}${endpoint}`, {
    cache: "force-cache"
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export async function getPageBySlug(slug) {
  const data = await fetchAPI(`/pages?slug=${slug}&_fields=acf,title,slug`);

  if (!data.length) {
    throw new Error(`Page not found: ${slug}`);
  }

  return data[0];
}

export async function getHomePage() {
  return getPageBySlug("home");
}

export async function getEcosystemPage() {
  return getPageBySlug("ecosystem");
}

export async function getCertificatesPage() {
  return getPageBySlug("certificates");
}

export async function getInsightsPage() {
  return getPageBySlug("insights");
}

export async function getinvolved() {
  return getPageBySlug("get-involved")
}