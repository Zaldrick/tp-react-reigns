# Introduction :

Le but de ce TP est de coder en React une version Master 2 IAGL du jeu "Reigns".

### Qu'est-ce que Reigns ?

Reigns est un jeu vidéo développé par Nerial et édité par Devolver Digital sorti en 2016.
Dans Reigns, le roi qu'incarne le joueur devra tenter de rester le plus longtemps en vie et de conserver le pouvoir en gardant le contrôle sur les quatre forces du royaume : l’Église, le peuple, l'armée et les finances, qu'il ne devra ni trop favoriser, ni trop mésestimer sous peine de perdre la partie et de devoir recommencer avec le souverain suivant. Pour ce faire, le roi devra chaque tour répondre aux demandes de personnages récurrents (général, paysan, bourreau, chien, etc.) représentés par une carte. Ces choix binaires sont réalisés par un mouvement de la souris.

![super gif](http://nerial.fr/reigns/assets/img/3.gif "Reigns demo")


L'idée de ce TP est de vous amener a reproduire ce système grâce aux différents mécaniques de
React. La version 1.0. se concentrera sur l'aspect fonctionnel de l'application. Le jeu sera jouable dé cette partie terminée. La version 2.0 est facultative et n'ajoute que des petites subtilités visuelles.

Un paquet de cartes vous est fourni dans le fichiers cards.json de manière à pouvoir tester votre jeu à la fin :).   
Nous tenons à remercier Valentin Vamour pour ses dessins, qui après coloration numérique, sont merveilleux.

#### Pré-requis :
Lancez un ```$npm install -g create-react-app```.   
Lancez un ```$create-react-app nomAppli```.   
À l'intérieur du dossier, supprimez le dossier src et remplacez le par celui du dépôt.
Lancez un ```$yarn start```.   
S'assurez d'avoir un retour visuel sur [localhost:3000](localhost:3000).   

# Version 1.0
Les 5 premières parties vont consister à préparer les composants nécessaires au fonctionnement du jeu.

### Partie 1 : Le Footer

#### Question n°1 : Nom du Joueur :

Définissez une variable contenant votre nom dans index.js.   
Passez la en paramètre au composant App. Ajoutez à la balise ```<div className='colorRow footerRow'>``` une balise ```<div className='footerColumn'> ``` affichant la valeur de la variable.

#### Question n°2 : Le nombre de jours et le nombre de parties joué(this.state):
Afin de compter le nombre de cartes que le joueur a survécu, nous allons stocker ce nombre dans un state de App.   
Ajoutez au constructeur d'App un state "jour" (initialisé à 1) et affichez le à la suite et de la même manière que le nom du joueur dans la balise ```<div className='colorRow footerRow'>```.   
Faites de même avec un state année initialisé à 2018 afin d'afficher '2018-2019'.

### Partie 2 : Le Header
Les quatre pouvoirs seront représentés ici par respectivement :
* L'énergie (state : energie)
* Les résultats scolaires (state : resultats)
* La popularité (state : popularite)
* Le bonheur (state : bonheur)

#### Question n°1
Définissez les quatre states dans le constructeur et initialisez leurs valeurs à 50 dans la classe App.

#### Question n°2 : Composant Pouvoir (this.props)

Pour ce premier composant, la définition vous est offerte. Importer juste le fichier Power.js dans App.
Instancier le pour chaque pouvoir (4 fois) dans la ```<div className="powersRow">``` en faisant passer en paramètre les valeurs et images de chacun des pouvoirs.
Exemple :
```<Power powerValue={this.state.energie} powerImage={energie}/>```

### Partie 3 : Le Display (Affichage des cartes)

Nous allons maintenant nous attaquer à l'affichage des cartes. Le display a trois informations à afficher :
* La description de la carte
* Son image associée
* Le nom du personnage

 ```create-react-app``` importe beaucoup de modules intéressants dont json-loader qui va nous permettre de lire des fichiers json très simplement. L'accès à une carte se fait comme ceci : ```{CARDS[x]}```.   
Pour avoir accès aux informations de la carte 1, utilisez : ```{CARDS[1].display}```. Le champ display contient 3 champs : description, id et personnage.

#### Question n°1 :
Définissez un composant Display dans un nouveau fichier et importez le.   
Remplacez la balise ```<div className='displayCenter'/>``` par l'appel du composant et ajoutez le className 'displayCenter' dans la div de retour de la méthode render.

#### Question n°2 :
Ajoutez un state "carteSelectionnee" (initialisé à 1) à App puis dans le composant Display afficher la "description" (dans une balise h1) de la carteSelectionnee.

#### Question n°3 :
Les images de chaque cartes sont stockées dans un dossier cardImages.
Ajouter ce code en dehors de la définition de la classe Display :

