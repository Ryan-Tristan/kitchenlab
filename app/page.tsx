'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50" data-oid="-6ck3t9">
            {/* Navigation */}
            <nav
                className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200"
                data-oid="j8doah9"
            >
                <div
                    className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
                    data-oid="9q_71qg"
                >
                    <div className="text-2xl font-serif text-stone-800" data-oid="7w-o-w4">
                        Culinary
                    </div>
                    <div className="hidden md:flex space-x-8 text-stone-600" data-oid="-hs6x.:">
                        <a
                            href="#menu"
                            className="hover:text-stone-800 transition-colors"
                            data-oid="46hlhoa"
                        >
                            Menu
                        </a>
                        <a
                            href="#about"
                            className="hover:text-stone-800 transition-colors"
                            data-oid="ypc:mxl"
                        >
                            About
                        </a>
                        <a
                            href="#gallery"
                            className="hover:text-stone-800 transition-colors"
                            data-oid="q9y3vz-"
                        >
                            Gallery
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-stone-800 transition-colors"
                            data-oid="owc0cc2"
                        >
                            Contact
                        </a>
                    </div>
                    <button
                        className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"
                        data-oid="o.-8wah"
                    >
                        Reserve
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="pt-20 pb-16 bg-gradient-to-br from-stone-800 to-stone-900 text-white"
                data-oid="mh:15q8"
            >
                <div className="max-w-7xl mx-auto px-6 py-20" data-oid="0zu6wgr">
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="5fzs6d0">
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            data-oid="a08987q"
                        >
                            <h1
                                className="text-5xl md:text-6xl font-serif leading-tight mb-6"
                                data-oid="vwoj8rb"
                            >
                                Crafting Taste,
                                <br data-oid="3h16hcb" />
                                <span className="text-amber-400" data-oid="9jc_qec">
                                    Curating Experience
                                </span>
                            </h1>
                            <p
                                className="text-xl text-stone-300 mb-8 leading-relaxed"
                                data-oid="q7:50l6"
                            >
                                Where culinary artistry meets exceptional hospitality. Every dish
                                tells a story, every meal creates a memory.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="420v_.9">
                                <button
                                    className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all transform hover:scale-105"
                                    data-oid="ei_wec3"
                                >
                                    Explore Menu
                                </button>
                                <button
                                    className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-stone-800 transition-all"
                                    data-oid="pw.aehv"
                                >
                                    Book Table
                                </button>
                            </div>
                        </div>
                        <div className="relative" data-oid="qkkorws">
                            <div
                                className="bg-amber-600 w-80 h-80 rounded-full absolute -top-10 -right-10 opacity-20"
                                data-oid="2j8ydv6"
                            ></div>
                            <div
                                className="bg-stone-700 w-96 h-96 rounded-2xl shadow-2xl overflow-hidden"
                                data-oid="tl7.0.v"
                            >
                                <div
                                    className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center"
                                    data-oid="m3tbhwp"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kitchen Philosophy */}
            <section className="py-20 bg-stone-100" data-oid="17zkj6g">
                <div className="max-w-7xl mx-auto px-6" data-oid="dtwzcv0">
                    <div className="grid md:grid-cols-2 gap-16 items-center" data-oid="ohej0bk">
                        <div
                            className="bg-stone-800 p-12 rounded-2xl text-white"
                            data-oid="zzk9y24"
                        >
                            <h2 className="text-4xl font-serif mb-6" data-oid="-hbnrws">
                                Kitchen Philosophy
                            </h2>
                            <p className="text-stone-300 leading-relaxed mb-6" data-oid="ikldi-_">
                                We believe in the transformative power of exceptional cuisine. Our
                                kitchen is where passion meets precision, where traditional
                                techniques dance with modern innovation.
                            </p>
                            <p className="text-stone-300 leading-relaxed" data-oid="an2b22.">
                                Every ingredient is carefully sourced, every technique refined
                                through years of dedication. We don't just cook food; we craft
                                experiences that linger long after the last bite.
                            </p>
                        </div>
                        <div className="space-y-6" data-oid="h1h6a2f">
                            <div className="bg-white p-8 rounded-xl shadow-lg" data-oid="oi_sc_0">
                                <h3
                                    className="text-2xl font-serif text-stone-800 mb-4"
                                    data-oid="-::5lbi"
                                >
                                    Fresh Ingredients
                                </h3>
                                <p className="text-stone-600" data-oid="0rtqtdj">
                                    Locally sourced, seasonally inspired ingredients form the
                                    foundation of every dish.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg" data-oid="156:2ol">
                                <h3
                                    className="text-2xl font-serif text-stone-800 mb-4"
                                    data-oid="8:sj:qx"
                                >
                                    Artisan Techniques
                                </h3>
                                <p className="text-stone-600" data-oid="m_m-114">
                                    Time-honored methods combined with contemporary culinary
                                    innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Our Guests Say */}
            <section className="py-20 bg-white" data-oid="fisntl8">
                <div className="max-w-7xl mx-auto px-6" data-oid="b5mcu3u">
                    <h2
                        className="text-4xl font-serif text-center text-stone-800 mb-16"
                        data-oid="1aw7bi:"
                    >
                        What Our Guests Say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8" data-oid="g9v3jge">
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
                                data-oid="poxr00p"
                            >
                                <p
                                    className="text-stone-700 italic mb-6 leading-relaxed"
                                    data-oid=":i_bm0m"
                                >
                                    "{testimonial.text}"
                                </p>
                                <div data-oid="qj5jwj8">
                                    <p className="font-semibold text-stone-800" data-oid="wxs6ga7">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-stone-500 text-sm" data-oid="-3d3byh">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Dishes Gallery */}
            <section className="py-20 bg-stone-900 text-white" data-oid="j5ep-wa">
                <div className="max-w-7xl mx-auto px-6" data-oid="pfdcg33">
                    <h2 className="text-4xl font-serif text-center mb-16" data-oid="0p4fy4i">
                        Signature Creations
                    </h2>
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
                        data-oid="t2hx4eg"
                    >
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className="aspect-square bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                                data-oid="0i8p34u"
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Categories */}
            <section className="py-20 bg-stone-50" data-oid="xq9a0e7">
                <div className="max-w-7xl mx-auto px-6" data-oid="e.q.5jz">
                    <h2
                        className="text-4xl font-serif text-center text-stone-800 mb-16"
                        data-oid="o4jwwhq"
                    >
                        Our Offerings
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8" data-oid="9:f9v6l">
                        {[
                            { title: 'Appetizers', desc: 'Artfully crafted starters', icon: '🥗' },
                            {
                                title: 'Main Courses',
                                desc: 'Signature dishes & classics',
                                icon: '🥘',
                            },
                            { title: 'Desserts', desc: 'Sweet endings to remember', icon: '🍰' },
                            { title: 'Wine Selection', desc: 'Curated pairings', icon: '🍷' },
                        ].map((category, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                                data-oid="dxpumzg"
                            >
                                <h3
                                    className="text-2xl font-serif text-stone-800 mb-3"
                                    data-oid="x5ruoly"
                                    key="olk-5aOz"
                                >
                                    {category.title}
                                </h3>
                                <p className="text-stone-600" data-oid="9yg37g0" key="olk-9VZn">
                                    {category.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-stone-800 text-white" data-oid="eqk:g:r">
                <div className="max-w-7xl mx-auto px-6" data-oid="uxpn1zo">
                    <div className="grid md:grid-cols-2 gap-16 items-center" data-oid="39hovge">
                        <div data-oid="iemlefk">
                            <h2 className="text-4xl font-serif mb-8" data-oid="u4ny_-d">
                                Contact Information
                            </h2>
                            <div className="space-y-6" data-oid="l0:7obz">
                                <div data-oid="2.ggd2q">
                                    <h3 className="text-xl font-semibold mb-2" data-oid="cwnxby5">
                                        Location
                                    </h3>
                                    <p className="text-stone-300" data-oid="l:dn1dr">
                                        123 Culinary Street
                                        <br data-oid="b4gul.y" />
                                        Downtown District, City 12345
                                    </p>
                                </div>
                                <div data-oid="-gmqt75">
                                    <h3 className="text-xl font-semibold mb-2" data-oid="9gk8p2:">
                                        Reservations
                                    </h3>
                                    <p className="text-stone-300" data-oid="kzlwnye">
                                        +1 (555) 123-4567
                                        <br data-oid=":qtmz9t" />
                                        reservations@culinary.com
                                    </p>
                                </div>
                                <div data-oid="7heu-wo">
                                    <h3 className="text-xl font-semibold mb-2" data-oid="m-1bf7v">
                                        Hours
                                    </h3>
                                    <p className="text-stone-300" data-oid="u7izkcf">
                                        Tuesday - Sunday: 5:00 PM - 11:00 PM
                                        <br data-oid="72sd45e" />
                                        Closed Mondays
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-600 p-12 rounded-2xl" data-oid="_lwg6mo">
                            <h3 className="text-3xl font-serif mb-6" data-oid="30xftc6">
                                Reserve Your Table
                            </h3>
                            <p className="mb-8" data-oid="jny-yz4">
                                Experience culinary excellence. Book your table today for an
                                unforgettable dining experience.
                            </p>
                            <button
                                className="bg-white text-stone-800 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition-colors w-full"
                                data-oid="71yujh4"
                            >
                                Make Reservation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-stone-900 text-stone-400 py-12" data-oid="ahwwx14">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="igx_oh7">
                    <div className="text-3xl font-serif text-white mb-4" data-oid="u8j70zj">
                        Culinary
                    </div>
                    <p className="mb-6" data-oid="ob2jtob">
                        Where every meal is a masterpiece
                    </p>
                    <div className="flex justify-center space-x-6" data-oid="5ff_m1l">
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                            data-oid="qp:uq96"
                        >
                            Instagram
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                            data-oid="5-5iboo"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                            data-oid="l2jjn30"
                        >
                            Twitter
                        </a>
                    </div>
                    <div className="mt-8 pt-8 border-t border-stone-700" data-oid="z8-73m.">
                        <p data-oid="4n8c-c0">
                            &copy; 2024 Culinary Restaurant. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
