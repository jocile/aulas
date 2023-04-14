---
title:  "Pesquisas em listas com Python"
date: 2023-04-11 18:30:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, lógica, programador, programação, exercícios, python]
---
Pesquisando em vetores

## Pesquisa linear ou sequencial

Depois que você ordena os valores de um vetor, a pesquisa para localizá-los fica bem menos trabalhosa. Existem vários métodos de pesquisa em vetor; para a maioria, é pré-requisito que o vetor esteja ordenado, em ordem crescente ou decrescente. Você vai conhecer os métodos de pesquisa sequencial e binária.

O método de pesquisa sequencial é o mais simples: um valor é lido e, em seguida, pesquisado em um vetor até que seja encontrado ou que o vetor termine.

Esse método é mais eficaz em vetores com valores desordenados, mas também é o método mais lento de pesquisa, pois, se não localizar o valor pesquisado, percorre todo o vetor e não somente uma parte dele, como nos outros métodos. O desempenho desse método pode melhorar se ele for aplicado em um vetor ordenado; mesmo assim, ainda será inferior aos outros métodos.

Exemplo:

Problema:
Em um vetor numérico de 20 posições, crie um algoritmo para encontrar a posição exata em que está armazenado um valor indicado pelo usuário.

```python
# Criar um vetor numérico de 20 posições
vetor = [5, 7, 2, 3, 8, 1, 10, 4, 6, 9, 11, 13, 14, 12, 15, 17, 16, 19, 18, 20]

# Receber o valor que o usuário deseja encontrar a posição
valor_procurado = int(input("Digite o valor que deseja encontrar: "))

# Percorrer o vetor para encontrar a posição do valor procurado
posicao = None
for i in range(len(vetor)):
    if vetor[i] == valor_procurado:
        posicao = i
        break

# Verificar se o valor foi encontrado ou não
if posicao is not None:
    print("O valor", valor_procurado, "foi encontrado na posição", posicao)
else:
    print("O valor", valor_procurado, "não foi encontrado no vetor")
```

Explicando o código:

- Na primeira linha, criamos um vetor numérico de 20 posições.
- Na segunda linha, solicitamos ao usuário que insira o valor que deseja encontrar a posição.
- Em seguida, usamos um loop **`for`** para percorrer o vetor e verificar se cada elemento é igual ao valor procurado. Se encontrarmos o valor, armazenamos a posição em que ele está no vetor na variável **`posicao`** e encerramos o loop usando o comando **`break`**.
- Finalmente, verificamos se a variável **`posicao`** foi preenchida com um valor (ou seja, se o valor foi encontrado) e exibimos a mensagem apropriada para o usuário.

## Pesquisa binária

Esse método é mais rápido que o sequencial, pois pesquisa um número menor de dados. A cada teste, é pesquisada somente a parte do vetor que contém valores que satisfaçam a condição da pesquisa (ser o valor maior ou menor que o número lido). Para que essa pesquisa seja feita, é imprescindível que o vetor esteja ordenado.

Exemplo:

Problema:
Em um vetor numérico de 20 posições em ordem crescente, faça um algoritmo para encontrar a posição exata em que está armazenado um valor indicado pelo usuário. Represente o algoritmo em pseudocódigo.

Solucionando o problema:
O método de pesquisa binária consiste basicamente em encontrar a posição central do vetor, ou a mais próxima do centro. De acordo com o valor armazenado na posição equivalente ao meio, é visto se o número armazenado é maior ou menor que o número desejado.

De acordo com o valor armazenado na posição equivalente ao meio, é visto se o número armazenado é maior ou menor que o número desejado. Dependendo da resposta, escolhe-se uma das metades e novamente divide-se ao meio. Isso é feito sucessivamente até que seja encontrado o número ou seja verificado a não existência dele no vetor.

