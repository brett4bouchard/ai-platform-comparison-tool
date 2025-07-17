**Technical Requirements**

Tech Stack

* **Framework**: Next.js 14+ with TypeScript  
* **Styling**: Tailwind CSS for responsive design  
* **Database**: SQLite for development (easily upgradeable to PostgreSQL)  
* **Authentication**: NextAuth.js with email provider  
* **Deployment**: Vercel-ready configuration  
* **State Management**: React hooks (useState, useContext as needed)  
* **Form Handling**: React Hook Form with validation

Core Architecture

* **Frontend**: React components with TypeScript  
* **Backend**: Next.js API routes  
* **Database**: Prisma ORM with SQLite  
* **Authentication**: Email-based registration with session management  
* **Deployment**: Static export compatible with Vercel/GitHub Pages

Detailed Feature Requirements

1\. User Authentication System

* **Registration Flow**: Email signup → verification → access  
* **Session Management**: Persistent login with secure sessions  
* **Database Schema**: User table with email, created\_at, subscription\_status fields  
* **Security**: Rate limiting on registration, email validation  
* **UI**: Clean, professional registration/login forms

2\. Platform Input Interface

Create an intuitive multi-step form with:

**Project Type Dropdown**:

* Customer Support Automation  
* Content Generation & Marketing  
* Data Analysis & Reporting  
* Lead Generation & Sales  
* Internal Process Automation  
* E-commerce & Shopping  
* Voice & Audio Processing  
* Document Processing  
* Custom/Other (with text input field)

**Requirements Toggles (Yes/No)**:

* Low Technical Expertise Required  
* Client Access Needed  
* Enterprise Security/Compliance  
* API Integration Required  
* Built-in Knowledge Base/RAG  
* Multi-language Support  
* White-labeling/Custom Branding  
* High Volume/Scalability  
* Real-time Processing  
* Mobile App Support

**Budget Range Dropdown**:

* Free/Freemium Only  
* Under $50/month  
* $50-200/month  
* $200-500/month  
* $500+/month  
* Enterprise Pricing

**Additional Details**: Text area for specific requirements

3\. Platform Database & Scoring System

**Platform Schema**:

interface Platform {  
  id: string  
  name: string  
  description: string  
  websiteUrl: string  
  pricingUrl: string  
  pricingModel: string // "Credit-based", "API usage", "Subscription", etc.  
  categoryTags: string\[\]  
  criteriaScores: Record\<string, number\> // 0, 25, 50, 75, 100  
  lastUpdated: Date  
  status: "active" | "deprecated" | "pivoted"  
}

**Initial Platform Data**: Include all platforms from the provided list with researched scoring data.

**Scoring Algorithm**:

1. Calculate match percentage based on user's Yes/No selections  
2. Apply budget filter (hard constraint)  
3. Weight by project type relevance  
4. Return top 5 platforms with detailed scores

4\. Results Display System

**Output Format**:

* Hero section with top recommendation  
* Ranked list of top 5 platforms  
* Expandable comparison table showing:  
  * Platform name, description, logo/icon  
  * Match percentage with visual indicator  
  * Key strengths for user's use case  
  * Pricing model summary  
  * Trade-offs explanation  
  * "Get Started" button linking to platform

**Interactive Features**:

* Real-time refinement of criteria without page reload  
* "Why was Platform X excluded?" expandable sections  
* Save/bookmark results functionality  
* Export results to PDF/email

5\. Admin/Data Management

* Simple admin interface for adding/editing platforms  
* Bulk import functionality for platform data  
* Platform status management (active/deprecated)  
* User analytics dashboard (registrations, searches, clicks)

Specific Implementation Guidelines

Database Setup  
\-- Users table  
CREATE TABLE users (  
  id INTEGER PRIMARY KEY,  
  email TEXT UNIQUE NOT NULL,  
  created\_at DATETIME DEFAULT CURRENT\_TIMESTAMP,  
  subscription\_status TEXT DEFAULT 'free'  
);

