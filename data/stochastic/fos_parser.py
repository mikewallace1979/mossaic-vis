import json
import os
import sys

if __name__ == '__main__':
    filename = sys.argv[1]
    fos_json = {"task_id": "a05"}
    fos_json["type"] = "results"
    fos_json["job_id"] = filename
    fos_json["chasm_output"] = {"factor_of_safety": []}
    fos_file = file(filename)
    fos_lines = fos_file.readlines()
    for line in fos_lines:
       data = line.split('\t')
       fos_json["chasm_output"]["factor_of_safety"] += [float(data[1])]
    fos_out = file(filename + '.json', 'w')
    fos_out.write(json.dumps(fos_json, indent=4))
    fos_out.close()
