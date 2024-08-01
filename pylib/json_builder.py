'''
https://surveyjs.io/form-library/documentation/customize-question-types/add-custom-properties-to-a-form#type
'''
import pandas as pd
import os


def build_survey_data(csv_file_path:str) -> list : 
    df = pd.read_csv(sample_path)
    q_type_list = pd.unique(df['type'])
    for in 


    return None

sample_path = './data_sample/004_편차_좁힌_버전_젠더감수성_테스트_(20문항).csv'
result = build_survey_data(sample_path)