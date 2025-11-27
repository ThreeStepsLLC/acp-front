FROM node:16.20.0-alpine AS builder
WORKDIR /app

# ENV-lər build vaxtı gələcək
ARG NEXT_PUBLIC_API_URL

# Package copy & install
COPY package*.json ./
RUN npm install --legacy-peer-deps

# App copy & build
COPY . .
RUN npm run build

# =======================
# Production Runtime Stage
# =======================
FROM node:16.20.0-alpine
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Build olunmuş fayllar + node_modules
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

EXPOSE 3000
CMD ["npm", "start"]
