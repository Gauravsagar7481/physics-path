

const PHYSICS_SYLLABUS = [
  {
    id: "oscillations-waves",
    semesterLabel: "Semester 1–2 · Core",
    title: "Oscillations & Waves",
    blurb: "The foundation everything else in the syllabus builds on.",
    topics: [
      { name: "Simple Harmonic Motion", page: "simple-harmonic-motion.html" },
      { name: "Damped & Forced Oscillations", slug: "damped-forced-oscillations" },
      { name: "Resonance", slug: "resonance" },
      { name: "Wave Equation & Superposition", slug: "wave-equation-superposition" },
      { name: "Standing Waves", slug: "standing-waves" }
    ]
  },
  {
    id: "waves-optics",
    semesterLabel: "Semester 3 · Paper 107301",
    title: "Waves and Optics",
    blurb: "BEU's dedicated physics paper — interference, diffraction, polarization.",
    topics: [
      { name: "Interference of Light (Young's Double Slit)", slug: "interference-of-light" },
      { name: "Newton's Rings", slug: "newtons-rings" },
      { name: "Diffraction (Single & Double Slit)", slug: "diffraction" },
      { name: "Diffraction Grating", slug: "diffraction-grating" },
      { name: "Polarization of Light", slug: "polarization-of-light" },
      { name: "Double Refraction & Optical Activity", slug: "double-refraction-optical-activity" }
    ]
  },
  {
    id: "lasers-fiber",
    semesterLabel: "Semester 3 · Applied Optics",
    title: "Lasers & Fiber Optics",
    blurb: "How light gets controlled, amplified and sent down a cable.",
    topics: [
      { name: "Spontaneous vs Stimulated Emission", slug: "spontaneous-vs-stimulated-emission" },
      { name: "Population Inversion & Laser Action", slug: "population-inversion-laser-action" },
      { name: "Types of Lasers (Ruby, He-Ne, Semiconductor)", slug: "types-of-lasers" },
      { name: "Optical Fiber Structure & Types", slug: "optical-fiber-structure" },
      { name: "Numerical Aperture & Acceptance Angle", slug: "numerical-aperture" },
      { name: "Applications in Communication", slug: "fiber-optics-applications" }
    ]
  },
  {
    id: "quantum-mechanics",
    semesterLabel: "Semester 2–3 · Modern Physics",
    title: "Quantum Mechanics",
    blurb: "Where physics stops being intuitive and starts being powerful.",
    topics: [
      { name: "Failure of Classical Physics (Black Body, Photoelectric Effect)", slug: "failure-of-classical-physics" },
      { name: "de Broglie Hypothesis", slug: "de-broglie-hypothesis" },
      { name: "Heisenberg Uncertainty Principle", slug: "heisenberg-uncertainty-principle" },
      { name: "Schrödinger Wave Equation", slug: "schrodinger-wave-equation" },
      { name: "Particle in a Box", slug: "particle-in-a-box" },
      { name: "Quantum Tunneling", slug: "quantum-tunneling" }
    ]
  },
  {
    id: "em-theory",
    semesterLabel: "Semester 2 · Electromagnetic Theory",
    title: "Electromagnetic Theory",
    blurb: "Maxwell's equations and how fields actually behave.",
    topics: [
      { name: "Gauss's Law & Divergence of E", slug: "gauss-law" },
      { name: "Ampere's & Faraday's Law", slug: "ampere-faraday-law" },
      { name: "Maxwell's Equations (Differential Form)", slug: "maxwells-equations" },
      { name: "Electromagnetic Wave Propagation", slug: "em-wave-propagation" },
      { name: "Poynting Vector & Energy Density", slug: "poynting-vector" }
    ]
  },
  {
    id: "solid-state",
    semesterLabel: "Semester 3–4 · Solid State Physics",
    title: "Solid State & Semiconductor Physics",
    blurb: "Why materials conduct, insulate, or do something in between.",
    topics: [
      { name: "Crystal Structure & Bravais Lattices", slug: "crystal-structure" },
      { name: "Band Theory of Solids", slug: "band-theory" },
      { name: "Intrinsic & Extrinsic Semiconductors", slug: "semiconductors" },
      { name: "p-n Junction Basics", slug: "pn-junction" },
      { name: "Hall Effect", slug: "hall-effect" },
      { name: "Dielectric & Magnetic Properties of Materials", slug: "dielectric-magnetic-properties" }
    ]
  },
  {
    id: "beyond-syllabus",
    semesterLabel: "Beyond Syllabus · Level Max",
    title: "Extra: Where This Physics Leads",
    blurb: "Not in your exam, but this is what these ideas turn into.",
    topics: [
      { name: "Special Relativity (why E = mc²)", slug: "special-relativity" },
      { name: "Superconductivity", slug: "superconductivity" },
      { name: "Nanotechnology & Quantum Dots", slug: "nanotechnology" },
      { name: "Nuclear Physics Basics", slug: "nuclear-physics-basics" },
      { name: "Statistical Mechanics Intuition", slug: "statistical-mechanics" },
      { name: "Physics Behind Modern AI Hardware (GPUs, Chips)", slug: "physics-of-ai-hardware" }
    ]
  }
];

if (typeof window !== "undefined") {
  window.PHYSICS_SYLLABUS = PHYSICS_SYLLABUS;
}
