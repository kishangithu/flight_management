# Use the official MongoDB image
FROM mongo:latest

# Copy initialization script
COPY init/init.js /docker-entrypoint-initdb.d/

# Expose the default MongoDB port
EXPOSE 27017
