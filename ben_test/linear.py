from sklearn.linear_model import LinearRegression
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn import metrics
import pandas as pd

# Data Columns
columns = [
    'job_id',
    'title',
    'job_role',
    'year_of_passing_from',
    'year_of_passing_to',
    'hq_marks_percentage_from',
    'hq_marks_percentage_to',
    'hq_marks_cgpa_from',
    'hq_marks_cgpa_to',
    'api_applications_created',
    'applier_type',
    'course_type',
    'users_city_id',
    'users_state_id',
    'profile_percentage',
    'no_of_employees',
    'bd_lnkdin_co_profile_emp2',
    'FemaleFlag',
    'CalLetterFlag',
    'Chennai',
    'Kolkata',
    'Hyderabad',
    'NCR',
    'Ahmedabad',
    'Bangalore',
    'MumbaiPune',
    'India_HQ',
    'napplications_t_male_jbrl',
    'napplications_t_female_jbrl',
    'napplicants_t_male_jbrl',
    'napplicants_t_female_jbrl',
    'client_id_napplications_t',
    'client_id_njob_ids_t',
    'njob_ids_t_jbrl',
    'yearBirth',
    'CashFlow',
    'ProfitMargin_Percent',
    'ROE_Percent',
    'ROCE_Percent',
    'CurrentRatio',
    'SolvencyRatio',
    'OperatingRevenue',
    'OperatingProfitPerShare',
    'EarningsPerShare',
    'NetIncome',
    'P_LBeforeTax',
    'ShareholdersFunds',
    'TotalAssets',
    'MarketCap',
    'PriceEarningsRatio_Avg'
]

# Load the data
data = pd.read_csv("../datasets/Data.csv")
data = pd.get_dummies(data, columns=columns)

labelencoder = LabelEncoder()
for col in columns:
    if col in data.columns:
        data[col] = labelencoder.fit_transform(data[col])

X = data[columns]
y = data['CalLetterFlag']

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a linear regression model
linreg = LinearRegression()

# Create a logistic regression model
logreg = LogisticRegression(random_state=0, max_iter=1000)

# fit the model to the training data
linreg.fit(X_train, y_train)

y_pred = linreg.predict(X_test)

cnf_matrix = metrics.confusion_matrix(y_test, y_pred)
print(cnf_matrix)
