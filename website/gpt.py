from openai import OpenAI
import os

api_key = os.environ.get('OPENAI_API_KEY')
client = OpenAI(api_key=api_key)

completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system",
         "content": "This is a website which is used for an end user experience for a data science project. "
                    "The website is analyzing data from before and after India switched to give women more maternity leave. "
                    "The website is used to analyze the data and see if there is a correlation between the amount of maternity leave in 2017. "
                    "The questions that this project tries to answer is: "
                    "(women’s likelihood of searching for jobs?) and (employers’ likelihood of considering female applicants?) "
                    "This is being done by using data science techniques and machine learning models."},
        {"role": "user",
         "content": f"The user is {age} years old, They graduated with a {GPA} GPA at a {degree} level looking for a job as a {role} as a company with {company_size} employees."
                    f"Using the {model} they had a {old_chance} chance of getting an interview before the maternity leave and a {new_chance} chance after the maternity leave. "}
    ]
)

print(completion.choices[0].message)
