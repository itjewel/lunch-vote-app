# Base image
FROM node:16-alpine

# Set working directory for frontend
WORKDIR /app

# Copy package.json and yarn.lock (or package-lock.json)
COPY lunch-vote-frontend/package.json lunch-vote-frontend/yarn.lock ./

# Install dependencies
RUN yarn install

# Copy all frontend files
COPY lunch-vote-frontend .

# Expose port 3001
EXPOSE 3001

# Start the application in development mode
CMD ["yarn", "dev", "-p", "3001"]
