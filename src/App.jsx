import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Cpu,
  Zap,
  Settings,
  Wrench,
  Rocket,
  Target,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Menu,
  X,
  CheckCircle,
  Brain,
  Sun,
  Moon,
  Type,
  Minus,
  Plus,
  Flag,
  Lock,
  CreditCard,
  ArrowRight,
  Clock,
  Database,
  Users,
  Star
} from 'lucide-react';

// --- COMPOSANT : LANDING PAGE DE VENTE ---
const LandingPage = ({ onUnlock }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Redirection vers le lien de paiement Stripe
    window.location.href = 'https://buy.stripe.com/28E00j3Kr7ef0pGcedb7y01';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 font-bold text-xl tracking-tighter text-white">
          <Brain className="w-8 h-8 text-cyan-400" />
          <span>AgentIA<span className="text-cyan-400">Mastery</span></span>
        </div>
        <button
          onClick={handlePayment}
          className="hidden md:block px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all text-sm border border-slate-700"
        >
          Déjà membre ? Connexion
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-violet-600/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Nouveau : Guide complet 2025</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Automatise ton travail grâce à l’IA et <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">gagne des heures</span> chaque semaine.
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Ne te contente plus de discuter avec ChatGPT. Apprends à construire des <strong>Agents IA autonomes</strong> qui exécutent tes tâches pendant que tu dors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-lg font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              {isProcessing ? (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <Lock className="w-5 h-5 mr-2" />
              )}
              {isProcessing ? 'Paiement sécurisé...' : 'Accéder à l’eBook - 29,99€'}
            </button>
            <p className="text-sm text-slate-500 mt-2 sm:mt-0">Accès instantané après paiement</p>
          </div>
        </div>
      </header>

      {/* PROBLEM SECTION */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Le piège de la productivité moderne</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Trop de temps perdu</h3>
                    <p className="text-slate-400">Tu passes des heures à copier-coller des données, trier des emails ou faire de la veille manuelle.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500/10 p-3 rounded-lg mr-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">L'IA passive ne suffit plus</h3>
                    <p className="text-slate-400">ChatGPT est génial, mais il attend tes ordres. Dès que tu arrêtes de taper, il arrête de travailler.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl relative">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">AVANT</div>
              <div className="space-y-4 opacity-50 blur-[1px]">
                <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                <div className="h-4 bg-slate-700 rounded w-5/6"></div>
                <div className="h-20 bg-slate-700 rounded w-full"></div>
              </div>
              <div className="mt-8 text-center text-red-400 font-mono text-sm">
                ⚠️ Tâches manuelles détectées... Surcharge cognitive...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">La Solution : Deviens l'Architecte</h2>
          <p className="text-lg text-slate-400">
            Cet eBook n'est pas de la théorie. C'est un plan d'action pour construire votre propre équipe d'agents IA.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
            <div className="bg-cyan-500/10 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
              <Settings className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Méthode Pas à Pas</h3>
            <p className="text-slate-400">De la définition de l'objectif au déploiement. Aucune compétence en code avancée requise.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-violet-500/50 transition-colors">
            <div className="bg-violet-500/10 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
              <Database className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">5 Agents Prêts à l'Emploi</h3>
            <p className="text-slate-400">Recruteur, Veilleur, Rédacteur SEO... Copie-colle les logiques pour démarrer tout de suite.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-colors">
            <div className="bg-green-500/10 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Monétisation</h3>
            <p className="text-slate-400">Découvre comment vendre tes agents à des entreprises ou créer ton propre SaaS.</p>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-10 md:mb-0 md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">C'est pour qui ?</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-3" />
                  Entrepreneurs cherchant à scaler sans recruter.
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-3" />
                  Freelances voulant automatiser leurs livrables.
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-3" />
                  Étudiants souhaitant maîtriser la compétence n°1 de 2025.
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-3" />
                  Passionnés de Tech curieux du "post-chatbot".
                </li>
              </ul>
            </div>
            <div className="md:w-5/12 bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-white italic mb-4">"J'ai automatisé ma veille concurrentielle en 2 heures après avoir lu le chapitre 6. Ce guide est une mine d'or."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-600 rounded-full mr-3"></div>
                <div>
                  <div className="text-sm font-bold text-white">Thomas D.</div>
                  <div className="text-xs text-slate-400">Consultant Marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKOUT SECTION */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/20"></div>
        <div className="max-w-xl mx-auto px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-2">Commencez l'automatisation</h2>
            <p className="text-slate-400 mb-8">Accès immédiat et à vie au guide complet.</p>

            <div className="text-5xl font-extrabold text-white mb-2">29,99€ <span className="text-lg text-slate-500 font-normal line-through">49,99€</span></div>
            <div className="text-cyan-400 text-sm font-bold uppercase tracking-wide mb-8">Offre de lancement</div>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full py-4 bg-white text-slate-950 hover:bg-cyan-50 text-lg font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center mb-4"
            >
              {isProcessing ? (
                <svg className="animate-spin h-5 w-5 mr-3 text-slate-900" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payer et Accéder
                </>
              )}
            </button>

            <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
              <Lock className="w-3 h-3" />
              <span>Paiement sécurisé via Stripe</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-sm">
        &copy; 2025 AgentIA Mastery. Tous droits réservés.
      </footer>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL (GESTION DE L'ÉTAT) ---
// --- DONNÉES DU LIVRE (Contenu Complet) ---
const chapters = [
  {
    id: 0,
    title: "Introduction : L'Ère de l'Action",
    icon: <BookOpen className="w-5 h-5" />,
    bg: "from-blue-600 to-indigo-600",
    content: [
      { type: 'image', src: '/illustrations/intro_action_era.png', alt: 'The Era of Action' },
      { type: 'p', text: "Bienvenue dans ce guide pratique. Ce n'est pas un énième livre théorique sur l'intelligence artificielle, mais un manuel de terrain pour comprendre la plus grande rupture technologique de cette décennie : les Agents IA." },
      { type: 'p', text: "Jusqu'à présent, nous utilisions l'IA comme un oracle passif : on posait une question, elle donnait une réponse. C'était l'ère du Chatbot. Mais cette ère est déjà en train de s'effacer." },
      { type: 'strong', text: "Aujourd'hui, nous entrons dans l'ère de l'Agent : une IA capable de percevoir, de raisonner, et surtout... d'agir à votre place." },
      { type: 'p', text: "Dans les chapitres qui suivent, nous allons déconstruire ce concept, explorer les outils pour les bâtir, et voir concrètement comment ils vont redéfinir le monde du travail et du business." },
      { type: 'quote', text: "Préparez-vous à passer de l'IA qui parle à l'IA qui fait." }
    ]
  },
  {
    id: 1,
    title: "Chapitre 1 : Qu’est-ce qu’un agent IA ?",
    subtitle: "(Et pourquoi c’est une rupture majeure)",
    icon: <Cpu className="w-5 h-5" />,
    bg: "from-indigo-600 to-purple-600",
    content: [
      { type: 'p', text: "L’intelligence artificielle a longtemps été perçue comme un outil passif. On lui posait une question, elle répondait. On lui donnait une consigne, elle exécutait une tâche unique." },
      { type: 'p', text: "Mais cette époque est en train de disparaître. Aujourd’hui, nous entrons dans une nouvelle phase : celle des agents IA." },

      { type: 'h3', text: "Définition simple d’un agent IA" },
      { type: 'p', text: "Un agent IA est un système capable de :" },
      {
        type: 'ul', items: [
          "Percevoir un environnement (données, messages, événements, APIs, fichiers, web, etc.)",
          "Raisonner (analyser une situation, faire des choix, planifier des actions)",
          "Agir (exécuter des tâches, appeler des outils, interagir avec d’autres systèmes)",
          "Évoluer (retenir de l’information, s’adapter, améliorer ses décisions selon le contexte)"
        ]
      },
      { type: 'quote', text: "En d’autres termes : un agent IA ne se contente pas de répondre, il agit." },

      { type: 'image', src: '/illustrations/ch1_chatbot_vs_agent.png', alt: 'Chatbot vs AI Agent' },

      { type: 'h3', text: "La différence fondamentale avec un chatbot" },
      { type: 'strong', text: "Un chatbot classique :" },
      {
        type: 'ul', items: [
          "Attend une instruction humaine",
          "Répond à une question",
          "S’arrête après la réponse"
        ]
      },
      { type: 'strong', text: "Un agent IA :" },
      {
        type: 'ul', items: [
          "A un objectif",
          "Peut enchaîner plusieurs actions",
          "Peut fonctionner de manière autonome ou semi-autonome",
          "Peut utiliser plusieurs outils externes"
        ]
      },

      { type: 'h3', text: "Exemple concret" },
      { type: 'strong', text: "🔹 Chatbot" },
      { type: 'p', text: "“Peux-tu me résumer ce document ?” Il résume, puis s’arrête." },
      { type: 'strong', text: "🔹 Agent IA" },
      { type: 'p', text: "Objectif : “Surveiller les tendances IA chaque semaine”. L’agent va :" },
      {
        type: 'ul', items: [
          "Chercher des articles récents",
          "Filtrer les sources pertinentes",
          "Analyser les tendances",
          "Produire un rapport",
          "L’envoyer automatiquement par email"
        ]
      },
      { type: 'quote', text: "Sans intervention humaine à chaque étape." },

      { type: 'h3', text: "Les 4 composants clés d’un agent IA" },
      { type: 'p', text: "Tous les agents IA reposent sur une architecture similaire, même les plus simples." },

      { type: 'strong', text: "1. La perception (inputs)" },
      { type: 'p', text: "L’agent doit capter des informations : texte (emails, messages), données (bases de données), événements (nouveau lead) ou web. Sans perception, l’agent est aveugle." },

      { type: 'strong', text: "2. Le raisonnement (cerveau)" },
      { type: 'p', text: "C’est ici que se trouve le cœur de l’agent : un modèle de langage (LLM) comme GPT, Claude ou Mistral, parfois combiné à des règles logiques. Le raisonnement permet à l’agent de comprendre le contexte, décider quoi faire ensuite et planifier une suite d’actions." },

      { type: 'strong', text: "3. L’action (output)" },
      { type: 'p', text: "Un agent IA ne se limite pas à du texte. Il peut appeler une API, exécuter un script, remplir un formulaire, envoyer un email, mettre à jour une base de données ou déclencher un workflow. C’est ce qui transforme une IA en travailleur numérique." },

      { type: 'strong', text: "4. La mémoire (court et long terme)" },
      { type: 'p', text: "Un agent efficace doit se souvenir de ce qu’il a déjà fait, du contexte d’un utilisateur et d’informations importantes. Cela peut être une base de données classique, une mémoire vectorielle ou un simple historique structuré. Sans mémoire, un agent répète les mêmes erreurs." },

      { type: 'h3', text: "Pourquoi les agents IA sont une révolution" },
      { type: 'p', text: "Les agents IA changent profondément la manière dont on utilise l’IA. Avant : une IA = un outil (une tâche = une instruction). Maintenant : une IA = un système autonome (une tâche = un objectif)." },
      { type: 'quote', text: "On passe de l’IA “assistante” à l’IA “opératrice”." },

      { type: 'h3', text: "Exemples simples d’agents IA déjà utilisés" },
      { type: 'p', text: "Sans forcément les appeler ainsi, tu as peut-être déjà croisé des agents IA : un système qui trie automatiquement des emails, un bot qui répond aux tickets support, un outil qui surveille des prix ou un assistant qui planifie des tâches." },
      { type: 'p', text: "La différence aujourd’hui, c’est que ces systèmes deviennent : plus intelligents, plus accessibles et plus personnalisables." },

      { type: 'h3', text: "Pourquoi tout le monde en parle maintenant" },
      {
        type: 'ul', items: [
          "Les modèles de langage sont devenus assez puissants (ils peuvent raisonner et planifier).",
          "Les outils sont plus accessibles (Frameworks, APIs, no-code : plus besoin d’une équipe R&D).",
          "Le besoin d’automatisation explose (entre surcharge d’information et pression économique)."
        ]
      },

      { type: 'h3', text: "À qui s’adressent les agents IA ?" },
      { type: 'p', text: "Contrairement à une idée reçue, les agents IA ne sont pas réservés aux chercheurs. Ils sont accessibles aux développeurs, freelances, entrepreneurs, étudiants et profils hybrides." },
      { type: 'quote', text: "Ce guide est justement conçu pour faire le pont entre théorie et pratique." },

      { type: 'h3', text: "Ce qu’il faut retenir de ce chapitre" },
      {
        type: 'ul', items: [
          "Un agent IA est un système autonome orienté objectif.",
          "Il perçoit, raisonne, agit et mémorise.",
          "Il va bien au-delà d’un simple chatbot.",
          "Les agents IA représentent une rupture technologique majeure.",
          "Apprendre à les concevoir aujourd’hui est un énorme avantage stratégique."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Chapitre 2 : Les différents types d’agents IA",
    icon: <Zap className="w-5 h-5" />,
    bg: "from-purple-600 to-pink-600",
    content: [
      { type: 'p', text: "Tous les agents IA ne se ressemblent pas. Selon leur objectif, leur niveau d’autonomie et leur complexité, on peut les classer en plusieurs catégories." },
      { type: 'p', text: "Comprendre ces types est essentiel pour :" },
      {
        type: 'ul', items: [
          "Choisir la bonne architecture",
          "Éviter de sur-complexifier inutilement",
          "Concevoir un agent réellement efficace"
        ]
      },
      { type: 'h3', text: "Pourquoi il existe plusieurs types d’agents IA" },
      { type: 'p', text: "Un agent IA est toujours créé pour un objectif précis. Et selon cet objectif : il peut réagir immédiatement, planifier plusieurs étapes, collaborer avec d’autres agents, ou utiliser un ou plusieurs outils." },
      { type: 'image', src: '/illustrations/ch2_agent_types.png', alt: 'Types of AI Agents' },
      { type: 'quote', text: "Il n’existe pas de “meilleur” agent universel, seulement le bon type pour le bon usage." },

      { type: 'h3', text: "1. Les agents réactifs" },
      { type: 'strong', text: "Définition" },
      { type: 'p', text: "Les agents réactifs sont les plus simples. Ils fonctionnent selon le principe : Stimulus → Réponse. Ils ne planifient pas à long terme et n’ont généralement pas de mémoire complexe." },
      { type: 'strong', text: "Caractéristiques" },
      {
        type: 'ul', items: [
          "Réponse immédiate",
          "Logique simple",
          "Peu ou pas de mémoire",
          "Très fiables pour des tâches répétitives"
        ]
      },
      { type: 'strong', text: "Exemples concrets" },
      {
        type: 'ul', items: [
          "Agent qui répond automatiquement aux emails entrants",
          "Bot qui modère un forum ou un chat",
          "Système qui déclenche une alerte quand une condition est remplie"
        ]
      },
      { type: 'strong', text: "Avantages vs Limites" },
      {
        type: 'ul', items: [
          "✅ Faciles à concevoir, Peu coûteux, Idéaux pour commencer",
          "❌ Peu de raisonnement complexe, Pas d’autonomie avancée"
        ]
      },
      { type: 'quote', text: "Parfaits pour des tâches simples et bien définies." },

      { type: 'h3', text: "2. Les agents basés sur des objectifs (goal-based agents)" },
      { type: 'strong', text: "Définition" },
      { type: 'p', text: "Ces agents ne se contentent pas de réagir. Ils ont un objectif clair et planifient une suite d’actions pour l’atteindre." },
      { type: 'strong', text: "Caractéristiques" },
      {
        type: 'ul', items: [
          "Capacité de planification",
          "Décisions conditionnelles",
          "Enchaînement de tâches",
          "Raisonnement plus avancé"
        ]
      },
      { type: 'strong', text: "Exemples concrets" },
      {
        type: 'ul', items: [
          "Trouver des leads qualifiés et les enregistrer dans un CRM",
          "Surveiller un marché et produire un rapport hebdomadaire",
          "Organiser automatiquement un projet en tâches"
        ]
      },
      { type: 'strong', text: "Exemple de fonctionnement" },
      { type: 'p', text: "Objectif : “Trouver 10 prospects qualifiés”" },
      {
        type: 'ul', items: [
          "Recherche sur le web",
          "Filtrage des résultats",
          "Analyse des profils",
          "Enregistrement des données",
          "Rapport final"
        ]
      },
      { type: 'strong', text: "Avantages vs Limites" },
      {
        type: 'ul', items: [
          "✅ Plus intelligents, Très puissants pour l’automatisation, Forte valeur business",
          "❌ Plus complexes à concevoir, Besoin d’un bon cadrage"
        ]
      },

      { type: 'h3', text: "3. Les agents multi-outils" },
      { type: 'strong', text: "Définition" },
      { type: 'p', text: "Un agent multi-outils est capable d’utiliser plusieurs outils externes pour accomplir sa mission (APIs, bases de données, scripts, navigateurs web, services tiers)." },
      { type: 'strong', text: "Caractéristiques" },
      {
        type: 'ul', items: [
          "Grande flexibilité",
          "Intégration avec des systèmes existants",
          "Forte capacité d’automatisation"
        ]
      },
      { type: 'strong', text: "Exemples concrets" },
      {
        type: 'ul', items: [
          "Recherche web + analyse + génération de rapport",
          "Agent e-commerce : stock → prix → publication",
          "Agent data : extraction → nettoyage → visualisation"
        ]
      },
      { type: 'strong', text: "Avantages vs Limites" },
      {
        type: 'ul', items: [
          "✅ Très puissant, Adaptable à de nombreux cas d’usage, Idéal pour des systèmes complexes",
          "❌ Gestion des erreurs plus délicate, Dépendance aux outils externes"
        ]
      },

      { type: 'h3', text: "4. Les systèmes multi-agents" },
      { type: 'strong', text: "Définition" },
      { type: 'p', text: "Ici, on ne parle plus d’un agent unique, mais de plusieurs agents spécialisés qui collaborent. Chaque agent a un rôle précis et une responsabilité claire." },
      { type: 'strong', text: "Exemple typique" },
      {
        type: 'ul', items: [
          "Agent chercheur : collecte l’information",
          "Agent analyste : structure et synthétise",
          "Agent rédacteur : produit le contenu",
          "Agent contrôleur : vérifie la qualité"
        ]
      },
      { type: 'quote', text: "Ensemble, ils forment une équipe virtuelle." },
      { type: 'strong', text: "Avantages vs Limites" },
      {
        type: 'ul', items: [
          "✅ Scalabilité, Spécialisation, Résultats souvent plus qualitatifs",
          "❌ Coordination plus complexe, Coût et latence plus élevés"
        ]
      },

      { type: 'h3', text: "Comment choisir le bon type d’agent" },
      { type: 'p', text: "Pose-toi ces questions : Mon objectif est-il simple ou complexe ? Une réponse immédiate suffit-elle ? Faut-il enchaîner plusieurs actions ? Faut-il plusieurs compétences distinctes ?" },
      { type: 'quote', text: "Commence toujours simple, puis évolue." },

      { type: 'h3', text: "Erreur fréquente à éviter" },
      { type: 'strong', text: "❌ Vouloir créer un système multi-agents dès le départ" },
      { type: 'p', text: "La plupart des besoins peuvent être couverts par un agent réactif ou un agent basé sur un objectif." },

      { type: 'h3', text: "Ce qu’il faut retenir de ce chapitre" },
      {
        type: 'ul', items: [
          "Il existe plusieurs types d’agents IA",
          "Chaque type répond à un besoin précis",
          "La simplicité est souvent la meilleure stratégie",
          "Les systèmes multi-agents sont puissants mais complexes",
          "Le bon agent est celui qui répond efficacement à son objectif"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Chapitre 3 : Les cas d’usage concrets des agents IA",
    icon: <Target className="w-5 h-5" />,
    bg: "from-pink-600 to-rose-600",
    content: [
      { type: 'p', text: "Les agents IA ne sont pas un concept théorique. Ils sont déjà utilisés pour automatiser des tâches, améliorer la productivité et créer de la valeur business." },
      { type: 'p', text: "Dans ce chapitre, nous allons voir comment les agents IA sont appliqués concrètement, dans différents domaines, avec des exemples réels et actionnables." },

      { type: 'h3', text: "Pourquoi les cas d’usage sont essentiels" },
      { type: 'p', text: "Beaucoup de personnes comprennent la théorie mais bloquent sur une question simple : “Concrètement, qu’est-ce que je peux faire avec un agent IA ?”" },
      { type: 'p', text: "Les cas d’usage permettent de :" },
      {
        type: 'ul', items: [
          "Visualiser le potentiel réel",
          "Identifier des opportunités exploitables",
          "Imaginer ses propres agents"
        ]
      },

      { type: 'h3', text: "1. Cas d’usage business" },
      { type: 'strong', text: "🔹 Génération de leads" },
      { type: 'p', text: "Un agent IA peut rechercher des prospects sur le web, analyser leurs besoins, qualifier les leads et les enregistrer automatiquement dans un CRM." },
      { type: 'strong', text: "Exemple concret :" },
      {
        type: 'ul', items: [
          "Un agent explore LinkedIn ou des sites d’entreprises",
          "Filtre selon des critères (secteur, taille, pays)",
          "Extrait les contacts pertinents",
          "Génère une fiche prospect"
        ]
      },
      { type: 'quote', text: "Résultat : gain de temps massif et pipeline constant." },

      { type: 'strong', text: "🔹 Analyse de marché" },
      { type: 'image', src: '/illustrations/ch3_business_growth.png', alt: 'AI Business Growth' },
      { type: 'p', text: "Un agent IA peut collecter des données (concurrents, prix, tendances), analyser les avis clients et produire un rapport structuré." },
      { type: 'strong', text: "Exemple :" },
      { type: 'p', text: "Avant de lancer un produit, l’agent analyse les offres existantes, identifie les faiblesses du marché et propose des opportunités de différenciation." },

      { type: 'strong', text: "🔹 Support client automatisé" },
      { type: 'p', text: "Un agent peut répondre aux questions fréquentes, classer les tickets et escalader les cas complexes." },
      { type: 'quote', text: "Le support devient plus rapide, plus cohérent et disponible 24/7." },

      { type: 'h3', text: "2. Cas d’usage en productivité personnelle" },
      { type: 'strong', text: "🔹 Assistant de veille intelligente" },
      { type: 'p', text: "Un agent de veille surveille des sources spécifiques, filtre l’information pertinente et résume les contenus importants." },
      { type: 'strong', text: "Exemple :" },
      { type: 'p', text: "Un agent qui lit des articles tech chaque jour, extrait les nouveautés importantes et envoie un résumé quotidien." },

      { type: 'strong', text: "🔹 Planification de projets" },
      { type: 'p', text: "Un agent peut transformer un objectif en plan d’action, créer des tâches et proposer des priorités. Idéal pour freelances, managers ou étudiants." },

      { type: 'strong', text: "🔹 Résumé automatique de documents" },
      { type: 'p', text: "Un agent peut lire des PDF, rapports, emails, extraire l’essentiel et produire un résumé clair. Gain de temps énorme pour la prise de décision." },

      { type: 'h3', text: "3. Cas d’usage en développement & IT" },
      { type: 'strong', text: "🔹 Génération de code" },
      { type: 'p', text: "Un agent peut générer du code selon un besoin précis, proposer des solutions alternatives, commenter et expliquer. Un assistant technique permanent." },

      { type: 'strong', text: "🔹 Tests automatisés" },
      { type: 'p', text: "Un agent IA peut analyser le code, générer des tests unitaires et détecter des anomalies. Amélioration de la qualité logicielle." },

      { type: 'strong', text: "🔹 Surveillance et monitoring" },
      { type: 'p', text: "Un agent peut surveiller des logs, détecter des comportements anormaux et alerter en cas de problème. Réactivité accrue et réduction des incidents." },

      { type: 'h3', text: "4. Cas d’usage créatifs et marketing" },
      { type: 'strong', text: "🔹 Rédaction SEO" },
      { type: 'p', text: "Un agent peut analyser des mots-clés, rédiger des contenus optimisés et adapter le ton selon la cible." },

      { type: 'strong', text: "🔹 Création de contenu automatisée" },
      { type: 'p', text: "Posts, newsletters, scripts vidéo… Un agent peut produire, planifier et publier automatiquement." },

      { type: 'strong', text: "🔹 Analyse de performances" },
      { type: 'p', text: "Un agent peut analyser les résultats marketing, identifier ce qui fonctionne et proposer des optimisations." },

      { type: 'h3', text: "Comment identifier un bon cas d’usage" },
      { type: 'p', text: "Un bon cas d’usage répond souvent à ces critères :" },
      {
        type: 'ul', items: [
          "Tâche répétitive",
          "Règles claires",
          "Forte consommation de temps",
          "Valeur ajoutée mesurable"
        ]
      },
      { type: 'quote', text: "Si une tâche est ennuyeuse pour un humain, elle est parfaite pour un agent IA." },

      { type: 'h3', text: "Erreur fréquente" },
      { type: 'strong', text: "❌ Créer un agent “généraliste” sans objectif précis" },
      { type: 'p', text: "Les meilleurs agents font peu de choses, mais les font très bien." },

      { type: 'h3', text: "Ce qu’il faut retenir de ce chapitre" },
      {
        type: 'ul', items: [
          "Les agents IA sont déjà utilisés dans de nombreux domaines",
          "Le business et la productivité sont les plus gros leviers",
          "Les cas d’usage simples sont souvent les plus rentables",
          "Un bon agent résout un problème précis",
          "L’inspiration vient de l’observation du quotidien"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Chapitre 4 : Les briques techniques essentielles",
    icon: <Settings className="w-5 h-5" />,
    bg: "from-rose-600 to-orange-600",
    content: [
      { type: 'p', text: "Un agent IA peut sembler complexe… mais en réalité, il repose sur quelques briques fondamentales, bien identifiées." },
      { type: 'p', text: "Comprendre ces briques te permet de : mieux concevoir tes agents, choisir les bons outils, éviter les erreurs d’architecture." },
      { type: 'quote', text: "Tu n’as pas besoin d’être chercheur en IA pour les maîtriser." },

      { type: 'image', src: '/illustrations/ch4_architecture.png', alt: 'AI Agent Architecture' },

      { type: 'h3', text: "La structure de base d’un agent IA" },
      { type: 'p', text: "Presque tous les agents IA reposent sur cette architecture :" },
      {
        type: 'ul', items: [
          "Un cerveau (le modèle de langage)",
          "Une mémoire",
          "Des outils",
          "Un orchestrateur (logique de décision)"
        ]
      },
      { type: 'p', text: "Voyons chaque brique en détail." },

      { type: 'h3', text: "1. Le modèle de langage (LLM)" },
      { type: 'strong', text: "Rôle du LLM" },
      { type: 'p', text: "Le LLM est le cœur de l’agent. C’est lui qui comprend les instructions, raisonne, génère des réponses et décide des actions à effectuer." },
      { type: 'strong', text: "Exemples de LLM populaires" },
      {
        type: 'ul', items: [
          "GPT (OpenAI)",
          "Claude (Anthropic)",
          "Mistral",
          "LLaMA (open-source)"
        ]
      },
      { type: 'strong', text: "Points clés à comprendre" },
      {
        type: 'ul', items: [
          "Plus le modèle est puissant, plus il est coûteux",
          "Tous les agents n’ont pas besoin du meilleur modèle",
          "Le prompt est aussi important que le modèle"
        ]
      },
      { type: 'quote', text: "Un bon prompt peut compenser un modèle plus simple." },

      { type: 'h3', text: "2. La mémoire" },
      { type: 'strong', text: "Pourquoi la mémoire est cruciale" },
      { type: 'p', text: "Sans mémoire, un agent oublie le contexte, répète des actions inutiles et donne des réponses incohérentes. La mémoire permet à l’agent de se souvenir des échanges, stocker des informations utiles et apprendre d’expériences passées." },
      { type: 'strong', text: "Types de mémoire" },
      {
        type: 'ul', items: [
          "🔹 Mémoire courte durée : Contexte de conversation, Actions récentes",
          "🔹 Mémoire long terme : Base de données, Fichiers, Historique utilisateur",
          "🔹 Mémoire vectorielle : Permet la recherche sémantique, Stocke des embeddings (Ex: Pinecone, FAISS, Chroma)"
        ]
      },

      { type: 'h3', text: "3. Les outils" },
      { type: 'strong', text: "Définition" },
      { type: 'p', text: "Les outils permettent à l’agent d’agir sur le monde réel. Sans outils, un agent ne fait que parler. Avec des outils, il agit." },
      { type: 'strong', text: "Types d’outils courants" },
      {
        type: 'ul', items: [
          "APIs (CRM, paiement, email)",
          "Scripts Python",
          "Accès web (scraping, navigation)",
          "Bases de données",
          "Services tiers (Zapier, Notion, Google Sheets)"
        ]
      },
      { type: 'strong', text: "Exemple concret" },
      { type: 'p', text: "Un agent peut chercher une info via une API, analyser les données et envoyer un email automatiquement." },
      { type: 'quote', text: "C’est là que la vraie valeur apparaît." },

      { type: 'h3', text: "4. L’orchestrateur (le chef d’orchestre)" },
      { type: 'strong', text: "Rôle de l’orchestrateur" },
      { type: 'p', text: "L’orchestrateur décide quelle action exécuter, dans quel ordre, et quand s’arrêter. Il gère la logique métier, les erreurs et les conditions." },
      { type: 'strong', text: "Exemple de logique" },
      { type: 'p', text: "Si l’info est trouvée → analyser. Si l’analyse est valide → agir. Sinon → chercher à nouveau." },
      { type: 'quote', text: "Sans orchestrateur, l’agent devient chaotique." },

      { type: 'h3', text: "5. La boucle de raisonnement (agent loop)" },
      { type: 'p', text: "Un agent efficace fonctionne en boucle :" },
      {
        type: 'ul', items: [
          "Observer",
          "Raisonner",
          "Agir",
          "Vérifier",
          "Répéter si nécessaire"
        ]
      },
      { type: 'p', text: "Cette boucle permet l’adaptation, la correction d’erreurs et l’autonomie progressive." },

      { type: 'h3', text: "6. Sécurité et contrôle (souvent négligés)" },
      { type: 'p', text: "Un bon agent doit avoir des limites claires, gérer les erreurs et éviter les actions dangereuses." },
      { type: 'strong', text: "Exemples :" },
      {
        type: 'ul', items: [
          "Validation humaine pour actions sensibles",
          "Restrictions d’accès API",
          "Logs et monitoring"
        ]
      },
      { type: 'quote', text: "La sécurité est une brique à part entière." },

      { type: 'h3', text: "Erreur fréquente" },
      { type: 'strong', text: "❌ Se concentrer uniquement sur le modèle IA" },
      { type: 'p', text: "La performance d’un agent dépend plus souvent de l’architecture, de la mémoire et de la logique métier que du modèle lui-même." },

      { type: 'h3', text: "Ce qu’il faut retenir de ce chapitre" },
      {
        type: 'ul', items: [
          "Un agent IA repose sur des briques simples",
          "Le LLM est le cerveau, pas tout le système",
          "La mémoire donne de la cohérence",
          "Les outils donnent de la puissance",
          "L’orchestrateur apporte le contrôle",
          "Une bonne architecture > un gros modèle"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Chapitre 5 : Les meilleurs outils pour créer des agents IA",
    icon: <Wrench className="w-5 h-5" />,
    bg: "from-orange-600 to-amber-600",
    content: [
      { type: 'p', text: "Créer un agent IA aujourd’hui n’a jamais été aussi accessible. Il existe des outils pour tous les niveaux : développeurs, profils techniques légers et même non-tech." },
      { type: 'p', text: "Le plus important n’est pas d’utiliser tous les outils, mais les bons outils pour ton objectif." },

      { type: 'h3', text: "Comment choisir ses outils intelligemment" },
      { type: 'p', text: "Avant de plonger dans la liste, pose-toi ces questions : Suis-je développeur ou non ? Ai-je besoin de contrôle total ou de rapidité ? Mon agent est-il simple ou complexe ? Dois-je gérer plusieurs agents ?" },
      { type: 'quote', text: "Le bon outil est celui qui réduit la friction, pas celui qui impressionne." },

      { type: 'h3', text: "1. Les frameworks pour développeurs" },
      { type: 'p', text: "Ces outils offrent le plus de contrôle et de puissance, mais demandent des compétences techniques." },

      { type: 'strong', text: "🔹 LangChain" },
      { type: 'p', text: "Le plus populaire et le plus mature. LangChain permet de connecter un LLM à des outils, gérer la mémoire et construire des agents modulaires." },
      { type: 'p', text: "Idéal pour : agents multi-outils, prototypes avancés, projets sur mesure." },
      {
        type: 'ul', items: [
          "✅ Grande communauté, Très flexible, Documentation riche",
          "❌ Courbe d’apprentissage, Peut devenir complexe"
        ]
      },

      { type: 'strong', text: "🔹 AutoGen (Microsoft)" },
      { type: 'p', text: "Spécialisé dans les systèmes multi-agents. Permet la collaboration entre agents, la répartition de rôles et les conversations entre IA." },
      { type: 'p', text: "Idéal pour : équipes d’agents spécialisés, workflows complexes." },
      {
        type: 'ul', items: [
          "✅ Excellent pour le multi-agent, Architecture claire",
          "❌ Moins adapté aux projets simples"
        ]
      },

      { type: 'strong', text: "🔹 CrewAI" },
      { type: 'p', text: "Orienté collaboration structurée. CrewAI fonctionne comme une équipe : chaque agent a un rôle, des objectifs précis et un workflow clair." },
      { type: 'p', text: "Idéal pour : agents de rédaction, recherche + analyse + production." },
      {
        type: 'ul', items: [
          "✅ Facile à comprendre, Logique claire",
          "❌ Moins flexible que LangChain"
        ]
      },

      { type: 'h3', text: "2. Les outils No-code / Low-code" },
      { type: 'p', text: "Parfaits pour lancer rapidement sans écrire beaucoup de code." },

      { type: 'strong', text: "🔹 Zapier + IA" },
      { type: 'p', text: "Permet de connecter des services entre eux, déclencher des actions automatiques et intégrer des modèles IA facilement. Idéal pour automatisation business, agents simples, MVP rapide." },

      { type: 'strong', text: "🔹 Make (ex-Integromat)" },
      { type: 'p', text: "Plus visuel et plus flexible que Zapier. Avantages : Logique visuelle, Scénarios complexes possibles." },

      { type: 'strong', text: "🔹 n8n" },
      { type: 'p', text: "Open-source et auto-hébergé. Parfait pour plus de contrôle, réduction des coûts et projets personnalisés. Très populaire chez les profils techniques." },

      { type: 'h3', text: "3. Les modèles et APIs" },
      { type: 'strong', text: "🔹 APIs de modèles IA" },
      { type: 'p', text: "OpenAI (GPT), Anthropic (Claude), Mistral. Le choix dépend du coût, de la performance et des contraintes légales." },

      { type: 'strong', text: "🔹 Modèles open-source" },
      {
        type: 'ul', items: [
          "Avantages : Contrôle total, Confidentialité, Coût réduit à long terme",
          "Inconvénients : Besoin d’infrastructure, Maintenance plus lourde"
        ]
      },

      { type: 'h3', text: "4. L’infrastructure technique" },
      {
        type: 'ul', items: [
          "🔹 Python : Le standard pour l'IA, la data et l'automatisation.",
          "🔹 Docker : Permet de déployer facilement, standardiser l’environnement et éviter les bugs.",
          "🔹 Bases de données : PostgreSQL, MongoDB, Vector DB (Chroma, FAISS)."
        ]
      },

      { type: 'h3', text: "5. Combinaisons d’outils recommandées" },
      {
        type: 'ul', items: [
          "Débutant technique : Python + LangChain + API GPT + Chroma",
          "Non-tech / business : Make ou Zapier + API IA + Google Sheets / Notion",
          "Avancé / scalable : LangChain ou AutoGen + Vector DB + Docker + Cloud"
        ]
      },

      { type: 'h3', text: "Erreur fréquente" },
      { type: 'strong', text: "❌ Choisir un outil trop complexe pour un besoin simple" },
      { type: 'quote', text: "Mieux vaut un agent simple qui fonctionne qu’un système sophistiqué jamais terminé." },

      { type: 'h3', text: "Ce qu’il faut retenir de ce chapitre" },
      {
        type: 'ul', items: [
          "Il existe des outils pour tous les profils",
          "Les frameworks offrent puissance et flexibilité",
          "Le no-code permet de lancer vite",
          "Python reste la base technique",
          "L’infrastructure est clé pour la scalabilité",
          "Le bon outil dépend toujours de l’objectif"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Chapitre 6 : Créer ton premier agent IA (méthode simple)",
    icon: <Rocket className="w-5 h-5" />,
    bg: "from-amber-600 to-yellow-600",
    content: [
      { type: 'p', text: "Passons maintenant à la pratique. Créer un agent IA ne commence pas par le code, mais par la clarté. La majorité des échecs viennent d’un objectif mal défini, pas d’un problème technique." },
      { type: 'p', text: "Dans ce chapitre, tu vas apprendre une méthode simple en 4 étapes pour concevoir un agent fonctionnel, utile et évolutif." },
      { type: 'image', src: '/illustrations/ch6_building_blocks.png', alt: 'Building an AI Agent' },

      { type: 'h3', text: "Étape 1 : Définir un objectif clair et unique" },
      { type: 'strong', text: "La règle numéro 1 :" },
      { type: 'p', text: "Un agent = un objectif principal." },
      {
        type: 'ul', items: [
          "❌ Mauvais objectif : “Mon agent doit m’aider dans mon business.”",
          "✅ Bon objectif : “Mon agent doit collecter des leads qualifiés dans le secteur X.”"
        ]
      },
      { type: 'strong', text: "Comment formuler un bon objectif" },
      { type: 'p', text: "Un bon objectif doit être précis, mesurable et actionnable. Formule simple : “Mon agent doit [ACTION] pour [RÉSULTAT].”" },
      { type: 'strong', text: "Exemples :" },
      {
        type: 'ul', items: [
          "Collecter des offres d’emploi pertinentes chaque jour",
          "Résumer les emails importants",
          "Générer des fiches prospects qualifiées"
        ]
      },

      { type: 'h3', text: "Étape 2 : Lister les actions nécessaires" },
      { type: 'p', text: "Une fois l’objectif défini, découpe-le en micro-actions." },
      { type: 'strong', text: "Exemple : Agent de veille technologique" },
      {
        type: 'ul', items: [
          "Identifier les sources",
          "Collecter les données",
          "Filtrer les informations",
          "Résumer",
          "Envoyer le rapport"
        ]
      },
      { type: 'quote', text: "Si une action est floue, l’agent échouera. Si tu peux décrire le processus sur papier, tu peux l’automatiser." },

      { type: 'h3', text: "Étape 3 : Choisir les bons outils" },
      { type: 'p', text: "Chaque action doit avoir un outil clair. Pas d’outil = pas d’action réelle." },
      {
        type: 'ul', items: [
          "Recherche → API / Web",
          "Analyse → LLM",
          "Stockage → Base de données",
          "Action finale → Email / CRM"
        ]
      },

      { type: 'h3', text: "Étape 4 : Concevoir la logique de décision" },
      { type: 'p', text: "Un agent intelligent sait quand continuer, quand s’arrêter, quand recommencer. C’est le rôle de l’orchestrateur." },
      { type: 'strong', text: "Exemple :" },
      {
        type: 'ul', items: [
          "Si les données sont incomplètes → rechercher à nouveau",
          "Si elles sont valides → continuer",
          "Si erreur → alerter"
        ]
      },

      { type: 'h3', text: "Étape 5 : Tester en conditions réelles" },
      { type: 'p', text: "Ne teste pas ton agent uniquement avec des cas parfaits. Un agent utile est un agent robuste." },
      { type: 'strong', text: "Teste :" },
      {
        type: 'ul', items: [
          "Données incomplètes",
          "Erreurs API",
          "Cas limites"
        ]
      },

      { type: 'h3', text: "Étape 6 : Itérer et améliorer" },
      { type: 'p', text: "Un agent IA n’est jamais “fini”. L’itération est la clé de la performance." },
      { type: 'strong', text: "Améliorations possibles :" },
      {
        type: 'ul', items: [
          "Meilleur prompt",
          "Meilleure mémoire",
          "Nouvelles règles",
          "Nouveaux outils"
        ]
      },

      { type: 'h3', text: "Exemple concret : agent simple de veille" },
      { type: 'strong', text: "Objectif" },
      { type: 'p', text: "Surveiller l’actualité IA et envoyer un résumé quotidien." },
      { type: 'strong', text: "Actions" },
      { type: 'p', text: "Scanner des sites → Filtrer les articles → Résumer → Envoyer un email." },
      { type: 'strong', text: "Outils" },
      { type: 'p', text: "API web, LLM, Email. Simple, utile, efficace." },

      { type: 'h3', text: "Erreurs fréquentes à éviter" },
      {
        type: 'ul', items: [
          "❌ Vouloir trop d’autonomie dès le départ",
          "❌ Créer un agent trop généraliste",
          "❌ Négliger les tests",
          "❌ Ignorer les coûts API"
        ]
      },

      { type: 'h3', text: "Bonnes pratiques" },
      {
        type: 'ul', items: [
          "✅ Commencer simple",
          "✅ Ajouter des limites claires",
          "✅ Documenter le comportement",
          "✅ Mesurer les résultats"
        ]
      },

      { type: 'h3', text: "Ce qu’il faut retenir de ce chapitre" },
      {
        type: 'ul', items: [
          "Tout commence par un objectif clair",
          "La décomposition en actions est essentielle",
          "Chaque action doit être outillée",
          "La logique de décision fait la différence",
          "Un bon agent est itératif"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Chapitre 7 : Exemples d’agents IA prêts à l’emploi",
    icon: <Brain className="w-5 h-5" />,
    bg: "from-yellow-600 to-lime-600",
    content: [
      { type: 'p', text: "Après la théorie et la méthode, passons à des exemples concrets d’agents IA que tu peux : recréer, adapter, améliorer, monétiser." },
      { type: 'p', text: "Chaque agent présenté ici repose sur une architecture simple et peut être implémenté avec les outils vus précédemment." },

      { type: 'h3', text: "Pourquoi partir d’agents existants" },
      { type: 'p', text: "Créer un agent from scratch est plus difficile que d'adapter un modèle existant ou de comprendre une logique déjà éprouvée." },
      { type: 'quote', text: "Ces exemples sont des points de départ, pas des limites." },

      { type: 'h3', text: "1. Agent de veille technologique" },
      { type: 'strong', text: "Objectif" },
      { type: 'p', text: "Surveiller des sources spécifiques et produire un résumé régulier." },
      { type: 'strong', text: "Fonctionnement" },
      {
        type: 'ul', items: [
          "Scraper ou interroger des sources (sites, RSS, X, blogs)",
          "Filtrer les contenus pertinents",
          "Résumer l’information",
          "Envoyer un rapport (email, Notion, Slack)"
        ]
      },
      { type: 'strong', text: "Outils possibles" },
      { type: 'p', text: "API web / RSS, LLM, Base de données, Email / Slack." },
      { type: 'strong', text: "Valeur créée" },
      { type: 'p', text: "Gain de temps, Décision plus rapide, Information ciblée. Très apprécié par les dirigeants et équipes tech." },

      { type: 'h3', text: "2. Agent de rédaction SEO" },
      { type: 'strong', text: "Objectif" },
      { type: 'p', text: "Produire des contenus optimisés pour le référencement." },
      { type: 'strong', text: "Fonctionnement" },
      {
        type: 'ul', items: [
          "Analyse de mots-clés",
          "Étude des concurrents",
          "Création du plan",
          "Rédaction du contenu",
          "Optimisation SEO"
        ]
      },
      { type: 'strong', text: "Outils possibles" },
      { type: 'p', text: "API SEO, LLM, CMS." },
      { type: 'strong', text: "Valeur créée" },
      { type: 'p', text: "Production rapide, Contenu cohérent, Réduction des coûts marketing. Très monétisable en freelance ou SaaS." },

      { type: 'h3', text: "3. Agent recruteur" },
      { type: 'strong', text: "Objectif" },
      { type: 'p', text: "Automatiser le sourcing et la pré-qualification des candidats." },
      { type: 'strong', text: "Fonctionnement" },
      {
        type: 'ul', items: [
          "Analyse des besoins",
          "Recherche de profils",
          "Évaluation des CV",
          "Classement des candidats",
          "Rapport final"
        ]
      },
      { type: 'strong', text: "Outils possibles" },
      { type: 'p', text: "APIs LinkedIn / CV, LLM, Base de données." },
      { type: 'strong', text: "Valeur créée" },
      { type: 'p', text: "Gain de temps RH, Meilleure qualification, Réduction des biais humains." },

      { type: 'h3', text: "4. Agent assistant e-commerce" },
      { type: 'strong', text: "Objectif" },
      { type: 'p', text: "Optimiser la gestion et les ventes d’une boutique en ligne." },
      { type: 'strong', text: "Fonctionnement" },
      {
        type: 'ul', items: [
          "Surveillance des stocks",
          "Ajustement des prix",
          "Analyse des ventes",
          "Réponses clients automatisées"
        ]
      },
      { type: 'strong', text: "Outils possibles" },
      { type: 'p', text: "API Shopify, LLM, CRM, Email / Chat." },
      { type: 'strong', text: "Valeur créée" },
      { type: 'p', text: "Augmentation du chiffre d’affaires, Support client amélioré, Automatisation opérationnelle." },

      { type: 'h3', text: "5. Agent de gestion de contenu" },
      { type: 'strong', text: "Objectif" },
      { type: 'p', text: "Gérer la création et la publication de contenu." },
      { type: 'strong', text: "Fonctionnement" },
      {
        type: 'ul', items: [
          "Génération d’idées",
          "Création de contenu",
          "Programmation",
          "Analyse des performances"
        ]
      },
      { type: 'strong', text: "Outils possibles" },
      { type: 'p', text: "Réseaux sociaux APIs, LLM, Outils analytics." },
      { type: 'strong', text: "Valeur créée" },
      { type: 'p', text: "Présence constante, Cohérence de marque, Gain de temps massif." },

      { type: 'h3', text: "Comment adapter ces agents à ton contexte" },
      { type: 'p', text: "Pose-toi ces questions : Quel problème précis je veux résoudre ? Quel public je cible ? Quelle valeur mesurable j’apporte ?" },
      { type: 'quote', text: "La personnalisation fait la différence." },

      { type: 'h3', text: "Erreur fréquente" },
      { type: 'strong', text: "❌ Copier un agent sans comprendre sa logique" },
      { type: 'p', text: "Comprends d’abord, adapte ensuite." },

      { type: 'h3', text: "Ce qu’il faut retenir de ce chapitre" },
      {
        type: 'ul', items: [
          "Il existe déjà des agents prêts à l’emploi",
          "Ils couvrent des besoins réels et rentables",
          "Chaque agent peut être personnalisé",
          "La valeur vient de l’adaptation au contexte",
          "Ces agents sont d’excellentes bases business"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Chapitre 8 : Erreurs fréquentes et bonnes pratiques",
    icon: <AlertTriangle className="w-5 h-5" />,
    bg: "from-lime-600 to-green-600",
    content: [
      { type: 'p', text: "Les agents IA sont puissants… mais mal conçus, ils deviennent vite : inefficaces, coûteux, instables, voire dangereux." },
      { type: 'p', text: "Ce chapitre te montre quoi éviter absolument et comment faire mieux, avec des conseils issus de la pratique." },

      { type: 'h3', text: "Pourquoi ce chapitre est crucial" },
      { type: 'p', text: "La majorité des projets d’agents IA échouent non pas à cause de la technologie, mais à cause : d’objectifs flous, de sur-complexité, d’un manque de contrôle." },
      { type: 'quote', text: "Apprendre des erreurs des autres est un énorme gain de temps." },

      { type: 'h3', text: "❌ Erreur n°1 : Vouloir trop automatiser trop vite" },
      { type: 'p', text: "Beaucoup veulent créer un agent : “qui fait tout tout seul”. Résultat : comportements imprévisibles, bugs difficiles à corriger, perte de contrôle." },
      { type: 'strong', text: "✅ Bonne pratique" },
      { type: 'p', text: "Commence par : une tâche simple, un périmètre clair, peu d’autonomie." },
      { type: 'quote', text: "L’autonomie vient avec la maturité du système." },

      { type: 'h3', text: "❌ Erreur n°2 : Objectif mal défini" },
      { type: 'p', text: "Un objectif flou donne un agent flou. Exemple : “Aider l’entreprise”" },
      { type: 'strong', text: "✅ Bonne pratique" },
      { type: 'p', text: "Formule un objectif : précis, mesurable, orienté action." },
      { type: 'quote', text: "Si tu ne peux pas expliquer l’objectif en une phrase, il est trop vague." },

      { type: 'h3', text: "❌ Erreur n°3 : Ignorer les coûts (API, infra)" },
      { type: 'p', text: "Un agent peut fonctionner… et coûter très cher. Problèmes courants : prompts trop longs, boucles infinies, appels API inutiles." },
      { type: 'strong', text: "✅ Bonne pratique" },
      {
        type: 'ul', items: [
          "Limiter les appels",
          "Logger les actions",
          "Mettre des quotas"
        ]
      },
      { type: 'quote', text: "Un agent rentable est un agent contrôlé." },

      { type: 'h3', text: "❌ Erreur n°4 : Négliger la sécurité" },
      { type: 'p', text: "Un agent qui agit sans limites peut : envoyer de mauvais emails, supprimer des données, exposer des informations sensibles." },
      { type: 'strong', text: "✅ Bonne pratique" },
      {
        type: 'ul', items: [
          "Règles strictes",
          "Permissions minimales",
          "Validation humaine pour actions critiques"
        ]
      },
      { type: 'quote', text: "Sécurité ≠ option." },

      { type: 'h3', text: "❌ Erreur n°5 : Trop dépendre du modèle IA" },
      { type: 'p', text: "Un mauvais prompt donne un mauvais agent." },
      { type: 'strong', text: "✅ Bonne pratique" },
      {
        type: 'ul', items: [
          "Structurer les instructions",
          "Ajouter des règles",
          "Vérifier les sorties"
        ]
      },
      { type: 'quote', text: "Le modèle est un outil, pas un cerveau magique." },

      { type: 'h3', text: "❌ Erreur n°6 : Ne pas tester en conditions réelles" },
      { type: 'p', text: "Tester uniquement avec des cas parfaits est une illusion." },
      { type: 'strong', text: "✅ Bonne pratique" },
      {
        type: 'ul', items: [
          "Tester les erreurs",
          "Tester les données manquantes",
          "Tester les cas limites"
        ]
      },
      { type: 'quote', text: "La robustesse est plus importante que la perfection." },

      { type: 'h3', text: "Bonnes pratiques essentielles à adopter" },
      {
        type: 'ul', items: [
          "✅ 1. Commencer simple : Un agent simple mais fiable vaut mieux qu’un agent complexe instable.",
          "✅ 2. Ajouter des logs et du monitoring : Savoir ce que fait l’agent, quand il échoue, pourquoi il échoue.",
          "✅ 3. Documenter le comportement : Même pour toi-même (règles, limites, décisions).",
          "✅ 4. Garder un humain dans la boucle : Surtout pour les décisions importantes, actions irréversibles.",
          "✅ 5. Itérer progressivement : Améliorer les prompts, la logique, les outils."
        ]
      },

      { type: 'h3', text: "Mini-checklist avant déploiement" },
      { type: 'p', text: "Avant de lancer un agent, vérifie :" },
      {
        type: 'ul', items: [
          "Objectif clair",
          "Actions bien définies",
          "Outils sécurisés",
          "Coûts maîtrisés",
          "Logs activés"
        ]
      },

      { type: 'h3', text: "Ce qu’il faut retenir de ce chapitre" },
      {
        type: 'ul', items: [
          "La simplicité est une force",
          "Les erreurs viennent souvent de la sur-ambition",
          "La sécurité est indispensable",
          "Les coûts doivent être surveillés",
          "Tester est non négociable",
          "Les bonnes pratiques font la différence"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Chapitre 9 : Monétiser ses agents IA",
    icon: <DollarSign className="w-5 h-5" />,
    bg: "from-green-600 to-emerald-600",
    content: [
      { type: 'p', text: "Créer des agents IA, c’est bien. Les transformer en revenus, c’est encore mieux. Les agents IA ne sont pas seulement des outils techniques : ce sont de nouveaux produits et services à forte valeur ajoutée." },
      { type: 'p', text: "Dans ce chapitre, tu vas découvrir les principaux modèles de monétisation, avec des exemples concrets." },

      { type: 'h3', text: "Pourquoi les agents IA sont monétisables" },
      { type: 'p', text: "Un agent IA : fait gagner du temps, réduit des coûts, améliore des résultats, automatise des tâches critiques." },
      { type: 'quote', text: "Les entreprises paient pour des résultats, pas pour du code." },

      { type: 'h3', text: "1. Vente d’agents IA sur mesure (freelance / consulting)" },
      { type: 'strong', text: "Principe" },
      { type: 'p', text: "Tu conçois un agent adapté à un besoin précis d’un client." },
      { type: 'strong', text: "Exemples de missions" },
      {
        type: 'ul', items: [
          "Agent de génération de leads pour une PME",
          "Agent de veille concurrentielle",
          "Agent de support client automatisé"
        ]
      },
      { type: 'strong', text: "Modèle de prix" },
      {
        type: 'ul', items: [
          "Forfait de mise en place (500€ – 5 000€+)",
          "Maintenance mensuelle"
        ]
      },
      { type: 'strong', text: "Avantages vs Inconvénients" },
      {
        type: 'ul', items: [
          "✅ Revenus rapides, Forte valeur perçue, Peu de concurrence qualifiée",
          "❌ Dépendance au temps, Scalabilité limitée"
        ]
      },

      { type: 'h3', text: "2. Abonnements SaaS basés sur des agents IA" },
      { type: 'strong', text: "Principe" },
      { type: 'p', text: "L’agent devient un service en ligne accessible via abonnement." },
      { type: 'strong', text: "Exemples" },
      {
        type: 'ul', items: [
          "Agent SEO mensuel",
          "Agent de reporting automatique",
          "Agent d’analyse business"
        ]
      },
      { type: 'strong', text: "Modèle de prix" },
      {
        type: 'ul', items: [
          "Abonnement mensuel (20€ – 200€+)",
          "Tarifs par usage"
        ]
      },
      { type: 'strong', text: "Avantages vs Inconvénients" },
      {
        type: 'ul', items: [
          "✅ Revenus récurrents, Scalabilité, Valorisation long terme",
          "❌ Infrastructure à gérer, Support client"
        ]
      },

      { type: 'h3', text: "3. Intégration d’agents IA pour entreprises" },
      { type: 'strong', text: "Principe" },
      { type: 'p', text: "Tu intègres des agents dans des systèmes existants." },
      { type: 'strong', text: "Exemples" },
      { type: 'p', text: "CRM, ERP, Outils internes." },
      { type: 'strong', text: "Modèle de prix" },
      { type: 'p', text: "Projet sur mesure, Contrats annuels." },
      { type: 'strong', text: "Avantages vs Inconvénients" },
      {
        type: 'ul', items: [
          "✅ Très forte valeur, Clients sérieux, Budgets élevés",
          "❌ Cycles de vente plus longs, Complexité technique"
        ]
      },

      { type: 'h3', text: "4. Produits digitaux basés sur des agents IA" },
      { type: 'strong', text: "Principe" },
      { type: 'p', text: "Tu vends des ressources prêtes à l’emploi." },
      { type: 'strong', text: "Exemples" },
      { type: 'p', text: "Templates d’agents, Prompts avancés, Scripts automatisés, Agents clés en main." },
      { type: 'strong', text: "Modèle de prix" },
      { type: 'p', text: "Vente unique, Bundle, Licence." },
      { type: 'strong', text: "Avantages" },
      {
        type: 'ul', items: [
          "✅ Très scalable",
          "✅ Peu de support",
          "✅ Idéal pour débuter"
        ]
      },

      { type: 'h3', text: "5. Choisir le bon modèle pour toi" },
      { type: 'p', text: "Pose-toi ces questions : Veux-tu du revenu rapide ou récurrent ? Préfères-tu vendre ton temps ou un produit ? Es-tu à l’aise avec le support client ? Quel est ton niveau technique ?" },
      { type: 'quote', text: "Le meilleur modèle est celui que tu peux tenir sur la durée." },
      { type: 'strong', text: "Exemple de parcours réaliste" },
      { type: 'p', text: "Freelance (agents sur mesure) → Templates et produits digitaux → SaaS spécialisé. Progression naturelle et maîtrisée." },

      { type: 'h3', text: "Erreurs fréquentes" },
      {
        type: 'ul', items: [
          "❌ Vendre la technologie au lieu du résultat",
          "❌ Sous-estimer le support",
          "❌ Lancer un SaaS trop tôt"
        ]
      },

      { type: 'h3', text: "Bonnes pratiques business" },
      {
        type: 'ul', items: [
          "✅ Résoudre un vrai problème",
          "✅ Se spécialiser dans une niche",
          "✅ Parler bénéfices, pas technique",
          "✅ Tester avant de scaler"
        ]
      },

      { type: 'h3', text: "Ce qu’il faut retenir de ce chapitre" },
      {
        type: 'ul', items: [
          "Les agents IA sont hautement monétisables",
          "Plusieurs modèles existent",
          "Le sur-mesure rapporte vite",
          "Le SaaS offre des revenus récurrents",
          "Les produits digitaux sont très scalables",
          "La spécialisation fait la différence"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Chapitre 10 : Le futur des agents IA",
    icon: <TrendingUp className="w-5 h-5" />,
    bg: "from-emerald-600 to-teal-600",
    content: [
      { type: 'p', text: "Les agents IA ne sont pas une tendance passagère. Ils représentent une transformation profonde de la manière dont le travail, les entreprises et les systèmes numériques vont fonctionner." },
      { type: 'p', text: "Comprendre leur futur, c’est comprendre où investir ton temps et tes compétences aujourd’hui." },

      { type: 'h3', text: "Pourquoi les agents IA vont tout changer" },
      { type: 'p', text: "Jusqu’à récemment, l’IA répondait à des questions ou assistait ponctuellement. Les agents IA, eux, exécutent des tâches complètes, prennent des décisions, interagissent avec des systèmes complexes et travaillent en continu." },
      { type: 'quote', text: "On passe de l’IA “assistante” à l’IA “opératrice”." },

      { type: 'h3', text: "1. Des agents de plus en plus autonomes" },
      { type: 'p', text: "Les futurs agents seront capables de gérer des objectifs sur le long terme, s’auto-corriger, apprendre de leurs erreurs et s’adapter au contexte." },
      { type: 'p', text: "Mais l’autonomie totale restera encadrée, le contrôle humain restera essentiel." },
      { type: 'strong', text: "L’enjeu n’est pas l’autonomie maximale, mais l’autonomie maîtrisée." },

      { type: 'h3', text: "2. Des agents de plus en plus spécialisés" },
      { type: 'p', text: "On verra émerger des agents métiers (finance, RH, marketing), des agents ultra-niches et des agents “experts” d’un domaine précis." },
      { type: 'quote', text: "La valeur sera dans la spécialisation, pas dans le généraliste." },

      { type: 'h3', text: "3. Une intégration profonde dans les outils du quotidien" },
      { type: 'p', text: "Les agents IA seront intégrés aux logiciels existants, invisibles mais omniprésents, et déclenchés automatiquement." },
      { type: 'strong', text: "Exemples :" },
      {
        type: 'ul', items: [
          "Agents dans les emails",
          "Agents dans les outils de gestion",
          "Agents dans les plateformes e-commerce"
        ]
      },
      { type: 'quote', text: "L’agent devient une fonction, pas un produit isolé." },

      { type: 'h3', text: "4. Une nouvelle façon de travailler" },
      { type: 'p', text: "Les humains ne travailleront plus à la place des agents, mais avec eux." },
      { type: 'strong', text: "Nouveaux rôles :" },
      {
        type: 'ul', items: [
          "Superviseur d’agents",
          "Concepteur de workflows",
          "Architecte d’automatisation"
        ]
      },
      { type: 'quote', text: "La compétence clé devient la capacité à orchestrer l’IA." },

      { type: 'h3', text: "5. De nouvelles opportunités business" },
      { type: 'p', text: "Le futur verra des marketplaces d’agents, des agents personnalisables et des entreprises basées uniquement sur des agents IA." },
      { type: 'p', text: "Ceux qui savent créer et contrôler des agents auront un avantage massif." },

      { type: 'h3', text: "6. Les risques à anticiper" },
      { type: 'p', text: "Le futur n’est pas sans risques : dépendance excessive, problèmes éthiques, sécurité et biais, décisions automatisées mal contrôlées." },
      { type: 'strong', text: "La responsabilité humaine restera centrale." },

      { type: 'h3', text: "Comment te positionner dès maintenant" },
      { type: 'p', text: "Pour rester en avance :" },
      {
        type: 'ul', items: [
          "Comprends les fondamentaux",
          "Construis des agents simples",
          "Expérimente régulièrement",
          "Spécialise-toi",
          "Pense valeur avant technologie"
        ]
      },
      { type: 'quote', text: "L’action aujourd’hui vaut mieux que la théorie demain." },

      { type: 'h3', text: "Ce qu’il faut retenir de ce chapitre" },
      {
        type: 'ul', items: [
          "Les agents IA vont transformer le travail",
          "Ils seront plus autonomes mais encadrés",
          "La spécialisation sera clé",
          "L’intégration sera massive",
          "De nouveaux métiers émergent",
          "Ceux qui commencent maintenant auront une longueur d’avance"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Conclusion : L’ère des bâtisseurs",
    icon: <Flag className="w-5 h-5" />,
    bg: "from-teal-600 to-cyan-600",
    content: [
      { type: 'p', text: "Nous voilà arrivés au terme de ce voyage. Nous avons exploré ensemble ce que sont les agents IA, comment ils fonctionnent, quels outils utiliser pour les construire et comment les transformer en opportunités de revenus." },

      { type: 'h3', text: "Ce qu'il faut retenir" },
      { type: 'p', text: "La révolution n'est pas d'avoir un chatbot plus intelligent. La révolution, c'est d'avoir un logiciel qui agit à votre place." },

      { type: 'h3', text: "Le fossé se creuse" },
      { type: 'p', text: "Il y aura bientôt deux catégories de personnes : celles qui utilisent l'IA pour discuter, et celles qui construisent des agents pour agir. Vous avez maintenant les cartes en main pour faire partie du second groupe." },

      { type: 'h3', text: "Votre première mission" },
      {
        type: 'ul', items: [
          "Ne cherchez pas l'idée du siècle.",
          "Identifiez une tâche répétitive et ennuyeuse de votre quotidien.",
          "Choisissez un outil simple (comme Zapier ou un script Python).",
          "Construis ton premier agent rudimentaire.",
          "Teste, échoue, itère."
        ]
      },

      { type: 'quote', text: "La meilleure façon de prédire l'avenir est de le coder. Ne reste pas spectateur de cette révolution." },

      { type: 'strong', text: "C'est à toi de jouer. Merci d'avoir lu ce guide." }
    ]
  }
];

const EbookReader = ({ onLogout }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(1);
  const contentRef = useRef(null);

  const nextChapter = () => {
    if (activeChapter < chapters.length - 1) {
      setActiveChapter(prev => prev + 1);
      window.scrollTo(0, 0);
      contentRef.current?.scrollTo(0, 0);
    }
  };

  const prevChapter = () => {
    if (activeChapter > 0) {
      setActiveChapter(prev => prev - 1);
      window.scrollTo(0, 0);
      contentRef.current?.scrollTo(0, 0);
    }
  };

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 1, 3));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 1, 0));

  const currentData = chapters[activeChapter];

  const themeClasses = {
    light: {
      bg: 'bg-stone-50',
      text: 'text-stone-800',
      sidebar: 'bg-white border-stone-200',
      sidebarText: 'text-stone-600',
      sidebarActive: 'bg-blue-50 text-blue-700',
      prose: 'prose-stone',
      strong: 'text-blue-900',
      quoteBg: 'bg-blue-50 border-blue-500 text-blue-900',
      header: 'bg-white/90 backdrop-blur border-stone-200',
    },
    dark: {
      bg: 'bg-slate-900',
      text: 'text-slate-200',
      sidebar: 'bg-slate-950 border-slate-800',
      sidebarText: 'text-slate-400',
      sidebarActive: 'bg-blue-900/20 text-blue-400 border-blue-500/30',
      prose: 'prose-invert',
      strong: 'text-white',
      quoteBg: 'bg-slate-800 border-blue-500 text-blue-200',
      header: 'bg-slate-950/90 backdrop-blur border-slate-800',
    }
  };

  const currentTheme = themeClasses[theme];
  const fontSizes = ['prose-sm', 'prose-base', 'prose-lg', 'prose-xl'];

  // Safe guard if chapters is empty during init
  if (!currentData) return <div>Loading...</div>;

  return (
    <div className={`flex h-screen font-sans overflow-hidden transition-colors duration-300 ${currentTheme.bg} ${currentTheme.text}`}>
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 border-r transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 ${currentTheme.sidebar}`}>
        <div className="p-6 flex items-center justify-between border-b border-inherit">
          <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
            <BookOpen className="w-7 h-7" />
            <span className={`font-bold text-xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>AgentIA<span className="text-blue-500">Reader</span></span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden"><X className="w-6 h-6" /></button>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => { setActiveChapter(chapter.id); setIsSidebarOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeChapter === chapter.id ? `${currentTheme.sidebarActive} shadow-sm border` : `${currentTheme.sidebarText} hover:bg-black/5 dark:hover:bg-white/5`}`}
            >
              <span className={`p-1.5 rounded-md ${activeChapter === chapter.id ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-slate-800 text-gray-500 dark:text-slate-500'}`}>{chapter.icon}</span>
              <span className="text-left line-clamp-1">{chapter.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        <header className={`flex items-center justify-between px-6 py-4 border-b z-20 sticky top-0 ${currentTheme.header}`}>
          <div className="flex items-center">
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden mr-4"><Menu className="w-6 h-6" /></button>
            <span className="text-sm font-medium opacity-60 uppercase tracking-widest hidden sm:block">{currentData.title}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border ${theme === 'dark' ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-stone-100'}`}>
              <button onClick={decreaseFontSize} disabled={fontSize === 0} className="p-1 hover:text-blue-500 disabled:opacity-30"><Minus className="w-4 h-4" /></button>
              <Type className="w-4 h-4 mx-1 opacity-70" />
              <button onClick={increaseFontSize} disabled={fontSize === 3} className="p-1 hover:text-blue-500 disabled:opacity-30"><Plus className="w-4 h-4" /></button>
            </div>
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-stone-200 hover:bg-stone-300 text-slate-700'}`}>{theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</button>
            <button onClick={onLogout} className="text-sm font-medium text-red-500 hover:text-red-600 ml-4">Déconnexion</button>
          </div>
        </header>

        <div ref={contentRef} className="flex-1 overflow-y-auto scroll-smooth">
          <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
            <div className="mb-12 border-b border-inherit pb-8">
              <div className="flex items-center space-x-3 mb-4 opacity-50"><span className="text-sm font-bold tracking-widest uppercase">Chapitre {activeChapter}</span></div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-3 tracking-tight leading-tight">{currentData.title.split(':')[1] || currentData.title}</h1>
              {currentData.subtitle && <p className="text-lg md:text-xl opacity-70 font-light italic mt-2">{currentData.subtitle}</p>}
            </div>
            <div className={`prose ${currentTheme.prose} ${fontSizes[fontSize]} max-w-none`}>
              {currentData.content.map((block, index) => {
                if (block.type === 'h3') return <h3 key={index} className="font-bold mt-10 mb-4 flex items-center">{block.text}</h3>;
                if (block.type === 'ul') return <ul key={index} className="space-y-2 my-6 list-none pl-0">{block.items.map((item, i) => <li key={i} className="flex items-start pl-2"><span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" /><span>{item}</span></li>)}</ul>;
                if (block.type === 'quote') return <div key={index} className={`my-8 p-6 border-l-4 rounded-r-lg ${currentTheme.quoteBg}`}><p className="font-serif italic text-lg leading-relaxed m-0">"{block.text}"</p></div>;
                if (block.type === 'strong') return <p key={index} className={`font-bold text-lg my-6 ${currentTheme.strong}`}>{block.text}</p>;
                if (block.type === 'image') return (
                  <div key={index} className="my-8 rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                    <img src={block.src} alt={block.alt} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                );
                return <p key={index} className="leading-relaxed my-4">{block.text}</p>;
              })}
            </div>
            <div className="mt-20 pt-8 border-t border-inherit flex justify-between items-center opacity-80 hover:opacity-100 transition-opacity">
              <button onClick={prevChapter} disabled={activeChapter === 0} className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed"><ChevronLeft className="w-5 h-5" /><span className="font-medium">Précédent</span></button>
              <button onClick={nextChapter} disabled={activeChapter === chapters.length - 1} className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"><span className="font-medium">Chapitre Suivant</span><ChevronRight className="w-5 h-5" /></button>
            </div>
            <div className="mt-8 text-center text-xs opacity-40">{activeChapter + 1} / {chapters.length}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default function App() {
  const [hasAccess, setHasAccess] = useState(false);

  return hasAccess ? (
    <EbookReader onLogout={() => setHasAccess(false)} />
  ) : (
    <LandingPage onUnlock={() => setHasAccess(true)} />
  );
}
