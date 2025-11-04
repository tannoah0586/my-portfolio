const blogs = [
  {
    id: 4,
    title: "User Adoption Win: Airtable AWB Tracker Lite Goes Hands-Off",
    excerpt:
      "My Airtable app now lets users self-track critical shipments—eliminating manual status checks for me, forwarders, and stakeholders.",
    date: "November 3, 2025",
    slug: "awb-tracker-user-adoption",
    category: "Case Study",
    tags: ["Supply Chain", "Automation", "Airtable", "User Adoption", "Productivity"],
    status: "published",
    content: `
      Situation: My Airtable AWB Tracker Lite was initially built to reduce my own manual effort—logging into DHL, FedEx, and DGF portals, copying statuses, and notifying users. But users kept asking me to “just check this one AWB” or escalate delays.\n

      Task: Shift from being a human middleman to enabling full self-service so everyone saves time and I can focus on higher-impact work.\n

      Action: I refined the Airtable interface with clear input forms, real-time status views, and automated email/SMS alerts that run every 12 hours until delivery. I shared the read-only dashboard link with key users in China and Japan, and encouraged direct use.\n

      Result: Within two weeks, users reduced contacting me. They now add AWBs themselves (I can see the adoption trend directly from the database), receive automatic updates, and only escalate if the app flags a delay (e.g., >2 days past ETA). This saves:\n
      - Me: ~2 hours/week (no more portal logins or copy-paste)\n
      - Forwarders: Fewer status requests\n
      - Users: Instant visibility without waiting on me\n

      The app now operates fully autonomously—proving how a well-designed low-code tool can deliver real operational value and reclaim hours from repetitive work.
    `
  },
      {
      id: 3,
      title: "Case Study: Automating DGF Air Waybill Data Extraction",
      excerpt:
        "How I built a script to auto-extract shipment details (weight, booking date, pickup date and delivery date) from DGF AWBs, saving hours of manual work.",
      date: "September 29, 2025",
      slug: "dgf-awb-extraction",
      category: "Case Study",
      tags: ["Supply Chain", "Automation", "APIs", "KPI Tracking"],
      status: "published",
      content: `
        Situation: At work, extracting key DGF shipment data (weight, booking date, pickup date and delivery date) was manual. Each AWB required logging in, scrolling, copying, and pasting into tables—taking ~2 minutes per AWB.\n

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
