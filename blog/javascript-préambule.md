---
slug: javascript-préambule
date: 2019-07-12T10:37:32.228Z
title: 'JavaScript: Préambule'
---
# JavaScript par la pratique : Section 1

![developper](/assets/jefferson-santos-450403-unsplash.jpg "developper")

## Section 1 : Préambule

### Templates string

Ou backticks  => concaténer  notre contenu sans avoir recours à l’opérateur “+”.

![code](/assets/1.jpg "code")

Les bacticks permettent aussi d’insérer des tabulations et retours à la ligne dans notre variable => templates string

### Conversion en booléen à l’aide de l’opérateur “!!”

“!!” se base sur le principe de _truthy_ et _falsy_  pour convertir une valeur en booléen. 
Cette conversion peut être très utile dans certains cas, quand la valeur attendu est un booléen et non un nombre par exemple.

![code](/assets/2.jpg "code")

~Considérée _truthy_, dans un if () par exemple:~

* true;
* un objet;
* un tableau;
* un nombre différent de 0;
* Infinity et  -Infinity.

~Considérée _falsy_, dans un if () par exemple:~

* false;
* null;
* undefined;
* 0;
* NaN;
* une chaîne de caractère vide.

Le mot clé typeof

::typeof::  permet de connaitre le type d’une variable, à utiliser sans modération pour toujours être sur de qui est quoi.

![code](/assets/3.jpg "code")

À noter que le typeof d’un tableau en JavaScript est un objet. En JavaScript, techniquement les tableaux sont des objets; ils bénéficient juste de comportement et de capacités spéciales.

### Configurer son environnement de développement

Pour avoir un petit environnement de développement pour manipuler le JavaScript sans avoir à se rendre dans l’inspecteur d’une page web.

Tout d’abord se créer un dossier sur son ordinateur, et s’y rendre à l’aide du terminal.

```
_Dans notre dossier en question, à l’aide du terminal_
```

> `$ npm init` 

```
_Accepter par défaut tous les paramètres; création d’un package.json_
```

> `$ npm i live-server`  

```
_Création d’un dossier node_modules, installation de live-server_

_Ajouter à package.json dans l’objet de la clé “script”_
```

> `"start": "live-server"`  

```
_Désormais, avec la commande start dans le terminal, un serveur sera lancé sur le port 8080, et bénéficiera du live reload_
```
