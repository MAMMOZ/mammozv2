# Step 1: Use Node.js official image as the base image
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first
COPY backend/package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the backend code
COPY backend/ ./

# Step 6: Expose the application port
EXPOSE 3000

# Step 7: Start the application
CMD ["node", "index.js"]
