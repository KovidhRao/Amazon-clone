# Use official lightweight Nginx Alpine base image
FROM nginx:alpine

# Set working directory to Nginx html directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy web application assets into container
COPY . .

# Expose standard HTTP port 80
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
