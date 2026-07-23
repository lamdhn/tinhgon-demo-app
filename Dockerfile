# Build tất định — Node thuần, không cài package. Lắng nghe cổng 3000 (khớp cổng nội bộ platform).
FROM node:22-alpine
WORKDIR /app
COPY package.json server.js ./
ENV PORT=3000
EXPOSE 3000
# Healthcheck theo chuẩn workspace: wget + 127.0.0.1 (KHÔNG curl/localhost).
HEALTHCHECK --interval=15s --timeout=3s --retries=5 \
  CMD wget -qO- http://127.0.0.1:3000/health >/dev/null 2>&1 || exit 1
CMD ["node", "server.js"]
