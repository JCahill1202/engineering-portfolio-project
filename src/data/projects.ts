export type ProjectImage = { src: string; alt: string; caption?: string };
export type ProjectVideo = { src: string; caption?: string };

export type ProjectVariant = {
  name: string;
  description: string;
  images: ProjectImage[];
  // Short, muted, looping demo clip (no sound needed) shown alongside the gallery.
  video?: ProjectVideo;
  specs?: { label: string; value: string }[];
};

// One dated entry in an ongoing project's build log, e.g. "Dec 3, 2025: first breadboard prototype".
export type BuildLogEntry = {
  date: string;
  title: string;
  description: string;
  images?: ProjectImage[];
  video?: ProjectVideo;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  year: string;
  tools: string[];
  role: string;
  summary: string;
  highlights: string[];
  specs?: { label: string; value: string }[];
  links?: { label: string; href: string }[];
  coverGradient: [string, string];
  // Real photo/screenshot used on the card + detail hero instead of the gradient placeholder.
  coverImage?: ProjectImage;
  // Sub-builds of the same project (e.g. astable vs. bistable versions), each with its own gallery.
  variants?: ProjectVariant[];
  // Simple flat image gallery for single-story projects that don't need the variants split.
  gallery?: ProjectImage[];
  // Chronological log of iterations for an ongoing project, oldest first.
  buildLog?: BuildLogEntry[];
  // Flags an actively evolving project so the UI can show a "Work in Progress" badge.
  inProgress?: boolean;
  // Marks fictional placeholder projects so the UI can flag them clearly.
  // Remove this field (or set to false) once you swap in a real project.
  isExample?: boolean;
};

