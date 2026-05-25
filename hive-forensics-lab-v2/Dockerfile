FROM nginx:alpine

LABEL maintainer="Nana Sei Anyemedu <nana.anyemedu@hiveconsult.com.gh>"
LABEL description="Hive Consult Ghana — Email Forensics Lab v2 (Terminal)"
LABEL version="2.0"

RUN rm -rf /usr/share/nginx/html/*

COPY index.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
