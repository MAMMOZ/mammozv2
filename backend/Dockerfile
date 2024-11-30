# Step 1: Use Node.js official image as the base image
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy only the backend directory
COPY backend/ ./backend/

# Step 4: Change directory to backend and install dependencies
WORKDIR /app/backend
RUN npm install

# Step 5: Expose the application port
EXPOSE 3000

# Step 6: Start the application
CMD ["node", "index.js"]