// Real projects. Set `isExample: true` on an entry to flag it as an illustrative
// placeholder instead (shows a badge and banner) until it's swapped for real work.
export const projects: Project[] = [
  {
    slug: "tic-tac-toe-game",
    title: "Interactive Tic-Tac-Toe Board",
    tagline: "A physical tic-tac-toe game, rebuilt and documented through multiple hardware iterations",
    category: "Electronics",
    featured: true,
    year: "2025-2026",
    tools: [
      "Toggle switches",
      "RGB LEDs",
      "Breadboard",
      "Soldering",
      "Arduino",
      "Joystick module",
      "WS2812B LEDs",
      "SolidWorks/FreeCAD",
      "3D Printing",
    ],
    role: "Sole designer: circuit design, prototyping, iteration",
    summary:
      "An ongoing project to build a physical, hardware-based tic-tac-toe game. Rather than only showing a finished result, this project is documented iteration by iteration, starting from its first breadboard prototype and updated as more work is done.",
    highlights: [
      "Documenting the full design process from first prototype through later revisions, not just a polished final result",
      "Evolved from purely discrete toggle-switch and RGB LED circuits to an Arduino-driven build with joystick input",
    ],
    coverGradient: ["#22d3ee", "#818cf8"],
    coverImage: {
      src: "/projects/tic-tac-toe/3d-printed-shell.jpeg",
      alt: "3D-printed shell with white PLA diffusing plates over the 3x3 LED grid",
    },
    inProgress: true,
    buildLog: [
      {
        date: "December 3, 2025",
        title: "First version: toggle-switch prototype (Electronics course final project)",
        description:
          "Nine independent 3-way toggle switch, RGB LED, and resistor circuits, all tied to a common ground and power supply. Flipping a switch one direction diverts power to light the RGB LED one color; the third pin on each switch isn't used. Built on breadboards, with light soldering on the toggle switch contacts.",
        images: [
          {
            src: "/projects/tic-tac-toe/toggle-proto-1.jpeg",
            alt: "Toggle switch and RGB LED breadboard prototype, wide view",
            caption: "Toggle Proto 1",
          },
          {
            src: "/projects/tic-tac-toe/toggle-proto-2.jpeg",
            alt: "Toggle switch and RGB LED breadboard prototype, near the oscilloscope",
            caption: "Toggle Proto 2",
          },
        ],
      },
      {
        date: "March 6, 2026",
        title: "Switched to an Arduino and joystick for analog control",
        description:
          "Moved off manual toggle switches to an Arduino microcontroller, adding a joystick for analog control over the LEDs. Wrote a program that tracks the LEDs in an array, follows which one the joystick is hovering over, and lights it up on joystick button press.",
        video: {
          src: "/projects/tic-tac-toe/joystick-test.mp4",
          caption: "Joystick-controlled LED test",
        },
      },
      {
        date: "March 17, 2026",
        title: "Switched to individually addressable WS2812B LEDs",
        description:
          "Moved to WS2812B individually addressable LED strips. The strip was cut into segments and spliced back together with jumper wires to form the tic-tac-toe grid layout.",
        images: [
          {
            src: "/projects/tic-tac-toe/ws2812b-splice.jpeg",
            alt: "Three WS2812B LED strip segments spliced together with jumper wires",
            caption: "Spliced WS2812B segments",
          },
        ],
      },
      {
        date: "March 24, 2026",
        title: "Custom 3D-printed shell and diffusing plates",
        description:
          "Designed and printed a custom housing to hold and protect the LED grid, with millimeter-thick white PLA diffusing plates over each square so the LEDs underneath illuminate the whole square instead of showing up as a single colored dot.",
        images: [
          {
            src: "/projects/tic-tac-toe/3d-printed-shell.jpeg",
            alt: "3D-printed shell with white PLA diffusing plates over the 3x3 LED grid",
            caption: "3D-printed shell with diffusing plates",
          },
        ],
      },
    ],
  },
  {
    slug: "defense-turret",
    title: "Autonomous Defense Turret",
    tagline: "A camera-aimed turret that acquires and tracks targets with a two-axis PID gimbal",
    category: "Controls / Robotics",
    featured: true,
    year: "2026",
    tools: ["Python", "OpenCV", "PID Control", "Servo Motors", "Ultrasonic Sensor", "ESP32-CAM"],
    role: "Sole designer: computer vision, controls, electronics",
    summary:
      "An all-in-one turret project combining computer vision, closed-loop PID control, and distance sensing on a two-axis (pan and tilt) servo gimbal. The plan is to detect and center a target in frame using multiple detection modes (motion tracking, color masking, and YOLO object detection), range it with an ultrasonic sensor, and eventually fire a NERF launcher with a trajectory calculated from the tilt angle (via an accelerometer/gyroscope module) and the measured distance. This is being built and documented one subsystem at a time.",
    highlights: [
      "Writing and testing the vision algorithms (motion tracking, color masking, YOLO) in Python/OpenCV against a laptop webcam before moving them onto the turret's onboard camera",
      "Currently working through a resolution/latency tradeoff on the ESP32-CAM module, whose wireless video transmission has enough delay to hurt live tracking at higher quality settings",
    ],
    specs: [
      { label: "Degrees of freedom", value: "2 (pan + tilt)" },
      { label: "Detection modes (planned)", value: "Motion, color mask, YOLO" },
      { label: "Ranging", value: "Ultrasonic" },
      { label: "Planned launcher", value: "NERF, trajectory-calculated" },
    ],
    coverGradient: ["#f87171", "#7f1d1d"],
    coverImage: {
      src: "/projects/defense-turret/ultrasonic-distance-cover.jpeg",
      alt: "Ultrasonic distance sensor wired to a breadboard with an OLED reading the measured distance",
    },
    inProgress: true,
    buildLog: [
      {
        date: "May 12, 2026",
        title: "Ultrasonic distance sensing test",
        description:
          "Wired an HC-SR04 ultrasonic sensor to a breadboard with a 0.96\" OLED display showing live distance in centimeters, tested by moving an obstruction toward and away from the sensor.",
        video: {
          src: "/projects/defense-turret/ultrasonic-distance-test.mp4",
          caption: "Ultrasonic distance test",
        },
      },
      {
        date: "May 13, 2026",
        title: "Servo-driven survey mode sweep",
        description:
          "Mounted the ultrasonic sensor on a servo set to rotate in increments across its 180-degree range, stopping and reversing direction at each end. The OLED displays the distance to whatever is in front of the sensor in centimeters, and turns off past a roughly 30 cm threshold to filter out background clutter. In this test, the sweep picked up a water bottle sitting on the table as it panned across it.",
        video: {
          src: "/projects/defense-turret/survey-mode-test.mp4",
          caption: "Survey mode sweep test",
        },
      },
    ],
  },
  {
    slug: "555-timer-led-pcbs",
    title: "555 Timer Driven LED PCBs",
    tagline: "Astable and bistable 555 timer circuits, each designed as a KiCad schematic and PCB",
    category: "Analog Design",
    featured: true,
    year: "2026",
    tools: ["KiCad", "555 Timer IC", "Soldering"],
    role: "Sole designer: schematic, PCB layout, prototype",
    summary:
      "A pair of small 555 timer boards, one bistable and one astable, each designed from schematic through PCB layout in KiCad and hand-soldered as a prototype. The bistable version uses two pushbuttons to manually latch an LED on and off, acting as a simple set-reset flip-flop. The astable version free-runs as an oscillator, blinking two banks of LEDs on its own.",
    highlights: [
      "Designed the bistable 555 timer schematic in KiCad, using pin 4 (RST) and the tied THRES/TRIG inputs (pins 2 & 6) as manual reset and set pushbuttons to latch the LED on and off",
      "Designed the astable 555 timer schematic in KiCad, using an RC timing network (R1, R2, and a timing capacitor) to free-run the timer and blink two banks of LEDs off its output",
      "Laid out 2-layer PCBs in KiCad for both circuits and rendered 3D previews of each board before fabrication",
      "Hand-soldered dead-bug style prototypes of both circuits directly on the ICs' leads to validate each design before committing to a board",
    ],
    specs: [{ label: "Supply", value: "+5 V" }],
    coverGradient: ["#f472b6", "#f5a524"],
    coverImage: {
      src: "/projects/555-timer-led-pcbs/bistable-pcb-render.png",
      alt: "3D render of the bistable 555 timer PCB",
    },
    variants: [
      {
        name: "Bistable version",
        description:
          "Two pushbuttons act as manual set/reset inputs: one latches the LED on, and the other resets it off, using the 555's RST pin and tied TRIG/THRES pins instead of the usual RC timing network.",
        specs: [
          { label: "Pull-up resistors", value: "1 kΩ (R1, R2)" },
          { label: "LED resistor", value: "330 Ω (R3)" },
          { label: "Decoupling cap", value: "0.1 µF" },
        ],
        images: [
          {
            src: "/projects/555-timer-led-pcbs/bistable-schematic.png",
            alt: "Bistable 555 timer KiCad schematic",
            caption: "KiCad schematic",
          },
          {
            src: "/projects/555-timer-led-pcbs/bistable-pcb-layout.png",
            alt: "Bistable 555 timer PCB layout in KiCad",
            caption: "PCB layout",
          },
          {
            src: "/projects/555-timer-led-pcbs/bistable-pcb-render.png",
            alt: "3D render of the bistable 555 timer PCB",
            caption: "3D board render",
          },
          {
            src: "/projects/555-timer-led-pcbs/bistable-prototype.jpeg",
            alt: "Hand-soldered dead-bug prototype of the bistable 555 timer circuit",
            caption: "Hand-soldered prototype",
          },
        ],
      },
      {
        name: "Astable version",
        description:
          "An RC timing network (R1, R2, and a timing capacitor) makes the 555 free-run as an oscillator, with its output driving two banks of LEDs so they blink on their own with no input needed.",
        specs: [
          { label: "Timing resistors", value: "15 kΩ (R1), 1 kΩ (R2)" },
          { label: "Timing capacitor", value: "1000 µF" },
          { label: "LED banks", value: "3 yellow, 3 green" },
        ],
        video: {
          src: "/projects/555-timer-led-pcbs/astable-demo.mp4",
          caption: "Prototype in action",
        },
        images: [
          {
            src: "/projects/555-timer-led-pcbs/astable-schematic.png",
            alt: "Astable 555 timer KiCad schematic",
            caption: "KiCad schematic",
          },
          {
            src: "/projects/555-timer-led-pcbs/astable-pcb-layout.png",
            alt: "Astable 555 timer PCB layout in KiCad",
            caption: "PCB layout",
          },
          {
            src: "/projects/555-timer-led-pcbs/astable-pcb-render.png",
            alt: "3D render of the astable 555 timer PCB",
            caption: "3D board render",
          },
          {
            src: "/projects/555-timer-led-pcbs/astable-prototype.jpeg",
            alt: "Hand-soldered dead-bug prototype of the astable 555 timer circuit",
            caption: "Hand-soldered prototype",
          },
        ],
      },
    ],
  },
  {
    slug: "magnetic-chess-set",
    title: "Magnetic 3D-Printed Chess Set",
    tagline: "A fully original chess set with magnets in every piece and every board square",
    category: "3D Design & Fabrication",
    featured: true,
    year: "2026",
    tools: ["SolidWorks", "FDM 3D Printing", "Slicer software"],
    role: "Sole designer: modeling, printing, assembly",
    summary:
      "A complete chess set designed from scratch in SolidWorks and FDM printed piece by piece. Every piece and every board square has a magnet embedded inside it, so pieces snap into place on the board instead of sliding around.",
    highlights: [
      "Balanced size constraints against sculptural detail on the more complex pieces, especially the knight's head and the king and queen's crowns",
      "Designed the board as 64 individually printed squares plus a frame, using three colors total",
      "Tested every magnet's polarity before installing it, then designed magnet cavities into each piece and square so the print could be paused partway through, the magnet inserted, and the print resumed around it",
      "Modeled the knight's organic curves by tracing reference images and lofting between the traced profiles, rather than using simple primitive shapes",
    ],
    specs: [
      { label: "Pieces", value: "32, fully original design" },
      { label: "Board", value: "64 individually printed squares + frame" },
      { label: "Colors", value: "3" },
      { label: "Print process", value: "FDM, pause/resume for magnets" },
    ],
    coverGradient: ["#facc15", "#92400e"],
    coverImage: {
      src: "/projects/chess-set/chess-board.jpeg",
      alt: "The finished 3D-printed magnetic chess set, fully set up",
    },
    gallery: [
      {
        src: "/projects/chess-set/chess-board.jpeg",
        alt: "The full finished chess board and piece set",
        caption: "Full board",
      },
      {
        src: "/projects/chess-set/king-model.png",
        alt: "SolidWorks model of the king",
        caption: "King",
      },
      {
        src: "/projects/chess-set/queen-model.png",
        alt: "SolidWorks model of the queen",
        caption: "Queen",
      },
      {
        src: "/projects/chess-set/knight-model.png",
        alt: "SolidWorks model of the knight",
        caption: "Knight",
      },
      {
        src: "/projects/chess-set/bishop-model.png",
        alt: "SolidWorks model of the bishop",
        caption: "Bishop",
      },
      {
        src: "/projects/chess-set/rook-model.png",
        alt: "SolidWorks model of the rook",
        caption: "Rook",
      },
      {
        src: "/projects/chess-set/pawn-model.png",
        alt: "SolidWorks model of the pawn",
        caption: "Pawn",
      },
      {
        src: "/projects/chess-set/knight-magnet-cross-section.png",
        alt: "Slicer cross-section of the knight showing the magnet cavity",
        caption: "Magnet cavity, sliced cross-section",
      },
    ],
  },
  {
    slug: "weather-display",
    title: "WiFi Weather Display",
    tagline: "An ESP32 pulls live weather over WiFi and shows it on a 0.96\" OLED",
    category: "Embedded Systems",
    featured: true,
    year: "2026",
    tools: ["ESP32", "C++ (Arduino)", "0.96\" OLED", "Weather API", "Soldering", "3D Printing"],
    role: "Sole designer: firmware, soldering, enclosure",
    summary:
      "A small ESP32-based display that connects to WiFi, pulls live weather data from an online API every 60 seconds, and shows the temperature, conditions, and \"feels like\" reading on a 0.96\" OLED screen.",
    highlights: [
      "Obtained an API key and connected the ESP32 to WiFi to pull live weather data, verifying functionality with real readings on the OLED",
      "Polls the weather API on a 60-second interval and updates the OLED display automatically",
      "Soldered the OLED display directly to the ESP32 dev board's pins for a permanent, breadboard-free assembly",
      "Designed and 3D printed a custom enclosure with a cutout window for the OLED and a USB pass-through for power",
    ],
    specs: [
      { label: "Microcontroller", value: "ESP32" },
      { label: "Display", value: "0.96\" OLED" },
      { label: "Update interval", value: "60 s" },
      { label: "Connectivity", value: "WiFi + weather API" },
    ],
    coverGradient: ["#38bdf8", "#0f172a"],
    coverImage: {
      src: "/projects/weather-display/weather-display-test.jpeg",
      alt: "Breadboard test of the ESP32 and OLED showing live weather data for Boston",
    },
    gallery: [
      {
        src: "/projects/weather-display/weather-display-test.jpeg",
        alt: "Breadboard test of the ESP32 and OLED showing live weather data for Boston",
        caption: "Functional test: live weather data",
      },
      {
        src: "/projects/weather-display/weather-display-soldered.jpeg",
        alt: "OLED display soldered directly to the ESP32 dev board",
        caption: "OLED soldered to the ESP32",
      },
      {
        src: "/projects/weather-display/weather-display-shell.jpeg",
        alt: "Finished 3D-printed enclosure for the WiFi weather display",
        caption: "3D-printed enclosure",
      },
    ],
  },
  {
    slug: "misc-3d-models",
    title: "3D Model Collection",
    tagline: "An assortment of standalone, practical parts modeled and designed independently",
    category: "3D Design & Fabrication",
    featured: true,
    year: "2026",
    tools: ["SolidWorks"],
    role: "Sole designer: CAD modeling",
    summary:
      "A collection of smaller, self-contained 3D models, each solving its own practical problem (charging, organizing, mounting) rather than being part of one larger build. Simpler designs were left out in favor of the ones below.",
    highlights: [
      "Designed as independent, one-off parts rather than components of a single system, each exploring a different mounting, organizing, or holding mechanism",
      "Ranges from consumer accessory concepts (AirPods and MagSafe chargers, a Wii Remote charging dock) to household organizers (utensils, toothbrushes, sponges) and mounting hardware",
    ],
    coverGradient: ["#94a3b8", "#334155"],
    coverImage: {
      src: "/projects/misc-3d-models/wii-remote-holder.png",
      alt: "SolidWorks model of a 4-slot Wii Remote charging dock",
    },
    gallery: [
      {
        src: "/projects/misc-3d-models/wii-remote-holder.png",
        alt: "SolidWorks model of a 4-slot Wii Remote charging dock",
        caption: "Wii Remote Charging Dock",
      },
      {
        src: "/projects/misc-3d-models/airpods-dock.png",
        alt: "SolidWorks model of an AirPods charging dock",
        caption: "AirPods Charging Dock",
      },
      {
        src: "/projects/misc-3d-models/magsafe-platform.png",
        alt: "SolidWorks model of a MagSafe charging platform",
        caption: "MagSafe Charging Platform",
      },
      {
        src: "/projects/misc-3d-models/tv-remote-holder.png",
        alt: "SolidWorks model of a TV remote holder",
        caption: "TV Remote Holder",
      },
      {
        src: "/projects/misc-3d-models/utensil-stand.png",
        alt: "SolidWorks model of a utensil stand",
        caption: "Utensil Stand",
      },
      {
        src: "/projects/misc-3d-models/toothbrush-organizer.png",
        alt: "SolidWorks model of a toothbrush organizer",
        caption: "Toothbrush Organizer",
      },
      {
        src: "/projects/misc-3d-models/sponge-organizer.png",
        alt: "SolidWorks model of a sponge organizer",
        caption: "Sponge Organizer",
      },
      {
        src: "/projects/misc-3d-models/soap-pedestal.png",
        alt: "SolidWorks model of a soap bar pedestal",
        caption: "Soap Bar Pedestal",
      },
      {
        src: "/projects/misc-3d-models/wall-mount-can-holder.png",
        alt: "SolidWorks model of a wall-mount can holder",
        caption: "Wall-Mount Can Holder",
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
