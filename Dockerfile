# Use the specified Node.js version as the parent image
FROM node:16.20.1

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your project files into the container
COPY . .

# Your app binds to a certain port, make sure you expose it
EXPOSE 3000

# Define the command to run your app
CMD ["node", "server.js"]

# docker run -d -p 30003:3000 --env MONGODB_URI=mongodb://0.0.0.0:27117/Stock myapp  