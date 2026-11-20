import legal from "./legal/fr";

const fr = {
  meta: {
    title: "MotoMap — Traceur GPS moto hors ligne pour Android",
    description:
      "Vitesse, angle d'inclinaison et position sur une carte qui fonctionne sans réseau. Vidéo de sortie, replay avec télémétrie, export. Tout reste sur votre téléphone : sans compte, rien n'est envoyé.",
    keywords: [
      "GPS moto hors ligne",
      "traceur GPS moto",
      "angle d'inclinaison moto",
      "compteur de vitesse moto",
      "application moto Android",
      "carte hors ligne moto",
      "caméra embarquée moto",
      "enregistrement de trajet moto",
    ],
    ogAlt: "MotoMap — le traceur GPS hors ligne pour motards",
  },
  nav: {
    skip: "Aller au contenu",
    features: "Fonctions",
    video: "Vidéo",
    offline: "Hors ligne",
    faq: "FAQ",
    cta: "Télécharger",
    language: "Langue",
    home: "MotoMap, accueil",
  },
  hero: {
    eyebrow: "Traceur GPS hors ligne · Android",
    titleStart: "Roulez là où",
    titleHighlight: "le réseau s'arrête.",
    subtitle:
      "Vitesse, angle d'inclinaison et position sur une carte qui fonctionne sans signal. Chaque sortie est gardée sur votre téléphone — sans compte, rien n'est envoyé.",
    primaryCta: "Télécharger l'APK",
    secondaryCta: "Voir les fonctions",
    status: "APK Android · 4,5 Mo · en français et en anglais",
    trust: ["Sans compte", "Cartes sans réseau", "Enregistre écran éteint", "Android 5.0 et plus"],
  },
  pillars: {
    heading: "Pensé pour la route, pas pour le cloud",
    intro:
      "Quatre promesses qui tiennent même au fond d'une vallée, à l'étranger ou avec 2 % de batterie.",
    items: [
      {
        title: "Fonctionne sans réseau",
        body: "La carte se met en cache au fil de vos routes et vous pouvez télécharger une région à l'avance. Pas de signal ? Rien ne change.",
      },
      {
        title: "Enregistre écran éteint",
        body: "Verrouillez le téléphone ou laissez l'écran s'éteindre dans le support : la sortie continue de s'enregistrer, vidéo comprise. Une notification indique qu'elle est en cours.",
      },
      {
        title: "Vos sorties restent à vous",
        body: "Aucun compte, aucun serveur, aucune pub ni mesure d'audience. Trajets, statistiques et vidéos sont stockés sur le téléphone, et nulle part ailleurs.",
      },
      {
        title: "Survit à une batterie à plat",
        body: "La sortie est enregistrée en continu. Si le téléphone s'éteint, elle est récupérée au prochain lancement, vidéo comprise.",
      },
    ],
  },
  tabs: {
    eyebrow: "Quatre onglets",
    heading: "Tout ce qu'il faut, d'un coup d'œil",
    intro:
      "Une interface qu'on lit en roulant : trois écrans pour la route, chacun avec une seule mission, et les Réglages pour tout ce qui se décide avant de partir.",
    items: [
      {
        name: "Carte",
        title: "Votre trace, en direct",
        body: "Carte hors ligne, position et cap, tracé de la sortie en cours, et les commandes démarrer / pause / terminer.",
      },
      {
        name: "Vitesse",
        title: "Compteur et inclinaison",
        body: "Compteur analogique plein écran, jauge d'angle d'inclinaison avec maintien des pics, et statistiques de la sortie.",
      },
      {
        name: "Sorties",
        title: "Chaque sortie, gardée",
        body: "Le tracé coloré selon la vitesse, le résumé complet, et les profils de vitesse et d'inclinaison sur toute la sortie.",
      },
      {
        name: "Réglages",
        title: "Le reste, au même endroit",
        body: "Fond de carte et téléchargements hors ligne, qualité vidéo et son, quatre palettes de couleurs, mode clair ou sombre, français ou anglais.",
      },
    ],
  },
  video: {
    eyebrow: "Vidéo de sortie",
    heading: "Filmez la route, écran éteint",
    body: "Armez la caméra et roulez. L'enregistrement continue même quand l'écran s'éteint dans le support.",
    points: [
      {
        title: "Portrait ou paysage",
        body: "Indiquez comment le téléphone est fixé : la vidéo garde un horizon droit, et l'écran tourne avec.",
      },
      {
        title: "Caméra avant ou arrière",
        body: "La route devant vous, ou le pilote. La vidéo n'est jamais en miroir : les panneaux restent lisibles.",
      },
      {
        title: "Une minute perdue, au pire",
        body: "La vidéo est découpée en segments d'une minute. Une batterie à plat ne coûte que le segment en cours.",
      },
    ],
  },
  replay: {
    eyebrow: "Replay et export",
    heading: "Revivez chaque virage, partagez-le",
    body: "Regardez la sortie avec la télémétrie superposée : vitesse, inclinaison et ses pics, distance, temps, et une mini-carte qui suit la moto.",
    exportTitle: "Une seule vidéo, lisible partout",
    exportBody:
      "Exportez une vidéo MP4 avec la sortie incrustée dans l'image. Placez chaque élément du bout du doigt — vitesse, inclinaison, carte, distance, temps, vitesse max, altitude, titre — ou retirez-le. Puis partagez-la, ou enregistrez-la dans la galerie.",
    privacy:
      "La mini-carte se retire en un geste : partager un virage ne veut pas dire partager le chemin de chez vous.",
  },
  battery: {
    eyebrow: "Batterie à plat",
    heading: "Le téléphone s'éteint, la sortie reste",
    body: "MotoMap n'attend pas la fin du trajet pour enregistrer. Un arrêt brutal ne vous fait pas perdre votre journée.",
    steps: [
      {
        title: "Sauvegarde continue",
        body: "Distance, vitesse max, temps en mouvement et inclinaison max sont écrits sur le disque toutes les cinq secondes.",
      },
      {
        title: "Vidéo en segments",
        body: "Chaque minute filmée devient un fichier lisible dès qu'il est fermé. Le replay les recolle sans couture.",
      },
      {
        title: "Récupération automatique",
        body: "Une sortie interrompue est refermée et conservée au lancement suivant, marquée comme récupérée.",
      },
    ],
  },
  gloves: {
    eyebrow: "Conçu pour les gants",
    heading: "Lisible d'un coup d'œil, utilisable avec des gants",
    intro: "Chaque détail de l'interface est pensé pour un coup d'œil rapide et une main gantée.",
    items: [
      {
        title: "Grandes cibles tactiles",
        body: "Boutons de 48 dp minimum, bien espacés, pour viser juste avec des gants.",
      },
      {
        title: "Retour haptique",
        body: "Une vibration confirme démarrer, pause et terminer, sans quitter la route des yeux.",
      },
      {
        title: "Chiffres à chasse fixe",
        body: "Les chiffres ne changent pas de largeur en défilant : la lecture ne tremble pas.",
      },
      {
        title: "L'état écrit en toutes lettres",
        body: "ENREGISTREMENT, PAUSE : jamais la couleur seule, lisible même à travers une visière teintée.",
      },
      {
        title: "Pause et Terminer bien distincts",
        body: "Deux boutons volontairement inégaux, pour ne pas finir la sortie par erreur à un carrefour.",
      },
      {
        title: "Respecte « réduire les animations »",
        body: "Le point REC cesse de clignoter quand le système le demande.",
      },
    ],
  },
  offline: {
    eyebrow: "Le hors ligne, vraiment",
    heading: "Deux façons d'avoir la carte sans réseau",
    intro: "Le hors ligne est préparé dès la première ouverture : l'installation guidée enregistre une première zone et vérifie qu'elle s'affiche vraiment sans réseau.",
    steps: [
      {
        title: "Cache au fil de la route",
        body: "Chaque tuile affichée est gardée sans date d'expiration. Une route parcourue une fois avec du réseau s'affiche ensuite pour toujours sans.",
      },
      {
        title: "Téléchargement de zone",
        body: "Cadrez une région, choisissez le niveau de détail et téléchargez-la avant de partir.",
      },
    ],
    toggleTitle: "Mode hors ligne strict",
    toggleBody:
      "Un bouton coupe toute requête réseau de la carte. À l'étranger, aucune donnée en itinérance n'est consommée en douce.",
    styleNote:
      "Le téléchargement de zone fonctionne avec les styles OpenTopoMap et HikeBikeMap. Le style OpenStreetMap standard ne peut pas être pré-téléchargé (règle d'usage des serveurs OSM), mais il se met en cache normalement en roulant.",
  },
  allFeatures: {
    eyebrow: "Inventaire complet",
    heading: "Tout ce que fait MotoMap",
    intro: "Chaque fonction de la version actuelle, écran par écran.",
    groups: [
      {
        title: "Carte",
        items: [
          "Trois fonds de carte : OpenStreetMap, OpenTopoMap et HikeBikeMap",
          "Position et cap, marqueur orienté, tracé de la sortie en direct",
          "Quatre boutons seulement : recentrer, hors ligne strict, armer la vidéo, réglages vidéo",
          "État du GPS (désactivé, recherche, verrouillé) : un toucher ouvre les réglages du téléphone",
          "Pendant la sortie : vitesse, inclinaison, distance, durée et moyenne, avec ENREGISTREMENT ou PAUSE écrit en toutes lettres",
          "Moniteur caméra avec minuteur REC, agrandi d'un toucher",
        ],
      },
      {
        title: "Hors ligne",
        items: [
          "Chaque tuile affichée est gardée sur le téléphone, sans date d'expiration",
          "Téléchargement d'une zone : cadrez une région, choisissez le niveau de détail (jusqu'à 25 000 tuiles)",
          "Chaque fond indique s'il est téléchargeable ; pour OpenStreetMap, qui ne l'est pas, l'app propose OpenTopoMap ou HikeBikeMap",
          "Mode hors ligne strict : aucune donnée consommée en itinérance",
        ],
      },
      {
        title: "Compteur",
        items: [
          "Compteur de vitesse analogique plein écran",
          "Jauge d'inclinaison avec les pics gauche et droit maintenus",
          "Remise à zéro de l'inclinaison selon votre support, un zéro pour le portrait et un pour le paysage",
          "Distance, temps, vitesse max et moyenne en roulant",
          "Cap et altitude",
        ],
      },
      {
        title: "Enregistrement",
        items: [
          "Continue écran éteint ou téléphone verrouillé, signalé par une notification de sortie en cours",
          "Sauvegarde continue toutes les cinq secondes, pas seulement à la fin",
          "Sortie récupérée après une coupure et marquée « récupérée » ; arrêt propre quand la batterie devient critique",
          "Un démarrage accidentel (moins de trois positions) est écarté, sauf s'il porte de la vidéo",
          "GPS filtré : positions imprécises et sauts impossibles rejetés, vitesse par effet Doppler, sans Google Play Services",
          "Pic d'inclinaison compté seulement au-dessus de 11 km/h",
        ],
      },
      {
        title: "Vidéo embarquée",
        items: [
          "Armée depuis la carte, pour toute la sortie",
          "Téléphone en portrait ou en paysage, caméra avant ou arrière, résolution, son",
          "Caméra avant jamais en miroir ; si l'objectif choisi manque, l'autre prend le relais et vous êtes prévenu",
          "Segments d'une minute : une coupure ne coûte que le segment en cours",
          "Fichiers privés à l'app, sans permission de stockage, supprimés avec leur sortie",
        ],
      },
      {
        title: "Sorties",
        items: [
          "Liste de toutes les sorties, avec le total parcouru et les chiffres clés de chacune",
          "Tracé coloré selon la vitesse, avec légende, départ et arrivée",
          "Distance, durée, vitesse max, moyenne, inclinaison max à gauche et à droite, temps en mouvement, dénivelé positif",
          "Profils de vitesse et d'inclinaison, avec le pic annoté",
          "Renommer ou supprimer une sortie",
        ],
      },
      {
        title: "Replay",
        items: [
          "La vidéo avec la télémétrie exacte de chaque image",
          "Mini-carte réelle qui suit la moto, disponible hors ligne",
          "Les segments recousus en une seule lecture, calés sur l'heure réelle",
          "Barre de défilement et vitesse de lecture",
          "Rotation séparée de l'image et du panneau, par quarts de tour",
          "Nom du lieu traversé, cherché seulement pendant le replay, jamais en roulant",
        ],
      },
      {
        title: "Export vidéo",
        items: [
          "Un seul MP4 avec la télémétrie incrustée, lisible partout",
          "Éditeur : glissez, agrandissez, réduisez ou retirez chaque élément, et vérifiez-le à n'importe quel moment de la sortie",
          "Huit éléments : vitesse, inclinaison, carte, distance, temps, vitesse max, altitude, titre et date",
          "La carte se retire d'un geste, et votre mise en page est mémorisée",
          "Taille d'origine, 1080p ou 720p, avec ou sans le son",
          "Partager vers une autre app, ou copier dans la galerie (Android 10 et plus)",
        ],
      },
      {
        title: "Réglages",
        items: [
          "Quatre palettes : orange, cramoisi, bleu course, jaune haute visibilité",
          "Mode clair, sombre, ou celui du téléphone",
          "Fond de carte et téléchargements hors ligne",
          "Qualité vidéo et son",
          "Français ou anglais, jusque dans la notification et les vidéos exportées",
          "Conditions, politique de confidentialité et version de l'app",
        ],
      },
      {
        title: "Premier lancement",
        items: [
          "Conditions d'utilisation présentées avant tout, en français et en anglais",
          "Installation guidée en cinq étapes : l'app, la localisation et pourquoi, le fond de carte, le hors ligne, la première zone",
          "La première zone est vérifiée vraiment hors ligne avant de commencer",
          "« Pas maintenant » si vous n'avez pas de connexion",
          "Les mises à jour s'installent par-dessus, sans perdre vos sorties",
        ],
      },
    ],
  },
  faq: {
    heading: "Questions fréquentes",
    items: [
      {
        q: "Faut-il du réseau pour utiliser MotoMap ?",
        a: "Non. Le GPS fonctionne sans réseau, et la carte s'affiche hors ligne pour toute zone déjà parcourue ou téléchargée à l'avance. Le réseau ne sert qu'à charger de nouvelles tuiles de carte.",
      },
      {
        q: "Dois-je créer un compte ?",
        a: "Non. Il n'y a ni compte ni inscription. Vous installez l'application et vous roulez.",
      },
      {
        q: "Mes trajets sont-ils envoyés quelque part ?",
        a: "Non. Trajets, points GPS et vidéos sont stockés uniquement sur votre téléphone. Les seules requêtes réseau concernent les tuiles de carte. Pendant un replay, le nom du lieu traversé est obtenu via le géocodeur du téléphone ; rien n'est demandé pendant que vous roulez.",
      },
      {
        q: "MotoMap a-t-il besoin des services Google ?",
        a: "Non. La position vient directement de la puce GPS du téléphone, sans Google Play Services. La vitesse utilise la mesure Doppler du GNSS quand elle est disponible, plus précise qu'un simple calcul à partir des positions.",
      },
      {
        q: "L'angle d'inclinaison est-il précis ?",
        a: "Il suit fidèlement l'entrée et la sortie des virages grâce au gyroscope, mais peut sous-estimer l'angle dans un long virage stable — une limite physique de toute mesure par téléphone. C'est une aide au pilotage, pas un instrument de mesure.",
      },
      {
        q: "Que se passe-t-il si mon téléphone s'éteint en route ?",
        a: "La sortie est sauvegardée en continu. Au prochain lancement, elle est récupérée avec ses statistiques et ses segments vidéo ; au pire, vous perdez la dernière minute filmée.",
      },
      {
        q: "Puis-je éteindre l'écran pendant une sortie ?",
        a: "Oui. L'écran reste allumé tant que l'app est ouverte, pratique sur un support, mais vous pouvez verrouiller le téléphone ou le ranger dans une poche : position, statistiques et vidéo continuent de s'enregistrer, signalées par une notification. Seul l'armement de la vidéo se fait app ouverte.",
      },
      {
        q: "MotoMap fait-il du guidage GPS ?",
        a: "Non. MotoMap montre où vous êtes et où vous êtes passé ; il ne calcule pas d'itinéraire. Il s'utilise très bien en complément de votre application de navigation.",
      },
      {
        q: "Mes sorties sont-elles sauvegardées dans le cloud ?",
        a: "Non, volontairement. MotoMap désactive même la sauvegarde automatique d'Android vers Google Drive : rien de vos trajets ne quitte le téléphone. Le revers, c'est que désinstaller l'application ou perdre le téléphone efface vos sorties ; exportez en vidéo celles qui comptent.",
      },
      {
        q: "Dans quelles langues ?",
        a: "Français et anglais. L'application suit la langue du téléphone, et vous pouvez en choisir une autre dans les Réglages.",
      },
      {
        q: "Sur quels téléphones fonctionne-t-il ?",
        a: "Sur Android 5.0 et plus récent. Sur les téléphones les plus anciens, la vidéo de sortie peut ne pas fonctionner ; tout le reste, oui. Il n'existe pas de version iPhone pour le moment.",
      },
      {
        q: "Où le télécharger ?",
        a: "Avec le bouton de cette page : l'APK (4,5 Mo) est hébergé sur Google Drive. Ouvrez-le sur le téléphone ; Android demande une seule fois d'autoriser l'installation depuis l'application utilisée (Drive, Chrome ou Fichiers). Google Play Protect peut signaler un développeur inconnu : choisissez « Installer quand même ». Une nouvelle version s'installe par-dessus l'ancienne sans effacer vos sorties.",
      },
    ],
  },
  cta: {
    heading: "Votre prochaine sortie mérite mieux qu'une barre de réseau.",
    body: "Téléchargez l'APK, installez-le, enregistrez votre région et partez. Sans compte, sans réseau.",
    button: "Télécharger l'APK",
  },
  footer: {
    tagline: "Le traceur GPS hors ligne pour motards.",
    rights: "Tous droits réservés.",
    proprietary: "MotoMap est un logiciel propriétaire.",
    contact: "Contact",
    mapData: "Données cartographiques",
    language: "Langue",
    legal: "Mentions légales",
    terms: "Conditions d'utilisation",
    privacy: "Politique de confidentialité",
  },
  legal,
  screens: {
    shots: {
      map: "L'écran Carte de MotoMap : carte hors ligne et bouton Démarrer la sortie",
      mapRecording: "L'écran Carte pendant une sortie : enregistrement, vitesse, inclinaison, distance, durée, boutons Pause et Terminer",
      speed: "L'écran Vitesse : compteur analogique et jauge d'angle d'inclinaison",
      settings: "L'écran Réglages : fond de carte, cartes hors ligne, qualité vidéo, son et langue",
      replay: "Le replay d'une sortie : vidéo de la route avec vitesse, inclinaison, distance et mini-carte",
    },
    distance: "Distance",
    time: "Temps",
    trips: "Sorties",
    offline: "Hors ligne",
    maxSpeed: "Max",
    tripNames: ["Col de la Croix", "Gorges du Tarn", "Route des crêtes"],
    tripDates: ["Sam. 12 sept.", "Dim. 6 sept.", "Sam. 29 août"],
    recovered: "Récupéré",
  },
};

export default fr;
export type Dictionary = typeof fr;
