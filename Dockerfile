FROM node:20-alpine

WORKDIR /app

# Install production dependencies only
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source
COPY . .

# Cloud Run injects PORT env var (default 8080)
EXPOSE 8080

CMD ["node", "index.js"]