```javascript
const importAll = require =>
	require.keys().reduce((acc, next) => {
	        acc[next.replace("./", "").replace(/\.[^/.]+$/, "")] = require(next);
	        return acc;
	}, {}
);
const images = importAll(
	require.context("./cardImages", false, /\.(png|jpe?g|svg)$/)
);
```
Les images sont désormais accessibles directement sous la forme ```{images[x]}```.
L'id des cartes à afficher est accessible via ```{CARDS[x].display.id}```.   
Ajoutez une balise img  dans le rendu du composant Display (className="displayImage") ayant pour src l'image de la carteSelectionee.


#### Question n°4 :
Affichez le nom du "personnage" (dans une balise h3) de la carteSelectionnee.

### Partie 4 : Le composant Choice (callback & setState)

_Rappel_ : Dans reigns, pour chaque "carte", le joueur a la possibilité de choisir parmi deux solutions : celle de gauche et celle de droite. Lorsqu'une des solutions est choisie, les valeurs des "Pouvoirs" sont modifiées et une nouvelle carte est affichée.

Nous allons pratiquer le callback en React via ce composant. À gauche et a droite de l'application, des panneaux se chargeront d'afficher le texte de l'une des solution (gauche et droite) et de gérer le clic de la souris afin d'afficher la carte suivante.

Une carte contient un ensemble "left" et un ensemble "right" (cf cards.json). Ces ensembles sont identiques à l'intérieur. Pour accéder à la description du choix de choses : ```{CARDS[x].left.description}```.
L'idée est de faire un composant générique et envoyer en paramètre ```CARDS[x].left``` ou ```CARDS[x].right``` suivant le composant.

#### Question n°1 :
Définissez un composant Choice retournant une div (className="choiceColumn"). Cette dernière contiendra une div elle aussi (className=textChoice) affichant la description du choix.   
Supprimez dans App les ```<div className="choiceColumn"/>``` et appelez le composant Choice à la place.

#### Question n°2 :
Définissez, dans App, une méthode makeChoice qui se chargera d'incrémenter les states "carteSelectionee" et "jour".   
_Note_ : afin d'avoir accès au "this" dans la méthode, il est nécessaire de le bind.
_Exemple_ : dans le constructeur du composant, ```this.uneFonction = this.uneFonction.bind(this);```

#### Question n°3 :
Ajouter un onClick sur la div du Composant Choice, et utiliser le callback (via this.props) pour appeler la méthode makeChoice d'App.

Vous devriez maintenant pouvoir faire défiler les cartes en cliquant à gauche ou à droite de la fenêtre Display.

### Partie 5 : Mise à jour des "pouvoirs" (callback)

Dans cette partie, nous allons nous intéresser à la mise à jour des pouvoirs contenu dans le header.
Une carte contient, pour chaque choix, les répercussions au nouveau des Pouvoirs de ces choix.
Par exemple, pour la première carte, dormir encore 5 minutes le matin va influencer le pouvoir énergie.
Ces informations sont stockées dans results. Par exemple, pour savoir combien d'énergie le choix de gauche va influencer le pouvoir énergie, il suffit d'accéder à la valeur situé à ```{CARDS[x].left.results.energie}```
Allez faire un tour du coté du fichier cards.json si vous avez un doute.

#### Question n°1 :
Ajoutez un paramètre "results" dans le prototype de la méthode "makeChoice" d'App. Faites passer results lors de l'appel du onclick dans le composant Choice. Vous devriez avoir accès à results.

#### Question n°2 :
Afin d'éviter de perdre du temps avec la gestion du Game Over, voici la méthode makeChoice complète qui se chargera d'appeler les bonnes cartes aux bons moments.
```javascript
    makeChoice(results) {
        if (this.state.carteSelectionnee>90){
            this.setState((prevState, props) => ({
                energie:50,
                resultats:50,
                popularite:50,
                bonheur:50,
                jour:0,
                carteSelectionnee: 0,
                annee:prevState.annee+1
            }));
        }else
            this.setState((prevState, props) => ({
                jour:prevState.jour+1,
                energie:prevState.energie+results.energie>100?100:prevState.energie+results.energie<=0?0:prevState.energie+results.energie,
                resultats:prevState.resultats+results.resultats>100?100:prevState.resultats+results.resultats<=0?0:prevState.resultats+results.resultats,
                popularite:prevState.popularite+results.popularite>100?100:prevState.popularite+results.popularite<=0?0:prevState.popularite+results.popularite,
                bonheur:prevState.bonheur+results.bonheur>100?100:prevState.bonheur+results.bonheur<=0?0:prevState.bonheur+results.bonheur,
                carteSelectionnee:   prevState.energie+results.energie>=100?90:prevState.energie+results.energie<=0?91:
                    prevState.resultats+results.resultats>=100?92:prevState.resultats+results.resultats<=0?93:
                        prevState.popularite+results.popularite>=100?94:prevState.popularite+results.popularite<=0?95:
                            prevState.bonheur+results.bonheur>=100?96:prevState.bonheur+results.bonheur<=0?97:
                            this.state.jour>=30?99:Math.floor(Math.random()*19)+1
            }));
    }
```

