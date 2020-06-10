import sys
import pandas as pd
import random
import os
import json

'''
  This script performs data extraction from
  Daffity Pizza Dataset. Data is used to populate
  initial database.
'''

d = pd.read_csv(sys.argv[1])
images_path = sys.argv[2]
output_file = sys.argv[3]

image_names = os.listdir(images_path)

d = d[['menus.name', 'menus.description']].dropna()
data = []
data_dict = {}

for i, r in d.iterrows():
    desc = r['menus.description']
    name = r['menus.name']

    if len(name) > 60:
        name = name[:60]

    if name in data_dict and len(data_dict[name]) > len(desc):
        desc = data_dict[name]
    else:
        data_dict[name] = desc

    data.append({
        'name': name,
        'description': desc,
        'price': 75 * random.random(),
        'currency': 'euros',
        'stock': int(100 * random.random()),
        'image': image_names.pop()
    })

    if len(image_names) == 0:
        break

with open(output_file, 'wt') as f:
    f.write(json.dumps(data, indent=4))
