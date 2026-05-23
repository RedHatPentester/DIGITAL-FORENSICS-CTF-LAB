FROM node:20-alpine
LABEL maintainer="HIVE CONSULT" description="Operation PHANTOM WIRE CTF"
WORKDIR /app
COPY server.js .
COPY public/ public/
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health',r=>{process.exit(r.statusCode===200?0:1)})" || exit 1
CMD ["node", "server.js"]
