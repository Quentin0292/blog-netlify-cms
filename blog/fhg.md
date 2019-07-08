---
slug: Dhg
date: 2019-05-24T10:42:21.217Z
title: Fhg
---
\# JavaScript par la pratique : Section 1 

\#Javascript



\## Section 1 : Préambule 



\### Templates string 



Ou backticks \`\` => concaténer  notre contenu sans avoir recours à l’opérateur “+”.



\`\``

var name = 'Quentin';

var car = \`cette voiture appartient à ${name}\`;



$ console.log(car); 

// cette voiture appartient à Quentin

\`\``



Les bacticks permettent aussi d’insérer des tabulations et retours à la ligne dans notre variable => templates string



\### Conversion en booléen à l’aide de l’opérateur “!!”



“!!” se base sur le principe de \*truthy\* et \*falsy\*  pour convertir une valeur en booléen. 

Cette conversion peut être très utile dans certains cas, quand la valeur attendu est un booléen et non un nombre par exemple.



\`\``

var isYoung = 9; 



!!isYoung; 

// true

\`\``



\~Considérée \*truthy\*, dans un if () par exemple:\~

\* true;

\* un objet;

\* un tableau;

\* un nombre différent de 0;

\* Infinity et  -Infinity.



\~Considérée \*falsy\*, dans un if () par exemple:\~

\* false;

\* null;

\* undefined;

\* 0;

\* NaN;

\* une chaîne de caractère vide.



\### Le mot clé typeof



::typeof::  permet de connaitre le type d’une variable, à utiliser sans modération pour toujours être sur de qui est quoi.



\`\``

var object = {};



typeof object;

// "object"



var str = "hello world";



typeof str;

// "string"



var num = 4;



typeof num;

// "number"



var arr = \[1, 2, 3];



typeof arr;

// "object"

\`\``



À noter que le typeof d’un tableau en JavaScript est un objet. En JavaScript, techniquement les tableaux sont des objets; ils bénéficient juste de comportement et de capacités spéciales.



\### Configurer son environnement de développement 



Pour avoir un petit environnement de développement pour manipuler le JavaScript sans avoir à se rendre dans l’inspecteur d’une page web.



Tout d’abord se créer un dossier sur son ordinateur, et s’y rendre à l’aide du terminal.



	\*Dans notre dossier en question, à l’aide du terminal\*



\> \`$ npm init\`  



	\*Accepter par défaut tous les paramètres; création d’un package.json\*



\> \`$ npm i live-server\`  

	

	\*Création d’un dossier node_modules, installation de live-server\*



	\*Ajouter à package.json dans l’objet de la clé “script”\*



\> \`"start": "live-server"\`  



	\*Désormais, avec la commande start dans le terminal, un serveur sera lancé sur le port 8080\*
