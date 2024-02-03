import pickle
import pandas as pd
import numpy as np

# Step 1: Load the model from the pickle file
with open('storage/model.pickle', 'rb') as file:
    model = pickle.load(file)

# Step 2: Prepare your input DataFrame
# Initialize a DataFrame with None values
df_input = pd.DataFrame({i: [None] for i in range(50)})

# Replace None values with NaN for computation
df_input = df_input.fillna(np.nan)

# Calculate medians for each column and replace NaN with the column's median
df_input.fillna(df_input.median(), inplace=True)

# Now set specific values as per your requirements
df_input.iloc[0, 6] = 12
df_input.iloc[0, 12] = 8
df_input.iloc[0, 17] = 112103
df_input.iloc[0, 21] = 4

print(df_input)

# Step 3: Make a prediction (probability)
# The predict_proba method returns an array of two probabilities: [P(no interview), P(interview)]
probabilities = model.predict_proba(df_input)

# Extract the probability of getting an interview (P(interview)) and convert to percent
interview_prob_percent = probabilities[:, 1] * 100  # The second column corresponds to P(interview)

print(f"Percent Likelihood of Getting an Interview: {interview_prob_percent[0]:.2f}%")
