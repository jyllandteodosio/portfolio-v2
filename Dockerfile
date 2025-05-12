# Use an official Node.js runtime as the base image
FROM node:22-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight Nginx image
FROM nginx:alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 internally within the Docker network
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
