"use client";

import { IconType } from "react-icons";

interface Service {
  id: string;
  name: string;
  description: string;
  icon: IconType;
}

export default function ServiceIcons({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-24 px-4 bg-gray-50 dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Layanan <span className="text-[#c41e2e]">Kami</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-white dark:bg-[#171717] rounded-2xl p-8 border border-gray-100 dark:border-[#262626]">
                <IconComponent className="w-8 h-8 text-[#c41e2e] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
