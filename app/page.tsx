'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-serif text-stone-800">Culinary</div>
                    <div className="hidden md:flex space-x-8 text-stone-600">
                        <a href="#menu" className="hover:text-stone-800 transition-colors">
                            Menu
                        </a>
                        <a href="#about" className="hover:text-stone-800 transition-colors">
                            About
                        </a>
                        <a href="#gallery" className="hover:text-stone-800 transition-colors">
                            Gallery
                        </a>
                        <a href="#contact" className="hover:text-stone-800 transition-colors">
                            Contact
                        </a>
                    </div>
                    <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
                        Reserve
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
                                Crafting Taste,
                                <br />
                                <span className="text-amber-400">Curating Experience</span>
                            </h1>
                            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                                Where culinary artistry meets exceptional hospitality. Every dish
                                tells a story, every meal creates a memory.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all transform hover:scale-105">
                                    Explore Menu
                                </button>
                                <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-stone-800 transition-all">
                                    Book Table
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-amber-600 w-80 h-80 rounded-full absolute -top-10 -right-10 opacity-20"></div>
                            <div className="bg-stone-700 w-96 h-96 rounded-2xl shadow-2xl overflow-hidden">
                                <Image
                                    src="/images/001.jpg"
                                    alt="Signature dish"
                                    width={384}
                                    height={384}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kitchen Philosophy */}
            <section className="py-20 bg-stone-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="bg-stone-800 p-12 rounded-2xl text-white">
                            <h2 className="text-4xl font-serif mb-6">Kitchen Philosophy</h2>
                            <p className="text-stone-300 leading-relaxed mb-6">
                                We believe in the transformative power of exceptional cuisine. Our
                                kitchen is where passion meets precision, where traditional
                                techniques dance with modern innovation.
                            </p>
                            <p className="text-stone-300 leading-relaxed">
                                Every ingredient is carefully sourced, every technique refined
                                through years of dedication. We don&apos;t just cook food; we craft
                                experiences that linger long after the last bite.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-serif text-stone-800 mb-4">
                                    Fresh Ingredients
                                </h3>
                                <p className="text-stone-600">
                                    Locally sourced, seasonally inspired ingredients form the
                                    foundation of every dish.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-serif text-stone-800 mb-4">
                                    Artisan Techniques
                                </h3>
                                <p className="text-stone-600">
                                    Time-honored methods combined with contemporary culinary
                                    innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Our Guests Say */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center text-stone-800 mb-16">
                        What Our Guests Say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                text: 'An extraordinary culinary journey that exceeded every expectation. The attention to detail is remarkable.',
                                author: 'Sarah Mitchell',
                                role: 'Food Critic',
                            },
                            {
                                text: 'The perfect blend of ambiance and exceptional cuisine. Every visit feels like a special occasion.',
                                author: 'James Chen',
                                role: 'Regular Guest',
                            },
                            {
                                text: 'Innovative dishes that respect tradition while pushing boundaries. Truly exceptional dining.',
                                author: 'Maria Rodriguez',
                                role: 'Chef',
                            },
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-stone-50 p-8 rounded-xl">
                                <p className="text-stone-700 italic mb-6 leading-relaxed">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <div>
                                    <p className="font-semibold text-stone-800">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-stone-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Dishes Gallery */}
            <section className="py-20 bg-stone-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center mb-16">Signature Creations</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[
                            '002.jpg',
                            '003.jpg',
                            '004.jpg',
                            '005.jpg',
                            '006.jpg',
                            '007.jpg',
                            '014.jpg',
                            '009.jpg',
                            '012.jpg',
                            '011.jpg',
                        ].map((image, index) => (
                            <div
                                key={index}
                                className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg"
                            >
                                <Image
                                    src={`/images/${image}`}
                                    alt={`Signature dish ${index + 1}`}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Categories */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center text-stone-800 mb-16">
                        Our Offerings
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Private Dinner',
                                desc: 'Tailored dining experiences, brought to your home or villa so you can simply enjoy the moment.',
                                image: '021.jpg',
                            },
                            {
                                title: 'Menu Consulting',
                                desc: 'We design menus that tell your story and delight your guests.',
                                image: '023.jpg',
                            },
                            {
                                title: 'Private Classes',
                                desc: 'Personal cooking sessions, hands-on and customized to you.',
                                image: '022.jpg',
                            },
                            {
                                title: 'Shop',
                                desc: 'E-books, favorite tools, and ingredients to elevate your home kitchen.',
                                image: '020.jpg',
                            },
                        ].map((category, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                            >
                                <div className="h-48 overflow-hidden">
                                    <Image
                                        src={`/images/${category.image}`}
                                        alt={category.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-serif text-stone-800 mb-3">
                                        {category.title}
                                    </h3>
                                    <p className="text-stone-600">{category.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-stone-800 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                                    <p className="text-stone-300">
                                        Jln. Tegal Sari No.12 BAdung, Bali
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Reservations</h3>
                                    <p className="text-stone-300">
                                        +62 8214 738 0114
                                        <br />
                                        info@kitchenlab.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-600 p-12 rounded-2xl">
                            <h3 className="text-3xl font-serif mb-6">Reserve Your Table</h3>
                            <p className="mb-8">
                                Experience culinary excellence. Book your table today for an
                                unforgettable dining experience.
                            </p>
                            <button className="bg-white text-stone-800 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition-colors w-full">
                                Make Reservation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-stone-900 text-stone-400 py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="text-3xl font-serif text-white mb-4">Culinary</div>
                    <p className="mb-6">Where every meal is a masterpiece</p>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="hover:text-white transition-colors">
                            Instagram
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Facebook
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Twitter
                        </a>
                    </div>
                    <div className="mt-8 pt-8 border-t border-stone-700">
                        <p>&copy; 2024 Culinary Restaurant. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
