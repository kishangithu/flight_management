# Use the official PostgreSQL image
FROM postgres:latest

# Copy initialization script
COPY init/init.sql /docker-entrypoint-initdb.d/

# Expose the default PostgreSQL port
EXPOSE 5432
