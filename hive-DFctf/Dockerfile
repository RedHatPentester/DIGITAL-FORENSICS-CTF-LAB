FROM nginx:alpine

# Copy the CTF platform
COPY index.html /usr/share/nginx/html/index.html

# Optional: custom nginx config for better performance
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index index.html; \
    gzip on; \
    gzip_types text/html text/css application/javascript; \
    location / { try_files $uri $uri/ /index.html; } \
    add_header Cache-Control "no-cache"; \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
