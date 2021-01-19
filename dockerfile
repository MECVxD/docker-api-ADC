FROM node:10.19.0
RUN mkdir app
WORKDIR app
COPY . .
RUN npm install
EXPOSE 8181
CMD node index