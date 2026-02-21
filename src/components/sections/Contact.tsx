import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Simulate network request
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Randomly simulate success (or you can force it to always succeed)
            // For now, let's assume success
            console.log('Form submitted:', formState);
            setSubmitStatus('success');
            setFormState({ name: '', email: '', phone: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            console.error('Submission failed', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                        <p className="text-gray-600 mb-8 max-w-lg">
                            We understand that choosing a care home is a significant decision. We're here to answer your questions and schedule a personal tour of our facility.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                                    <p className="text-gray-600">Plot 1234, Cadastral Zone, Maitama, Abuja, Nigeria</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                                    <p className="text-gray-600">+2349079080606</p>
                                    <p className="text-sm text-gray-500">Available 24/7 for urgent inquiries</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                                    <p className="text-gray-600">contact@brightcarehomesng.online</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                                Thank you! Your message has been sent successfully. We will get back to you shortly.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                                Something went wrong. Please try again later or call us directly.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="+2349079080606"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full relative"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="opacity-0">Send Message</span>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
