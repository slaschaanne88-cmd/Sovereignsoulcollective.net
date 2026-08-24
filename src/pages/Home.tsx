/**
 * Sovereign Soul Collective Landing Page
 * Luminous Threshold: A cinematic journey from shadow into warm dawn,
 * inviting people who sense there's more beneath the surface.
 */

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const skoolCommunityUrl =
    "https://www.skool.com/sovereign-soul-collective-7085/about";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Background imagery would go here */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-2xl text-center"
          variants={containerVariants}
        >
          {/* Seal Mark */}
          <motion.div
            className="mb-8 flex justify-center"
            variants={itemVariants}
          >
            <div className="w-20 h-20 rounded-full border-2 border-amber-600/40 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-amber-500/60 flex items-center justify-center text-amber-600 text-xs font-light">
                SSC
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl font-light text-slate-50 mb-6 leading-tight"
            variants={itemVariants}
          >
            Understand the Patterns Beneath the Surface
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-8 font-light leading-relaxed"
            variants={itemVariants}
          >
            A space for people who sense there's more to life. Explore your subconscious patterns, make more aligned choices, and live with greater authenticity.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href={skoolCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-slate-950 font-medium rounded-sm transition-all duration-200 hover:gap-4 group"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore the Community
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </section>

      {/* Divider */}
      <motion.div className="flex justify-center px-4" variants={itemVariants}>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
      </motion.div>

      {/* Mission Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-light text-slate-100 mb-6"
            variants={itemVariants}
          >
            What We Explore
          </motion.h2>
          <motion.div
            className="w-16 h-px bg-amber-600/60 mx-auto"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="prose prose-invert prose-lg max-w-3xl mx-auto"
          variants={containerVariants}
        >
          <motion.p
            className="text-slate-200 text-lg leading-relaxed mb-8 font-light"
            variants={itemVariants}
          >
            Here we explore <span className="text-amber-400">consciousness, spirituality, transpersonal development, self-awareness, and human potential</span>.
          </motion.p>

          <motion.p
            className="text-slate-200 text-lg leading-relaxed font-light"
            variants={itemVariants}
          >
            Through lessons, reflection, meaningful conversation, and shared perspectives, you'll be invited to <span className="text-amber-400">look within, question assumptions, and turn insight into everyday change</span>.
          </motion.p>
        </motion.div>
      </section>

      {/* Divider */}
      <motion.div className="flex justify-center px-4" variants={itemVariants}>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
      </motion.div>

      {/* Values Section */}
      <section className="py-20 px-4">
        <motion.div className="max-w-4xl mx-auto" variants={containerVariants}>
          <motion.h2
            className="text-3xl md:text-4xl font-light text-slate-100 mb-12 text-center"
            variants={itemVariants}
          >
            Our Approach
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Self-Inquiry",
                description:
                  "Understand the subconscious patterns and beliefs shaping your life and choices.",
              },
              {
                title: "Authentic Alignment",
                description:
                  "Move beyond surface-level understanding to live in genuine alignment with your values.",
              },
              {
                title: "Shared Wisdom",
                description:
                  "Learn from lessons, reflections, and the perspectives of a conscious community.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="p-8 border border-amber-600/30 rounded-sm bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300"
                variants={itemVariants}
              >
                <h3 className="text-xl font-light text-amber-400 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-300 font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <motion.div className="flex justify-center px-4" variants={itemVariants}>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
      </motion.div>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-light text-slate-100 mb-8"
            variants={itemVariants}
          >
            Ready to Explore Within?
          </motion.h2>

          <motion.p
            className="text-lg text-slate-300 mb-12 font-light"
            variants={itemVariants}
          >
            Join a community of thoughtful people committed to understanding themselves deeply and living with greater authenticity.
          </motion.p>

          <motion.a
            href={skoolCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-slate-950 font-medium rounded-sm transition-all duration-200 hover:gap-4 group"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join the Community
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-600/20 py-8 px-4 text-center">
        <motion.p
          className="text-slate-400 text-sm font-light"
          variants={itemVariants}
        >
          Sovereign Soul Collective — A space to understand yourself deeply and live authentically.
        </motion.p>
      </footer>
    </motion.div>
  );
}
