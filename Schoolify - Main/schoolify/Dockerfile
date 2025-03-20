# syntax=docker/dockerfile:1

### 1) Use a Debian-based image for faster builds
FROM node:18-slim AS deps
WORKDIR /schoolify

# Copy dependency files first to take advantage of caching
COPY package*.json ./

# Install dependencies using npm ci for reproducible installs
RUN npm ci --legacy-peer-deps

### 2) Build your application
FROM node:18-slim AS builder
WORKDIR /schoolify
COPY --from=deps /schoolify/node_modules ./node_modules
COPY . .

# Copy environment variables for build
COPY .env.local .env.local

RUN npm run build

### 3) Final production image
FROM node:18-slim AS runner
WORKDIR /schoolify
COPY --from=builder /schoolify/.next ./.next
COPY --from=builder /schoolify/node_modules ./node_modules
COPY --from=builder /schoolify/package.json ./
COPY --from=builder /schoolify/public ./public

# Define environment variables at runtime (Next.js reads them)
ENV NEXT_PUBLIC_SUPABASE_URL=https://cfkpxquxowdjcsqkecsv.supabase.co
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNma3B4cXV4b3dkamNzcWtlY3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NTkyNDcsImV4cCI6MjA1NDEzNTI0N30.pTcfJDfBYp_zzSMKwzxmmYHV2ButiiY1NOi0QUwIAOY
ENV JWT_SECRET=7ad2478cf78d16f8f4e66a814c0e05357a409036e6321efa8ab06633a959825957a716ec9d9f7f182b0d8715bd598244e39a64968eb3abecdc36fda09ab3541c
#ENV JWT_SECRET=${JWT_SECRET}


EXPOSE 3000
CMD ["npm", "run", "start"]