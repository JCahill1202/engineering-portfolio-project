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

// Illustrative example projects only. These are not real work.
// Swap in real writeups, specs, and links, and drop `isExample` once you do.
// Keep the shape the same and everything (grid + detail pages) updates automatically.
export const projects: Project[] = [
  {
    slug: "regenerative-bldc-controller",
    title: "Regenerative BLDC Motor Controller",
    tagline: "3-phase FOC driver with regenerative braking for an e-skateboard",
    category: "Power Electronics",
    featured: true,
    year: "2025",
    tools: ["KiCad", "STM32", "FOC", "LTspice", "Bench PSU / DSO"],
    role: "Sole designer: schematic, PCB layout, firmware",
    summary:
      "A 4-layer motor controller board built around a field-oriented control (FOC) loop, capable of driving a 6.5 kW BLDC hub motor and recovering energy under braking back into the battery pack.",
    highlights: [
      "Designed a 4-layer PCB with a dedicated gate-drive layer to minimize switching-loop inductance on the three half-bridges",
      "Implemented FOC (Clarke/Park transforms + current PI loops) on an STM32G4 running at 20 kHz control bandwidth",
      "Tuned regenerative braking to recover roughly 18% of kinetic energy on downhill test runs",
      "Validated switching behavior and dead-time on a 4-channel scope; iterated gate resistor values to cut ringing by half",
    ],
    specs: [
      { label: "Bus voltage", value: "36–58 V" },
      { label: "Peak current", value: "60 A" },
      { label: "Control loop", value: "20 kHz FOC" },
      { label: "MCU", value: "STM32G431" },
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Design report (PDF)", href: "#" },
    ],
    coverGradient: ["#22d3ee", "#0ea5e9"],
    isExample: true,
  },
  {
    slug: "fpga-audio-dsp",
    title: "FPGA Real-Time Audio Equalizer",
    tagline: "5-band parametric EQ implemented entirely in fabric on an Artix-7",
    category: "Digital Design / DSP",
    featured: true,
    year: "2024",
    tools: ["Verilog", "Vivado", "MATLAB", "I2S", "Artix-7"],
    role: "Sole designer: RTL, verification, board bring-up",
    summary:
      "A fully pipelined, fixed-point 5-band parametric equalizer running in real time on FPGA fabric, with live parameter control over SPI from a companion microcontroller.",
    highlights: [
      "Derived biquad filter coefficients in MATLAB and implemented direct-form-II-transposed filters in Verilog",
      "Built an I2S receiver/transmitter and sample-rate-synchronous pipeline to keep audio latency under 1 ms",
      "Wrote a self-checking testbench comparing RTL output against a MATLAB fixed-point reference model bit-for-bit",
      "Closed timing at 100 MHz system clock with room to spare after two rounds of pipeline retiming",
    ],
    specs: [
      { label: "Bands", value: "5, parametric" },
      { label: "Sample rate", value: "48 kHz / 24-bit" },
      { label: "Latency", value: "<1 ms" },
      { label: "FPGA", value: "Xilinx Artix-7" },
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo video", href: "#" },
    ],
    coverGradient: ["#f5a524", "#f97316"],
    isExample: true,
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
    slug: "iot-environmental-mesh",
    title: "Low-Power Environmental Sensor Mesh",
    tagline: "Solar-powered sensor nodes reporting air quality over a BLE mesh",
    category: "Embedded Systems",
    featured: true,
    year: "2024",
    tools: ["Altium", "nRF52", "BLE Mesh", "Solar/LiPo charging", "C"],
    role: "Hardware + firmware lead (team of 3)",
    summary:
      "A network of solar-charged sensor nodes measuring temperature, humidity, and CO2/VOC levels, relaying readings over a Bluetooth mesh to a gateway node and dashboard.",
    highlights: [
      "Designed a 2-layer node board with MPPT-lite solar charging, sized the panel/battery for indefinite outdoor runtime",
      "Profiled current draw across sleep/RF/sensing states to hit an average draw under 90 µA",
      "Implemented BLE mesh provisioning and relay logic so nodes could extend range without a central router",
      "Deployed 8 nodes around campus for a 3-week continuous data-collection trial with >99% uptime",
    ],
    specs: [
      { label: "Avg. current draw", value: "~90 µA" },
      { label: "Nodes deployed", value: "8" },
      { label: "MCU / radio", value: "Nordic nRF52832" },
      { label: "Power", value: "Solar + LiPo" },
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Write-up", href: "#" },
    ],
    coverGradient: ["#34d399", "#22d3ee"],
    isExample: true,
  },
  {
    slug: "line-following-robot",
    title: "PID-Tuned Autonomous Line-Follower",
    tagline: "Sub-3-second-lap competition robot with a custom sensor bar",
    category: "Controls / Robotics",
    featured: false,
    year: "2023",
    tools: ["Arduino", "PID", "KiCad", "SolidWorks"],
    role: "Sole designer: electronics, mechanical, controls",
    summary:
      "A competition line-following robot built around a custom 8-channel IR sensor bar and a tuned PID controller driving differential DC motors, refined over several design/test iterations.",
    highlights: [
      "Designed a custom IR reflectance sensor array PCB with onboard analog front-end conditioning",
      "Tuned a PID controller in real time via serial telemetry, cutting lap time from 6.1 s to 2.8 s",
      "3D-printed and iterated the chassis in SolidWorks to lower the center of mass for higher-speed cornering",
    ],
    specs: [
      { label: "Best lap time", value: "2.8 s" },
      { label: "Sensor channels", value: "8x IR" },
      { label: "Control", value: "PID @ 1 kHz" },
    ],
    links: [{ label: "GitHub", href: "#" }],
    coverGradient: ["#a78bfa", "#818cf8"],
    isExample: true,
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
    slug: "rf-antenna-frontend",
    title: "2.4 GHz Patch Antenna & RF Front-End",
    tagline: "Custom microstrip patch antenna matched and validated on a VNA",
    category: "RF / Microwave",
    featured: false,
    year: "2022",
    tools: ["Altium", "HFSS", "VNA", "Smith chart matching"],
    role: "Sole designer",
    summary:
      "A microstrip patch antenna and matching network designed for 2.4 GHz ISM-band operation, simulated electromagnetically before fabrication and validated with VNA measurements.",
    highlights: [
      "Simulated radiation pattern and return loss in HFSS, iterating patch dimensions for a target -15 dB S11",
      "Designed an L-section matching network from Smith chart analysis to correct measured impedance",
      "Measured S11 and gain on a VNA and antenna range, within 1 dB of simulated results",
    ],
    specs: [
      { label: "Frequency", value: "2.4 GHz ISM" },
      { label: "Measured S11", value: "-14.6 dB" },
      { label: "Substrate", value: "FR4, 1.6 mm" },
    ],
    links: [{ label: "GitHub", href: "#" }],
    coverGradient: ["#fb7185", "#f43f5e"],
    isExample: true,
  },
  {
    slug: "tic-tac-toe-game",
    title: "Interactive Tic-Tac-Toe Board",
    tagline: "A physical tic-tac-toe game, rebuilt and documented through multiple hardware iterations",
    category: "Electronics",
    featured: true,
    year: "2025-2026",
    tools: ["Toggle switches", "RGB LEDs", "Breadboard", "Soldering", "Arduino", "Joystick module", "WS2812B LEDs"],
    role: "Sole designer: circuit design, prototyping, iteration",
    summary:
      "An ongoing project to build a physical, hardware-based tic-tac-toe game. Rather than only showing a finished result, this project is documented iteration by iteration, starting from its first breadboard prototype and updated as more work is done.",
    highlights: [
      "Documenting the full design process from first prototype through later revisions, not just a polished final result",
      "Evolved from purely discrete toggle-switch and RGB LED circuits to an Arduino-driven build with joystick input",
    ],
    coverGradient: ["#22d3ee", "#818cf8"],
    coverImage: {
      src: "/projects/tic-tac-toe/toggle-proto-1.jpeg",
      alt: "First breadboard prototype of the tic-tac-toe game using toggle switches and RGB LEDs",
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
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
