#!/bin/bash

# Start the backend server
echo "Starting backend server..."
cd backend
pip install -r requirements.txt
python app.py &
cd ..

# Start the frontend server
echo "Starting frontend server..."
cd frontend
npm install
npm start &
cd ..

echo "Application started successfully!"
