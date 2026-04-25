import json
import os

log_path = r'C:\Users\Mario\.gemini\antigravity\brain\c496b4c6-6f68-4623-a3bb-ed282aa23515\.system_generated\logs\overview.txt'
target_path = r'x:\Antigravity\web boda\src\index.css'

found_content = None

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if 'tool_calls' in data:
                for call in data['tool_calls']:
                    if call['name'] in ['write_to_file', 'replace_file_content', 'multi_replace_file_content']:
                        args = call['args']
                        # Search for index.css in the args, handling both string and object
                        target = str(args.get('TargetFile', ''))
                        if 'index.css' in target:
                            # If it's a full write, save it. 
                            # We want the LAST one that isn't the "Restoring..." one.
                            desc = str(args.get('Description', ''))
                            if "Restoring the lost index.css" not in desc:
                                if 'CodeContent' in args:
                                    found_content = args['CodeContent']
        except:
            continue

if found_content:
    with open(target_path, 'w', encoding='utf-8') as out:
        out.write(found_content)
    print("FULL RESTORATION SUCCESSFUL")
else:
    print("COULD NOT FIND ORIGINAL CONTENT")
