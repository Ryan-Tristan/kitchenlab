'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50" data-oid="43g1uiq">
            {/* Navigation */}
            <nav
                className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200"
                data-oid="xmys5f2"
            >
                <div
                    className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
                    data-oid="16-66wt"
                >
                    <div className="text-2xl font-serif text-stone-800" data-oid="a1j:it-">
                        Culinary
                    </div>
                    <div className="hidden md:flex space-x-8 text-stone-600" data-oid="d04drt1">
                        <a
                            href="#menu"
                            className="hover:text-stone-800 transition-colors"
                            data-oid="75hu-m8"
                        >
                            Menu
                        </a>
                        <a
                            href="#about"
                            className="hover:text-stone-800 transition-colors"
                            data-oid="02.xquo"
                        >
                            About
                        </a>
                        <a
                            href="#gallery"
                            className="hover:text-stone-800 transition-colors"
                            data-oid="cilq-c8"
                        >
                            Gallery
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-stone-800 transition-colors"
                            data-oid="dd821a1"
                        >
                            Contact
                        </a>
                    </div>
                    <button
                        className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"
                        data-oid="m8nxxf-"
                    >
                        Reserve
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="pt-20 pb-16 bg-gradient-to-br from-stone-800 to-stone-900 text-white"
                data-oid="gfynyg8"
            >
                <div className="max-w-7xl mx-auto px-6 py-20" data-oid="n_hh449">
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid=".7:ktmk">
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            data-oid="bdgi.lq"
                        >
                            <h1
                                className="text-5xl md:text-6xl font-serif leading-tight mb-6"
                                data-oid="oe7mivx"
                            >
                                Crafting Taste,
                                <br data-oid="8_jss7z" />
                                <span className="text-amber-400" data-oid="0nn9pmw">
                                    Curating Experience
                                </span>
                            </h1>
                            <p
                                className="text-xl text-stone-300 mb-8 leading-relaxed"
                                data-oid="ykbwufw"
                            >
                                Where culinary artistry meets exceptional hospitality. Every dish
                                tells a story, every meal creates a memory.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid=":_nrd7x">
                                <button
                                    className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all transform hover:scale-105"
                                    data-oid="tuz8aw:"
                                >
                                    Explore Menu
                                </button>
                                <button
                                    className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-stone-800 transition-all"
                                    data-oid="h7p.96d"
                                >
                                    Book Table
                                </button>
                            </div>
                        </div>
                        <div className="relative" data-oid="ouq42ju">
                            <div
                                className="bg-amber-600 w-80 h-80 rounded-full absolute -top-10 -right-10 opacity-20"
                                data-oid="zv0cz44"
                            ></div>
                            <div
                                className="bg-stone-700 w-96 h-96 rounded-2xl shadow-2xl overflow-hidden"
                                data-oid=".6jz4bk"
                            >
                                <Image
                                    src="/images/001.jpg"
                                    alt="Signature dish"
                                    width={384}
                                    height={384}
                                    className="w-full h-full object-cover"
                                    data-oid="ilvigqk"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kitchen Philosophy */}
            <section className="py-20 bg-stone-100" data-oid="l:ru_fs">
                <div className="max-w-7xl mx-auto px-6" data-oid="-fhth4g">
                    <div className="grid md:grid-cols-2 gap-16 items-center" data-oid="f6zbyqr">
                        <div
                            className="bg-stone-800 p-12 rounded-2xl text-white"
                            data-oid="zy-w27s"
                        >
                            <h2 className="text-4xl font-serif mb-6" data-oid="qf2xc:3">
                                Kitchen Philosophy
                            </h2>
                            <p className="text-stone-300 leading-relaxed mb-6" data-oid="sxv726q">
                                We believe in the transformative power of exceptional cuisine. Our
                                kitchen is where passion meets precision, where traditional
                                techniques dance with modern innovation.
                            </p>
                            <p className="text-stone-300 leading-relaxed" data-oid="8inbswo">
                                Every ingredient is carefully sourced, every technique refined
                                through years of dedication. We don't just cook food; we craft
                                experiences that linger long after the last bite.
                            </p>
                        </div>
                        <div className="space-y-6" data-oid="pz5qrra">
                            <div className="bg-white p-8 rounded-xl shadow-lg" data-oid="lqj35fh">
                                <h3
                                    className="text-2xl font-serif text-stone-800 mb-4"
                                    data-oid="pt3rywc"
                                >
                                    Fresh Ingredients
                                </h3>
                                <p className="text-stone-600" data-oid="4bw37te">
                                    Locally sourced, seasonally inspired ingredients form the
                                    foundation of every dish.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg" data-oid="a_aprlf">
                                <h3
                                    className="text-2xl font-serif text-stone-800 mb-4"
                                    data-oid="v7x8hml"
                                >
                                    Artisan Techniques
                                </h3>
                                <p className="text-stone-600" data-oid="jp004cu">
                                    Time-honored methods combined with contemporary culinary
                                    innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Our Guests Say */}
            <section className="py-20 bg-white" data-oid="7s39t69">
                <div className="max-w-7xl mx-auto px-6" data-oid="tzbaz20">
                    <h2
                        className="text-4xl font-serif text-center text-stone-800 mb-16"
                        data-oid="umnwd96"
                    >
                        What Our Guests Say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8" data-oid="s2bae.3">
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
                            <div
                                key={index}
                                className="bg-stone-50 p-8 rounded-xl"
                                data-oid="xzb3es9"
                            >
                                <p
                                    className="text-stone-700 italic mb-6 leading-relaxed"
                                    data-oid="-muv2iu"
                                >
                                    "{testimonial.text}"
                                </p>
                                <div data-oid="6dp3avp">
                                    <p className="font-semibold text-stone-800" data-oid="2r0xbe7">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-stone-500 text-sm" data-oid="cbb0b82">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Dishes Gallery */}
            <section className="py-20 bg-stone-900 text-white" data-oid="mh4.4yr">
                <div className="max-w-7xl mx-auto px-6" data-oid="ix6rs5_">
                    <h2 className="text-4xl font-serif text-center mb-16" data-oid="sey3q-i">
                        Signature Creations
                    </h2>
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
                        data-oid="4j:0gwn"
                    >
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
                                data-oid="wd-:egr"
                            >
                                <Image
                                    src={`/images/${image}`}
                                    alt={`Signature dish ${index + 1}`}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover"
                                    data-oid="csp1f_y"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Categories */}
            <section className="py-20 bg-stone-50" data-oid="su.qsdv">
                <div className="max-w-7xl mx-auto px-6" data-oid="8qf7u6s">
                    <h2
                        className="text-4xl font-serif text-center text-stone-800 mb-16"
                        data-oid="kgsii:4"
                    >
                        Our Offerings
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8" data-oid="7xswks7">
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
                                data-oid="7ceg26w"
                            >
                                <div className="h-48 overflow-hidden" data-oid="es.t.r3">
                                    <Image
                                        src={`/images/${category.image}`}
                                        alt={category.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                                        data-oid="c56agpx"
                                    />
                                </div>
                                <div className="p-6 text-center" data-oid="jxd8f8z">
                                    <h3
                                        className="text-2xl font-serif text-stone-800 mb-3"
                                        data-oid=".ycfrem"
                                    >
                                        {category.title}
                                    </h3>
                                    <p className="text-stone-600" data-oid="fyz36my">
                                        {category.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-stone-800 text-white" data-oid="_5gcd2m">
                <div className="max-w-7xl mx-auto px-6" data-oid="l-3hu.y">
                    <div className="grid md:grid-cols-2 gap-16 items-center" data-oid="1dqudx.">
                        <div data-oid="22g4dr0">
                            <h2 className="text-4xl font-serif mb-8" data-oid="ck9kmhd">
                                Contact Information
                            </h2>
                            <div className="space-y-6" data-oid="ts_ljue">
                                <div data-oid="vp4t4nq">
                                    <h3 className="text-xl font-semibold mb-2" data-oid="kv2zc2v">
                                        Location
                                    </h3>
                                    <p className="text-stone-300" data-oid=":cqeli5">
                                        Jln. Tegal Sari No.12 BAdung, Bali
                                    </p>
                                </div>
                                <div data-oid="n1.1m8r">
                                    <h3 className="text-xl font-semibold mb-2" data-oid=":oit6s5">
                                        Reservations
                                    </h3>
                                    <p className="text-stone-300" data-oid="wtwe4ka">
                                        +62 8214 738 0114
                                        <br data-oid="igsklgw" />
                                        info@kitchenlab.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-600 p-12 rounded-2xl" data-oid=".e4f-va">
                            <h3 className="text-3xl font-serif mb-6" data-oid="fc66w4l">
                                Reserve Your Table
                            </h3>
                            <p className="mb-8" data-oid="h.tmmd-">
                                Experience culinary excellence. Book your table today for an
                                unforgettable dining experience.
                            </p>
                            <button
                                className="bg-white text-stone-800 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition-colors w-full"
                                data-oid="_ng-igb"
                            >
                                Make Reservation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-stone-900 text-stone-400 py-12" data-oid="knqrjko">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="bd-lgb9">
                    <div className="text-3xl font-serif text-white mb-4" data-oid="wt27_a2">
                        Culinary
                    </div>
                    <p className="mb-6" data-oid="4epdazz">
                        Where every meal is a masterpiece
                    </p>
                    <div className="flex justify-center space-x-6" data-oid="sji9mn8">
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                            data-oid="697ipzq"
                        >
                            Instagram
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                            data-oid="wz-a8:z"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                            data-oid="2zf6i3e"
                        >
                            Twitter
                        </a>
                    </div>
                    <div className="mt-8 pt-8 border-t border-stone-700" data-oid="hs10dd-">
                        <p data-oid="sgkl-i8">
                            &copy; 2024 Culinary Restaurant. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
