from lib.constance import *
import json

TARGET_TXT = 'data_sample/004_편차_좁힌_버전_젠더감수성_테스트_(20문항).txt'

lines = [line.replace('\n','') for line in open(TARGET_TXT, 'r').readlines()]
json_data = json_base_dict

for line_num, line in enumerate(lines) :
    idx = line_num + 1
    json_data['elements'].append( {        
            "type": "rating",
            "name": f'문항_{idx}',
            "title": str(line),
            "autoGenerate": False,
            "rateCount": 3,
            "rateValues": [
            {
            "value": 2,
            "text": "그렇다"
            },
            {
            "value": 1,
            "text": "잘 모르겠다"
            },
            {
            "value": 0,
            "text": "아니다"
            }
            ]
            } 
        )

with open('./src/page.json', 'w', encoding='UTF-8-sig') as json_write_io :
    json.dump(json_data, json_write_io, ensure_ascii=False, indent=4)
