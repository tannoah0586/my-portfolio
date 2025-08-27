const blogs = [
  {
    id: 1,
    title: "Case Study: AWB Tracker Lite Automating Air Waybill Tracking",
    excerpt:
      "How I built a lightweight MVP to streamline supply chain AWB tracking using Airtable, APIs, and automation.",
    date: "August 28, 2025",
    slug: "awb-tracker-lite",
    category: "Case Study",
    tags: ["Supply Chain", "Automation", "Airtable", "APIs"],
    status: "published",
    starSections: {
      situation:
        "In my role at GE Healthcare, AWB tracking was manual and fragmented, requiring multiple logins and manual updates.",
      task:
        "I set out to create a lightweight MVP app that automated AWB updates, reduced manual work, and improved visibility.",
      action:
        "I tested DHL, FedEx, and DGF APIs with Postman, built an Airtable MVP, automated status notifications every 12 hours, and piloted it with colleagues.",
      result:
        "The MVP reduced manual tracking time by ~50%, received positive feedback from users, and demonstrated how low-code solutions can accelerate productivity.",
  }},
  {
    id: 2,
    title: "Optimizing SEO for Small Business Websites",
    excerpt: "How I improved search rankings for wlc.sg using modern SEO practices.",
    date: "July 15, 2025",
    content: "Full content here or fetched from an external source...",
    slug: "seo-small-business",
    category: "SEO",
    tags: ["SEO", "Web Development", "Vercel"],
    status: "published",
  },

];

export default blogs;