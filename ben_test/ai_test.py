from openai import OpenAI

api_key = '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'
client = OpenAI(api_key=api_key)

completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system",
         "content": ""},
        {"role": "user",
         "content": f"{}"},
    ]
)

print(completion.choices[0].message)
