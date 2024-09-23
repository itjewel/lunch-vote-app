# Base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all backend files
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:dev"]
