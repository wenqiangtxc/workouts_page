import os
from config import FOLDER_DICT

def delete_fit_files(directory, suffix):
    # 遍历目录下的所有文件和子录
    suffix = '.'+suffix
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(suffix):
                file_path = os.path.join(root, file)
                # 删除文件
                os.remove(file_path)
                print(f"Deleted file: {file_path}")

# 调用函数删除目录 A 中的所有 .fit 文件
fileType = ['fit','gpx','tcx']
for type in fileType:
    folder = FOLDER_DICT.get(type, "gpx")
    delete_fit_files(folder, type)
