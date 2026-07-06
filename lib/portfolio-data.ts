export const profile = {
  firstName: "Akshay Krishna Varma",
  lastName: "Buddharaju",
  shortName: "AKSHAY.",
  tagline: "AI/ML Engineer | Generative AI | LLMs | RAG | Computer Vision",
  email: "akvbuddharaju@gmail.com",
  phone: "+1 918 815 8169",
  resumeUrl: "/Akshay_Krishna_Varma_Buddharaju_Resume.pdf",
  heroImage: "/akshay-hero.png",
  location: "United States",
  availability: "Available for AI/ML Opportunities",
  roles: [
    "AI/ML Engineer",
    "Generative AI Developer",
    "LLM & RAG Engineer",
    "Machine Learning Engineer",
    "Computer Vision Engineer",
  ],
  heroDescription:
    "I build intelligent AI systems that transform complex data into scalable products. My work spans Generative AI, RAG systems, LLM optimization, computer vision, graph neural networks, and production ML infrastructure.",
  floatingLabels: ["PyTorch", "LLMs", "RAG", "FastAPI", "AWS", "GCP"],
} as const

export const social = {
  linkedin: "https://linkedin.com/in/abuddhar",
  github: "https://github.com/AKSHAYKRISHNAVARMA",
  email: "mailto:akvbuddharaju@gmail.com",
} as const

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const

export const metrics = [
  { value: 85, suffix: "%", label: "Retrieval Efficiency Improvement" },
  { value: 50, suffix: "%", label: "LLM Latency Reduction" },
  { value: 73, suffix: "%", label: "Vulnerability Risk Reduction" },
  { value: 95, suffix: "%", label: "NLP Classification Accuracy" },
  { value: 92.5, suffix: "%", label: "Object Detection mAP@0.5" },
] as const

export const about = {
  heading: "Building AI Systems That Work Beyond the Notebook",
  paragraphs: [
    "I'm an AI/ML Engineer focused on designing intelligent systems that move from research ideas to practical deployment. My experience includes Generative AI, retrieval-augmented generation, LLM optimization, computer vision, graph neural networks, NLP, MCP-based AI tooling, and production ML infrastructure.",
    "I enjoy solving problems across the complete machine learning lifecycle — from data ingestion and experimentation to API development, model deployment, monitoring, and optimization.",
  ],
  orbit: ["LLM", "RAG", "NLP", "CV", "GNN", "MLOps", "Cloud"],
} as const

export type Project = {
  title: string
  org: string
  description: string
  impact: string[]
  tech: string[]
  flow: string[]
}

