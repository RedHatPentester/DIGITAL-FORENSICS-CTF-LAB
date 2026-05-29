FROM node:20-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    curl wget ca-certificates \
    openssh-server \
    sqlite3 \
    net-tools procps lsof \
    vim nano less file binutils \
    python3 \
    sudo cron \
    iproute2 iputils-ping \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json .
RUN npm install --loglevel=error --no-fund
COPY . .

# Directories only — no flags at build time
RUN mkdir -p /app/data /app/flags \
    /var/www/hivebank \
    /var/db \
    /root/.ssh \
    /home/analyst/.ssh \
    /var/log/apache2 \
    /etc/cron.d \
    /tmp

RUN chmod +x /app/scripts/start.sh

EXPOSE 3000 22
CMD ["/app/scripts/start.sh"]
