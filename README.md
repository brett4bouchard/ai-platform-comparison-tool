# AI Platform Comparison Tool

A production-ready web application that helps AI consultants and solo practitioners find the best no-code/low-code AI platforms for their specific project requirements.

## Features

- **Intelligent Platform Matching**: Advanced scoring algorithm that matches platforms based on project requirements
- **Comprehensive Database**: Curated list of 30+ AI platforms with detailed feature scoring
- **User-Friendly Interface**: Clean, responsive design with intuitive comparison workflow
- **Real-time Results**: Instant platform recommendations with match percentages
- **Detailed Comparisons**: Strengths, trade-offs, and pricing information for each platform
- **Email Authentication**: Secure user registration and session management
- **Analytics Ready**: Search tracking for insights and optimization

## Tech Stack

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM (easily upgradeable to PostgreSQL)
- **Authentication**: NextAuth.js with email provider
- **Deployment**: Vercel-ready configuration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-platform-comparison-tool
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:
```
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
EMAIL_SERVER_HOST="your-smtp-host"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email"
EMAIL_SERVER_PASSWORD="your-password"
EMAIL_FROM="noreply@yourdomain.com"
```

4. Set up the database:
```bash
npm run db:generate
npm run db:push
npm run db:seed
```

5. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Database Management

- **Generate Prisma client**: `npm run db:generate`
- **Push schema changes**: `npm run db:push`
- **Run migrations**: `npm run db:migrate`
- **Seed database**: `npm run db:seed`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

The application is optimized for Vercel deployment with automatic builds and serverless functions.

### Other Platforms

The app can be deployed on any platform that supports Next.js applications:
- Netlify
- Railway
- AWS Amplify
- Google Cloud Run

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── comparison/        # Main comparison tool
│   └── admin/             # Admin interface
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── auth/              # Authentication components
│   └── comparison/        # Comparison tool components
├── lib/                   # Utility libraries
│   ├── prisma.ts          # Database client
│   ├── auth.ts            # Auth configuration
│   └── scoring.ts         # Platform scoring algorithm
└── types/                 # TypeScript type definitions
```

## Adding New Platforms

1. Use the admin interface (coming soon)
2. Or directly add to the database:

```typescript
await prisma.platform.create({
  data: {
    name: "Platform Name",
    description: "Platform description",
    websiteUrl: "https://platform.com",
    pricingUrl: "https://platform.com/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Category1", "Category2"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 50,
      // ... other criteria scores (0-100)
    }),
    status: "active"
  }
})
```

## Platform Scoring

Platforms are scored based on:
- **Criteria Match**: How well the platform meets user requirements (0-100%)
- **Project Type Relevance**: Category matching bonus (10% boost)
- **Budget Filtering**: Hard constraint on budget compatibility

## Customization

### Adding New Project Types

Update `PROJECT_TYPES` in `src/types/index.ts` and adjust the scoring logic in `src/lib/scoring.ts`.

### Adding New Criteria

Update `CRITERIA_OPTIONS` in `src/types/index.ts` and ensure all platforms have scores for the new criteria.

### Modifying Scoring Algorithm

The scoring logic is in `src/lib/scoring.ts`. You can adjust weights, add new factors, or change the ranking methodology.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please open an issue on GitHub or contact the development team.