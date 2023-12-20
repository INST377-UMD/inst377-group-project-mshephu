import subprocess

command = "python -m http.server"

try:
    subprocess.run(command, shell=True, check=True)
except subprocess.CalledProcessError as e:
    print(f"Command failed with error: {e}")
except KeyboardInterrupt:
    print("Server terminated by user.")

