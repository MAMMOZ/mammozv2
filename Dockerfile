# Step 1: Use Node.js official image as the base image
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the backend code into the working directory
COPY backend/package*.json ./
COPY backend/ ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Expose the application port
EXPOSE 3000

# Step 6: Start the application
CMD ["node", "index.js"]
