"use client";

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Briefcase, DollarSign, FileText, Home, Phone } from "lucide-react";

/**
 * Composant Navbar principal pour InnovyxWorks
 * Navigation avec les sections principales du site
 */
export function InnovxyNavbar() {
  const navItems = [
    { name: "Accueil", url: "#hero", icon: Home },
    { name: "Projets", url: "#projets", icon: Briefcase },
    { name: "Processus", url: "#processus", icon: FileText },
    { name: "Tarifs", url: "#tarifs", icon: DollarSign },
    { name: "Contact", url: "#contact", icon: Phone },
  ];

  return <NavBar items={navItems} />;
}
