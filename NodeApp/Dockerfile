FROM node:18
#Create app directory
WORKDIR /usr/src/app
#Install app dependencies
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
# Use a base image (choose an appropriate base image)
FROM ubuntu:20.04

# Update package lists and install Git
RUN apt-get update && \
    apt-get install -y git

# Set up the working directory
WORKDIR /app

# Define the entry point
CMD ["bash"]

