"use client";
import { useState, useEffect } from 'react';

// ==========================================
// 1. DATA LAYOUT (Structured Clinical Blogs)
// ==========================================
class HarvardFitnessContent {
    constructor() {
        this.introduction = "Physical activity is one of the most powerful tools for optimizing human health. According to Harvard Health publishing, structured exercise regulates blood pressure, sharpens cognitive function, and optimizes metabolic performance.";
        this.stats = [
            { label: "Active Members", value: "12,400+" },
            { label: "Certified Coaches", value: "38" },
            { label: "Avg. Member Rating", value: "4.9 / 5" },
            { label: "Plans Delivered", value: "50,000+" }
        ];
        this.services = [
            {
                id: "s1",
                code: "TRN",
                title: "Elite Personal Trainers",
                desc: "1-on-1 coaching mapped to your exact biometric profile and goals.",
                detail: "4 specialists on roster — modeling, longevity, powerlifting & metabolic recovery.",
                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop",
                page: "exercise",
                cta: "Meet the coaches",
                badge: null
            },
            {
                id: "s2",
                code: "DTE",
                title: "Precision Diet Plans",
                desc: "Targeted caloric thresholds and macro ratios, built from your BMI.",
                detail: "Run the 30-second calculator and get a matched food list instantly.",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=640&q=80",
                page: "diets",
                cta: "Calculate my intake",
                badge: null
            },
            {
                id: "s3",
                code: "SUP",
                title: "Tested Supplements",
                desc: "Clinical-grade compounds, screened for purity and accurate dosage.",
                detail: "Catalogue is in final review — join the list to get first access.",
                image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=640&q=80",
                page: "signup",
                cta: "Join the waitlist",
                badge: "Coming Soon"
            }
        ];
        this.facts = {
            habits: [
                { id: "h1", code: "SLP", stat: "7–9 hrs", text: "Consistent sleep architecture optimizes human growth hormone release and muscle recovery." },
                { id: "h2", code: "ACT", stat: "Every 30 min", text: "A brief 5-minute walking break after sitting for 30 minutes mitigates arterial stiffness." },
                { id: "h3", code: "HYD", stat: "Daily", text: "Sustained hydration directly regulates metabolic throughput and neuromuscular execution velocity." },
                { id: "h4", code: "LGT", stat: "AM", text: "Early morning sunlight exposure anchors circadian rhythms, optimizing nighttime melatonin production." },
                { id: "h5", code: "TRK", stat: "+40%", text: "Tracking daily progress increases long-term training consistency metrics by up to 40%." }
            ],
            diets: [
                { id: "d1", code: "PRT", stat: "1.6–2.2g/kg", text: "A protein threshold per kilogram of total lean mass is vital to preserve muscle structure." },
                { id: "d2", code: "FBR", stat: "35g/day", text: "Consuming complex micronutrient-dense fibers regulates glucose levels, flattening insulin spikes." },
                { id: "d3", code: "OMG", stat: "Omega-3", text: "Essential fatty acids reduce system-wide cellular inflammation and optimize joint recovery." },
                { id: "d4", code: "TRM", stat: "30%", text: "Thermogenesis from protein digestion burns up to 30% of its own caloric energy value during breakdown." },
                { id: "d5", code: "TME", stat: "Time-restricted", text: "Time-restricted eating windows can lower oxidative stress and improve cellular repair mechanisms." }
            ],
            exercise: [
                { id: "e1", code: "CRD", stat: "-50%", text: "Cardiorespiratory execution reduces all-cause mortality risk parameters by up to 50% over a lifetime." },
                { id: "e2", code: "LNG", stat: "+3 yrs", text: "Just 15 minutes of physical activity daily increases baseline life expectancy indicators by 3 years." },
                { id: "e3", code: "BND", stat: "Bone density", text: "Resistance training preserves bone mineral density, preventing age-related osteopenia and sarcopenia." },
                { id: "e4", code: "EPC", stat: "EPOC", text: "High-Intensity Interval Training triggers excess post-exercise oxygen consumption, burning calories for hours." },
                { id: "e5", code: "CMP", stat: "Compound lifts", text: "Compound movements recruit multiple muscle motor units simultaneously, maximizing strength output." }
            ]
        };
        this.tasks = [
            { id: 1, title: "Hydration Target", description: "Consume 3.5 Liters of water aligned with metabolic output." },
            { id: 2, title: "Protein Threshold", description: "Hit 1.6g of protein per kilogram of target body weight." },
            { id: 3, title: "Fiber Intake", description: "Achieve 35g of micronutrient-dense dietary fiber." }
        ];

        this.blogs = [
            {
                id: "b1",
                title: "The Exercise Triad: A Three-Pronged Strategy",
                category: "Cardio & Strength",
                summary: "Combining moderate aerobic activity with targeted strength training builds a powerful synergistic effect that optimizes resting heart rate and arterial flexibility far more than single-discipline programs.",
                citation: "Harvard Health Publishing — May 2025",
                url: "https://www.health.harvard.edu/topics/exercise-and-fitness"
            },
            {
                id: "b2",
                title: "Functional Fitness: Safeguarding Mobility Over Time",
                category: "Longevity",
                summary: "Training your body as an interconnected unit via multi-joint movements protects the whole kinetic chain. Keeping movements slow and controlled minimizes strain on tendons and ligaments.",
                citation: "Harvard Health Publishing — October 2024",
                url: "https://www.health.harvard.edu/topics/exercise-and-fitness"
            },
            {
                id: "b3",
                title: "Neurological Upgrades: How Movement Protects Your Brain",
                category: "Neuroscience",
                summary: "Abundant evidence confirms regular physical activity directly boosts memory, sharpens spatial thinking skills, and stimulates neurogenesis to stave off cognitive decline.",
                citation: "Harvard Health Publishing — April 2026",
                url: "https://www.health.harvard.edu/topics/exercise-and-fitness"
            }
        ];
        this.exerciseCategories = ["All", "Chest", "Shoulders", "Legs", "Back"];
        this.exerciseDifficulties = ["Any Level", "Beginner", "Intermediate", "Advanced"];
    }
}

const contentData = new HarvardFitnessContent();
const fallbackImg = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=640&q=80";

// ==========================================
// 2. CHILD COMPONENTS 
// ==========================================

const Navbar = ({ currentPage, setCurrentPage }) => {
    const navItems = ['home', 'exercise', 'diets', 'facts', 'blog', 'signup'];
    return (
        <nav style={{ backgroundColor: '#111827', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #dc2626', position: 'sticky', top: 0, zIndex: 900 }}>
            <span style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', letterSpacing: '1px' }}>
                FITNESS<span style={{ color: '#dc2626' }}>GEEKS</span>
            </span>
            <div style={{ display: 'flex', gap: '24px' }}>
                {navItems.map((item) => (
                    <button
                        key={item}
                        onClick={() => setCurrentPage(item)}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            borderBottom: currentPage === item ? '2px solid #dc2626' : '2px solid transparent',
                            color: currentPage === item ? '#dc2626' : '#9ca3af',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            fontSize: '13px',
                            cursor: 'pointer',
                            padding: '6px 2px',
                            transition: 'color 0.2s ease, border-color 0.2s ease'
                        }}
                    >
                        {item === 'signup' ? 'Sign Up' : item === 'diets' ? 'diets/calories' : item}
                    </button>
                ))}
            </div>
        </nav>
    );
};

