"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  LayoutList,
  Settings,
  Accessibility,
  Users,
  MessageCircle,
  Clock,
  Wrench,
  Palette,
  CreditCard,
} from "lucide-react";
import { ElementType } from "react";

type AccordionItemType = {
  icon: ElementType;
  value: string;
  question: string;
  answer: string;
};

const accordionItems: AccordionItemType[] = [
  {
    icon: Users,
    value: "item-1",
    question: "Avec quels types de clients travaillez-vous ?",
    answer:
      "Nous travaillons avec des startups, PME, et grandes entreprises de tous secteurs. Que vous soyez une jeune pousse avec une idée innovante ou une entreprise établie cherchant à digitaliser ses processus, nous adaptons nos solutions à vos besoins et votre budget.",
  },
  {
    icon: MessageCircle,
    value: "item-2",
    question: "Comment communiquez-vous pendant les projets ?",
    answer:
      "Nous privilégions une communication transparente et régulière. Vous avez accès à un espace projet dédié, des points hebdomadaires par visioconférence, et un contact direct avec votre chef de projet. Nous utilisons des outils collaboratifs comme Slack, Notion et Figma pour un suivi en temps réel.",
  },
  {
    icon: LayoutList,
    value: "item-3",
    question: "Que comprend votre processus de développement ?",
    answer:
      "Notre processus en 4 étapes garantit la qualité : 1) Analyse approfondie de vos besoins et création d'une roadmap, 2) Design UX/UI avec prototypes interactifs, 3) Développement avec tests rigoureux et architecture scalable, 4) Lancement avec monitoring et optimisations continues.",
  },
  {
    icon: Wrench,
    value: "item-4",
    question: "Pouvez-vous reprendre un projet existant ?",
    answer:
      "Absolument ! Nous réalisons d'abord un audit technique complet de votre projet existant, identifions les points d'amélioration, puis proposons une stratégie de refonte ou d'optimisation. Nous pouvons reprendre des projets en cours ou moderniser des applications legacy.",
  },
  {
    icon: Clock,
    value: "item-5",
    question: "Quels sont vos délais de livraison ?",
    answer:
      "Les délais varient selon la complexité : Site vitrine (4-6 semaines), E-commerce (8-12 semaines), Application mobile (12-16 semaines), Plateforme custom (16-24 semaines). Nous établissons un planning détaillé dès le début avec des jalons clairs.",
  },
  {
    icon: Settings,
    value: "item-6",
    question: "Proposez-vous de la maintenance ?",
    answer:
      "Oui, tous nos packages incluent une période de maintenance. Nous proposons également des contrats de maintenance étendus avec mises à jour de sécurité, optimisations de performance, sauvegardes automatiques et support technique prioritaire.",
  },
  {
    icon: HelpCircle,
    value: "item-7",
    question: "Comment gérez-vous les urgences ?",
    answer:
      "Nous avons un système de support d'urgence 24/7 pour les clients avec contrat de maintenance premium. Pour les urgences critiques (site down, faille de sécurité), nous intervenons dans l'heure. Les autres demandes urgentes sont traitées sous 4h ouvrées.",
  },
  {
    icon: Accessibility,
    value: "item-8",
    question: "Quelle est la différence entre vos packages ?",
    answer:
      "Nos packages sont conçus par niveau de complexité : Starter (fonctionnalités essentielles), Pro (fonctionnalités avancées + intégrations), Enterprise (architecture sur mesure + support premium). Chaque niveau inclut plus de fonctionnalités, de support et de personnalisation.",
  },
  {
    icon: Palette,
    value: "item-9",
    question: "Gérez-vous aussi le design UX/UI ?",
    answer:
      "Oui, nous avons une équipe de designers UX/UI expérimentés. Nous créons des designs sur mesure, réalisons des tests utilisateurs, et optimisons l'expérience pour maximiser les conversions. Le design est inclus dans tous nos packages.",
  },
  {
    icon: CreditCard,
    value: "item-10",
    question: "Comment fonctionnent les paiements ?",
    answer:
      "Nous proposons un paiement échelonné : 30% à la signature, 40% à la validation des maquettes, 30% à la livraison. Pour les gros projets, nous pouvons adapter l'échéancier. Nous acceptons les virements, chèques et paiements en ligne sécurisés.",
  },
];

interface RuixenAccordion01Props {
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function RuixenAccordion01({
  className = "",
  title = "Questions Fréquentes",
  subtitle = "Tout ce que vous devez savoir sur nos services et notre processus"
}: RuixenAccordion01Props) {
  return (
    <section className={`py-24 bg-slate-900 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {accordionItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border border-slate-700 rounded-lg px-6 bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="font-semibold text-white">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="ml-14 text-slate-300 leading-relaxed">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6">
            Vous avez d&apos;autres questions ? Parlons-en !
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}
