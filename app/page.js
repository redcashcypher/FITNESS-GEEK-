"use client";
import { useState } from 'react';

// ==========================================
// 1. DATA LAYOUT (Structured Clinical Blogs)
// ==========================================
class HarvardFitnessContent {
    constructor() {
        this.introduction = "Physical activity is one of the most powerful tools for optimizing human health. According to Harvard Health publishing, structured exercise regulates blood pressure, sharpens cognitive function, and optimizes metabolic performance.";
        
        this.facts = {
            habits: [
                { id: "h1", text: "Consistent sleep architecture (7-9 hours) optimizes human growth hormone release and muscle recovery." },
                { id: "h2", text: "Taking a brief 5-minute walking breakdown after sitting for 30 minutes mitigates arterial stiffness." },
                { id: "h3", text: "Sustained hydration directly regulates metabolic throughput and neuromuscular execution velocity." },
                { id: "h4", text: "Early morning sunlight exposure anchors circadian rhythms, optimizing nighttime melatonin production." },
                { id: "h5", text: "Tracking daily progress increases long-term training consistency metrics by up to 40%." }
            ],
            diets: [
                { id: "d1", text: "A protein threshold of 1.6g to 2.2g per kilogram of total lean mass is vital to preserve muscle structure." },
                { id: "d2", text: "Consuming complex micronutrient-dense fibers regulates glucose levels, flattening insulin spikes." },
                { id: "d3", text: "Essential fatty acids (Omega-3s) reduce system-wide cellular inflammation and optimize joint recovery." },
                { id: "d4", text: "Thermogenesis from protein digestion burns up to 30% of its own caloric energy value during breakdown." },
                { id: "d5", text: "Time-restricted eating windows can lower oxidative stress and improve cellular repair mechanisms." }
            ],
            exercise: [
                { id: "e1", text: "Cardiorespiratory execution reduces all-cause mortality risk parameters by up to 50% over a lifetime." },
                { id: "e2", text: "Just 15 minutes of physical activity daily increases baseline life expectancy indicators by 3 years." },
                { id: "e3", text: "Resistance training preserves bone mineral density, preventing age-related osteopenia and sarcopenia." },
                { id: "e4", text: "High-Intensity Interval Training (HIIT) triggers excess post-exercise oxygen consumption (EPOC), burning calories for hours." },
                { id: "e5", text: "Compound movements recruit multiple muscle motor units simultaneously, maximizing strength output." }
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
            },
            {
                id: "b4",
                title: "The 150-Minute Rule: Minimum Thresholds Explained",
                category: "Clinical Guidelines",
                summary: "National and federal guidelines recommend a minimum baseline of 150 minutes of moderate-intensity or 75 minutes of vigorous cardio per week to reduce overall chronic disease risk.",
                citation: "Harvard Health Publishing — November 2025",
                url: "https://www.health.harvard.edu/topics/exercise-and-fitness"
            },
            {
                id: "b5",
                title: "Kettlebell Kinetics: Full Body Motor Recruitment",
                category: "Strength Training",
                summary: "Moving beyond basic swings into specialized variations like bottoms-up carries and around-the-world passes triggers high-intensity core activation and stabilizes skeletal alignment.",
                citation: "Harvard Health Publishing — June 2026",
                url: "https://www.health.harvard.edu/topics/exercise-and-fitness"
            }
        ];
    }
}

const contentData = new HarvardFitnessContent();

// ==========================================
// 2. CHILD COMPONENTS (Arrow Functions)
// ==========================================

const Navbar = ({ currentPage, setCurrentPage }) => {
    const navItems = ['home', 'blog', 'facts', 'diets', 'exercise', 'signup'];
    return (
        <nav style={{ backgroundColor: '#111827', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #dc2626' }}>
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
                            color: currentPage === item ? '#dc2626' : '#9ca3af',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            fontSize: '13px',
                            cursor: 'pointer'
                        }}
                    >
                        {item === 'signup' ? 'Sign Up' : item === 'diets' ? 'diets/calories' : item}
                    </button>
                ))}
            </div>
        </nav>
    );
};

const BannerHeader = () => (
    <header style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#1f2937', backgroundImage: 'linear-gradient(to bottom, #111827, #1f2937)', borderBottom: '1px solid #374151' }}>
        <h1 style={{ fontSize: '48px', color: '#ffffff', margin: '0 0 12px 0', fontWeight: '900', letterSpacing: '-1px' }}>
            OPTIMIZE YOUR <span style={{ color: '#dc2626' }}>BIOLOGY</span>
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Engineering elite physical performance through clinical evidence and rigorous metrics.
        </p>
    </header>
);