const BannerHeader = ({ setCurrentPage }) => (
    <header
        style={{
            textAlign: 'center',
            padding: '90px 20px 70px',
            backgroundColor: '#111827',
            backgroundImage: 'linear-gradient(180deg, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.92) 65%, #0f172a 100%), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            borderBottom: '1px solid #374151',
            position: 'relative'
        }}
    >
        <span style={{ color: '#dc2626', fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase' }}>Trainers · Diet Plans · Supplements</span>
        <h1 style={{ fontSize: '52px', color: '#ffffff', margin: '14px 0 14px 0', fontWeight: '900', letterSpacing: '-1px', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>
            OPTIMIZE YOUR <span style={{ color: '#dc2626' }}>BIOLOGY</span>
        </h1>
        <p style={{ color: '#e2e8f0', fontSize: '17px', maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.6' }}>
            One platform for coaching, nutrition targets, and tested supplements — engineered from clinical evidence, not guesswork.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setCurrentPage('signup')} style={{ backgroundColor: '#dc2626', color: '#fff', border: 'none', borderRadius: '6px', padding: '14px 28px', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer', boxShadow: '0 8px 20px rgba(220,38,38,0.35)' }}>Get Started Free</button>
            <button onClick={() => setCurrentPage('diets')} style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid #4b5563', borderRadius: '6px', padding: '14px 28px', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer' }}>Calculate My Calories</button>
        </div>
    </header>
);

const StatsBar = () => (
    <div style={{ backgroundColor: '#111827', borderBottom: '1px solid #374151', padding: '22px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', textAlign: 'center' }}>
            {contentData.stats.map((stat, i) => (
                <div key={i}>
                    <div style={{ color: '#dc2626', fontSize: '24px', fontWeight: '900', fontFamily: 'monospace' }}>{stat.value}</div>
                    <div style={{ color: '#9ca3af', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>{stat.label}</div>
                </div>
            ))}
        </div>
    </div>
);

const HomePageView = ({ setCurrentPage }) => {
    const [serviceHover, setServiceHover] = useState(null);
    const [poseHover, setPoseHover] = useState(null);

    return (
        <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <BannerHeader setCurrentPage={setCurrentPage} />
            <StatsBar />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 20px' }}>
                <div style={{ marginBottom: '64px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <span style={{ color: '#dc2626', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>What You Get</span>
                        <h2 style={{ color: '#ffffff', fontSize: '30px', margin: '8px 0 0 0' }}>Three Systems, <span style={{ color: '#dc2626' }}>One Membership</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                        {contentData.services.map((service, index) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => setServiceHover(index)}
                                onMouseLeave={() => setServiceHover(null)}
                                style={{
                                    backgroundColor: '#1f2937',
                                    borderRadius: '10px',
                                    border: serviceHover === index ? '1px solid #dc2626' : '1px solid #374151',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.25s ease',
                                    transform: serviceHover === index ? 'translateY(-6px)' : 'translateY(0)',
                                    boxShadow: serviceHover === index ? '0 16px 28px rgba(0,0,0,0.35)' : 'none',
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`
                                }}
                            >
                                <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        onError={(e) => { e.target.src = fallbackImg; }}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', transform: serviceHover === index ? 'scale(1.08)' : 'scale(1)' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,24,39,0) 40%, rgba(17,24,39,0.9) 100%)' }} />
                                    <span style={{ position: 'absolute', bottom: '10px', left: '16px', fontSize: '12px', fontWeight: 'bold', color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)', padding: '2px 8px', borderRadius: '4px' }}>[{service.code}]</span>
                                    {service.badge && (
                                        <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#dc2626', color: '#fff', fontSize: '10px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{service.badge}</span>
                                    )}
                                </div>
                                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <h3 style={{ color: '#ffffff', margin: '0 0 8px 0', fontSize: '18px', textTransform: 'uppercase' }}>{service.title}</h3>
                                    <p style={{ color: '#d1d5db', fontSize: '14px', margin: '0 0 10px 0', lineHeight: '1.5' }}>{service.desc}</p>
                                    <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 18px 0', lineHeight: '1.5', flexGrow: 1 }}>{service.detail}</p>
                                    <button
                                        onClick={() => setCurrentPage(service.page)}
                                        style={{ backgroundColor: 'transparent', border: '1px solid #dc2626', color: '#dc2626', borderRadius: '6px', padding: '10px', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer', transition: 'background-color 0.2s ease, color 0.2s ease' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dc2626'; e.currentTarget.style.color = '#fff'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#dc2626'; }}
                                    >
                                        {service.cta} →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '64px' }}>
                    <div style={{ backgroundColor: '#1f2937', padding: '32px', borderRadius: '8px', borderLeft: '4px solid #dc2626' }}>
                        <h2 style={{ color: '#ffffff', marginTop: '0', fontSize: '22px' }}>System Introduction</h2>
                        <p style={{ color: '#d1d5db', lineHeight: '1.7', fontSize: '15px' }}>{contentData.introduction}</p>
                    </div>
                    <div style={{ backgroundColor: '#1f2937', padding: '32px', borderRadius: '8px' }}>
                        <h2 style={{ color: '#ffffff', marginTop: '0', fontSize: '22px' }}><span style={{ color: '#dc2626' }}>Daily</span> Nutrition Tasks</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
                            {contentData.tasks.map(task => (
                                <div key={task.id} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #374151' }}>
                                    <strong style={{ color: '#f3f4f6' }}>{task.title}</strong>
                                    <span style={{ color: '#9ca3af', fontSize: '14px' }}>{task.description}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '64px' }}>
                    <h2 style={{ color: '#ffffff', fontSize: '26px', marginBottom: '24px', borderBottom: '2px solid #374151', paddingBottom: '8px' }}>
                        Fundamental <span style={{ color: '#dc2626' }}>Movement Poses</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                        {[
                            { id: 'squat', title: 'The Barbell Squat', image: 'https://images.unsplash.com/photo-1567598508481-65985588e295?auto=format&fit=crop&w=640&q=80' },
                            { id: 'deadlift', title: 'The Barbell Deadlift', image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=640&q=80' },
                            { id: 'pushup', title: 'Push-Up Progression', image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=640&q=80' }
                        ].map((pose) => (
                            <div
                                key={pose.id}
                                onMouseEnter={() => setPoseHover(pose.id)}
                                onMouseLeave={() => setPoseHover(null)}
                                style={{
                                    backgroundColor: '#1f2937',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    border: poseHover === pose.id ? '1px solid #dc2626' : '1px solid #374151',
                                    transition: 'all 0.3s ease',
                                    transform: poseHover === pose.id ? 'scale(1.03)' : 'scale(1)',
                                    boxShadow: poseHover === pose.id ? '0 12px 24px rgba(0,0,0,0.4)' : 'none'
                                }}
                            >
                                <div style={{ overflow: 'hidden', height: '220px' }}>
                                    <img
                                        src={pose.image}
                                        alt={pose.title}
                                        onError={(e) => { e.target.src = fallbackImg; }}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', transform: poseHover === pose.id ? 'scale(1.1)' : 'scale(1)' }}
                                    />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <h3 style={{ color: poseHover === pose.id ? '#dc2626' : '#ffffff', margin: '0 0 8px 0', textTransform: 'capitalize', transition: 'color 0.2s' }}>{pose.title}</h3>
                                    <p style={{ color: '#9ca3af', fontSize: '14px', margin: '0', lineHeight: '1.5' }}>High-yield physical compound execution mapped out from clinical exercise trials.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 style={{ color: '#ffffff', fontSize: '26px', marginBottom: '24px' }}>Telemetry <span style={{ color: '#dc2626' }}>Reviews</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        {[
                            { name: 'Engineer Bilal K.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80', quote: 'The structured food data tracker helped me hit my exact macro thresholds cleanly. The implementation is seamless.' },
                            { name: 'Dr. Sarah T.', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80', quote: 'Excellent focus on evidence-based training methods derived directly from Harvard clinical guidelines.' }
                        ].map((review, i) => (
                            <div key={i} style={{ backgroundColor: '#111827', padding: '24px', borderRadius: '8px', border: '1px solid #374151', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <img src={review.avatar} alt={review.name} onError={(e) => { e.target.src = fallbackImg; }} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2px solid #dc2626' }} />
                                <div>
                                    <p style={{ color: '#d1d5db', margin: '0 0 10px 0' }}>"{review.quote}"</p>
                                    <strong style={{ color: '#dc2626', fontSize: '14px' }}>— {review.name}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const BlogPageView = () => (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', animation: 'fadeInUp 0.5s ease-out' }}>
        <h2 style={{ color: '#ffffff', fontSize: '32px', marginBottom: '8px' }}>
            Clinical <span style={{ color: '#dc2626' }}>Research Logs</span>
        </h2>
        <p style={{ color: '#9ca3af', marginBottom: '40px' }}>Evidence-based analysis synthesized from Harvard Health publication data streams.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {contentData.blogs.map((blog, i) => (
                <article key={blog.id} style={{ backgroundColor: '#1f2937', padding: '28px', borderRadius: '8px', border: '1px solid #374151', borderLeft: '4px solid #dc2626', animation: `fadeInUp 0.4s ease-out ${i * 0.06}s backwards` }}>
                    <span style={{ color: '#dc2626', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{blog.category}</span>
                    <h3 style={{ margin: '8px 0 12px 0', fontSize: '22px' }}>
                        <a href={blog.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>
                            {blog.title} <span style={{ fontSize: '14px', color: '#dc2626' }}>↗</span>
                        </a>
                    </h3>
                    <p style={{ color: '#9ca3af', lineHeight: '1.6', fontSize: '15px', margin: '0 0 16px 0' }}>{blog.summary}</p>
                    <div style={{ color: '#64748b', fontSize: '12px', fontFamily: 'monospace' }}>{blog.citation}</div>
                </article>
            ))}
        </div>
    </div>
);

const FactsPageView = () => {
    const categories = [
        { key: 'habits', title: 'Systemic Habits', code: 'HBT', color: '#3b82f6' },
        { key: 'diets', title: 'Nutritional Diets', code: 'DTE', color: '#10b981' },
        { key: 'exercise', title: 'Physical Exercise', code: 'EXE', color: '#dc2626' }
    ];
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', animation: 'fadeInUp 0.5s ease-out' }}>
            <h2 style={{ color: '#ffffff', fontSize: '32px', marginBottom: '8px' }}>
                Biometric <span style={{ color: '#dc2626' }}>Fact Log</span>
            </h2>
            <p style={{ color: '#9ca3af', marginBottom: '40px' }}>Categorized performance telemetry backed by clinical research trials.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                {categories.map((cat, colIndex) => (
                    <div key={cat.key} style={{ backgroundColor: '#1f2937', borderRadius: '12px', border: '1px solid #374151', overflow: 'hidden', animation: `fadeInUp 0.5s ease-out ${colIndex * 0.1}s backwards` }}>
                        <div style={{ backgroundColor: '#111827', padding: '16px 20px', borderBottom: `3px solid ${cat.color}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 'bold', color: cat.color }}>[{cat.code}]</span>
                            <h3 style={{ color: '#ffffff', margin: '0', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>{cat.title}</h3>
                        </div>
                        <div style={{ padding: '8px 16px 16px' }}>
                            {contentData.facts[cat.key].map((fact, index) => (
                                <div
                                    key={fact.id}
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                        padding: '14px 4px',
                                        borderBottom: index < contentData.facts[cat.key].length - 1 ? '1px solid #283142' : 'none',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                >
                                    <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 'bold', lineHeight: '1', flexShrink: 0, marginTop: '4px' }}>{fact.code}</span>
                                    <div>
                                        <span style={{ display: 'inline-block', color: cat.color, fontWeight: '800', fontSize: '13px', fontFamily: 'monospace', backgroundColor: '#111827', padding: '2px 8px', borderRadius: '4px', marginBottom: '6px' }}>{fact.stat}</span>
                                        <p style={{ color: '#cbd5e1', margin: '0', fontSize: '13.5px', lineHeight: '1.5' }}>{fact.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DietsPageView = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [classification, setClassification] = useState('');

    const [fitnessGoal, setFitnessGoal] = useState('maintenance');
    const [suggestedCalories, setSuggestedCalories] = useState(2150);
    const [macroBreakdown, setMacroBreakdown] = useState("Isocaloric Balance: 40% Carbs, 30% Protein, 30% Fats");
    const [foodsList, setFoodsList] = useState("Grilled Chicken, Quinoa, Salmon, Avocados, Walnuts, Spinach");
    const dietDatabase = {
        underweight: {
            title: "Caloric Surplus Intake Strategy",
            description: "Focus on driving dense nutrient metrics upward to restore muscle glycogen levels and safely build clean lean structure.",
            foods: [
                { type: "Proteins & Fats", items: "Eggs, Salmon, Lean Beef, Peanut Butter" },
                { type: "Carbohydrates", items: "Oats, Brown Rice, Sweet Potatoes, Bananas" },
                { type: "Dense Fruits & Veg", items: "Avocados, Dates, Mangoes, Broccoli, Peas" }
            ]
        },
        perfect: {
            title: "Isocaloric Homeostasis Maintenance Plan",
            description: "Your baseline biometric markers are highly optimized. Maintain this structural stability with balanced micronutrient ratios.",
            foods: [
                { type: "Proteins & Fats", items: "Chicken Breast, Turkey, Almonds, Olive Oil" },
                { type: "Carbohydrates", items: "Quinoa, Whole Wheat Pasta, Basmati Rice" },
                { type: "Dense Fruits & Veg", items: "Spinach, Kale, Blueberries, Apples, Asparagus" }
            ]
        },
        overweight: {
            title: "Caloric Deficit High-Metabolic Strategy",
            description: "Prioritize nutrient-dense, low-glycemic profiles that encourage fat oxidation while protecting structural muscle density.",
            foods: [
                { type: "Proteins & Fats", items: "White Fish, Egg Whites, Greek Yogurt, Chia Seeds" },
                { type: "Carbohydrates", items: "Lentils, Black Beans, Cauliflower Rice" },
                { type: "Dense Fruits & Veg", items: "Grapefruit, Berries, Cucumbers, Zucchini, Celery" }
            ]
        }
    };
    const calculateBmi = (e) => {
        e.preventDefault();
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100;
        if (w > 0 && h > 0) {
            const bmiScore = w / (h * h);
            setBmi(bmiScore.toFixed(1));
            if (bmiScore < 18.5) setClassification('underweight');
            else if (bmiScore >= 18.5 && bmiScore <= 24.9) setClassification('perfect');
            else setClassification('overweight');
        }
    };

    const adjustCalorieGoal = (goal) => {
        setFitnessGoal(goal);
        if (goal === 'loss') {
            setSuggestedCalories(1650);
            setMacroBreakdown("High Protein Deficit: 45% Protein, 30% Carbs, 25% Fats");
            setFoodsList("Egg Whites, Baked White Fish, Broccoli, Asparagus, Berries, Greek Yogurt");
        } else if (goal === 'gain') {
            setSuggestedCalories(2750);
            setMacroBreakdown("Hypertrophy Surplus: 40% Carbs, 30% Protein, 30% Fats");
            setFoodsList("Lean Beef, Whole Eggs, Oats, Peanut Butter, Pasta, Sweet Potatoes");
        } else {
            setSuggestedCalories(2150);
            setMacroBreakdown("Isocaloric Balance: 40% Carbs, 30% Protein, 30% Fats");
            setFoodsList("Grilled Chicken, Quinoa, Salmon, Avocados, Walnuts, Spinach");
        }
    };
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', animation: 'fadeInUp 0.5s ease-out' }}>
            <h2>Biometric <span style={{ color: '#dc2626' }}>Calorie Monitor</span></h2>
            <p style={{ color: '#9ca3af', marginBottom: '32px' }}>Two steps: find your BMI, then dial in a daily calorie target and matching foods.</p>

            <span style={{ color: '#dc2626', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Step 1 — Know Your BMI</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start', marginBottom: '48px' }}>
                <div style={{ backgroundColor: '#1f2937', padding: '32px', borderRadius: '12px', border: '1px solid #374151' }}>
                    <h3 style={{ color: '#ffffff', marginTop: '0', marginBottom: '24px', fontSize: '20px' }}>Calculate Your Biometric Index</h3>
                    <form onSubmit={calculateBmi} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label htmlFor="weight-input" style={{ display: 'block', color: '#9ca3af', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>WEIGHT (KG)</label>
                            <input id="weight-input" type="number" required min="1" placeholder="e.g. 70" value={weight} onChange={(e) => setWeight(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                            <label htmlFor="height-input" style={{ display: 'block', color: '#9ca3af', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>HEIGHT (CM)</label>
                            <input id="height-input" type="number" required min="1" placeholder="e.g. 175" value={height} onChange={(e) => setHeight(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box' }} />
                        </div>
                        <button type="submit" style={{ backgroundColor: '#dc2626', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '14px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', textTransform: 'uppercase' }}>Analyze Biometrics</button>
                    </form>
                </div>
                <div style={{ backgroundColor: '#1f2937', padding: '32px', borderRadius: '12px', border: '1px solid #374151' }}>
                    <h3 style={{ color: '#ffffff', marginTop: '0', marginBottom: '20px', fontSize: '20px' }}>Clinical Index Classifications</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#cbd5e1', textAlign: 'left', fontSize: '14px' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #374151', color: '#9ca3af' }}>
                                <th style={{ padding: '12px 8px' }}>BMI RANGE</th>
                                <th style={{ padding: '12px 8px' }}>CLASSIFICATION STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #374151', backgroundColor: classification === 'underweight' ? 'rgba(59, 130, 246, 0.1)' : 'transparent' }}>
                                <td style={{ padding: '12px 8px', fontFamily: 'monospace', color: '#3b82f6', fontWeight: 'bold' }}>Below 18.5</td>
                                <td style={{ padding: '12px 8px' }}>Underweight Status</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #374151', backgroundColor: classification === 'perfect' ? 'rgba(16, 185, 129, 0.1)' : 'transparent' }}>
                                <td style={{ padding: '12px 8px', fontFamily: 'monospace', color: '#10b981', fontWeight: 'bold' }}>18.5 – 24.9</td>
                                <td style={{ padding: '12px 8px' }}>Optimal / Perfect Weight</td>
                            </tr>
                            <tr style={{ backgroundColor: classification === 'overweight' ? 'rgba(220, 38, 38, 0.1)' : 'transparent' }}>
                                <td style={{ padding: '12px 8px', fontFamily: 'monospace', color: '#dc2626', fontWeight: 'bold' }}>25.0 and Above</td>
                                <td style={{ padding: '12px 8px' }}>Overweight Status</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {bmi && (
                <div style={{ backgroundColor: '#111827', border: '2px solid #dc2626', borderRadius: '12px', padding: '32px', textAlign: 'left', marginBottom: '48px', animation: 'fadeInUp 0.4s ease-out' }}>
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #374151', paddingBottom: '16px' }}>
                        <div>
                            <span style={{ fontSize: '12px', color: '#9ca3af', display: 'block', fontWeight: 'bold' }}>YOUR INDEX</span>
                            <span style={{ fontSize: '36px', color: '#ffffff', fontWeight: '900', fontFamily: 'monospace' }}>{bmi}</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '12px', color: '#9ca3af', display: 'block', fontWeight: 'bold' }}>EVALUATION MATRIX</span>
                            <span style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', color: classification === 'perfect' ? '#10b981' : classification === 'underweight' ? '#3b82f6' : '#dc2626' }}>{classification === 'perfect' ? 'Perfect Status' : classification}</span>
                        </div>
                    </div>
                    <h4 style={{ color: '#ffffff', margin: '0 0 8px 0', fontSize: '20px' }}>{dietDatabase[classification].title}</h4>
                    <p style={{ color: '#9ca3af', margin: '0 0 24px 0', fontSize: '15px', lineHeight: '1.6' }}>{dietDatabase[classification].description}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {dietDatabase[classification].foods.map((food, i) => (
                            <div key={i} style={{ display: 'flex', backgroundColor: '#1f2937', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #dc2626' }}>
                                <strong style={{ color: '#ffffff', width: '200px', display: 'block', fontSize: '14px', textTransform: 'uppercase' }}>{food.type}</strong>
                                <span style={{ color: '#cbd5e1', fontSize: '14px' }}>{food.items}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <span style={{ color: '#dc2626', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Step 2 — Set Your Calorie Target</span>
            <div style={{ backgroundColor: '#1f2937', padding: '32px', borderRadius: '12px', border: '1px solid #374151' }}>
                <h3 style={{ color: '#ffffff', marginTop: '0', fontSize: '22px', borderBottom: '2px solid #374151', paddingBottom: '8px' }}>
                    Interactive <span style={{ color: '#dc2626' }}>Calorie Intake Switchboard</span>
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '24px' }}>Select your priority biometric target vector below to calculate your daily ceiling threshold and match recommended foods.</p>

                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                    <button type="button" onClick={() => adjustCalorieGoal('loss')} style={{ flex: '1', backgroundColor: fitnessGoal === 'loss' ? '#dc2626' : '#111827', border: 'none', borderRadius: '6px', padding: '12px', color: '#ffffff', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase', cursor: 'pointer', transition: 'background-color 0.2s ease' }}>[ - ] Fat Loss</button>
                    <button type="button" onClick={() => adjustCalorieGoal('maintenance')} style={{ flex: '1', backgroundColor: fitnessGoal === 'maintenance' ? '#dc2626' : '#111827', border: 'none', borderRadius: '6px', padding: '12px', color: '#ffffff', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase', cursor: 'pointer', transition: 'background-color 0.2s ease' }}>[ = ] Maintenance</button>
                    <button type="button" onClick={() => adjustCalorieGoal('gain')} style={{ flex: '1', backgroundColor: fitnessGoal === 'gain' ? '#dc2626' : '#111827', border: 'none', borderRadius: '6px', padding: '12px', color: '#ffffff', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase', cursor: 'pointer', transition: 'background-color 0.2s ease' }}>[ + ] Muscle Gain</button>
                </div>

                <div style={{ backgroundColor: '#111827', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #dc2626' }}>
                    <div style={{ marginBottom: '16px' }}>
                        <span style={{ color: '#9ca3af', fontSize: '11px', fontWeight: 'bold', display: 'block' }}>DAILY CALORIC REQUIREMENT TARGET</span>
                        <span style={{ color: '#ffffff', fontSize: '32px', fontWeight: '900', fontFamily: 'monospace' }}>{suggestedCalories} <span style={{ fontSize: '14px', color: '#9ca3af' }}>Kcal / Day</span></span>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <strong style={{ color: '#dc2626', fontSize: '13px', display: 'block', marginBottom: '4px' }}>MACRONUTRIENT ALLOCATION MATRIX:</strong>
                        <p style={{ color: '#cbd5e1', fontSize: '14px', margin: '0' }}>{macroBreakdown}</p>
                    </div>
                    <div>
                        <strong style={{ color: '#dc2626', fontSize: '13px', display: 'block', marginBottom: '4px' }}>RECOMMENDED OPTIMAL PERFORMANCE FOODS:</strong>
                        <p style={{ color: '#cbd5e1', fontSize: '14px', margin: '0', lineHeight: '1.5' }}>{foodsList}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DifficultyBadge = ({ level }) => {
    const colorMap = {
        Beginner: { bg: 'rgba(16,185,129,0.12)', text: '#10b981', border: '#10b981' },
        Intermediate: { bg: 'rgba(245,158,11,0.12)', text: '#f59e0b', border: '#f59e0b' },
        Advanced: { bg: 'rgba(220,38,38,0.12)', text: '#dc2626', border: '#dc2626' }
    };
    const colors = colorMap[level] || colorMap.Beginner;
    return (
        <span style={{ display: 'inline-block', backgroundColor: colors.bg, color: colors.text, border: `1px solid ${colors.border}`, borderRadius: '4px', padding: '2px 8px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            {level}
        </span>
    );
};

const categoryAccentColor = { Chest: '#3b82f6', Shoulders: '#a855f7', Legs: '#f59e0b', Back: '#10b981' };
const ExerciseCard = ({ exercise, isHovered, onMouseEnter, onMouseLeave, animDelay }) => {
    const accent = categoryAccentColor[exercise.category] || '#dc2626';
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ backgroundColor: '#1f2937', borderRadius: '10px', border: isHovered ? `1px solid ${accent}` : '1px solid #374151', overflow: 'hidden', transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease', transform: isHovered ? 'translateY(-5px)' : 'translateY(0)', boxShadow: isHovered ? `0 16px 28px rgba(0,0,0,0.45)` : 'none', animation: `fadeInUp 0.4s ease-out ${animDelay}s backwards`, display: 'flex', flexDirection: 'column' }}
        >
            <div style={{ overflow: 'hidden', height: '180px', position: 'relative', flexShrink: 0 }}>
                <img src={exercise.image_url || exercise.image} alt={exercise.image_alt || exercise.imageAlt} onError={(e) => { e.target.src = fallbackImg; }} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s ease', transform: isHovered ? 'scale(1.07)' : 'scale(1)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 50%)' }} />
                <span style={{ position: 'absolute', bottom: '10px', left: '12px', backgroundColor: accent, color: '#ffffff', borderRadius: '4px', padding: '3px 10px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.6px' }}>{exercise.category}</span>
            </div>

            <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                    <h4 style={{ color: '#ffffff', margin: '0', fontSize: '15px', fontWeight: '700', lineHeight: '1.3', flexGrow: 1 }}>{exercise.name}</h4>
                    <DifficultyBadge level={exercise.difficulty} />
                </div>
                <p style={{ color: '#9ca3af', fontSize: '13px', lineHeight: '1.55', margin: '0 0 16px 0', flexGrow: 1 }}>{exercise.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 12px', borderTop: '1px solid #374151', paddingTop: '14px', fontSize: '12px' }}>
                    <div><span style={{ color: '#64748b', display: 'block', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.4px', fontSize: '10px' }}>Primary Muscle</span><span style={{ color: '#e2e8f0', fontWeight: '600' }}>{exercise.muscles}</span></div>
                    <div><span style={{ color: '#64748b', display: 'block', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.4px', fontSize: '10px' }}>Working Sets</span><span style={{ color: '#e2e8f0', fontWeight: '600', fontFamily: 'monospace' }}>{exercise.sets}</span></div>
                    <div style={{ gridColumn: '1 / -1' }}><span style={{ color: '#64748b', display: 'block', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.4px', fontSize: '10px' }}>Equipment</span><span style={{ color: '#cbd5e1' }}>{exercise.equipment}</span></div>
                </div>
                <div style={{ marginTop: '14px', height: '3px', borderRadius: '2px', backgroundColor: accent, opacity: isHovered ? 1 : 0.3, transition: 'opacity 0.25s ease' }} />
            </div>
        </div>
    );
};

const ExerciseLibrarySection = () => {
    const [dbExercises, setDbExercises] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/exercises/")
            .then((response) => response.json())
            .then((data) => setDbExercises(data))
            .catch((error) => console.error("Network error:", error));
    }, []);

    const [activeCategory, setActiveCategory] = useState('All');
    const [activeDifficulty, setActiveDifficulty] = useState('Any Level');
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredId, setHoveredId] = useState(null);

    const filteredExercises = dbExercises.filter((ex) => {
        const categoryMatch = activeCategory === 'All' || ex.category === activeCategory;
        const difficultyMatch = activeDifficulty === 'Any Level' || ex.difficulty === activeDifficulty;
        const searchMatch = ex.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
        return categoryMatch && difficultyMatch && searchMatch;
    });

    const countByCategory = (cat) => {
        if (cat === 'All') return dbExercises.length;
        return dbExercises.filter(ex => ex.category === cat).length;
    };

    return (
        <div style={{ marginBottom: '56px' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '32px', position: 'relative', height: '220px', backgroundImage: 'linear-gradient(90deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.7) 60%, rgba(15,23,42,0.2) 100%), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center 40%', display: 'flex', alignItems: 'center', padding: '0 40px' }}>
                <div>
                    <span style={{ color: '#dc2626', fontSize: '11px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>Movement Database</span>
                    <h3 style={{ color: '#ffffff', fontSize: '34px', fontWeight: '900', margin: '0 0 10px 0', letterSpacing: '-0.5px' }}>Exercise <span style={{ color: '#dc2626' }}>Overview</span></h3>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0', maxWidth: '420px', lineHeight: '1.6' }}>A filterable reference of compound and isolation movements, each documented with primary movers, equipment, and recommended working sets.</p>
                </div>
                <div style={{ position: 'absolute', top: '24px', right: '32px', display: 'flex', gap: '12px' }}>
                    {[
                        { value: dbExercises.length, label: 'Exercises' },
                        { value: contentData.exerciseCategories.length - 1, label: 'Muscle Groups' },
                        { value: 3, label: 'Difficulty Tiers' }
                    ].map((chip) => (
                        <div key={chip.label} style={{ backgroundColor: 'rgba(15,23,42,0.8)', border: '1px solid #374151', borderRadius: '8px', padding: '10px 16px', textAlign: 'center', backdropFilter: 'blur(4px)' }}>
                            <div style={{ color: '#dc2626', fontWeight: '900', fontSize: '22px', fontFamily: 'monospace', lineHeight: '1' }}>{chip.value}</div>
                            <div style={{ color: '#64748b', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>{chip.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="exercise-library-layout" style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
                <aside className="exercise-library-sidebar" style={{ width: '230px', flexShrink: 0, position: 'sticky', top: '80px' }}>
                    <div style={{ marginBottom: '24px' }}>
                        <label htmlFor="exercise-search" style={{ display: 'block', color: '#64748b', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Search</label>
                        <div style={{ position: 'relative' }}>
                            <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontSize: '11px', fontWeight: 'bold' }}>SEARCH</span>
                            <input id="exercise-search" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="..." style={{ width: '100%', padding: '10px 12px 10px 60px', fontSize: '13px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.2s ease' }} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <span style={{ display: 'block', color: '#64748b', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>Muscle Group</span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {contentData.exerciseCategories.map((cat) => {
                                const isActive = cat === activeCategory;
                                const accent = cat === 'All' ? '#dc2626' : categoryAccentColor[cat] || '#dc2626';
                                return (
                                    <button key={cat} type="button" onClick={() => setActiveCategory(cat)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', padding: '9px 12px', borderRadius: '6px', border: isActive ? `1px solid ${accent}` : '1px solid transparent', backgroundColor: isActive ? `rgba(${accent === '#dc2626' ? '220,38,38' : accent === '#3b82f6' ? '59,130,246' : accent === '#a855f7' ? '168,85,247' : accent === '#f59e0b' ? '245,158,11' : '16,185,129'},0.12)` : 'transparent', color: isActive ? '#ffffff' : '#9ca3af', fontSize: '13px', fontWeight: isActive ? '700' : '500', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                                        <span>{cat}</span><span style={{ backgroundColor: '#111827', color: '#64748b', borderRadius: '50px', padding: '1px 7px', fontSize: '10px', fontFamily: 'monospace', fontWeight: 'bold' }}>{countByCategory(cat)}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <span style={{ display: 'block', color: '#64748b', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>Difficulty</span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {contentData.exerciseDifficulties.map((level) => {
                                const isActive = level === activeDifficulty;
                                return (
                                    <button key={level} type="button" onClick={() => setActiveDifficulty(level)} style={{ textAlign: 'left', padding: '9px 12px', borderRadius: '6px', border: isActive ? '1px solid #dc2626' : '1px solid transparent', backgroundColor: isActive ? 'rgba(220,38,38,0.1)' : 'transparent', color: isActive ? '#ffffff' : '#9ca3af', fontSize: '13px', fontWeight: isActive ? '700' : '500', cursor: 'pointer', transition: 'all 0.2s ease' }}>{level}</button>
                                );
                            })}
                        </div>
                    </div>

                    {(activeCategory !== 'All' || activeDifficulty !== 'Any Level' || searchTerm !== '') && (
                        <button type="button" onClick={() => { setActiveCategory('All'); setActiveDifficulty('Any Level'); setSearchTerm(''); }} style={{ backgroundColor: 'transparent', border: '1px solid #374151', color: '#9ca3af', borderRadius: '6px', padding: '8px 12px', fontSize: '12px', cursor: 'pointer', width: '100%', textAlign: 'center', transition: 'border-color 0.2s ease, color 0.2s ease' }}>Clear Filters</button>
                    )}
                </aside>

                <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <p style={{ color: '#64748b', fontSize: '13px', margin: '0' }}>Showing <strong style={{ color: '#e2e8f0' }}>{filteredExercises.length}</strong> of <strong style={{ color: '#e2e8f0' }}>{dbExercises.length}</strong> exercises {activeCategory !== 'All' && <span> in <strong style={{ color: '#dc2626' }}>{activeCategory}</strong></span>} {activeDifficulty !== 'Any Level' && <span> — <strong style={{ color: '#dc2626' }}>{activeDifficulty}</strong></span>}</p>
                    </div>

                    {filteredExercises.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#1f2937', borderRadius: '10px', border: '1px dashed #374151' }}>
                            <div style={{ fontSize: '14px', marginBottom: '12px', color: '#dc2626', fontWeight: 'bold' }}>[ NULL_RESULT ]</div>
                            <p style={{ color: '#9ca3af', margin: '0 0 8px 0', fontWeight: '600' }}>No exercises match your filters.</p>
                            <p style={{ color: '#64748b', fontSize: '13px', margin: '0' }}>Try adjusting the muscle group, difficulty, or search term.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
                            {filteredExercises.map((exercise, idx) => (
                                <ExerciseCard key={exercise.id || idx} exercise={exercise} isHovered={hoveredId === exercise.id} onMouseEnter={() => setHoveredId(exercise.id)} onMouseLeave={() => setHoveredId(null)} animDelay={idx * 0.05} />
                            ))}
                        </div>
                    )}

                    <div style={{ marginTop: '36px', backgroundColor: '#111827', borderRadius: '10px', padding: '24px', border: '1px solid #1e293b' }}>
                        <span style={{ display: 'block', color: '#64748b', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Coverage by Muscle Group</span>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {['Chest', 'Shoulders', 'Legs', 'Back'].map((group) => {
                                const count = dbExercises.filter(ex => ex.category === group).length;
                                const total = dbExercises.length;
                                const pct = total > 0 ? Math.round((count / total) * 100) : 0;
                                const accent = categoryAccentColor[group];
                                return (
                                    <div key={group} style={{ flexGrow: 1, minWidth: '100px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}><span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600' }}>{group}</span><span style={{ color: accent, fontSize: '12px', fontFamily: 'monospace', fontWeight: 'bold' }}>{count} / {total}</span></div>
                                        <div style={{ height: '4px', backgroundColor: '#1e293b', borderRadius: '2px', overflow: 'hidden' }}><div style={{ height: '100%', width: `${pct}%`, backgroundColor: accent, borderRadius: '2px', transition: 'width 0.6s ease' }} /></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExercisePageView = () => {
    const [trainerHover, setTrainerHover] = useState(null);
    const [videoHover, setVideoHover] = useState(null);
    const trainers = [
        { id: "t1", avatar: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=200&q=80", name: "Coach Elena Rostova", specialty: "Aesthetics & High-Fashion Modeling", bio: "Specializes in precise body composition alterations, posture mechanics, and low-inflammation stage preparation.", tag: "Elite Model Focus", color: '#3b82f6' },
        { id: "t2", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&q=80", name: "Marcus Harrison", specialty: "General Population Health & Longevity", bio: "Bridges the gap for busy corporate professionals looking to reclaim kinetic mobility, lower blood pressure, and build sustainable habits.", tag: "Average Population", color: '#10b981' },
        { id: "t3", avatar: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=200&q=80", name: "Commander Viktor Vance", specialty: "Powerlifting & Absolute Force Production", bio: "Heavy compound mechanics specialist. Maximizes CNS recruitment pathways, structural density, and raw barbell output limitations.", tag: "Weight Lifter", color: '#dc2626' },
        { id: "t4", avatar: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=200&q=80", name: "Sarah Jenkins, CNS", specialty: "Metabolic Restoration & Therapeutic Adaptations", bio: "Clinical path specialist focusing on extreme weight reductions, heavy joint protection, insulin management, and zero-injury progressions.", tag: "Obese / Deconditioned", color: '#a855f7' }
    ];

    const videoWorkouts = [
        { thumb: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=480&q=80", title: "Joint Mobility Baseline", description: "Unlocking synovial fluid and rotational mechanics in major tracking systems.", duration: "10 Mins", url: "https://www.youtube.com/results?search_query=basic+mobility+exercises" },
        { thumb: "https://images.unsplash.com/photo-1552674605-171ff3ea36f0?auto=format&fit=crop&w=480&q=80", title: "Decompression Stretching", description: "Passive muscle tissue lengthening to lower neurological structural tension.", duration: "12 Mins", url: "https://www.youtube.com/results?search_query=easy+stretches+workout" },
        { thumb: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=480&q=80", title: "High-Yield Micro Circuits", description: "Maximum metabolic stimulation optimized for hyper-restricted schedules.", duration: "5 Mins", url: "https://www.youtube.com/results?search_query=5+minute+workout" },
        { thumb: "https://images.unsplash.com/photo-1584466977710-1ce99a3ff840?auto=format&fit=crop&w=480&q=80", title: "Kinetic Barbell Physics", description: "Deconstructing bracing, leverage angles, and safe force application rules.", duration: "15 Mins", url: "https://www.youtube.com/results?search_query=how+to+lift+weights+properly" },
        { thumb: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=480&q=80", title: "Low-Impact Cardiac Engine", description: "Steady-state aerobic conditioning designed to spare deconditioned lower joints.", duration: "20 Mins", url: "https://www.youtube.com/results?search_query=low+impact+cardio+workout" },
        { thumb: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=480&q=80", title: "Postural Spine Alignment", description: "Targeted activation patterns to reverse anterior desk-slouching degradation.", duration: "8 Mins", url: "https://www.youtube.com/results?search_query=posture+correction+exercises" }
    ];
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', animation: 'fadeInUp 0.5s ease-out' }}>
            <h2 style={{ color: '#ffffff', fontSize: '32px', marginBottom: '8px' }}>Kinetic <span style={{ color: '#dc2626' }}>Training Hub</span></h2>
            <p style={{ color: '#9ca3af', marginBottom: '40px' }}>Multi-demographic roster deployment and clinical exercise telemetry streams.</p>

            <ExerciseLibrarySection />

            <h3 style={{ color: '#ffffff', fontSize: '22px', marginBottom: '20px', borderBottom: '1px solid #374151', paddingBottom: '10px' }}>Performance <span style={{ color: '#dc2626' }}>Specialists</span></h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '56px' }}>
                {trainers.map((trainer, i) => (
                    <div
                        key={trainer.id}
                        onMouseEnter={() => setTrainerHover(trainer.id)}
                        onMouseLeave={() => setTrainerHover(null)}
                        style={{ backgroundColor: '#1f2937', padding: '28px', borderRadius: '12px', border: trainerHover === trainer.id ? `1px solid ${trainer.color}` : '1px solid #374151', position: 'relative', display: 'flex', gap: '20px', transition: 'all 0.25s ease', transform: trainerHover === trainer.id ? 'translateY(-4px)' : 'translateY(0)', boxShadow: trainerHover === trainer.id ? '0 12px 22px rgba(0,0,0,0.35)' : 'none', animation: `fadeInUp 0.45s ease-out ${i * 0.08}s backwards` }}
                    >
                        <img src={trainer.avatar} alt={trainer.name} onError={(e) => { e.target.src = fallbackImg; }} style={{ width: '76px', height: '76px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: `2px solid ${trainer.color}` }} />
                        <div style={{ flexGrow: 1 }}>
                            <span style={{ position: 'absolute', top: '20px', right: '24px', backgroundColor: '#111827', color: trainer.color, border: `1px solid ${trainer.color}`, padding: '4px 12px', borderRadius: '50px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>{trainer.tag}</span>
                            <h4 style={{ color: '#ffffff', margin: '0 0 4px 0', fontSize: '20px' }}>{trainer.name}</h4>
                            <span style={{ color: trainer.color, fontSize: '13px', display: 'block', marginBottom: '12px', fontWeight: '600' }}>{trainer.specialty}</span>
                            <p style={{ color: '#9ca3af', margin: '0', fontSize: '14px', lineHeight: '1.6' }}>{trainer.bio}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h3 style={{ color: '#ffffff', fontSize: '22px', marginBottom: '20px', borderBottom: '1px solid #374151', paddingBottom: '10px' }}>Video <span style={{ color: '#dc2626' }}>Telemetry Vault</span></h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                {videoWorkouts.map((vid, idx) => (
                    <div
                        key={idx}
                        onMouseEnter={() => setVideoHover(idx)}
                        onMouseLeave={() => setVideoHover(null)}
                        style={{ backgroundColor: '#111827', borderRadius: '8px', border: videoHover === idx ? '1px solid #dc2626' : '1px solid #374151', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.25s ease', transform: videoHover === idx ? 'translateY(-4px)' : 'translateY(0)', boxShadow: videoHover === idx ? '0 10px 20px rgba(0,0,0,0.35)' : 'none', animation: `fadeInUp 0.4s ease-out ${idx * 0.06}s backwards` }}
                    >
                        <div style={{ position: 'relative', height: '140px', overflow: 'hidden' }}>
                            <img src={vid.thumb} alt={vid.title} onError={(e) => { e.target.src = fallbackImg; }} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', transform: videoHover === idx ? 'scale(1.08)' : 'scale(1)' }} />
                            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', backgroundColor: 'rgba(220,38,38,0.9)', padding: '6px 12px', borderRadius: '6px' }}>PLAY</span>
                            </div>
                            <span style={{ position: 'absolute', bottom: '8px', right: '8px', color: '#fff', fontSize: '11px', backgroundColor: 'rgba(0,0,0,0.65)', padding: '2px 8px', borderRadius: '4px' }}>{vid.duration}</span>
                            <span style={{ position: 'absolute', top: '8px', left: '8px', color: '#dc2626', fontFamily: 'monospace', fontSize: '11px', fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0.65)', padding: '2px 8px', borderRadius: '4px' }}>STREAM_0{idx + 1}</span>
                        </div>
                        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <h4 style={{ color: '#ffffff', margin: '0 0 8px 0', fontSize: '16px' }}>{vid.title}</h4>
                            <p style={{ color: '#9ca3af', margin: '0 0 20px 0', fontSize: '13px', lineHeight: '1.5', flexGrow: 1 }}>{vid.description}</p>
                            <a href={vid.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: '#dc2626', color: '#ffffff', textDecoration: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Launch Stream ↗</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SignupPageView = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vector, setVector] = useState('longevity');
    const [submitted, setSubmitted] = useState(false);

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        
        const payload = {
            username: name,
            email: email,
            password: password,
            target_vector: vector
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/api/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const errorData = await response.json();
                console.error("Validation Error:", errorData);
                alert("Registration failed. Check console for details.");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Fatal Error: Could not connect to the database.");
        }
    };

    return (
        <div style={{ maxWidth: '480px', margin: '60px auto', padding: '0 20px', animation: 'fadeInUp 0.5s ease-out' }}>
            {!submitted ? (
                <div style={{ backgroundColor: '#1f2937', padding: '40px', borderRadius: '12px', border: '1px solid #374151', boxShadow: '0 20px 25px rgba(0,0,0,0.3)' }}>
                    <h2 style={{ color: '#ffffff', fontSize: '28px', marginTop: '0', marginBottom: '8px', fontWeight: '900' }}>Initialize <span style={{ color: '#dc2626' }}>Profile</span></h2>
                    <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '32px' }}>Register your terminal access parameters with the biometric mainframe.</p>

                    <form onSubmit={handleSignupSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label htmlFor="signup-name" style={{ display: 'block', color: '#9ca3af', fontSize: '12px', marginBottom: '6px', fontWeight: 'bold', letterSpacing: '0.5px' }}>FULL NAME</label>
                            <input id="signup-name" type="text" required placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                            <label htmlFor="signup-email" style={{ display: 'block', color: '#9ca3af', fontSize: '12px', marginBottom: '6px', fontWeight: 'bold', letterSpacing: '0.5px' }}>SECURE EMAIL</label>
                            <input id="signup-email" type="email" required placeholder="name@domain.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                            <label htmlFor="signup-password" style={{ display: 'block', color: '#9ca3af', fontSize: '12px', marginBottom: '6px', fontWeight: 'bold', letterSpacing: '0.5px' }}>ACCESS KEYPACK (PASSWORD)</label>
                            <input id="signup-password" type="password" required placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                            <label htmlFor="signup-vector" style={{ display: 'block', color: '#9ca3af', fontSize: '12px', marginBottom: '6px', fontWeight: 'bold', letterSpacing: '0.5px' }}>BIOMETRIC TARGET VECTOR</label>
                            <select id="signup-vector" value={vector} onChange={(e) => setVector(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box', cursor: 'pointer' }}>
                                <option value="aesthetics">Stage Aesthetics (Elite Modeling)</option>
                                <option value="longevity">Kinetic Mobility (Longevity & General Population)</option>
                                <option value="powerlifting">Force Production (Absolute Powerlifting)</option>
                                <option value="metabolic">Metabolic Optimization (Weight Recovery Management)</option>
                            </select>
                        </div>
                        <button type="submit" style={{ backgroundColor: '#dc2626', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '14px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', textTransform: 'uppercase', marginTop: '10px', letterSpacing: '0.5px' }}>Create Access Token</button>
                    </form>
                </div>
            ) : (
                <div style={{ backgroundColor: '#111827', border: '2px solid #10b981', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#10b981', marginBottom: '16px', letterSpacing: '2px' }}>[ SYSTEM_READY ]</div>
                    <h3 style={{ color: '#10b981', margin: '0 0 12px 0', fontSize: '24px', fontWeight: 'bold' }}>Profile Staged Successfully</h3>
                    <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', margin: '0 0 24px 0' }}> Welcome to the unit, <strong>{name}</strong>. Your access keypack has been built. Your target vector [<strong>{vector.toUpperCase()}</strong>] is now live inside the localized state engine.</p>
                    <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#64748b', backgroundColor: '#1f2937', padding: '12px', borderRadius: '6px', textTransform: 'uppercase' }}>DATABASE_SYNC_COMPLETE : RECORD_ACTIVE</div>
                </div>
            )}
        </div>
    );
};

const UnderConstructionView = ({ pageName }) => (
    <div style={{ textAlign: 'center', padding: '100px 20px', color: '#9ca3af' }}>
        <h2>{pageName.toUpperCase()} MODULE</h2>
        <p>Frontend wiring compiled. Awaiting integration with Django API backend pipelines.</p>
    </div>
);

const FeedbackPortal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { email: email, comment: comment };

        try {
            const response = await fetch("http://127.0.0.1:8000/api/feedback/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert("Telemetry Ingested Successfully!");
                setEmail('');
                setComment('');
                setIsOpen(false);
            } else {
                alert("Transmission Error: Verify backend server is running.");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Fatal Error: Could not connect to the database.");
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000, fontFamily: 'sans-serif' }}>
            {!isOpen ? (
                <button onClick={() => setIsOpen(true)} style={{ backgroundColor: '#dc2626', color: '#ffffff', border: 'none', borderRadius: '50px', padding: '14px 24px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)' }}>System Feedback</button>
            ) : (
                <div style={{ backgroundColor: '#1f2937', border: '2px solid #dc2626', borderRadius: '12px', padding: '24px', width: '320px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', position: 'fixed', bottom: '84px', right: '24px', boxSizing: 'border-box', maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h4 style={{ color: '#ffffff', margin: '0', fontSize: '16px' }}>Feedback Console</h4>
                        <button type="button" onClick={() => setIsOpen(false)} style={{ backgroundColor: 'transparent', border: 'none', color: '#9ca3af', fontSize: '16px', cursor: 'pointer' }}>✕</button>
                    </div>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div>
                            <label style={{ display: 'block', color: '#9ca3af', fontSize: '12px', marginBottom: '4px' }}>USER EMAIL</label>
                            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@domain.com" style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', color: '#9ca3af', fontSize: '12px', marginBottom: '4px' }}>COMMENTS / LOG DETAILS</label>
                            <textarea required rows="3" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Enter system bug telemetry or design critique..." style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', resize: 'none', boxSizing: 'border-box' }} />
                        </div>
                        <button type="submit" style={{ backgroundColor: '#dc2626', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '10px', fontWeight: 'bold', cursor: 'pointer', marginTop: '4px' }}>SUBMIT TELEMETRY</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default function Page() {
    const [currentPage, setCurrentPage] = useState('home');
    return (
        <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: '#f8fafc', fontFamily: 'sans-serif', paddingBottom: '100px' }}>
            <style jsx global>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(16px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                button:focus-visible,
                a:focus-visible,
                input:focus-visible,
                select:focus-visible,
                textarea:focus-visible {
                    outline: 2px solid #dc2626;
                    outline-offset: 2px;
                }
                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
                @media (max-width: 900px) {
                    nav > div { gap: 14px !important; }
                }
                @media (max-width: 760px) {
                    .exercise-library-layout { flex-direction: column; }
                    .exercise-library-sidebar { width: 100% !important; }
                }
            `}</style>

            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {currentPage === 'home' ? <HomePageView setCurrentPage={setCurrentPage} /> :
             currentPage === 'blog' ? <BlogPageView /> :
             currentPage === 'facts' ? <FactsPageView /> :
             currentPage === 'diets' ? null : 
             currentPage === 'exercise' ? <ExercisePageView /> :
             currentPage === 'signup' ? <SignupPageView /> :
             <UnderConstructionView pageName={currentPage} />}

            {currentPage === 'diets' && <DietsPageView />}

            <FeedbackPortal />
        </div>
    );
}