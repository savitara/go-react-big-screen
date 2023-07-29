#!/bin/bash

# Function to kill the process using the specified port
function kill_process_by_port() {
    local port=$1
    local pid=$(lsof -t -i:$port)  # Get the process ID using the specified port
    if [ -n "$pid" ]; then
        echo "Killing process using port $port (PID: $pid)..."
        kill $pid
        echo "Process killed."
    else
        echo "No process found using port $port."
    fi
}

# Ports to monitor and kill processes
ports=("8000" "8080")

# Loop through the ports and kill processes
for port in "${ports[@]}"; do
    kill_process_by_port $port
done
