# Stage 1: Build the Angular application
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build --configuration=docker

# Stage 2: Serve the built application
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=build /app/dist/angular-agenda-app/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
