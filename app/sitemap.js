export default function sitemap() {
  const base = "https://jpzmanpower.com";
  const lastModified = new Date();

  const industries = [
    "construction",
    "banking",
    "hospitality",
    "Information_technology",
    "oil_gas",
    "transportation",
  ];

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${base}/built-by-syncops`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${base}/industries`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...industries.map((id) => ({
      url: `${base}/industry/${id}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    { url: `${base}/jobsOversease`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${base}/services/overseas_employment`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/services/tourism_services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/visaprocessing/musaned`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/visaprocessing/saudi_wakala`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-conditions`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
