simpleAccordion
===============

**Dans cette documentation**

1. [Utilisation](#utilisation)
2. [Options](#options)

## Utilisation

**Exemple 1**

```html
<h2 class="mycustomclass">Titre 1</h2>
<div>Contenu 1</div>

<h2 class="mycustomclass">Titre 2</h2>
<div>Contenu 1</div>

<h2 class="mycustomclass">Titre 3</h2>
<div>Contenu 3</div>
```

```javascript
$('.mycustomclass').simpleAccordion ();
```

**Exemple 2**

```html
<header>
    <h2 class="mycustomclass">Titre 1</h2>
</header>
<div>Contenu 1</div>

<header>
    <h2 class="mycustomclass">Titre 2</h2>
</header>
<div>Contenu 1</div>

<header>
    <h2 class="mycustomclass">Titre 3</h2>
</header>
<div>Contenu 3</div>
```

```javascript
$('.mycustomclass').simpleAccordion ({
    speed     : 100,
    header    : function (e) {return e.parent ();},
    container : function (e) {return e.parent ().next ();}
});
```

## Options

```javascript
$('.mycustomclass').simpleAccordion ({
    speed     : 500, // Vitesse d'animation.
    header    : function (elem) {return elem;}, // Elément utilisé pour déclencher l'ouverture / fermeture au clic de la souris (this par défaut).
    container : function (elem) {return elem.next ();}, // Elément à afficher / masquer (next par défaut).
    cssClass  : 'open' // Classe CSS à appliquer au header à l'ouverture.
});
```