export const projects: Project[] = [
  {
    title: "Video RAG Intelligence System",
    org: "The Home Depot — CoreAI",
    description:
      "Designed a Video RAG system for large-scale knowledge retrieval from long-form video content.",
    impact: [
      "50% lower LLM inference latency",
      "85% improvement in retrieval efficiency",
      "100+ long-form videos processed",
      "Parallel chunk-based inference pipeline",
    ],
    tech: ["PyTorch", "LLMs", "RAG", "Embeddings", "Vector Search", "Python", "Parallel Processing"],
    flow: ["Video", "Chunking", "Embeddings", "Vector Search", "LLM", "Answer"],
  },
  {
    title: "LLM Code Analysis & Automated Remediation",
    org: "Decentralized Science Lab",
    description:
      "Built an LLM-powered pipeline to analyze software vulnerabilities and generate automated remediation recommendations.",
    impact: [
      "73% reduction in vulnerability risk scores",
      "50 codebases analyzed",
      "1,400-sample evaluation dataset",
      "Automated Airflow data pipelines",
    ],
    tech: ["LLMs", "Python", "Apache Airflow", "Code Analysis", "Prompt Engineering", "Data Pipelines"],
    flow: ["Codebase", "LLM Analysis", "Risk Scoring", "Remediation", "Re-score"],
  },
  {
    title: "Generative Surgical Report Intelligence",
    org: "Kennesaw State University",
    description:
      "Developed a Generative AI model combining Graph Neural Networks and BERT to produce robotic surgical reports.",
    impact: [
      "ROUGE score: 0.83",
      "28.6% improvement over baseline",
      "SimGNN integration",
      "Structural alignment optimization",
    ],
    tech: ["PyTorch", "BERT", "Graph Neural Networks", "SimGNN", "NLP", "Generative AI"],
    flow: ["Scene Graph", "GNN", "BERT", "Decoder", "Report"],
  },
  {
    title: "MCP-Powered Ad Analytics Automation",
    org: "Sports Media Inc.",
    description:
      "Built a Python-based MCP server that automates campaign-data ingestion, KPI aggregation, and LLM-generated advertising insights.",
    impact: [
      "15+ advertising metrics",
      "70% reduction in manual reporting effort",
      "Automated weekly reporting workflow",
    ],
    tech: ["Python", "MCP", "LLMs", "Analytics Automation", "FastAPI", "Data Pipelines"],
    flow: ["Campaign Data", "MCP Server", "KPI Engine", "LLM Insights", "Report"],
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    role: "Machine Learning Engineer",
    company: "Sports Media Inc.",
    period: "Feb 2026 – Present",
    achievements: [
      "Built a Python-based MCP server providing developer-facing tooling that automates weekly ad-analytics reporting through campaign-data ingestion, KPI aggregation, and LLM-generated insights.",
      "Implemented metrics and automation across 15+ ad-performance metrics, reducing manual reporting effort by 70% by eliminating recurring engineering toil.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Decentralized Science Lab",
    period: "Aug 2025 – Dec 2025",
    achievements: [
      "Reduced vulnerability risk scores by 73% by building an LLM-based code-analysis and automated-remediation pipeline that analyzed 50 codebases using multi-metric risk re-scoring.",
      "Built automated data ingestion and preparation pipelines with Apache Airflow, curating a 1,400-sample dataset to support ML training, evaluation, and experimentation.",
    ],
  },
  {
    role: "Software Engineer Intern — CoreAI",
    company: "The Home Depot",
    period: "May 2025 – Jul 2025",
    achievements: [
      "Designed a video RAG system for Magic Apron and reduced LLM inference latency by 50% through profiling and parallel chunk-based processing of large video inputs.",
      "Improved retrieval efficiency by 85% using optimized embedding generation and similarity-search strategies within a RAG-based knowledge-retrieval system.",
      "Built chunk-level inference pipelines that processed 100+ long-form videos via batch/parallel processing, achieving 100% input coverage.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Kennesaw State University",
    period: "Aug 2024 – Apr 2025",
    achievements: [
      "Developed a GNN + BERT Generative AI model in PyTorch for robotic surgical report generation, evaluated at a ROUGE score of 0.81 — a 28.6% improvement over baseline.",
      "Improved report quality from ROUGE 0.81 to 0.83 (+2.47%) by integrating SimGNN with template-based training for stronger structural alignment.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Vidhi Labs",
    period: "Nov 2023 – Dec 2023",
    achievements: [
      "Developed and fine-tuned PyTorch CNN ensembles (ResNet, VGG19, InceptionV3), improving F1-score by 5% for traffic-violation detection under low-latency inference constraints.",
      "Trained a YOLOv5 object-detection model achieving 92.5% mAP@0.5 for vehicle and sign recognition using optimized computer-vision pipelines.",
      "Reduced inference latency by 55% (detection) and 45% (classification) through INT8 quantization and structured pruning.",
    ],
  },
  {
    role: "Software Engineer",
    company: "INV Technologies",
    period: "Jan 2023 – Oct 2023",
    achievements: [
      "Developed a one-shot face-recognition model (90% accuracy) and deployed it end-to-end on AWS SageMaker with S3-based data storage.",
      "Built a Seq2Seq neural network for fake-news detection, achieving 95% classification accuracy with sequence-modeling techniques.",
    ],
  },
]

export const skillGroups = [
  {
    category: "AI & Machine Learning",
    skills: [
      "Generative AI",
      "Large Language Models",
      "RAG",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Graph Neural Networks",
      "XGBoost",
      "Scikit-learn",
    ],
  },
  {
    category: "Frameworks",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "FastAPI", "OpenCV", "Pandas", "NumPy"],
  },
  {
    category: "MLOps & Infrastructure",
    skills: ["Docker", "Kubernetes", "Git", "GitHub Actions", "MLflow", "Apache Airflow", "PyTest", "Linux"],
  },
  {
    category: "Cloud & Data",
    skills: ["AWS SageMaker", "AWS Lambda", "Amazon S3", "GCP Vertex AI", "PySpark", "MySQL", "MongoDB", "Neo4j"],
  },
  {
    category: "Languages",
    skills: ["Python", "SQL", "C++", "Java"],
  },
] as const

export const education = {
  degree: "Master of Science in Computer Science",
  school: "Kennesaw State University",
  concentration: "Data Science",
  period: "Aug 2024 – Dec 2025",
} as const
