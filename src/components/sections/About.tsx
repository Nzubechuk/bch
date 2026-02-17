import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Award } from 'lucide-react';

import aboutImage from '../../assets/about.jpg';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Dedicated to Dignity and Comfort</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            At Bright Care Homes, we believe that aging is a privilege. Our mission is to provide a safe, nurturing environment where every resident is treated with the utmost respect and love.
                        </p>
                        <p className="text-gray-600 mb-8">
                            Located in the heart of Abuja, our facility combines state-of-the-art medical support with the warmth of a traditional Nigerian family home. We celebrate the rich life stories of our residents and support them in living their golden years to the fullest.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <Shield className="text-primary" size={24} />
                                <span className="font-medium text-gray-700">24/7 Security</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Heart className="text-primary" size={24} />
                                <span className="font-medium text-gray-700">Compassionate Staff</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="text-primary" size={24} />
                                <span className="font-medium text-gray-700">Certified Care</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={aboutImage}
                                alt="Nigerian medical professional caring for patient"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary max-w-xs hidden md:block">
                            <p className="text-gray-800 italic">"A place where my mother found new friends and regained her smile."</p>
                            <p className="text-primary font-bold mt-2">- The Adebayo Family</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
