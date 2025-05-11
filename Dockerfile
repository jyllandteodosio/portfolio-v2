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

# Use a lightweight web server to serve the built files
FROM nginx:alpine AS production

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.d/default.conf 
# Or /etc/nginx/nginx.conf, depending on Nginx image structure

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose ports 80 and 443
EXPOSE 80 443

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]