```python
# Criar um vetor numérico de 20 posições em ordem crescente
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

# Receber o valor que o usuário deseja encontrar a posição
valor_procurado = int(input("Digite o valor que deseja encontrar: "))

# Inicializar as variáveis de limite esquerdo e direito
esquerdo = 0
direito = len(vetor) - 1

# Realizar a pesquisa binária
while esquerdo <= direito:
    meio = (esquerdo + direito) // 2
    if vetor[meio] == valor_procurado:
        print("O valor", valor_procurado, "foi encontrado na posição", meio)
        break
    elif vetor[meio] < valor_procurado:
        esquerdo = meio + 1
    else:
        direito = meio - 1
else:
    print("O valor", valor_procurado, "não foi encontrado no vetor")
```

Explicando o código:

- Na primeira linha, criamos um vetor numérico de 20 posições em ordem crescente.
- Na segunda linha, solicitamos ao usuário que insira o valor que deseja encontrar a posição.
- Em seguida, inicializamos as variáveis **`esquerdo`** e **`direito`**, que representam os índices do vetor que delimitam a área em que o valor procurado pode estar.
- Então, iniciamos um loop **`while`** que se repete enquanto a área de busca ainda tiver tamanho. Dentro do loop, calculamos o índice do elemento do meio da área de busca usando a fórmula **`(esquerdo + direito) // 2`**.
- Em seguida, comparamos o valor do elemento do meio com o valor procurado. Se forem iguais, encontramos o valor e imprimimos sua posição.
- Caso contrário, ajustamos os limites esquerdo ou direito da área de busca conforme o valor do elemento do meio ser menor ou maior do que o valor procurado.
- Se o loop terminar e não tivermos encontrado o valor procurado, imprimimos uma mensagem informando que o valor não foi encontrado no vetor.

## Tipos de pesquisa com Python

Em Python, é possível fazer diversos tipos de pesquisa em listas. Abaixo, descrevo alguns dos tipos mais comuns:

1. Pesquisa linear: consiste em percorrer todos os elementos da lista até encontrar o elemento desejado. Esse tipo de pesquisa é relativamente simples e pode ser implementado com um loop **`for`**.

Exemplo:

```python
def linear_search(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1
```

### 1. Pesquisa binária

Funciona apenas para listas ordenadas. A cada passo, o algoritmo divide a lista em duas partes e compara o valor procurado com o valor do elemento do meio da lista. Com base nessa comparação, o algoritmo descarta uma das metades da lista e continua a busca na metade restante. Esse tipo de pesquisa é mais eficiente que a pesquisa linear, especialmente para listas grandes, pois reduz o número de elementos a serem comparados a cada passo.

Exemplo:

```python
def binary_search(arr, x):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] < x:
            low = mid + 1
        elif arr[mid] > x:
            high = mid - 1
        else:
            return mid
    return -1
```

### 2. Pesquisa por interpolação

Semelhante à pesquisa binária, mas utiliza uma estimativa da posição do elemento desejado com base nos valores dos elementos do início e do fim da lista. A cada passo, o algoritmo calcula uma nova estimativa da posição do elemento desejado e a utiliza para determinar em qual metade da lista continuar a busca. Esse tipo de pesquisa é mais eficiente que a pesquisa binária para listas em que os elementos estão distribuídos de forma uniforme.

Exemplo:

```python
def interpolation_search(arr, x):
    low = 0
    high = len(arr) - 1
    while low <= high and arr[low] <= x <= arr[high]:
        mid = low + (x - arr[low]) * (high - low) // (arr[high] - arr[low])
        if arr[mid] < x:
            low = mid + 1
        elif arr[mid] > x:
            high = mid - 1
        else:
            return mid
    return -1
```

### 3. Pesquisa por hash

Utiliza uma função hash para mapear cada valor da lista para uma posição em uma tabela de hash. Ao procurar um valor na lista, basta aplicar a função hash ao valor procurado e verificar se o elemento correspondente na tabela de hash contém o valor procurado. Esse tipo de pesquisa é muito rápido, mas requer a definição de uma função hash adequada e pode consumir muita memória caso a lista seja grande.

Exemplo:

```python
def hash_search(arr, x):
    hash_table = {}
    for i in range(len(arr)):
        hash_table[arr[i]] = i
    if x in hash_table:
        return hash_table[x]
    else:
        return -1
```

### 4. Pesquisa por árvore

