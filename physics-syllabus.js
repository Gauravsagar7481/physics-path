const PHYSICS_SYLLABUS = [
  {
    id: "oscillations-waves",
    semesterLabel: "Semester 1–2 · Core",
    title: "Oscillations & Waves",
    blurb: "The foundation everything else in the syllabus builds on.",
    topics: [
      "Simple Harmonic Motion",
      "Damped & Forced Oscillations",
      "Resonance",
      "Wave Equation & Superposition",
      "Standing Waves"
    ]
  },
  {
    id: "waves-optics",
    semesterLabel: "Semester 3 · Paper 107301",
    title: "Waves and Optics",
    blurb: "BEU's dedicated physics paper — interference, diffraction, polarization.",
    topics: [
      "Interference of Light (Young's Double Slit)",
      "Newton's Rings",
      "Diffraction (Single & Double Slit)",
      "Diffraction Grating",
      "Polarization of Light",
      "Double Refraction & Optical Activity"
    ]
  },
  {
    id: "lasers-fiber",
    semesterLabel: "Semester 3 · Applied Optics",
    title: "Lasers & Fiber Optics",
    blurb: "How light gets controlled, amplified and sent down a cable.",
    topics: [
      "Spontaneous vs Stimulated Emission",
      "Population Inversion & Laser Action",
      "Types of Lasers (Ruby, He-Ne, Semiconductor)",
      "Optical Fiber Structure & Types",
      "Numerical Aperture & Acceptance Angle",
      "Applications in Communication"
    ]
  },
  {
    id: "quantum-mechanics",
    semesterLabel: "Semester 2–3 · Modern Physics",
    title: "Quantum Mechanics",
    blurb: "Where physics stops being intuitive and starts being powerful.",
    topics: [
      "Failure of Classical Physics (Black Body, Photoelectric Effect)",
      "de Broglie Hypothesis",
      "Heisenberg Uncertainty Principle",
      "Schrödinger Wave Equation",
      "Particle in a Box",
      "Quantum Tunneling"
    ]
  },
  {
    id: "em-theory",
    semesterLabel: "Semester 2 · Electromagnetic Theory",
    title: "Electromagnetic Theory",
    blurb: "Maxwell's equations and how fields actually behave.",
    topics: [
      "Gauss's Law & Divergence of E",
      "Ampere's & Faraday's Law",
      "Maxwell's Equations (Differential Form)",
      "Electromagnetic Wave Propagation",
      "Poynting Vector & Energy Density"
    ]
  },
  {
    id: "solid-state",
    semesterLabel: "Semester 3–4 · Solid State Physics",
    title: "Solid State & Semiconductor Physics",
    blurb: "Why materials conduct, insulate, or do something in between.",
    topics: [
      "Crystal Structure & Bravais Lattices",
      "Band Theory of Solids",
      "Intrinsic & Extrinsic Semiconductors",
      "p-n Junction Basics",
      "Hall Effect",
      "Dielectric & Magnetic Properties of Materials"
    ]
  },
  {
    id: "beyond-syllabus",
    semesterLabel: "Beyond Syllabus · Level Max",
    title: "Extra: Where This Physics Leads",
    blurb: "Not in your exam, but this is what these ideas turn into.",
    topics: [
      "Special Relativity (why E = mc²)",
      "Superconductivity",
      "Nanotechnology & Quantum Dots",
      "Nuclear Physics Basics",
      "Statistical Mechanics Intuition",
      "Physics Behind Modern AI Hardware (GPUs, Chips)"
    ]
  }
];

if (typeof window !== "undefined") {
  window.PHYSICS_SYLLABUS = PHYSICS_SYLLABUS;
}
