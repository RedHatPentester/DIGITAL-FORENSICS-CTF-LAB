FROM node:20-alpine

LABEL maintainer="HIVE CONSULT"
LABEL description="HIVE CONSULT Digital Forensics CTF — Operation Digital Ghost"

WORKDIR /app

# Copy server (contains flags — never reaches client)
COPY server.js .

# Copy static frontend (no flags in client code)
COPY public/ public/

# No npm dependencies needed (pure Node.js built-ins only)
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health',r=>{process.exit(r.statusCode===200?0:1)})" || exit 1

CMD ["node", "server.js"]
