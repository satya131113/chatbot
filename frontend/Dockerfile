# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the remaining project files to the container
COPY . .

# Build the React app
RUN npm run build

# Set the command to run when the container starts
CMD ["npm", "start"]
