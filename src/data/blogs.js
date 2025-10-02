const blogs = [
      {
      id: 3,
      title: "Case Study: Automating DGF Air Waybill Data Extraction",
      excerpt:
        "How I built a script to auto-extract shipment details (weight, booking date, pickup date) from DGF AWBs, saving hours of manual work.",
      date: "September 29, 2025",
      slug: "dgf-awb-extraction",
      category: "Case Study",
      tags: ["Supply Chain", "Automation", "APIs", "KPI Tracking"],
      status: "published",
      content: `
        Situation: At work, extracting key DGF shipment data (weight, booking date, pickup date) was manual. Each AWB required logging in, scrolling, copying, and pasting into tables—taking ~2 minutes per AWB.\n

        Task: I wanted to eliminate this repetitive task, reduce errors, and improve carrier performance measurement by automating data collection.\n

        Action: I built a script that detects new AWB numbers entered into the table, triggers a CRUD API request to DGF, and automatically extracts shipment details (weight, booking date, pickup date). 

        One issue I faced was that API calls sometimes failed if I only attempted once. To make the fetch more reliable, I implemented a retry loop with incremental backoff (3 attempts with 1000ms × loop count delays). This significantly improved success rates when fetching live shipment data from DGF.\n

        Result: The automation saves hours of manual work weekly, reduces the chance of human error, and improves the accuracy of KPI tracking for lead-time and carrier performance evaluation.\n
      `
      },
  {
    id: 2,
    title: "Case Study: AWB Tracker Lite Automating Air Waybill Tracking",
    excerpt:
      "How I built a lightweight MVP to streamline supply chain AWB tracking using Airtable, APIs, and automation.",
    date: "August 28, 2025",
    slug: "awb-tracker-lite",
    category: "Case Study",
    tags: ["Supply Chain", "Automation", "Airtable", "APIs"],
    status: "published",
    content: `
      Situation: In my role at GE Healthcare, AWB tracking was manual and fragmented, requiring multiple logins and manual updates.\n
      
      Task: I set out to create a lightweight MVP app that automated AWB updates, reduced manual work, and improved visibility.\n
      
      Action: I tested DHL, FedEx, and DGF APIs with Postman, built an Airtable MVP, automated status notifications every 12 hours, and piloted it with colleagues.\n
      
      Result: The MVP reduced manual tracking time by ~50%, received positive feedback from users, and demonstrated how low-code solutions can accelerate productivity.
    `,
  },
  {
    id: 1,
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
