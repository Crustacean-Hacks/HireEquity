import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn import metrics
#
# # Data Columns
# columns = [
#     'job_role',
#     'hq_marks_cgpa_from',
#     'yearBirth',
#     'course_type',
#     'no_of_employees',
# ]
#
# # Load the data
# data = pd.read_csv("../datasets/Data.csv")
# data = pd.get_dummies(data, columns=columns)
#
# labelencoder = LabelEncoder()
# for col in columns:
#     # Remove leading and trailing whitespace from column names
#     col = col.strip()
#     if col in data.columns:
#         data[col] = labelencoder.fit_transform(data[col])
#
# X = data[columns]
# y = data['CalLetterFlag']
#
# # Split the data into training and test sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
#
# # Create a linear regression model
# linreg = LinearRegression()
#
# # Create a logistic regression model
# logreg = LogisticRegression(random_state=0, max_iter=1000)
#
# # fit the model to the training data
# linreg.fit(X_train, y_train)
#
# y_pred = linreg.predict(X_test)
#
# cnf_matrix = metrics.confusion_matrix(y_test, y_pred)
# print(cnf_matrix)

F_employement = pd.read_csv("../datasets/Data.csv")

# Ensure the DataFrame includes all rows by checking the total number of rows before and after the split
total_rows_before_split = F_employement.shape[0]

split_value = 1489039200
# Perform the split again to include the clarification
higher_df = F_employement[F_employement['api_applications_created'] > split_value]
lower_or_equal_df = F_employement[F_employement['api_applications_created'] <= split_value]

# Verify that all rows are included in the split
total_rows_after_split = higher_df.shape[0] + lower_or_equal_df.shape[0]

total_rows_before_split, total_rows_after_split

#higher_df.head(50)
lower_or_equal_df.head(50)

from sklearn.model_selection import train_test_split
higher_train_df, higher_test_df = train_test_split(higher_df, test_size=0.3, random_state=42)
lower_or_equal_train_df, lower_or_equal_test_df = train_test_split(lower_or_equal_df, test_size=0.3, random_state=42)


# Sampling 10% of the data from each dataframe
sampled_higher_df = higher_df.sample(frac=1, random_state=42)
sampled_lower_or_equal_df = lower_or_equal_df.sample(frac=1, random_state=42)

from sklearn.model_selection import train_test_split

# Features and target variable
features = ['yearBirth', 'course_type', 'job_role', 'no_of_employees', 'hq_marks_cgpa_from']
target = 'CalLetterFlag'  # Replace 'target' with the actual name of your target variable

# Splitting higher_df sampled data
X_higher = sampled_higher_df[features]
y_higher = sampled_higher_df[target]
X_higher_train, X_higher_test, y_higher_train, y_higher_test = train_test_split(X_higher, y_higher, test_size=0.3, random_state=42)

# Splitting lower_or_equal_df sampled data
X_lower_or_equal = sampled_lower_or_equal_df[features]
y_lower_or_equal = sampled_lower_or_equal_df[target]
X_lower_or_equal_train, X_lower_or_equal_test, y_lower_or_equal_train, y_lower_or_equal_test = train_test_split(X_lower_or_equal, y_lower_or_equal, test_size=0.3, random_state=42)


from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier

# Categorical and numerical columns
categorical_features = ['course_type', 'job_role', 'no_of_employees']
numerical_features = ['yearBirth', 'hq_marks_cgpa_from']

# Preprocessing for numerical data: impute then scale
numerical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='mean')),
    ('scaler', StandardScaler())])

# Preprocessing for categorical data: impute then encode
categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='most_frequent')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))])

# Bundle preprocessing for numerical and categorical data
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numerical_transformer, numerical_features),
        ('cat', categorical_transformer, categorical_features)])

# Logistic Regression Pipeline
logreg_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', LogisticRegression())])

# Decision Tree Pipeline
dtree_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', DecisionTreeClassifier())])

# Fit the models on higher_df sample
logreg_pipeline.fit(X_higher_train, y_higher_train)
dtree_pipeline.fit(X_higher_train, y_higher_train)

# Optionally, repeat fitting for lower_or_equal_df sample or evaluate the models as needed

from sklearn.metrics import accuracy_score, recall_score

# Making predictions with both models on the higher_df test data
y_pred_logreg_higher = logreg_pipeline.predict(X_higher_test)
y_pred_dtree_higher = dtree_pipeline.predict(X_higher_test)

# Calculating accuracy for both models
accuracy_logreg_higher = accuracy_score(y_higher_test, y_pred_logreg_higher)
accuracy_dtree_higher = accuracy_score(y_higher_test, y_pred_dtree_higher)

# Calculating recall for both models
recall_logreg_higher = recall_score(y_higher_test, y_pred_logreg_higher, pos_label=1)  # assuming 1 is the positive class
recall_dtree_higher = recall_score(y_higher_test, y_pred_dtree_higher, pos_label=1)  # adjust pos_label as per your data

print("Logistic Regression - Accuracy (higher_df):", accuracy_logreg_higher)
print("Logistic Regression - Recall (higher_df):", recall_logreg_higher)
print("Decision Tree - Accuracy (higher_df):", accuracy_dtree_higher)
print("Decision Tree - Recall (higher_df):", recall_dtree_higher)

# Optionally, repeat evaluation for lower_or_equal_df sample if models were trained on that subset as well

# Number of targets that are 1
num_targets_1_higher = y_higher_test[y_higher_test == 1].count()

# Number of targets that are 0
num_targets_0_higher = y_higher_test[y_higher_test == 0].count()

print(num_targets_1_higher, num_targets_0_higher)