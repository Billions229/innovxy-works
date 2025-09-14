"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "4 Étapes Efficaces",
  autoPlayInterval = 4000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setProgress(0)
        setCurrentFeature((prev) => (prev + 1) % features.length)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, autoPlayInterval, features.length])

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index)
    setProgress(0)
  }

  return (
  <section className={cn("py-24 bg-slate-900", className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white sm:text-white text-white">
            {title}
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto sm:text-white text-white">
            Notre processus éprouvé pour transformer votre idée en succès digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Steps Navigation */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2",
                  currentFeature === index
                    ? "bg-slate-800 border-blue-500 shadow-lg"
                    : "bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:shadow-md"
                )}
                onClick={() => handleFeatureClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Progress Bar */}
                {currentFeature === index && (
                  <div className="absolute top-0 left-0 h-1 bg-blue-500 rounded-t-2xl transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                )}

                <div className="flex items-start gap-4">
                  {/* Step Number */}
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors",
                    currentFeature === index
                      ? "bg-blue-500 text-white"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  )}>
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    {/* Step Title */}
                    <h3 className={cn(
                      "text-xl font-bold mb-2 transition-colors sm:text-white text-white",
                      currentFeature === index
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-900 dark:text-white"
                    )}>
                      {feature.step}
                    </h3>

                    {/* Step Content */}
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed sm:text-white text-white">
                      {feature.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Image */}
          <div className="relative">
            <div className={cn("relative rounded-2xl overflow-hidden shadow-2xl", imageHeight)}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={features[currentFeature].image}
                    alt={features[currentFeature].step}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Step Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        Étape {currentFeature + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {features.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentFeature === index
                  ? "bg-blue-500 w-8"
                  : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
              )}
              onClick={() => handleFeatureClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
