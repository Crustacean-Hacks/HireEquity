import os
import sys

# Add the AGI2024 directory to the Python path
sys.path.insert(0, '/var/www/hackathon/AGI2024')

# Set the Flask app variable
os.environ['FLASK_APP'] = 'app'

from app import app as application  # Import the Flask application