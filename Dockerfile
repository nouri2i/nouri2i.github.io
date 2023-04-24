# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container at /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application code into the container at /app
COPY . .

# Expose port 8080 for the app to listen on
EXPOSE 8080

# Set the command to run the app when the container starts
CMD ["npm", "start"]