\-- Platforms table  
CREATE TABLE platforms (  
  id INTEGER PRIMARY KEY,  
  name TEXT NOT NULL,  
  description TEXT,  
  website\_url TEXT,  
  pricing\_url TEXT,  
  pricing\_model TEXT,  
  category\_tags TEXT, \-- JSON string  
  criteria\_scores TEXT, \-- JSON string  
  status TEXT DEFAULT 'active',  
  created\_at DATETIME DEFAULT CURRENT\_TIMESTAMP,  
  updated\_at DATETIME DEFAULT CURRENT\_TIMESTAMP  
);

\-- User searches (analytics)  
CREATE TABLE searches (  
  id INTEGER PRIMARY KEY,  
  user\_id INTEGER,  
  project\_type TEXT,  
  criteria\_selected TEXT, \-- JSON string  
  results\_returned TEXT, \-- JSON string  
  created\_at DATETIME DEFAULT CURRENT\_TIMESTAMP,  
  FOREIGN KEY (user\_id) REFERENCES users (id)  
);

Key Components Structure  
/components  
  /auth  
    \- LoginForm.tsx  
    \- RegisterForm.tsx  
    \- AuthGuard.tsx  
  /comparison  
    \- ProjectTypeSelector.tsx  
    \- CriteriaToggles.tsx  
    \- BudgetSelector.tsx  
    \- ResultsDisplay.tsx  
    \- PlatformCard.tsx  
    \- ComparisonTable.tsx  
  /ui  
    \- Button.tsx  
    \- Input.tsx  
    \- Toggle.tsx  
    \- LoadingSpinner.tsx  
  /admin  
    \- PlatformManager.tsx  
    \- Analytics.tsx

/pages  
  \- index.tsx (landing page)  
  \- auth/login.tsx  
  \- auth/register.tsx  
  \- comparison.tsx (main tool)  
  \- results.tsx  
  \- admin/dashboard.tsx

/api  
  \- auth/\[...nextauth\].ts  
  \- platforms/index.ts  
  \- platforms/\[id\].ts  
  \- search/compare.ts  
  \- admin/platforms.ts

User Experience Requirements

* **Performance**: Sub-2 second load times, optimistic UI updates  
* **Responsive**: Mobile-first design, works on all screen sizes  
* **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation  
* **SEO**: Proper meta tags, structured data for search engines  
* **Analytics**: Track user interactions, conversion funnels

Data Seeding

Include initial data for these platforms with proper scoring: Cassidy, n8n, Make, Flowgent, Gumloop, Lindy, Plumb, Autohive, Relevance, Text.cortex, Relay.app, PySpur, MindStudio, Dify, Langflow, Flowise, Databutton, String, Hostinger Horizons, QuintaDB, Mootion, Chatbase, Soshie, Taskade, JustCall AI, Runner H, Lutra, Vapi, Voice OS, ElevenLabs, Reworkd, Apify, Firecrawl

Future-Proofing Requirements

* **Monetization Ready**: Database schema supports subscription tiers  
* **Payment Integration**: Placeholder for Stripe integration  
* **API Ready**: RESTful API structure for future mobile app  
* **Scalable**: Component architecture supports feature additions  
* **Maintainable**: TypeScript, proper error handling, logging

Error Handling & Edge Cases

* Network failures during searches  
* Invalid user inputs  
* Platform data inconsistencies  
* Rate limiting for API abuse  
* Graceful degradation for missing data

Security Considerations

* Input sanitization and validation  
* SQL injection prevention (use Prisma)  
* XSS protection  
* CSRF protection  
* Secure session management  
* Environment variable management

Expected Deliverables

1. **Complete working application** deployed to Vercel  
2. **GitHub repository** with proper README and setup instructions  
3. **Database** seeded with initial platform data  
4. **Admin interface** for platform management  
5. **Documentation** for future development and maintenance

Success Criteria

* Users can register and authenticate successfully  
* Input form collects all required data with validation  
* Scoring algorithm returns relevant, ranked results  
* Results display is clear, actionable, and visually appealing  
* Application is responsive and performs well  
* Code is clean, typed, and maintainable  
* Ready for production deployment

Development Approach

Please break this down into logical development phases and implement incrementally. Start with core functionality (auth \+ basic comparison) and build up to full feature set. Focus on clean, maintainable code that can be easily extended.

Use modern React patterns, TypeScript for type safety, and follow Next.js best practices. Prioritize user experience and ensure the tool actually solves the stated problem effectively.

