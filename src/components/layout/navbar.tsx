"use client"

import { Home, Briefcase, FileText, Phone, DollarSign } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

/**
 * Composant Navbar principal pour InnovxyWorks
 * Navigation avec les sections principales du site
 */
export function InnovxyNavbar() {
  const navItems = [
    { name: 'Accueil', url: '#hero', icon: Home },
    { name: 'Projets', url: '#projets', icon: Briefcase },
    { name: 'Processus', url: '#processus', icon: FileText },
    { name: 'Tarifs', url: '#tarifs', icon: DollarSign },
    { name: 'Contact', url: '#contact', icon: Phone }
  ]

  return <NavBar items={navItems} />
}
