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

# If you need to filter out columns that still contain None (after replacing with median), you can do so, but it should not be necessary now
# df_input = df_input.loc[:, df_input.notna().all()]

print(df_input)

# Step 3: Make a prediction
# Convert DataFrame back to NumPy array for model input if necessary
input_array = df_input.values
output = model.predict(input_array)

# Assuming you have X_test and y_test prepared for accuracy calculation
X_test = input_array
y_test = input_array[:, 24]
accuracy = model.score(X_test, y_test) * 100
print("Predicted Output:", output)
print("Accuracy: ", accuracy, "%")
