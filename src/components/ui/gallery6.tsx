"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
  type: string;
  technologies: string;
  results: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Nos Réalisations Récentes",
  items = [
    {
      id: "item-1",
      title: "BoutikPlus",
      summary: "Plateforme e-commerce moderne avec gestion des stocks, paiements sécurisés et tableau de bord marchand. Interface intuitive qui a augmenté les conversions de 150%.",
      url: "https://boutikplus.demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      type: "Site Web E-commerce",
      technologies: "Next.js, Stripe, PostgreSQL",
      results: "+150% conversions, 2000+ produits gérés"
    },
    {
      id: "item-2", 
      title: "TechConsult Pro",
      summary: "Site vitrine professionnel pour cabinet de conseil avec système de prise de rendez-vous, blog intégré et optimisation SEO complète.",
      url: "https://techconsult.demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      type: "Site Web Corporate",
      technologies: "React, Tailwind CSS, Cal.com",
      results: "+200% trafic organique, 50+ leads/mois"
    },
    {
      id: "item-3",
      title: "DataFlow Hub", 
      summary: "Dashboard analytics en temps réel pour PME avec visualisations interactives, rapports automatisés et API pour intégrations tierces.",
      url: "https://dataflow.demo.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      type: "Application Web",
      technologies: "Vue.js, D3.js, Node.js, MongoDB",
      results: "500+ utilisateurs actifs, 99.9% uptime"
    },
    {
      id: "item-4",
      title: "FitTracker Pro",
      summary: "App de fitness cross-platform avec suivi d'activités, programmes personnalisés, notifications push et synchronisation cloud.",
      url: "https://fittracker.demo.com", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      type: "Application Mobile",
      technologies: "React Native, Firebase, Redux",
      results: "10k+ téléchargements, 4.8/5 étoiles"
    }
  ],
}: Gallery6Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
  <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {heading}
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets qui ont transformé des idées en succès digitaux
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {items.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-2xl bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700">
                    {/* Image */}
                    <div className="relative overflow-hidden h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Type Badge */}
                      <div className="inline-block px-3 py-1 text-xs font-bold text-blue-400 bg-blue-800 rounded-full mb-3 shadow">
                        {item.type}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-blue-400 transition-colors drop-shadow">
                        {item.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                        {item.summary}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-blue-300 mb-1">Technologies :</p>
                        <p className="text-sm text-white">{item.technologies}</p>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-green-300 mb-1">Résultats :</p>
                        <p className="text-sm font-bold text-green-400">{item.results}</p>
                      </div>

                      {/* CTA Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                        onClick={() => window.open(item.url, '_blank')}
                      >
                        Voir le projet
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-slate-800 text-blue-400 border-blue-700 hover:bg-blue-900 hover:text-white transition-all duration-300"
              onClick={() => api?.scrollPrev()}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-slate-800 text-blue-400 border-blue-700 hover:bg-blue-900 hover:text-white transition-all duration-300"
              onClick={() => api?.scrollNext()}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index + 1 === current
                    ? "bg-blue-600 w-8"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-600">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 drop-shadow">
              Prêt à transformer votre idée en succès ?
            </h3>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
              <span className="text-blue-300 font-semibold">Rejoignez nos clients satisfaits</span> et donnez vie à votre projet avec notre <span className="text-purple-300 font-semibold">expertise technique</span> et notre approche centrée sur les <span className="text-green-300 font-semibold">résultats</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Démarrer mon projet
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-lg font-semibold border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                onClick={() => {
                  document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Voir nos tarifs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery6;
