FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /usr/src/app
COPY server/ ./server/
RUN cd server && npm install && npm run build

FROM node:10
WORKDIR /usr/src/app/
COPY --from=ui-build /usr/src/app/client/dist ./client/dist
COPY --from=server-build /usr/src/app/server/dist ./
RUN ls

EXPOSE 3002

CMD ["node", "./bundle.js"]