---
title:  "Introdução a Linguagem Python"
date: 2023-04-03 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, lógica, programador, programação, exercícios, python]
---
Aprender lógica usando Python no Google Colab pode ser uma ótima maneira de obter uma compreensão mais profunda dos conceitos lógicos enquanto se aprende a programar em Python.

## Usando o Google Colab

O [Google Colab](https://colab.research.google.com/notebooks/intro.ipynb) é uma plataforma gratuita baseada em nuvem que permite aos usuários escrever e executar código Python diretamente em um navegador da web, sem a necessidade de instalar o Python no computador local. Além disso, o Colab oferece recursos para compartilhamento e colaboração em tempo real com outras pessoas.

Para aprender lógica usando Python no Google Colab, é possível começar com conceitos básicos de lógica, como proposições, conectivos lógicos, tabelas verdade e argumentos válidos e inválidos. Em seguida, pode-se usar o Python para implementar esses conceitos e escrever programas que manipulam e testam proposições e argumentos lógicos.

Existem várias bibliotecas Python disponíveis no Google Colab que podem ajudar a aprender lógica. Por exemplo, a biblioteca "sympy" pode ser usada para criar objetos matemáticos simbólicos, incluindo proposições lógicas e conectivos. A biblioteca "logic" fornece funções para criar tabelas verdade e verificar a validade de argumentos.

Além disso, é possível usar o Google Colab para acessar recursos educacionais, como tutoriais, vídeos e exercícios interativos, que podem ajudar a aprender lógica e Python. Existem muitos recursos disponíveis gratuitamente na web para aprender lógica usando Python, e o Colab pode ser um ótimo lugar para começar a experimentar esses recursos e criar projetos próprios.

## Usando o Colab

Aqui estão algumas dicas para começar a aprender a programação em Python usando o Google Colab:

1. Crie uma conta no Google: Se você ainda não tem uma conta no Google, crie uma. Você precisará de uma conta do Google para acessar o Google Colab.
2. Acesse o Google Colab: Depois de criar sua conta do Google, acesse o Google Colab em <https://colab.research.google.com/>.
3. Crie um novo notebook: Clique em "Novo notebook" para criar um novo notebook Python. Isso abrirá um novo documento que você pode usar para escrever e executar código Python.
4. Comece a escrever código Python: Agora você pode começar a escrever código Python no notebook. Experimente com diferentes tipos de dados, variáveis, operadores e comandos de controle de fluxo (como if, else e for).
5. Execute o código: Para executar o código no notebook, basta clicar no botão "Executar" na parte superior do documento ou usar o atalho "Shift+Enter". O Google Colab irá executar o código e exibir o resultado abaixo do bloco de código.
6. Experimente com bibliotecas Python: O Google Colab permite que você use bibliotecas Python populares, como NumPy, Pandas e Matplotlib. Você pode importar essas bibliotecas usando o comando import e experimentar com as funções e métodos que elas oferecem.
7. Colabore com outras pessoas: O Google Colab permite que você compartilhe notebooks com outras pessoas e trabalhe em equipe em tempo real. Você pode colaborar com colegas de classe ou amigos para resolver problemas de programação juntos.
8. Aprenda com exemplos e tutoriais: O Google Colab oferece uma grande quantidade de exemplos e tutoriais de programação em Python. Você pode pesquisar e explorar esses recursos para aprender novos conceitos de programação e técnicas de resolução de problemas.
9. Pratique muito: A melhor maneira de aprender a programação em Python é praticar muito. Experimente diferentes desafios de programação e projetos para aplicar seus conhecimentos e melhorar suas habilidades de programação.

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
