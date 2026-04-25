import json
import os

log_path = r'C:\Users\Mario\.gemini\antigravity\brain\c496b4c6-6f68-4623-a3bb-ed282aa23515\.system_generated\logs\overview.txt'
target_path = r'x:\Antigravity\web boda\src\index.css'

with open(log_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if i == 30: # Step 31
            data = json.loads(line)
            content = data['tool_calls'][0]['args']['CodeContent']
            with open(target_path, 'w', encoding='utf-8') as out:
                out.write(content)
            print("RESTORATION SUCCESSFUL")
            break
