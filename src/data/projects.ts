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
};

// Placeholder projects — swap in your real writeups, specs, and links.
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
    role: "Sole designer — schematic, PCB layout, firmware",
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
  },
  {
    slug: "fpga-audio-dsp",
    title: "FPGA Real-Time Audio Equalizer",
    tagline: "5-band parametric EQ implemented entirely in fabric on an Artix-7",
    category: "Digital Design / DSP",
    featured: true,
    year: "2024",
    tools: ["Verilog", "Vivado", "MATLAB", "I2S", "Artix-7"],
    role: "Sole designer — RTL, verification, board bring-up",
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
  },
  {
    slug: "line-following-robot",
    title: "PID-Tuned Autonomous Line-Follower",
    tagline: "Sub-3-second-lap competition robot with a custom sensor bar",
    category: "Controls / Robotics",
    featured: false,
    year: "2023",
    tools: ["Arduino", "PID", "KiCad", "SolidWorks"],
    role: "Sole designer — electronics, mechanical, controls",
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
  },
  {
    slug: "analog-overdrive-pedal",
    title: "Discrete Analog Overdrive Pedal",
    tagline: "Hand-tuned op-amp clipping stage with active tone shaping",
    category: "Analog Design",
    featured: false,
    year: "2023",
    tools: ["LTspice", "Eagle", "Bench multimeter/scope", "Op-amps"],
    role: "Sole designer",
    summary:
      "A guitar overdrive pedal built from discrete op-amp stages: a boosted input buffer, diode soft-clipping stage, and an active 2-band tone control, fully simulated before layout.",
    highlights: [
      "Simulated clipping and frequency response in LTspice before committing to a board layout",
      "Hand-etched and populated two PCB revisions to fix a ground-loop hum discovered in bench testing",
      "A/B tested against commercial pedals with the same op-amp topology for tonal reference",
    ],
    specs: [
      { label: "Topology", value: "Op-amp soft clip" },
      { label: "Supply", value: "9 V" },
      { label: "Board revs", value: "2" },
    ],
    links: [{ label: "GitHub", href: "#" }],
    coverGradient: ["#f472b6", "#f5a524"],
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
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
