'''
https://surveyjs.io/form-library/documentation/customize-question-types/add-custom-properties-to-a-form#type
'''
import pandas as pd
import os
try :
    from pylib.constance import QUESTION_TYPE_DICT
except :
    from constance import QUESTION_TYPE_DICT


def build_survey_data(csv_file_path:str) -> list : 
    df = pd.read_csv(sample_path)
    csv_qtype_list = pd.unique(df['type'])
    allow_qtype_list = [key for key in QUESTION_TYPE_DICT.keys()]
    disallow_qtype = [csv_qtype for csv_qtype in csv_qtype_list if not csv_qtype in allow_qtype_list]
    #TODO qtype 정리하기
    print(f'다음 disallow qtype {disallow_qtype}')
    


    return None

sample_path = './data_sample/004_편차_좁힌_버전_젠더감수성_테스트_(20문항).csv'
result = build_survey_data(sample_path)