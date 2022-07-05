---
title:  "Diagrama de Fluxo de Dados das categorias"
author: Prof. Jocilé Serra
date: 2021-07-07 12:00:00 -0300
categories: [DESENVOLVIMENTO, PROJETOS]
tags: [diagrama, fluxo, dados]
mermaid: true
---
O diagrama de fluxo de dados (DFD) mapeia o fluxo de informações para qualquer processo ou sistema. Ele utiliza símbolos definidos, como retângulos, círculos e flechas, além de rótulos de textos breves, para mostrar entradas e saídas de dados, pontos de armazenamento e as rotas entre cada destino. 

## Diagrama de fluxo de dados

O seguinte diagrama, feito com o editor mermaid[^1], mapeia o fluxo de dados através das variáveis, usados para exibir uma lista na página de categorias deste site.

Simbologia:
* Retângulo = variável;
* Seta = fluxo de dados;
* Círculo = processamento;
* Triângulo = decisão;
* Retângulo inclinado = saída na página;
* retângulo com calda de peixe = nota.

```mermaid
graph TD

site.categories
-->sort((sort))
-->sort_categories
-->for_categories((for))
-->sort_categories
  for_categories
  -->category
  -->first((first))
  -->category_name
  category
  -->last((last))
  -->posts_of_category
  -->if{if<br> ==}
  category_name-->if
  -->split((split))
  -->sub_categories

  -->forpost((for))
    --posts_of_category
    -->post
    --post.categories1
    -->second_category
    -->ifsecond{if}
    --second_category
    -->unless{unless<br> sub_categories<br> contains<br> second_category}
    --sub_categories
    -->push((push<br>second_category))
  
  sub_categories
  -->sortsub((sort))
  -->sub_categories
  -->size((size))
  -->sub_categories_size
  -->ifsub{if}

  posts_of_category
  -->div1[/div card categories/]
  -->div2[/div card header/]
  -->span[/span/]
  -->ifsub{if > 0}
  --true
  -->i1[/ico folder open/]
  ifsub--else
  -->i2[/ico folder/]
  -->cat[/category name/]
  i1-->cat
  -->size2((size))
  -->top_post_size
  -->span2[/span/]
  -->cont>Continua]

```

## Código da página de categorias

{% raw %}
```liquid
{% assign HEAD_PREFIX = "h_" %}
{% assign LIST_PREFIX = "l_" %}

{% assign group_index = 0 %}

{% assign sort_categories = site.categories | sort %}

{% for category in sort_categories %}
  {% assign category_name = category | first %}
  {% assign posts_of_category = category | last %}
  {% assign first_post = posts_of_category | first %}

  {% if category_name == first_post.categories[0] %}
    {% assign sub_categories = "" | split: "" %}

    {% for post in posts_of_category %}
      {% assign second_category = post.categories[1] %}
      {% if second_category %}
        {% unless sub_categories contains second_category %}
          {% assign sub_categories = sub_categories | push: second_category %}
        {% endunless %}
      {% endif %}
    {% endfor %}

    {% assign sub_categories = sub_categories | sort %}
    {% assign sub_categories_size = sub_categories | size %}


  <div class="card categories">
    <!-- top-category -->
    <div class="card-header d-flex justify-content-between hide-border-bottom"
        id="{{ HEAD_PREFIX }}{{ group_index }}">
      <span>
      {% if sub_categories_size > 0 %}
        <i class="far fa-folder-open fa-fw"></i>
      {% else %}
        <i class="far fa-folder fa-fw"></i>
      {% endif %}
        <a href="{{ site.baseurl }}/categories/{{ category_name | slugify | url_encode }}/"
          class="ml-1 mr-2">
          {{ category_name }}
        </a>

        <!-- content count -->
        {% assign top_posts_size = site.categories[category_name] | size %}
        <span class="text-muted small font-weight-light">
          {% if sub_categories_size > 0 %}
            {{ sub_categories_size }}
            {% if sub_categories_size > 1 %}categories{% else %}category{% endif %},
          {% endif %}
            {{ top_posts_size }}
            post{% if top_posts_size > 1 %}s{% endif %}
        </span>
      </span>

      <!-- arrow -->
      {% if sub_categories_size > 0%}
      <a href="#{{ LIST_PREFIX }}{{ group_index }}" data-toggle="collapse"
        aria-expanded="true" aria-label="{{ HEAD_PREFIX }}{{ group_index }}-trigger"
        class="category-trigger hide-border-bottom">
        <i class="fas fa-fw fa-angle-down"></i>
      </a>
      {% else %}
      <span data-toggle="collapse" class="category-trigger hide-border-bottom disabled">
        <i class="fas fa-fw fa-angle-right"></i>
      </span>
      {% endif %}

    </div> <!-- .card-header -->

    <!-- Sub-categories -->
    {% if sub_categories_size > 0 %}
    <div id="{{ LIST_PREFIX }}{{ group_index }}" class="collapse show" aria-expanded="true">
      <ul class="list-group">
        {% for sub_category in sub_categories %}
        <li class="list-group-item">
          <i class="far fa-folder fa-fw"></i>
          <a href="{{ site.baseurl }}/categories/{{ sub_category | slugify | url_encode }}/"
            class="ml-1 mr-2">{{ sub_category }}</a>
          {% assign posts_size = site.categories[sub_category] | size %}
          <span class="text-muted small font-weight-light">{{ posts_size }}
            post{% if posts_size > 1 %}s{% endif %}
          </span>
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endif %}

  </div> <!-- .card -->

    {% assign group_index = group_index | plus: 1 %}

  {% endif %}
{% endfor %}

```
{% endraw %}

## Referências

* O que é um diagrama de fluxo de dados?. **Lucidchard**. Disponível em <https://www.lucidchart.com/pages/pt/o-que-e-um-diagrama-de-fluxo-de-dados>. Acessado em 07 de julho de 2021.
* Simbologia de um Fluxograma. **Lucidchard**. Disponível em <https://www.lucidchart.com/pages/pt/fluxograma-simbologia>. Acessado em 07 de julho de 2021.
* Diagrama de Fluxo de Dados –DFD. **Unicamp**. Disponível em <https://www.ic.unicamp.br/~thelma/inf327/aulas-2008/Slides-Aulas/Aula1b-DFD.pdf>. Acessado em 07 de julho de 2021.
* Flowcharts - Basic Syntax. **mermaid**. Disponível em <https://mermaid-js.github.io/mermaid/#/flowchart>. Acessado em 07 de julho de 2021.

[^1]: Mermaid Live Editor. **mermaid**. Disponível em <https://mermaid-js.github.io/mermaid-live-editor>. Acessado em 07 de julho de 2021.