##### Félicitations, votre jeu est désormais fonctionnel. La suite introduit des mécaniques un peu plus compliqué afin de rendre le jeu visuellement plus joli.

# Version 2.0

Une carte contient également une valeur "slide" qui sert à définir vers où elle doit aller lorsque la souris est sur un choix. La subtilité de cette partie réside dans le fait de faire transiter l'information d'un composant vers son parent, puis du parent vers un autre composant fils.   

#### Question n°1 :
Définissez un nouveau state "degreeRotationImage" dans App et initialisez le à 0.

#### Question n°2 :
Définissez une méthode "moveImage(choice)" ayant ce comportement :
* si Choice == 0 : mettre à jour degreeRotationImage avec la valeur 0
* sinon : mettre à jour degreeRotationImage avec la valeur de choice.slide

#### Question n°3 :
Ajoutez dans l'appel du Composant Choise un callback "mouseHandler" se chargeant d'appeler la méthode moveImage.

#### Question n°4 :
Définissez dans le composant Choice deux méthodes (par exemple handleMouseOut et handleMouseOver).   
Ces méthodes se chargeront d'effectuer le callback sur "mouseHandler" avec comme paramètre :
* 0 pour mouseOut
* this.props.choice pour mouseOver.

_Note_ : l'appel indirect à moveImage servira pour une autre partie plus tard

#### Question n°5 :
Ajoutez onMouseLeave et onMouseEnter sur la div de retour du composant Choice. Afin d'avoir accès au this, il faudra penser à le bind.

#### Question n°6 :
Ajoutez un paramètre degree dans l'appel du composant Display avec la valeur du state associé.

#### Question n°7 :
Ajoutez deux states dans le constructeur du composant Display :
* move:'0%'
* rotation:'rotate(0deg)'

#### Question n°8 :
Définissez une méthode "updateCardMove(transformValue)" ayant ce comportement :
* Si transformValue !=0 : Move = transformValue+'%' et Rotation = 'rotate('+transformValue/2+'deg)'
* Sinon leurs redonner leurs valeurs définies dans le constructeur.


#### Question n°9 :
Nous allons maintenant définir explicitement quand le composant doit se mettre à jour en définissant componentWillReceiveProps(nextProps). L'idée est la suivante : si la nouvelle valeur de degree est différente de l'ancienne, alors appeler la méthode updateCardMove.


#### Question n°10 :
Ajoutez à la balise img un style ayant pour valeur ```{left:this.state.move , transform: this.state.rotation}```.

##### Si tout va bien, l'image centrale se déplace vers la gauche ou la droite en fonction de la position de la souris.

#### Question n°12 :
Ajoutons un fond derrière la carte pour faire plus joli. Pour cela :
* Importez l'image "logoLilleMosaic.png" contenue dans le dossier asset.
* Définissez une div (className='behindDisplayImage') entourant la balise ```<img className="displayImage" >``` et utilisez l'asset importé précédemment en tant que background-image. _Aide_ : allez regarder le render de App, et plus précisément ```<div className="App">```)

#### Question n°13 :
Retournons sur l'affichage des descriptions des choix. Dans le jeu Reign, la description du choix n'est censée s'afficher que lorsque la souris passe sur le choix en question.
* Dans le composant Choice, définissez un state "isMouseOver" initialisé à false.
* Mettez à jour son état grâce aux "handleMouse" associés. (true quand la souris est sur le composant, false quand elle ne l'est pas)
* Gérez la condition d'affichage directement dans la ```<div className="Choice"/>``` grâce à un opérateur ternaire : ```{this.state.isMouseOver? <div className="textChoice">DescriptionDuChoix</div>}: null}```.

#### Question n°14 :
Dernière et ultime question.   
Nous allons ici gérer le preview des réponses liées au choix (en bref, avoir un indicateur sur quel pouvoir va être impacté par notre choix).   
* Dans le composant App : Ajoutez des states nextEnergie nextResultats nextPopularite et nextBonheur tous initialisés à 0.   
* Dans le composant App : Dans la méthode "moveImage", mettez à jour ces states (soit par leurs valeurs dans les choix si results est passé en paramètre, soit en les remettant à zéro).   
* Dans le composant App : Faites passer chaque state correspondant en paramètre lors de l'appel de chaque Composant Pouvoir.    
* Dans le composant Pouvoir : Ajoutez un appel au composant NextCircleValue dans la ```<div classeName="nextPouvoirHeader">```.   
N'oubliez pas d'utiliser le paramètre passé précédemment pour affecter une valeur (absolu) à sizeCircle.
