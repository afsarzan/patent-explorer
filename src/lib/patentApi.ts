export interface Patent {
  id: string;
  patentNumber: string;
  title: string;
  abstract: string;
  inventors: string[];
  assignee: string;
  filingDate: string;
  grantDate: string;
  url: string;
}

export interface PatentSearchResult {
  patents: Patent[];
  total: number;
  error?: string;
}

// Mock patent data for demonstration
const mockPatents: Patent[] = [
  {
    id: "11847550",
    patentNumber: "11847550",
    title: "Machine learning system for natural language processing with transformer architecture",
    abstract: "A system and method for processing natural language using deep learning transformer models. The invention includes attention mechanisms that enable parallel processing of sequential data, significantly improving translation accuracy and text generation capabilities.",
    inventors: ["John Smith", "Sarah Chen", "Michael Johnson"],
    assignee: "Google LLC",
    filingDate: "2021-03-15",
    grantDate: "2023-12-19",
    url: "https://patents.google.com/patent/US11847550"
  },
  {
    id: "11823017",
    patentNumber: "11823017",
    title: "Autonomous vehicle navigation system using real-time sensor fusion",
    abstract: "An autonomous driving system that combines LiDAR, radar, and camera data through advanced sensor fusion algorithms. The system provides 360-degree environmental awareness and predictive path planning for safe navigation in complex urban environments.",
    inventors: ["Emily Rodriguez", "David Kim", "James Wilson"],
    assignee: "Tesla, Inc.",
    filingDate: "2020-08-22",
    grantDate: "2023-11-21",
    url: "https://patents.google.com/patent/US11823017"
  },
  {
    id: "11756684",
    patentNumber: "11756684",
    title: "Blockchain-based decentralized identity verification system",
    abstract: "A distributed ledger technology system for secure identity management. The invention utilizes cryptographic proofs and smart contracts to enable self-sovereign identity verification without centralized authorities, ensuring privacy and security.",
    inventors: ["Alex Turner", "Maria Garcia"],
    assignee: "IBM Corporation",
    filingDate: "2019-11-08",
    grantDate: "2023-09-12",
    url: "https://patents.google.com/patent/US11756684"
  },
  {
    id: "11698432",
    patentNumber: "11698432",
    title: "Quantum computing error correction using topological qubits",
    abstract: "A method for implementing fault-tolerant quantum computation using topological qubit encoding. The invention provides exponentially better error protection compared to conventional approaches, enabling practical quantum advantage for complex calculations.",
    inventors: ["Robert Zhang", "Lisa Anderson", "Kevin O'Brien", "Nina Patel"],
    assignee: "Microsoft Technology Licensing, LLC",
    filingDate: "2020-02-14",
    grantDate: "2023-07-11",
    url: "https://patents.google.com/patent/US11698432"
  },
  {
    id: "11654123",
    patentNumber: "11654123",
    title: "Solar cell with perovskite-silicon tandem structure for enhanced efficiency",
    abstract: "A photovoltaic device combining perovskite and crystalline silicon layers in a tandem configuration. The invention achieves conversion efficiencies exceeding 30% through optimized band gap engineering and light management techniques.",
    inventors: ["Thomas Brown", "Jennifer Lee"],
    assignee: "SunPower Corporation",
    filingDate: "2021-05-03",
    grantDate: "2023-05-23",
    url: "https://patents.google.com/patent/US11654123"
  },
  {
    id: "11612890",
    patentNumber: "11612890",
    title: "Wearable medical device for continuous glucose monitoring",
    abstract: "A non-invasive biosensor system for real-time blood glucose measurement. The device uses optical spectroscopy and machine learning algorithms to provide accurate readings without finger pricks, wirelessly transmitting data to companion applications.",
    inventors: ["Christopher Davis", "Amanda White", "Ryan Taylor"],
    assignee: "Abbott Laboratories",
    filingDate: "2020-09-17",
    grantDate: "2023-03-28",
    url: "https://patents.google.com/patent/US11612890"
  },
  {
    id: "11578234",
    patentNumber: "11578234",
    title: "5G network slicing architecture for industrial IoT applications",
    abstract: "A telecommunications system enabling dynamic network resource allocation through software-defined slicing. The invention provides guaranteed quality of service for mission-critical industrial applications while maximizing spectrum efficiency.",
    inventors: ["Daniel Martinez", "Sophie Williams"],
    assignee: "Qualcomm Incorporated",
    filingDate: "2019-12-20",
    grantDate: "2023-02-14",
    url: "https://patents.google.com/patent/US11578234"
  },
  {
    id: "11534567",
    patentNumber: "11534567",
    title: "CRISPR-based gene therapy delivery system using lipid nanoparticles",
    abstract: "A pharmaceutical composition for targeted gene editing in vivo. The invention combines CRISPR-Cas9 technology with optimized lipid nanoparticle carriers to achieve efficient cellular uptake and precise genome modification with minimal off-target effects.",
    inventors: ["Michelle Thompson", "Andrew Clark", "Jessica Moore", "Brian Hall"],
    assignee: "Moderna, Inc.",
    filingDate: "2021-01-28",
    grantDate: "2022-12-20",
    url: "https://patents.google.com/patent/US11534567"
  },
  {
    id: "11498901",
    patentNumber: "11498901",
    title: "Augmented reality display system with holographic waveguide optics",
    abstract: "An optical system for immersive augmented reality experiences. The invention uses diffractive waveguides to project high-resolution virtual images into the user's field of view while maintaining transparency and a compact form factor suitable for everyday eyewear.",
    inventors: ["Steven Harris", "Laura Nelson"],
    assignee: "Apple Inc.",
    filingDate: "2020-06-11",
    grantDate: "2022-11-15",
    url: "https://patents.google.com/patent/US11498901"
  },
  {
    id: "11456789",
    patentNumber: "11456789",
    title: "Electric vehicle battery thermal management system with phase change materials",
    abstract: "A cooling system for lithium-ion battery packs in electric vehicles. The invention integrates phase change materials with liquid cooling channels to maintain optimal operating temperatures, extending battery life and enabling faster charging rates.",
    inventors: ["Mark Robinson", "Catherine Young", "Paul King"],
    assignee: "Rivian Automotive, LLC",
    filingDate: "2021-07-09",
    grantDate: "2022-09-27",
    url: "https://patents.google.com/patent/US11456789"
  }
];

// Search function using mock data
export async function searchPatents(query: string, page: number = 1, perPage: number = 25): Promise<PatentSearchResult> {
  if (!query.trim()) {
    return { patents: [], total: 0 };
  }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const lowerQuery = query.toLowerCase();
  
  // Filter patents based on query matching title, abstract, or assignee
  const filteredPatents = mockPatents.filter(patent => 
    patent.title.toLowerCase().includes(lowerQuery) ||
    patent.abstract.toLowerCase().includes(lowerQuery) ||
    patent.assignee.toLowerCase().includes(lowerQuery) ||
    patent.inventors.some(inv => inv.toLowerCase().includes(lowerQuery))
  );

  // If no specific match, return all patents (simulating broad search)
  const results = filteredPatents.length > 0 ? filteredPatents : mockPatents;

  return {
    patents: results,
    total: results.length
  };
}

// European Patent Office OPS API (free tier available)
export async function searchEPOPatents(query: string): Promise<PatentSearchResult> {
  // EPO API requires registration, so we'll use a fallback approach
  // For now, we'll combine with USPTO results
  return { patents: [], total: 0 };
}

// WIPO Patent Scope (requires registration)
export async function searchWIPOPatents(query: string): Promise<PatentSearchResult> {
  return { patents: [], total: 0 };
}
