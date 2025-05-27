This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm i
# then
npx prisma generate
# then
create file .env and paste the text below into the .env file
# Recommended for most uses
DATABASE_URL=postgres://neondb_owner:9O7sXhxoyQeC@ep-nameless-bush-a1n78tt4-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require

# For uses requiring a connection without pgbouncer
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:9O7sXhxoyQeC@ep-nameless-bush-a1n78tt4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require

# Parameters for constructing your own connection string
PGHOST=ep-nameless-bush-a1n78tt4-pooler.ap-southeast-1.aws.neon.tech
PGHOST_UNPOOLED=ep-nameless-bush-a1n78tt4.ap-southeast-1.aws.neon.tech
PGUSER=neondb_owner
PGDATABASE=neondb
PGPASSWORD=9O7sXhxoyQeC

# Parameters for Vercel Postgres Templates
POSTGRES_URL=postgres://neondb_owner:9O7sXhxoyQeC@ep-nameless-bush-a1n78tt4-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_URL_NON_POOLING=postgres://neondb_owner:9O7sXhxoyQeC@ep-nameless-bush-a1n78tt4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_USER=neondb_owner
POSTGRES_HOST=ep-nameless-bush-a1n78tt4-pooler.ap-southeast-1.aws.neon.tech
POSTGRES_PASSWORD=9O7sXhxoyQeC
POSTGRES_DATABASE=neondb
POSTGRES_URL_NO_SSL=postgres://neondb_owner:9O7sXhxoyQeC@ep-nameless-bush-a1n78tt4-pooler.ap-southeast-1.aws.neon.tech/neondb
POSTGRES_PRISMA_URL=postgres://neondb_owner:9O7sXhxoyQeC@ep-nameless-bush-a1n78tt4-pooler.ap-southeast-1.aws.neon.tech/neondb?pgbouncer=true&connect_timeout=15&sslmode=require

# Neon Auth environment variables for Next.js
NEXT_PUBLIC_STACK_PROJECT_ID=****************************
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=****************************************
STACK_SECRET_SERVER_KEY=***********************
# then
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
