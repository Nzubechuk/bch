import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, Users, Activity, Clock, Utensils } from 'lucide-react';

const services = [
    {
        icon: Home,
        title: 'Assisted Living',
        description: 'Personalized support with daily activities while maintaining independence and dignity.'
    },
    {
        icon: Activity,
        title: 'Skilled Nursing',
        description: '24/7 professional medical care and monitoring for residents with complex health needs.'
    },
    {
        icon: Users,
        title: 'Memory Care',
        description: 'Specialized programs and secure environments for those living with Alzheimer’s and dementia.'
    },
    {
        icon: Heart,
        title: 'Respite Care',
        description: 'Short-term stays providing a safe, welcoming environment for temporary needs.'
    },
    {
        icon: Utensils,
        title: 'Nutritious Dining',
        description: 'Chef-prepared meals tailored to dietary needs, served in our elegant dining room.'
    },
    {
        icon: Clock,
        title: '24/7 Monitoring',
        description: 'Round-the-clock security and emergency response systems for complete peace of mind.'
    }
];

export const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We offer a comprehensive range of care options designed to meet the unique needs of every resident.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
