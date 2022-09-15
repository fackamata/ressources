---
titre : vim
layout: default
techno: linux
---


  1. Le curseur se déplace avec les touches fléchées ou les touches hjkl.
           h (gauche)      j (bas)      k (haut)      l (droite)

  2. Pour démarrer Vim à l'invite du shell tapez :  vim FICHIER <Entrée>

  3. Pour quitter Vim tapez :  <Échap> :q! <Entrée>  pour perdre tous les
                                                     changements.
                   OU tapez :  <Échap> :wq <Entrée>  pour enregistrer les
                                                     changements.

  4. Pour effacer un caractère sous le curseur tapez :  x

  5. Pour insérer ou ajouter du texte tapez :
         i   tapez le texte à insérer avant le curseur   <Échap>
         A   tapez le texte à ajouter en fin de ligne    <Échap>

NOTE : Appuyer  <Échap>  vous place en mode Normal ou annule une commande
       partiellement tapée dont vous ne voulez plus.


Leçon 2.3 : À PROPOS DES OPÉRATEURS ET DES MOUVEMENTS


  Plusieurs commandes qui changent le texte sont constituées d'un opérateur
  et d'un mouvement. Le format pour une commande d'effacement avec l'opérateur
  d  d'effacement est le suivant :

        d   mouvement

  Où :
    d         - est l'opérateur d'effacement
    mouvement - est le mouvement sur lequel agit l'opérateur (listés
                ci-dessous)

  Une courte liste de mouvements :
    w - jusqu'au début du prochain mot, en EXCLUANT son premier caractère.
    e - jusqu'à la fin du mot courant, en EXCLUANT son dernier caractère.
    $ - jusqu'à la fin de la ligne, en INCLUANT son dernier caractère.

  Ainsi, taper  de  va effacer depuis le curseur jusqu'à la fin du mot.

                        RÉSUMÉ DE LA LEÇON 2


1. Pour effacer du curseur jusqu'au mot suivant tapez :         dw

2. Pour effacer du curseur jusqu'à la fin d'une ligne tapez :   d$

3. Pour effacer toute une ligne tapez :                         dd

4. Pour répéter un déplacement ajoutez un quantificateur :      2w

5. Le format d'une commande de changement est :

      opérateur   [nombre]   déplacement

   Où :
      opérateur   - est ce qu'il faut faire, comme  d  pour effacer.
      [nombre]    - un quantificateur optionnel pour répéter le déplacement.
      déplacement - déplace le long du texte à opérer, tel que  w  (mot),
                  $ (jusqu'à la fin de ligne), etc.

6. Pour se déplacer au début de ligne, utilisez un zéro :  0

5. Pour annuler des actions précédentes, tapez :            u (u minuscule)
   Pour annuler tous les changements sur une ligne tapez :  U (U majuscule)
   Pour annuler l'annulation tapez :                        CTRL-R



                        RÉSUMÉ DE LA LEÇON 3


  1. Pour remettre le texte qui a déjà été effacé, tapez  p . Cela Place le
     texte effacé APRÈS le curseur (si une ligne complète a été effacée, elle
     sera placée sous la ligne du curseur).

  2. Pour remplacer le caractère sous le curseur, tapez  r  suivi du caractère
     qui remplacera l'original.

  3. L'opérateur de changement vous permet de changer depuis la position du
     curseur jusqu'où le déplacement vous amène. Par exemple, tapez  ce
     pour changer du curseur jusqu'à la fin du mot,  c$  pour changer jusqu'à
     la fin d'une ligne.

  4. Le format pour le changement est :

         c   [nombre]   déplacement

Passez maintenant à la leçon suivante.



         RÉSUMÉ DE LA LEÇON 4


  1. CTRL-G       affiche la position dans le fichier et l'état de celui-ci.
               G  déplace à la fin du fichier.
     nombre    G  déplace au numéro de ligne.
              gg  déplace à la première ligne.

  2. Taper  /  suivi d'un texte recherche ce texte vers l'AVANT.
     Taper  ?  suivi d'un texte recherche ce texte vers l'ARRIÈRE.
     Après une recherche tapez  n  pour trouver l'occurrence suivante dans la
     même direction ou  Maj-N  pour rechercher dans la direction opposée.

  3. Taper  %  lorsque le curseur est sur  (, ), [, ], { ou }  déplace
     celui-ci sur le caractère correspondant.

  4. Pour remplacer le premier aa par bb sur une ligne tapez     :s/aa/bb
     Pour remplacer tous les aa par bb sur une ligne tapez       :s/aa/bb/g
     Pour remplacer du texte entre deux numéros de ligne tapez   :#,#s/aa/bb/g
     Pour remplacer toutes les occurrences dans le fichier tapez :%s/aa/bb/g
     Pour demander une confirmation à chaque fois ajoutez 'c'    :%s/aa/bb/gc


                         RÉSUMÉ DE LA LEÇON 5


  1. :!commande  exécute une commande externe.

     Quelques exemples pratiques :
      (Windows)       (Unix)
       :!dir           :!ls          affiche le contenu du répertoire courant.
       :!del FICHIER   :!rm FICHIER  efface FICHIER.

  2. :w FICHIER  enregistre le fichier Vim courant sur le disque avec pour
     nom FICHIER.

  3. v  déplacement  :w FICHIER sauvegarde les lignes de la sélection Visuelle
     dans le fichier FICHIER.

  4. :r FICHIER  récupère le contenu du fichier FICHIER et l'insère sous la
     position du curseur.

  5. :r !dir  lit la sortie de la commande dir et l'insère sous la position
     du curseur.



               RÉSUMÉ DE LA LEÇON 6


  1. Taper  o  ouvre une ligne SOUS le curseur et démarre le mode Insertion.
     Taper  O  ouvre une ligne au-DESSUS du curseur.

  2. Taper  a  pour insérer du texte APRÈS le curseur.
     Taper  A  pour insérer du texte après la fin de ligne.

  3. Taper  e  déplace à la fin du mot.

  4. Taper  y  copie du texte,  p  le colle.

  5. Taper  R  majuscule active le mode Remplacement jusqu'à ce qu' <Échap>
     soit appuyé.

  6. Taper  ":set xxx"  active l'option "xxx". Quelques options sont :
        'ic'  'ingnorecase' pour ignorer la casse lors des recherches.
        'is'  'incsearch'   pour montrer les appariements partiels.
        'hls' 'hlsearch'    pour mettre en surbrillance les appariements.


                       RÉSUMÉ DE LA LEÇON 7


  1. Tapez  :help  ou appuyez <F1> ou <Aide> pour ouvrir la fenêtre d'aide.

  2. Tapez  :help cmd  pour trouver l'aide sur  cmd .

  3. Tapez  CTRL-W CTRL-W  pour sauter à une autre fenêtre.

  4. Tapez  :q  pour fermer la fenêtre d'aide.

  5. Créez un script de démarrage vimrc pour conserver vos réglages préférés.

  6. Quand vous tapez une commande  :  appuyez CTRL-D pour voir les
     complètements possibles. Appuyez <TAB> pour utiliser un complètement.

