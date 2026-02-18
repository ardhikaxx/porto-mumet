import {
  FiGlobe,
  FiSmartphone,
  FiCpu,
  FiLayout,
  FiSettings,
} from "react-icons/fi";

export const services = [
  {
    id: "website",
    name: "Jasa Website",
    description: "Pembuatan website company profile, landing page, blog, atau web aplikasi custom",
    icon: FiGlobe,
  },
  {
    id: "mobile",
    name: "Jasa Aplikasi Mobile",
    description: "Pengembangan aplikasi iOS dan Android dengan teknologi terbaru",
    icon: FiSmartphone,
  },
  {
    id: "iot",
    name: "Jasa Sistem IoT",
    description: "Sistem Internet of Things untuk smart home, industri, dan monitoring",
    icon: FiCpu,
  },
  {
    id: "ml",
    name: "Jasa Machine Learning",
    description: "Pembuatan model prediksi, klasifikasi, NLP, dan analitik berbasis data",
    icon: FiCpu,
  },
  {
    id: "uiux",
    name: "Jasa Design UI/UX",
    description: "Desain interface dan experience yang user-friendly dan modern",
    icon: FiLayout,
  },
  {
    id: "other",
    name: "Jasa Lainnya (Custom)",
    description: "Jika kamu bingung atau proyekmu tidak tersedia pada pilihan diatas",
    icon: FiSettings,
  },
];
