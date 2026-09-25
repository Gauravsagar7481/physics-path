

const TOPIC_CONTENT = {

  "damped-forced-oscillations": {
    moduleTitle: "Oscillations & Waves",
    title: "Damped & Forced Oscillations",
    levels: [
      // Level 0
      `<p>A real swing doesn't keep swinging forever — friction and air resistance slowly
      steal its energy until it stops. That slow dying-down is called <strong>damping</strong>.</p>
      <p>Now imagine gently pushing that swing at just the right moment in every cycle — you
      can keep it going, or even make it swing higher. That's a <strong>forced oscillation</strong>:
      an outside force keeps feeding energy into the system.</p>
      <p>Almost nothing in the real world oscillates forever on its own — everything either
      dies down (damped) or needs to be driven by an external push (forced). Your car's
      suspension, a door closer, and a swing being pushed are everyday examples of both ideas.</p>`,
      // Level 1
      `<h2>Damped Oscillations</h2>
      <p>A damped oscillator experiences a resistive force proportional to velocity, in
      addition to the restoring force:</p>
      <div class="formula-box">m(d²x/dt²) + b(dx/dt) + kx = 0</div>
      <p>where <em>b</em> is the damping constant. Depending on how large <em>b</em> is
      compared to the system's natural frequency, three cases occur:</p>
      <ul>
        <li><strong>Underdamped:</strong> oscillates with steadily decreasing amplitude</li>
        <li><strong>Critically damped:</strong> returns to equilibrium fastest, without oscillating</li>
        <li><strong>Overdamped:</strong> returns to equilibrium slowly, without oscillating</li>
      </ul>
      <p>The amplitude of an underdamped oscillator decays as:</p>
      <div class="formula-box">A(t) = A₀e^(−bt/2m)</div>

      <h2>Forced Oscillations</h2>
      <p>When a periodic external force F₀cos(ωt) is applied to a damped oscillator, after
      initial transients die out, the system oscillates at the driving frequency ω with an
      amplitude that depends on how close ω is to the natural frequency ω₀.</p>`,
      // Level 2
      `<ul>
        <li><strong>Car suspension:</strong> shock absorbers are deliberately designed close to
        critical damping — enough to stop bouncing quickly, without feeling stiff.</li>
        <li><strong>Door closers:</strong> the hydraulic mechanism in a self-closing door is
        an overdamped system — it closes smoothly without slamming or oscillating.</li>
        <li><strong>Seismic isolation in buildings:</strong> tall buildings use large damped
        mass systems (tuned mass dampers) to absorb energy from wind and earthquakes, reducing
        sway.</li>
      </ul>`,
      // Level Max
      `<h2>Quality Factor (Q)</h2>
      <p>The quality factor measures how underdamped a system is — how many oscillations it
      completes before its energy drops significantly:</p>
      <div class="formula-box">Q = mω₀/b</div>
      <p>High-Q systems (like a tuning fork or a laser cavity) ring for a long time; low-Q
      systems (like your car's shock absorbers) settle almost immediately. This single number
      connects directly to Resonance (the next topic) — the sharper and taller the resonance
      peak, the higher the Q.</p>`
    ]
  },

  "resonance": {
    moduleTitle: "Oscillations & Waves",
    title: "Resonance",
    levels: [
      // Level 0
      `<p>Push a swing at random times and it barely moves. Push it at exactly the right
      rhythm — matching its own natural back-and-forth timing — and small pushes add up into
      big swings. That matching of rhythms is <strong>resonance</strong>.</p>
      <p>Resonance happens when the frequency of an outside push matches a system's own
      natural frequency of vibration. When that match happens, even a small force can build up
      into a surprisingly large response.</p>
      <p>This is why opera singers can shatter a glass with their voice (matching the glass's
      natural vibration frequency), and why armies break step crossing a bridge (to avoid
      accidentally matching the bridge's resonant frequency).</p>`,
      // Level 1
      `<h2>Resonance Condition</h2>
      <p>For a forced, damped oscillator, the amplitude of oscillation as a function of
      driving frequency ω is:</p>
      <div class="formula-box">A(ω) = F₀ / √(m²(ω₀² − ω²)² + b²ω²)</div>
      <p>This amplitude is maximum when ω is close to ω₀, the system's natural frequency —
      this is the resonance condition. At low damping, the amplitude at resonance can become
      very large.</p>

      <h2>Sharpness of Resonance</h2>
      <p>How narrow and tall the resonance peak is depends on damping: low damping gives a
      sharp, tall peak (the system responds strongly only very close to ω₀); high damping gives
      a broad, flat peak.</p>`,
      // Level 2
      `<ul>
        <li><strong>Tacoma Narrows Bridge (1940):</strong> wind-induced oscillations matched
        the bridge's natural torsional frequency, building up until the bridge tore itself
        apart — the most famous real-world resonance failure.</li>
        <li><strong>MRI machines:</strong> use nuclear magnetic resonance — atomic nuclei
        absorb energy strongly only at their specific resonant radio frequency, which is how
        MRI distinguishes different tissues.</li>
        <li><strong>Radio tuning:</strong> turning a radio dial changes the resonant frequency
        of an internal LC circuit so it only responds strongly to one station's broadcast
        frequency, ignoring the rest.</li>
      </ul>`,
      // Level Max
      `<p>Resonance appears throughout physics far beyond mechanical vibration: atomic
      absorption spectra (electrons absorb photons at resonant frequencies matching energy
      level gaps), particle accelerators (particles gain energy from oscillating fields tuned
      to match their orbital frequency), and even gravitational wave detectors, which are
      built to be exquisitely sensitive near specific resonant frequencies. The underlying
      mathematics — a peaked response near a natural frequency — is identical across all of
      these vastly different physical systems.</p>`
    ]
  },

  "wave-equation-superposition": {
    moduleTitle: "Oscillations & Waves",
    title: "Wave Equation & Superposition",
    levels: [
      // Level 0
      `<p>Drop a stone in still water and ripples spread outward — that's a wave: a
      disturbance that travels through a medium, carrying energy without permanently moving
      the medium itself (the water doesn't travel outward, just the ripple pattern does).</p>
      <p><strong>Superposition</strong> is what happens when two waves meet: they simply add
      up. Drop two stones near each other and where their ripples cross, the water rises higher
      (waves add) or flattens out (waves cancel) — then each ripple continues on exactly as if
      nothing happened.</p>`,
      // Level 1
      `<h2>The Wave Equation</h2>
      <p>A wave traveling along one direction satisfies:</p>
      <div class="formula-box">∂²y/∂x² = (1/v²)(∂²y/∂t²)</div>
      <p>where <em>v</em> is the wave speed. A general solution is any function of the form
      y(x,t) = f(x − vt) (traveling right) or f(x + vt) (traveling left).</p>
      <p>For a sinusoidal wave:</p>
      <div class="formula-box">y(x,t) = A sin(kx − ωt)</div>
      <p>where k = 2π/λ is the wave number and ω = 2πf is the angular frequency, related by
      v = ω/k = fλ.</p>

      <h2>Principle of Superposition</h2>
      <p>When two or more waves overlap in the same region, the resultant displacement at any
      point is simply the algebraic sum of the individual displacements — this holds as long
      as the medium responds linearly (which is true for most everyday waves at normal
      amplitude).</p>`,
      // Level 2
      `<ul>
        <li><strong>Noise-cancelling headphones:</strong> a microphone detects incoming sound,
        and the headphones generate an inverted wave — superposition cancels the noise before
        it reaches your ear.</li>
        <li><strong>Holography:</strong> holograms are recorded by capturing the superposition
        (interference) pattern between a reference laser beam and light reflected off an
        object.</li>
        <li><strong>Fourier analysis:</strong> any complex wave (like a musical chord, or your
        voice) can be broken down into a superposition of simple sine waves of different
        frequencies — this is the mathematical foundation of audio compression (MP3), image
        compression (JPEG), and signal processing generally.</li>
      </ul>`,
      // Level Max
      `<p>The wave equation is linear, which is precisely why superposition works — for a
      linear differential equation, the sum of two solutions is also a solution. This isn't
      true for all physical systems: in nonlinear media (very intense light in certain
      materials, or ocean waves near breaking), waves interact nonlinearly, producing effects
      like solitons — solitary waves that travel without dispersing, arising from a delicate
      balance between nonlinearity and dispersion. This connects directly to modern research in
      fiber-optic communication, where soliton pulses are studied for long-distance signal
      transmission without distortion.</p>`
    ]
  },

  "standing-waves": {
    moduleTitle: "Oscillations & Waves",
    title: "Standing Waves",
    levels: [
      // Level 0
      `<p>Shake one end of a rope tied at the other end, at just the right speed, and instead
      of a wave traveling along it, the rope seems to vibrate in place — forming loops that
      grow and shrink, with certain points that never move at all. That pattern is a
      <strong>standing wave</strong>.</p>
      <p>It happens when a wave reflects back on itself (off a fixed end, for instance) and
      combines with the original wave through superposition. The result looks stationary even
      though two waves are actually still traveling through each other in opposite
      directions.</p>`,
      // Level 1
      `<h2>Formation</h2>
      <p>A standing wave forms from the superposition of two identical waves traveling in
      opposite directions:</p>
      <div class="formula-box">y = A sin(kx − ωt) + A sin(kx + ωt) = 2A sin(kx) cos(ωt)</div>
      <p>Notice the result is no longer a traveling wave — it's a fixed spatial pattern
      2A sin(kx) whose amplitude oscillates in time with cos(ωt).</p>

      <h2>Nodes and Antinodes</h2>
      <ul>
        <li><strong>Nodes:</strong> points that never move (where sin(kx) = 0)</li>
        <li><strong>Antinodes:</strong> points of maximum vibration (where sin(kx) = ±1)</li>
      </ul>
      <p>For a string fixed at both ends of length L, only certain wavelengths "fit" — these
      are the allowed modes:</p>
      <div class="formula-box">λₙ = 2L/n, &nbsp; n = 1, 2, 3...</div>
      <p>Each value of n gives a harmonic: n=1 is the fundamental, n=2 the second harmonic, and
      so on.</p>`,
      // Level 2
      `<ul>
        <li><strong>Musical instruments:</strong> every stringed and wind instrument produces
        sound through standing waves — the specific set of allowed wavelengths determines the
        instrument's pitch and timbre (the mix of harmonics present).</li>
        <li><strong>Microwave ovens:</strong> the heating chamber sets up standing microwaves —
        this is exactly why microwaves have "hot spots" and rotating turntables, to avoid
        cooking food only at the antinodes.</li>
        <li><strong>Laser cavities:</strong> a laser works by setting up a standing light wave
        between two mirrors — only wavelengths that fit the cavity length as a standing wave
        get amplified.</li>
      </ul>`,
      // Level Max
      `<p>Standing waves aren't limited to mechanical strings — the same mathematics governs
      electron standing waves in atoms. In the Bohr model (and more rigorously in quantum
      mechanics), an electron's allowed orbits are exactly those where its de Broglie wave
      forms a standing wave around the nucleus — non-standing-wave orbits are simply not
      allowed, which is the deep reason atomic energy levels are quantized (discrete) rather
      than continuous. The "fitting" condition you use for a guitar string is structurally the
      same condition that explains why atoms only emit light at specific colors.</p>`
    ]
  },


  "interference-of-light": {
    moduleTitle: "Waves and Optics",
    title: "Interference of Light (Young's Double Slit)",
    levels: [
      `<p>Shine light through two narrow slits close together, and instead of two bright
      lines on a screen, you get a whole pattern of alternating bright and dark bands. This
      happens because light is a wave — where two waves arrive in step, they add up (bright);
      where they arrive out of step, they cancel (dark). This is <strong>interference</strong>,
      and it was the experiment (by Thomas Young, 1801) that proved light behaves as a wave.</p>`,
      `<h2>Setup and Condition</h2>
      <p>Two coherent sources (same frequency, constant phase difference) — usually created by
      splitting one beam through two slits separated by distance <em>d</em> — produce a fringe
      pattern on a screen at distance <em>D</em>.</p>
      <div class="formula-box">Path difference = d sinθ ≈ dy/D</div>
      <p>Bright fringes occur where path difference = nλ; dark fringes where path difference =
      (n + ½)λ. Fringe width (spacing between bright bands):</p>
      <div class="formula-box">β = λD/d</div>`,
      `<ul>
        <li><strong>Anti-reflective coatings:</strong> thin coatings on camera lenses and
        glasses use interference to cancel out reflected light of specific wavelengths.</li>
        <li><strong>Interferometers:</strong> devices like LIGO (which detected gravitational
        waves) measure incredibly tiny distance changes by watching interference fringes shift.</li>
      </ul>`,
      `<p>Young's experiment is also the classic demonstration of wave-particle duality: even
      when photons are sent through one at a time, the interference pattern still builds up
      over many photons — implying each photon somehow "interferes with itself," a deeply
      non-classical result confirmed experimentally and central to quantum mechanics.</p>`
    ]
  },

  "newtons-rings": {
    moduleTitle: "Waves and Optics",
    title: "Newton's Rings",
    levels: [
      `<p>Place a curved glass lens on a flat glass plate and shine light on it — you'll see
      concentric colored (or dark and light, with pure single-color light) rings around the
      point of contact. These are <strong>Newton's rings</strong>, caused by interference
      between light reflecting off the curved and flat surfaces, which are separated by a thin,
      varying air gap.</p>`,
      `<h2>How the Rings Form</h2>
      <p>Light reflects from both the bottom of the lens and the top of the flat plate. The gap
      between them increases with distance from the center, so the path difference between the
      two reflections varies — creating alternating constructive and destructive interference
      as rings.</p>
      <div class="formula-box">rₙ² = nλR &nbsp; (dark rings, normal incidence)</div>
      <p>where R is the radius of curvature of the lens. Because the rings depend on wavelength,
      this setup is used to precisely measure the radius of curvature of a lens, or the
      wavelength of light if R is already known.</p>`,
      `<ul>
        <li><strong>Optical flatness testing:</strong> Newton's rings are used industrially to
        check whether a lens or glass surface is precisely curved or flat — irregular rings
        reveal surface defects invisible to the eye.</li>
      </ul>`,
      `<p>The fact that the center spot is dark (not bright) in Newton's rings is a subtle but
      important detail: light reflecting off the flat plate (going from a less dense to a more
      dense medium... actually the opposite here) undergoes a phase shift of π, which shifts
      the entire interference pattern — a direct, visible confirmation of the phase-change-on-
      reflection rule that also governs anti-reflective coatings and thin-film interference.</p>`
    ]
  },

  "diffraction": {
    moduleTitle: "Waves and Optics",
    title: "Diffraction (Single & Double Slit)",
    levels: [
      `<p>Waves bend around obstacles and spread out after passing through narrow openings —
      this bending is <strong>diffraction</strong>. It's why you can hear someone talking
      around a corner even without seeing them (sound diffracts strongly), and why a laser
      beam through a very narrow slit spreads into a pattern of bright and dark bands instead
      of staying a thin line.</p>`,
      `<h2>Single Slit Diffraction</h2>
      <p>Light passing through a single narrow slit of width <em>a</em> produces a central
      bright band flanked by weaker side bands. Dark fringes (minima) occur at:</p>
      <div class="formula-box">a sinθ = nλ, &nbsp; n = 1, 2, 3...</div>
      <p>Note this is the opposite pattern logic from double-slit interference — here it gives
      minima, not maxima. The central band is twice as wide as the others.</p>
      <h2>Difference from Interference</h2>
      <p>Diffraction is spreading from a single opening; interference (like Young's
      experiment) is the combination of light from multiple sources. In practice, a real
      double-slit pattern is actually an interference pattern modulated by a diffraction
      envelope from each individual slit.</p>`,
      `<ul>
        <li><strong>Camera aperture:</strong> closing a camera's aperture too much causes
        diffraction to blur the image — this is why lenses have an optimal aperture setting for
        sharpness.</li>
        <li><strong>Radio telescopes:</strong> diffraction limits the resolution of any wave-
        based imaging system; this is why radio telescopes need to be enormous — radio waves
        have long wavelengths, so bigger apertures are needed to reduce diffraction blur.</li>
      </ul>`,
      `<p>The diffraction limit — roughly θ ≈ λ/a — sets a fundamental boundary on how sharply
      any optical or radio instrument can resolve detail, regardless of lens quality. This is
      why electron microscopes vastly outperform light microscopes for very fine detail:
      electrons have a far shorter de Broglie wavelength than visible light, pushing the
      diffraction limit down to atomic scales.</p>`
    ]
  },

  "diffraction-grating": {
    moduleTitle: "Waves and Optics",
    title: "Diffraction Grating",
    levels: [
      `<p>A diffraction grating is a surface etched with thousands of extremely closely spaced
      parallel lines (or slits) — essentially many double-slits side by side. Shine light
      through it and instead of the two-band pattern of a double slit, you get very sharp,
      widely-spaced bright spots, with different colors bent at different angles — this is
      exactly how a CD or DVD's underside splits white light into rainbow colors.</p>`,
      `<h2>Grating Equation</h2>
      <p>For a grating with N lines per uni