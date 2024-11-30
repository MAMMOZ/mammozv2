import datetime
import random
import signal
import sqlite3
import subprocess
import sys
import time
import cv2
import numpy as np
import ctypes
import logging
from colorlog import ColoredFormatter
import os
import subprocess
import concurrent.futures

import requests
import socket
import json

host = "http://localhost:3000"

file_path = 'config.json'

with open(file_path, 'r') as file:
    config = json.load(file)

base_path= config[0]['base_path']
sleep_value = config[0]['sleep']
key_value = config[0]['key']
pc_value = config[0]['pc']

hostname = socket.gethostname()

LOG_LEVEL = logging.DEBUG
LOGFORMAT = "  %(log_color)s%(levelname)-8s%(reset)s | %(log_color)s%(message)s%(reset)s"
logging.root.setLevel(LOG_LEVEL)
formatter = ColoredFormatter(LOGFORMAT)
stream = logging.StreamHandler()
stream.setLevel(LOG_LEVEL)
stream.setFormatter(formatter)
log = logging.getLogger('pythonConfig')
log.setLevel(LOG_LEVEL)
log.addHandler(stream)

def set_window_title(title):
    ctypes.windll.kernel32.SetConsoleTitleW(title)


class ADeAuto():
    def __init__(self, emulator):
        self.emulator = emulator

    def capture_screen(self, name):
        os.system(f'adb -s {self.emulator} exec-out screencap -p > {name}.png')

    def click(self, x, y):
        os.system(f'adb -s {self.emulator} shell input tap {x} {y}')

    def slide(self, x1, y1, x2, y2, delay):
        os.system(f'adb -s {self.emulator} shell input touchscreen swipe {x1} {y1} {x2} {y2} {delay}')

    def checkRoblox(self, placeId, vip_server_link):
        cmd = f'adb -s {self.emulator} shell ps | findstr "com.roblox.client"'
        result = subprocess.run(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if "com.roblox.client" in result.stdout:
            return True
        else:
            if vip_server_link != "":
                run = f'adb -s {self.emulator} shell am start -a android.intent.action.VIEW -d "{vip_server_link}" -n com.roblox.client/.ActivityProtocolLaunch'
            else:
                run = f'adb -s {self.emulator} shell am start -n com.roblox.client/.ActivityProtocolLaunch -d "roblox://experiences/start?placeId={placeId}"'

            subprocess.run(run, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            log.info(f"Start Roblox {self.emulator}")
            return False
    
    def runRoblox(self, placeId, vip_server_link):
        if vip_server_link != "":
            run = f'adb -s {self.emulator} shell am start --activity-clear-top -a android.intent.action.VIEW -d "{vip_server_link}" -n com.roblox.client/.ActivityProtocolLaunch'
        else:
            run = f'adb -s {self.emulator} shell am start "roblox://experiences/start?placeId={placeId}"'

        subprocess.run(run, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        log.info(f"Start Roblox {self.emulator}")
        return False
        
    def closeRoblox(self):
        cmd = f'adb -s {self.emulator} shell am force-stop "com.roblox.client"'
        result = subprocess.run(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        print(result.stdout)

    def addfile(self):
        print("addfile")
        current_directory = os.getcwd()
        cookie_directory = os.path.join(current_directory, "Cookie")
        for file_name in os.listdir(cookie_directory):
            file_path = os.path.join(cookie_directory, file_name)
            source_file_path = file_path
            
            if file_name == "Cookies":
                destination_path = "/data/data/com.roblox.client/app_webview/Default"
            elif file_name == "appStorage.json":
                destination_path = "/data/data/com.roblox.client/files/appData/LocalStorage"
            else:
                continue
            
            subprocess.run(["adb", "-s", self.emulator, "root"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            adb_command = ["adb", "-s", self.emulator, "push", source_file_path, destination_path]
            result = subprocess.run(adb_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding='utf-8', errors='ignore')

            print(result)
            
            if result.returncode == 0:
                log.info(f"{file_name} pushed to {self.emulator}")
            else:
                log.error(f"Error pushing {file_name} to {self.emulator}")


def find_template_in_image(devices, template_path, threshold=0.8):
    pipe = subprocess.Popen(f"adb -s {devices} shell screencap -p",
                        stdin=subprocess.PIPE,
                        stdout=subprocess.PIPE, shell=True)
    image_bytes = pipe.stdout.read().replace(b'\r\n', b'\n')

    image_array = np.frombuffer(image_bytes, np.uint8)
    screencapimage = cv2.imdecode(image_array, cv2.IMREAD_COLOR)  # เปลี่ยนจาก cv2.IMREAD_UNCHANGED เป็น cv2.IMREAD_COLOR
    screencapimage = cv2.cvtColor(screencapimage, cv2.COLOR_BGR2RGB) 

    template = cv2.imread(template_path)

    result = cv2.matchTemplate(screencapimage, template, cv2.TM_CCOEFF_NORMED)
    
    locations = np.where(result >= threshold)
    
    template_coordinates = []
    for loc in zip(*locations[::-1]):
        x = loc[0] + template.shape[1] // 2
        y = loc[1] + template.shape[0] // 2
        template_coordinates.append((x, y))

        return {"template_path": template_path,"device":devices,"x":x, "y":y}

    return template_coordinates


def get_connected_devices():
    try:
        result = subprocess.run(['adb', 'devices'], capture_output=True, text=True, check=True)
        output_lines = result.stdout.split('\n')
        devices = [line.split('\t')[0] for line in output_lines[1:] if line.strip() and 'device' in line]
        return devices
    except subprocess.CalledProcessError as adb_error:
        log.error(f"ADB Command Failure: {adb_error}")
        log.info("Trying to start ADB server...")
        try:
            subprocess.run(['adb', 'start-server'], check=True)
            log.info("ADB server started successfully.")
            result = subprocess.run(['adb', 'devices'], capture_output=True, text=True, check=True)
            output_lines = result.stdout.split('\n')
            devices = [line.split('\t')[0] for line in output_lines[1:] if line.strip() and 'device' in line]
            return devices
        except subprocess.CalledProcessError as start_error:
            log.error(f"Error starting ADB server: {start_error}")
            return []
    except Exception as e:
        log.error(f"Error: {e}")
        return []
    
def getcookie():
    url = "https://cm150lytp0000mnbs5qitvejv.iservkmitl.tech/swap/programget"
    data = {
        'key': key_value,
    }

    response = requests.post(url, json=data)

    if response.status_code == 200:
        res = response.json()
        if res['cookie']:
            return res['cookie'], res['device']
    else:
        return ""
    
def getUer(cookie):
    url = 'https://www.roblox.com/my/settings/json'
    headers={"Cookie":".ROBLOSECURITY="+cookie}

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        res = response.json()
        return {"UserId":res['UserId'], "DisplayName":res['DisplayName'], "Name":res['Name']}
    else:
        return ""


def process_device():
    cookieee, device = getcookie()
    d = ADeAuto(device)
    print(cookieee)
    if cookieee:
        current_directory = os.getcwd()
        conn = sqlite3.connect(os.path.join(current_directory, "Cookie", "Cookies"))
        cursor = conn.cursor()
        cursor.execute("UPDATE cookies SET value = ? WHERE name = ?", (cookieee, '.ROBLOSECURITY'))
        conn.commit()
        conn.close()

        appStorage_directory = os.path.join(current_directory, "Cookie", "appStorage.json")

        with open(appStorage_directory, 'r') as file:
            data = json.load(file)

        info = getUer(cookieee)

        if info:
            print(info)
            data['Username'] = info['Name']
            data['DisplayName'] = info['DisplayName']
            data['UserId'] = str(info['UserId'])

            with open(appStorage_directory, 'w') as file:
                json.dump(data, file, indent=4)

            d.addfile()


def aaa():
    connected_devices = get_connected_devices()
    print(connected_devices)
    set_window_title(f"MAMMOZ X EMU X {len(connected_devices)} | https://discord.gg/N8KH7yAfkP")
    process_device()
    # with concurrent.futures.ThreadPoolExecutor(max_workers=1) as executor:
    #     executor.map(process_device, connected_devices)
    


while True:
    # set_window_title(f"MAMMOZ X EMU X TTD | https://discord.gg/N8KH7yAfkP")
    try:
        aaa()
        time.sleep(int(sleep_value))
    except:
        print("error")
        aaa()