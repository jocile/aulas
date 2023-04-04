---
title:  "Introdução a Linguagem Python"
date: 2023-03-31 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, lógica, programador, programação, exercícios, python]
---
Aprender lógica usando Python no Google Colab pode ser uma ótima maneira de obter uma compreensão mais profunda dos conceitos lógicos enquanto se aprende a programar em Python.

## Usando o Google Colab

O Google Colab é uma plataforma gratuita baseada em nuvem que permite aos usuários escrever e executar código Python diretamente em um navegador da web, sem a necessidade de instalar o Python no computador local. Além disso, o Colab oferece recursos para compartilhamento e colaboração em tempo real com outras pessoas.

Para aprender lógica usando Python no Google Colab, é possível começar com conceitos básicos de lógica, como proposições, conectivos lógicos, tabelas verdade e argumentos válidos e inválidos. Em seguida, pode-se usar o Python para implementar esses conceitos e escrever programas que manipulam e testam proposições e argumentos lógicos.

Existem várias bibliotecas Python disponíveis no Google Colab que podem ajudar a aprender lógica. Por exemplo, a biblioteca "sympy" pode ser usada para criar objetos matemáticos simbólicos, incluindo proposições lógicas e conectivos. A biblioteca "logic" fornece funções para criar tabelas verdade e verificar a validade de argumentos.

Além disso, é possível usar o Google Colab para acessar recursos educacionais, como tutoriais, vídeos e exercícios interativos, que podem ajudar a aprender lógica e Python. Existem muitos recursos disponíveis gratuitamente na web para aprender lógica usando Python, e o Colab pode ser um ótimo lugar para começar a experimentar esses recursos e criar projetos próprios.

## Exemplos

### Proposições lógicas

import sympy

```python
# Criando proposições lógicas
p = sympy.Symbol('p')
q = sympy.Symbol('q')
r = sympy.Symbol('r')

# Criando uma proposição lógica complexa
prop = (p & q) | (~r)

# Imprimindo a proposição
print(prop)

# Negando a proposição
neg_prop = ~prop
print(neg_prop)

# Simplificando a proposição
simp_prop = sympy.simplify(prop)
print(simp_prop)
```

### Tabelas verdade

```python
from logic import TruthTable

# Criando uma tabela verdade para uma proposição simples
table = TruthTable(['p'], ['p & True', 'p & False', 'p | True', 'p | False'])
table.display()

# Criando uma tabela verdade para uma proposição complexa
table2 = TruthTable(['p', 'q'], ['p & q', '~p', '(p & ~q) | (~p & q)', 'p <-> q'])
table2.display()
```

### Verificando a validade de argumentos

```python
from logic import valid, substitute

# Criando uma proposição lógica para um argumento
premise1 = sympy.Symbol('p')
premise2 = sympy.Symbol('q')
conclusion = sympy.Symbol('r')
argument = (premise1 & premise2) >> conclusion

# Verificando a validade do argumento
print(valid(argument))

# Substituindo proposições lógicas em um argumento
premise1_value = True
premise2_value = False
conclusion_value = True

argument_sub = substitute(argument, [(premise1, premise1_value), (premise2, premise2_value), (conclusion, conclusion_value)])
print(argument_sub)
```

### Avaliando expressões aritméticas

```python
x = 2
y = 3
result = x + y * 2
print(result)
```

### Condicionais

Usando a estrutura if-else para fazer escolhas:

```python
x = 10
if x > 0:
    print("x é positivo")
else:
    print("x é negativo ou zero")

```

```python
# Fazendo escolhas múltiplas usando a estrutura if-elif-else
x = 10
if x < 0:
    print("x é negativo")
elif x == 0:
    print("x é zero")
else:
    print("x é positivo")

```

```python
# Usando o operador condicional para simplificar o código
x = 10
result = "x é positivo" if x > 0 else "x é negativo ou zero"
print(result)

```

```python
# Usando a estrutura try-except para lidar com exceções
try:
    x = int(input("Digite um número inteiro: "))
    result = 10 / x
    print(result)
except ValueError:
    print("Você deve digitar um número inteiro.")
except ZeroDivisionError:
    print("Você não pode dividir por zero.")

```

### Repetições

```python
# Iterando sobre uma lista usando o loop for
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num)

```

Usando o loop while para repetir um bloco de código enquanto uma condição for verdadeira:

```python
# Usando o loop while para repetir um bloco de código
i = 0
while i < 5:
    print(i)
    i += 1

```

Usando a instrução break para sair de um loop prematuramente:

```python
# Usando a instrução break para sair de um loop prematuramente
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num == 3:
        break
    print(num)

```

Usando a instrução continue para pular para a próxima iteração do loop:

```python
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num == 3:
        continue
    print(num)

```

Usando o loop for com a função range para repetir um número fixo de vezes:

```python
for i in range(5):
    print(i)

```

### Usando a biblioteca matemática

```python
# Importando a biblioteca matemática:
import math

# Usando a função sqrt para calcular a raiz quadrada de um número:
x = 25
raiz = math.sqrt(x)
print(raiz)

# Usando a constante pi para calcular a circunferência de um círculo
raio = 5
circunferencia = 2 * math.pi * raio
print(circunferencia)

# Usando a função pow para calcular a potência de um número
x = 2
y = 3
potencia = math.pow(x, y)
print(potencia)

# Usando a função log para calcular o logaritmo natural de um número
x = 10
log = math.log(x)
print(log)
```

## Referências

- [W3schools Python reference](https://www.w3schools.com/python/default.asp)
- [Colab - Introdução a programação com a linguagem Python](https://colab.research.google.com/drive/17DTWLVeBgIuwp-FYGIsAxlaj_mRNNMkK?usp=sharing#scrollTo=-F7LD5SJy2eq)
- [Livro na Biblioteca Virtual - Introdução à programação em Python - Sérgio Furgeri](https://bibliotecadigitalsenac.com.br/#/?contentInfo=3011)
