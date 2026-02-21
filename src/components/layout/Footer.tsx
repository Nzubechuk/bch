import React from 'react';
import { Link } from 'react-scroll';
import { Sun, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-primary p-2 rounded-lg text-white">
                                <Sun size={24} />
                            </div>
                            <span className="text-xl font-bold">Bright Care Homes</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Providing compassionate, professional care for your loved ones in a warm, home-like environment.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item.toLowerCase()}
                                        smooth={true}
                                        duration={500}
                                        className="text-gray-400 hover:text-primary cursor-pointer transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Our Services</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-400">Assisted Living</li>
                            <li className="text-gray-400">Memory Care</li>
                            <li className="text-gray-400">Respite Care</li>
                            <li className="text-gray-400">Skilled Nursing</li>
                            <li className="text-gray-400">Rehabilitation</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="shrink-0 text-primary" size={20} />
                                <span>Plot 1234, Cadastral Zone, Maitama, Abuja, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="shrink-0 text-primary" size={20} />
                                <span>+2349079080606</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="shrink-0 text-primary" size={20} />
                                <span>contact@brightcarehomesng.online</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Bright Care Homes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