const HomePageView = () => (
    <>
        <BannerHeader />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
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

            <div style={{ marginBottom: '48px' }}>
                <h2 style={{ color: '#ffffff', fontSize: '26px', marginBottom: '24px', borderBottom: '2px solid #374151', paddingBottom: '8px' }}>
                    Fundamental <span style={{ color: '#dc2626' }}>Movement Poses</span>
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                    {['squat', 'deadlift', 'pushup'].map((pose) => (
                        <div key={pose} style={{ backgroundColor: '#1f2937', borderRadius: '8px', overflow: 'hidden', border: '1px solid #374151' }}>
                            <img src={`/${pose}.jpg`} alt={pose} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ color: '#ffffff', margin: '0 0 8px 0', textTransform: 'capitalize' }}>{pose === 'pushup' ? 'Push-Up Progression' : `The Barbell ${pose}`}</h3>
                                <p style={{ color: '#9ca3af', fontSize: '14px', margin: '0', lineHeight: '1.5' }}>High-yield physical compound execution mapped out from clinical exercise trials.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 style={{ color: '#ffffff', fontSize: '26px', marginBottom: '24px' }}>Telemetry <span style={{ color: '#dc2626' }}>Reviews</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div style={{ backgroundColor: '#111827', padding: '24px', borderRadius: '8px', border: '1px solid #374151' }}>
                        <p style={{ color: '#d1d5db', margin: '0 0 12px 0' }}>"The structured food data tracker helped me hit my exact macro thresholds cleanly. The implementation is seamless."</p>
                        <strong style={{ color: '#dc2626' }}>— Engineer Bilal K.</strong>
                    </div>
                    <div style={{ backgroundColor: '#111827', padding: '24px', borderRadius: '8px', border: '1px solid #374151' }}>
                        <p style={{ color: '#d1d5db', margin: '0 0 12px 0' }}>"Excellent focus on evidence-based training methods derived directly from Harvard clinical guidelines."</p>
                        <strong style={{ color: '#dc2626' }}>— Dr. Sarah T.</strong>
                    </div>
                </div>
            </div>
        </div>
    </>
);

const BlogPageView = () => (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h2 style={{ color: '#ffffff', fontSize: '32px', marginBottom: '8px' }}>
            Clinical <span style={{ color: '#dc2626' }}>Research Logs</span>
        </h2>
        <p style={{ color: '#9ca3af', marginBottom: '40px' }}>Evidence-based analysis synthesized from Harvard Health publication data streams.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {contentData.blogs.map((blog) => (
                <article key={blog.id} style={{ backgroundColor: '#1f2937', padding: '28px', borderRadius: '8px', border: '1px solid #374151', borderLeft: '4px solid #dc2626' }}>
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
        { key: 'habits', title: 'Systemic Habits', color: '#3b82f6' },
        { key: 'diets', title: 'Nutritional Diets', color: '#10b981' },
        { key: 'exercise', title: 'Physical Exercise', color: '#dc2626' }
    ];

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
            <h2 style={{ color: '#ffffff', fontSize: '32px', marginBottom: '8px' }}>
                Biometric <span style={{ color: '#dc2626' }}>Fact Log</span>
            </h2>
            <p style={{ color: '#9ca3af', marginBottom: '40px' }}>Categorized performance telemetry backed by clinical research trials.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                {categories.map((cat) => (
                    <div key={cat.key} style={{ backgroundColor: '#1f2937', borderRadius: '12px', border: '1px solid #374151', overflow: 'hidden' }}>
                        <div style={{ backgroundColor: '#111827', padding: '16px 20px', borderBottom: `3px solid ${cat.color}` }}>
                            <h3 style={{ color: '#ffffff', margin: '0', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '1px' }}>{cat.title}</h3>
                        </div>
                        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {contentData.facts[cat.key].map((fact, index) => (
                                <div key={fact.id} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <span style={{ color: cat.color, fontWeight: 'bold', fontSize: '14px', fontFamily: 'monospace' }}>[0{index + 1}]</span>
                                    <p style={{ color: '#cbd5e1', margin: '0', fontSize: '14px', lineHeight: '1.5' }}>{fact.text}</p>
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

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
            <h2 style={{ color: '#ffffff', fontSize: '32px', marginBottom: '8px' }}>Biometric <span style={{ color: '#dc2626' }}>Calorie Monitor</span></h2>
            <p style={{ color: '#9ca3af', marginBottom: '40px' }}>Live metabolic analysis engines and tailored targeted nutrition guidelines.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start', marginBottom: '48px' }}>
                <div style={{ backgroundColor: '#1f2937', padding: '32px', borderRadius: '12px', border: '1px solid #374151' }}>
                    <h3 style={{ color: '#ffffff', marginTop: '0', marginBottom: '24px', fontSize: '20px' }}>Calculate Your Biometric Index</h3>
                    <form onSubmit={calculateBmi} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', color: '#9ca3af', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>WEIGHT (KG)</label>
                            <input type="number" required min="1" placeholder="e.g. 70" value={weight} onChange={(e) => setWeight(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', color: '#9ca3af', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold' }}>HEIGHT (CM)</label>
                            <input type="number" required min="1" placeholder="e.g. 175" value={height} onChange={(e) => setHeight(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box' }} />
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
                <div style={{ backgroundColor: '#111827', border: '2px solid #dc2626', borderRadius: '12px', padding: '32px', textAlign: 'left' }}>
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
        </div>
    );
};

const ExercisePageView = () => {
    const trainers = [
        {
            id: "t1",
            name: "Coach Elena Rostova",
            specialty: "Aesthetics & High-Fashion Modeling",
            bio: "Specializes in precise body composition alterations, posture mechanics, and low-inflammation stage preparation.",
            tag: "Elite Model Focus",
            color: '#3b82f6'
        },
        {
            id: "t2",
            name: "Marcus Harrison",
            specialty: "General Population Health & Longevity",
            bio: "Bridges the gap for busy corporate professionals looking to reclaim kinetic mobility, lower blood pressure, and build sustainable habits.",
            tag: "Average Population",
            color: '#10b981'
        },
        {
            id: "t3",
            name: "Commander Viktor Vance",
            specialty: "Powerlifting & Absolute Force Production",
            bio: "Heavy compound mechanics specialist. Maximizes CNS recruitment pathways, structural density, and raw barbell output limitations.",
            tag: "Weight Lifter",
            color: '#dc2626'
        },
        {
            id: "t4",
            name: "Sarah Jenkins, CNS",
            specialty: "Metabolic Restoration & Therapeutic Adaptations",
            bio: "Clinical path specialist focusing on extreme weight reductions, heavy joint protection, insulin management, and zero-injury progressions.",
            tag: "Obese / Deconditioned",
            color: '#a855f7'
        }
    ];

    const videoWorkouts = [
        { title: "Joint Mobility Baseline", description: "Unlocking synovial fluid and rotational mechanics in major tracking systems.", duration: "10 Mins", url: "https://www.youtube.com/results?search_query=basic+mobility+exercises" },
        { title: "Decompression Stretching", description: "Passive muscle tissue lengthening to lower neurological structural tension.", duration: "12 Mins", url: "https://www.youtube.com/results?search_query=easy+stretches+workout" },
        { title: "High-Yield Micro Circuits", description: "Maximum metabolic stimulation optimized for hyper-restricted schedules.", duration: "5 Mins", url: "https://www.youtube.com/results?search_query=5+minute+workout" },
        { title: "Kinetic Barbell Physics", description: "Deconstructing bracing, leverage angles, and safe force application rules.", duration: "15 Mins", url: "https://www.youtube.com/results?search_query=how+to+lift+weights+properly" },
        { title: "Low-Impact Cardiac Engine", description: "Steady-state aerobic conditioning designed to spare deconditioned lower joints.", duration: "20 Mins", url: "https://www.youtube.com/results?search_query=low+impact+cardio+workout" },
        { title: "Postural Spine Alignment", description: "Targeted activation patterns to reverse anterior desk-slouching degradation.", duration: "8 Mins", url: "https://www.youtube.com/results?search_query=posture+correction+exercises" }
    ];

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
            <h2 style={{ color: '#ffffff', fontSize: '32px', marginBottom: '8px' }}>Kinetic <span style={{ color: '#dc2626' }}>Training Hub</span></h2>
            <p style={{ color: '#9ca3af', marginBottom: '40px' }}>Multi-demographic roster deployment and clinical exercise telemetry streams.</p>

            <h3 style={{ color: '#ffffff', fontSize: '22px', marginBottom: '20px', borderBottom: '1px solid #374151', paddingBottom: '10px' }}>Performance <span style={{ color: '#dc2626' }}>Specialists</span></h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '56px' }}>
                {trainers.map((trainer) => (
                    <div key={trainer.id} style={{ backgroundColor: '#1f2937', padding: '28px', borderRadius: '12px', border: '1px solid #374151', position: 'relative' }}>
                        <span style={{ position: 'absolute', top: '20px', right: '24px', backgroundColor: '#111827', color: trainer.color, border: `1px solid ${trainer.color}`, padding: '4px 12px', borderRadius: '50px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>{trainer.tag}</span>
                        <h4 style={{ color: '#ffffff', margin: '0 0 4px 0', fontSize: '20px' }}>{trainer.name}</h4>
                        <span style={{ color: trainer.color, fontSize: '13px', display: 'block', marginBottom: '16px', fontWeight: '600' }}>{trainer.specialty}</span>
                        <p style={{ color: '#9ca3af', margin: '0', fontSize: '14px', lineHeight: '1.6' }}>{trainer.bio}</p>
                    </div>
                ))}
            </div>

            <h3 style={{ color: '#ffffff', fontSize: '22px', marginBottom: '20px', borderBottom: '1px solid #374151', paddingBottom: '10px' }}>Video <span style={{ color: '#dc2626' }}>Telemetry Vault</span></h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                {videoWorkouts.map((vid, idx) => (
                    <div key={idx} style={{ backgroundColor: '#111827', borderRadius: '8px', border: '1px solid #374151', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <span style={{ color: '#dc2626', fontFamily: 'monospace', fontSize: '12px', fontWeight: 'bold' }}>STREAM_0{idx + 1}</span>
                                <span style={{ color: '#64748b', fontSize: '12px', backgroundColor: '#1f2937', padding: '2px 8px', borderRadius: '4px' }}>{vid.duration}</span>
                            </div>
                            <h4 style={{ color: '#ffffff', margin: '0 0 8px 0', fontSize: '16px' }}>{vid.title}</h4>
                            <p style={{ color: '#9ca3af', margin: '0 0 20px 0', fontSize: '13px', lineHeight: '1.5' }}>{vid.description}</p>
                        </div>
                        <a href={vid.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: '#dc2626', color: '#ffffff', textDecoration: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Launch Stream ↗</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 💡 NEW COMPONENT: THE SIGNUP PAGE VIEW
const SignupPageView = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vector, setVector] = useState('longevity');
    const [submitted, setSubmitted] = useState(false);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={{ maxWidth: '480px', margin: '60px auto', padding: '0 20px' }}>
            {!submitted ? (
                <div style={{ backgroundColor: '#1f2937', padding: '40px', borderRadius: '12px', border: '1px solid #374151', boxShadow: '0 20px 25px rgba(0,0,0,0.3)' }}>
                    <h2 style={{ color: '#ffffff', fontSize: '28px', marginTop: '0', marginBottom: '8px', fontWeight: '900' }}>Initialize <span style={{ color: '#dc2626' }}>Profile</span></h2>
                    <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '32px' }}>Register your terminal access parameters with the biometric mainframe.</p>
                    
                    <form onSubmit={handleSignupSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', color: '#9ca3af', fontSize: '12px', marginBottom: '6px', fontWeight: 'bold', letterSpacing: '0.5px' }}>FULL NAME</label>
                            <input type="text" required placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', color: '#9ca3af', fontSize: '12px', marginBottom: '6px', fontWeight: 'bold', letterSpacing: '0.5px' }}>SECURE EMAIL</label>
                            <input type="email" required placeholder="name@domain.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', color: '#9ca3af', fontSize: '12px', marginBottom: '6px', fontWeight: 'bold', letterSpacing: '0.5px' }}>ACCESS KEYPACK (PASSWORD)</label>
                            <input type="password" required placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', color: '#9ca3af', fontSize: '12px', marginBottom: '6px', fontWeight: 'bold', letterSpacing: '0.5px' }}>BIOMETRIC TARGET VECTOR</label>
                            <select value={vector} onChange={(e) => setVector(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', boxSizing: 'border-box', cursor: 'pointer' }}>
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
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
                    <h3 style={{ color: '#10b981', margin: '0 0 12px 0', fontSize: '24px', fontWeight: 'bold' }}>Profile Staged Successfully</h3>
                    <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', margin: '0 0 24px 0' }}> Welcome to the unit, <strong>{name}</strong>. Your access keypack has been built. Your target vector [<strong>{vector.toUpperCase()}</strong>] is now live inside the localized state engine.</p>
                    <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#64748b', backgroundColor: '#1f2937', padding: '12px', borderRadius: '6px', textTransform: 'lowercase' }}>STATUS: AWAITING_PRODUCTION_DATABASE_PIPE</div>
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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Telemetry Ingested!\nEmail: ${email}\nComment: ${comment}`);
        setEmail('');
        setComment('');
        setIsOpen(false);
    };

    return (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000, fontFamily: 'sans-serif' }}>
            {!isOpen ? (
                <button onClick={() => setIsOpen(true)} style={{ backgroundColor: '#dc2626', color: '#ffffff', border: 'none', borderRadius: '50px', padding: '14px 24px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)' }}>💬 System Feedback</button>
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
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            
            {/* 💡 STRUCTURAL SWITCHBOARD MAP COMPLETED */}
            {currentPage === 'home' ? <HomePageView /> : 
             currentPage === 'blog' ? <BlogPageView /> : 
             currentPage === 'facts' ? <FactsPageView /> : 
             currentPage === 'diets' ? <DietsPageView /> : 
             currentPage === 'exercise' ? <ExercisePageView /> : 
             currentPage === 'signup' ? <SignupPageView /> : 
             <UnderConstructionView pageName={currentPage} />}

            <FeedbackPortal />
        </div>
    );
}