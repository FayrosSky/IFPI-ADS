import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Dados de exemplo
x = np.array([0, 1, 2, 3, 4])
y = np.array([0, 1, 2, 3, 4])

# Cria o modelo de regressão linear
model = LinearRegression()
model.fit(x.reshape(-1, 1), y)  # Treina o modelo com os dados

# Faz uma previsão com o modelo treinado
y_pred = model.predict(x.reshape(-1, 1))

# Plota o gráfico
plt.scatter(x, y, color='blue')  # Pontos de dados
plt.plot(x, y_pred, color='red')  # Linha de regressão
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Regressão Linear')
plt.show()