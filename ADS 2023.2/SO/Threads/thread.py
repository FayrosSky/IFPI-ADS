import threading
import time

def thread_function(thread_id):
    for i in range(5):
        print(f"Thread {thread_id}: Executando passo {i}")
        time.sleep(1)

thread1 = threading.Thread(target=thread_function, args=(1,))
thread2 = threading.Thread(target=thread_function, args=(2,))

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("Execução das threads concluída.")