Envolve a construção de uma árvore de busca binária a partir dos elementos da lista. Cada nó da árvore contém um elemento e dois sub-nós, que correspondem aos elementos menores e maiores do que o elemento atual. Ao procurar um valor na lista, basta percorrer a árvore a partir da raiz, comparando o valor procurado com o valor de cada nó e escolhendo a sub-árvore adequada para continuar a busca. Esse tipo de pesquisa é útil para listas que precisam ser mantidas ordenadas e suporta várias operações além da pesquisa, como inserção e remoção de elementos.

Exemplo:

```python
class Node:
    def __init__(self, val=None):
        self.val = val
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        if not self.root:
            self.root = Node(val)
        else:
            self._insert(val, self.root)
    
    def _insert(self, val, cur_node):
        if val < cur_node.val:
            if not cur_node.left:
                cur_node.left = Node(val)
            else:
                self._insert(val, cur_node.left)
        else:
            if not cur_node.right:
                cur_node.right = Node(val)
            else:
                self._insert(val, cur_node.right)
    
    def search(self, val):
        if not self.root:
            return -1
        else:
            return self._search(val, self.root)
    
    def _search(self, val, cur_node):
        if not cur_node:
            return -1
        elif cur_node.val == val:
            return val
        elif val < cur_node.val:
            return self._search(val, cur_node.left)
        else:
            return self._search(val, cur_node.right)
```

## Exercícios com pesquisa de vetores

1. Encontrar o valor máximo em uma lista.
2. Encontrar o valor mínimo em uma lista
3. Encontrar a média dos valores em uma lista
4. Contar quantas vezes um valor aparece em uma lista
5. Encontrar o índice de um valor em uma lista

## Resolução dos exercícios

### 1. Encontrar o valor máximo

```python
lista = [1, 5, 2, 8, 3, 9]
maximo = lista[0]
for numero in lista:
if numero > maximo:
maximo = numero
print(maximo)
```

### 2. Encontrar o valor mínimo

```python
lista = [1, 5, 2, 8, 3, 9]
minimo = lista[0]
for numero in lista:
    if numero < minimo:
        minimo = numero
print(minimo)
```

### 3. Encontrar a média

```python
lista = [1, 5, 2, 8, 3, 9]
soma = 0
for numero in lista:
    soma += numero
media = soma / len(lista)
print(media)
```

### 4. Contar repetições

```python
lista = [1, 5, 2, 8, 3, 9, 5, 5]
valor = 5
contador = 0
for numero in lista:
    if numero == valor:
        contador += 1
print(contador)
```

### 5. Encontrar o índice

```python
lista = [1, 5, 2, 8, 3, 9]
valor = 8
indice = None
for i in range(len(lista)):
    if lista[i] == valor:
        indice = i
        break
print(indice)
```

## Referências

Xavier, Gley Fabiano Cardoso
Lógica de programação
E-book. Disponível em: [https://bibliotecadigitalsenac.com.br/?from=busca%3FcontentInfo%3D1306%26term%3Dlogica#/legacy/epub/1306](https://bibliotecadigitalsenac.com.br/?from=busca%3FcontentInfo%3D1306%26term%3Dlogica#/legacy/epub/1306)
Acesso em 11/04/2023

[Coleções no Python: Listas, Tuplas e Dicionários](https://www.devmedia.com.br/colecoes-no-python-listas-tuplas-e-dicionarios/40678)

[Python - List Methods](https://www.w3schools.com/python/python_lists_methods.asp)

[Biblioteca Senac](https://bibliotecadigitalsenac.com.br/#/?contentInfo=3011)

[Introdução à programação em Python - Sérgio Furgeri](https://bibliotecadigitalsenac.com.br/#/?contentInfo=3011)

## Referências

- [W3schools Python reference](https://www.w3schools.com/python/default.asp)
- [Colab - Introdução a programação com a linguagem Python](https://colab.research.google.com/drive/17DTWLVeBgIuwp-FYGIsAxlaj_mRNNMkK?usp=sharing#scrollTo=-F7LD5SJy2eq)
- [Livro na Biblioteca Virtual - Introdução à programação em Python - Sérgio Furgeri](https://bibliotecadigitalsenac.com.br/#/?contentInfo=3011)
