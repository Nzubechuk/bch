import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Chioma Adebayo',
        relation: 'Daughter of Resident',
        content: "The care my mother receives at Bright Care Homes is exceptional. The staff treats her like family, and I've seen her bloom since moving in.",
        rating: 5
    },
    {
        name: 'Tunde Okafor',
        relation: 'Son of Resident',
        content: "We looked at many facilities, but none felt as warm and welcoming as this one. The gardens are beautiful and the activities keep my dad engaged.",
        rating: 5
    },
    {
        name: 'Ngozi Eze',
        relation: 'Niece of Resident',
        content: "Professional, clean, and incredibly compassionate. The nursing staff goes above and beyond to ensure comfort and dignity for everyone.",
        rating: 5
    }
];

export const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Families Say</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hearing from the families we serve is our greatest honor. Here are some of their experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-8 right-8 text-primary/20" size={48} />

                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-700 italic mb-6 relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-primary font-medium">{testimonial.relation}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
