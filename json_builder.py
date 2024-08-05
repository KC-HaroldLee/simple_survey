from pylib.constance import *
import json

TARGET_TXT = 'data_sample/004_편차_좁힌_버전_젠더감수성_테스트_(20문항).txt'

# TODO : 나중에 constance로 넣을 것
json_base_dict = {
    "name": "page1",
    "elements": [

    ]
   }

lines = [line.replace('\n','') for line in open(TARGET_TXT, 'r').readlines()]
json_data = json_base_dict

for line_num, line in enumerate(lines) :
    idx = line_num + 1
    json_data['elements'].append( {        
            "type": "multiplevalues", 
                # 타입을 벗어나면 브라우저에서 "The survey doesn't contain any visible elements." 뜸
                # 보조key가 있더라도 type에 따름, 즉 "type": "text"이고  "rateValues"이 있어도  "rateValues"은 무시
            "name": f'Q_{idx}',
            "title": str(line),
            "autoGenerate": False,
            "rateCount": 3,
            "rateValues": [ # 아무렇게나 입력하면 1,2,3,4,5
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
