"use client";
import { useState, useEffect } from 'react';
import ReceiptCard from './ReceiptCard.jsx';

export default function Page() {
    const [foodBill, setFoodBill] = useState(0);
    const [service, setService] = useState('good');
    const [guestCount, setGuestCount] = useState(1); 
    const [systemStatus, setSystemStatus] = useState("Initializing Engine...");

    useEffect(() => {
        const timer = setTimeout(() => {
            setSystemStatus("All Modules Synchronized ✅");
        }, 1500); // Shorter, crisper delay line for production feel
        return () => clearTimeout(timer);
    }, []);

    let tipPercent = 0;
    switch(service) {
        case "excellent": tipPercent = 0.20; break;
        case "good":      tipPercent = 0.15; break;
        case "bad":       tipPercent = 0.10; break;
        default:          tipPercent = 0.05;
    }

    let tipAmount = foodBill * tipPercent;
    let finalTotal = foodBill + tipAmount;
    let perPersonShare = finalTotal / (guestCount > 0 ? guestCount : 1);

    return (
        <div style={{ 
            padding: '60px 20px', 
            backgroundColor: '#09090b', // Modern deep obsidian black
            minHeight: '100vh', 
            color: '#fafafa', 
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            
            {/* Professional Micro-Badge */}
            <div style={{ 
                backgroundColor: '#18181b', 
                padding: '6px 14px', 
                borderRadius: '20px', 
                marginBottom: '20px', 
                fontSize: '12px', 
                border: '1px solid #27272a',
                color: '#a1a1aa',
                fontWeight: '500',
                letterSpacing: '0.5px'
            }}>
                ⚙️ STATUS: <span style={{ color: '#38bdf8', fontWeight: '600' }}>{systemStatus}</span>
            </div>

            {/* Main Application Container Card */}
            <div style={{ 
                backgroundColor: '#18181b', // Crisp zinc dark panel
                padding: '35px', 
                borderRadius: '16px', 
                width: '100%',
                maxWidth: '420px', 
                border: '1px solid #27272a', 
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' 
            }}>
                
                <h2 style={{ margin: '0 0 5px 0', fontSize: '24px', fontWeight: '700', letterSpacing: '-0.5px', color: '#fff' }}>
                    Metrics Splitter
                </h2>
                <p style={{ margin: '0 0 25px 0', fontSize: '14px', color: '#71717a' }}>
                    Calculate compound transaction balances live.
                </p>

                <hr style={{ borderColor: '#27272a', marginBottom: '25px' }} />
                
                {/* Field 1: Numerical Entry */}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: '#e4e4e7', fontWeight: '600' }}>Base Capital Value ($)</label>
                    <div style={{ position: 'relative' }}>
                        <input 
                            type="number" 
                            value={foodBill === 0 ? "" : foodBill} 
                            onChange={(e) => setFoodBill(Number(e.target.value))} 
                            placeholder="0.00" 
                            style={{ padding: '12px 14px', width: '100%', borderRadius: '8px', border: '1px solid #3f3f46', backgroundColor: '#09090b', color: '#fff', boxSizing: 'border-box', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s' }} 
                        />
                    </div>
                </div>

                {/* Field 2: Custom Selection Menu */}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: '#e4e4e7', fontWeight: '600' }}>Allocation Multiplier</label>
                    <select value={service} onChange={(e) => setService(e.target.value)} style={{ padding: '12px 14px', width: '100%', borderRadius: '8px', border: '1px solid #3f3f46', backgroundColor: '#09090b', color: '#fff', fontSize: '15px', outline: 'none', cursor: 'pointer' }}>
                        <option value="excellent">Premium Allocation (20%)</option>
                        <option value="good">Standard Allocation (15%)</option>
                        <option value="bad">Low Allocation (10%)</option>
                    </select>
                </div>

                {/* Field 3: Guest Input */}
                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: '#e4e4e7', fontWeight: '600' }}>Distribution Divisor (Guests)</label>
                    <input type="number" min="1" value={guestCount} onChange={(e) => setGuestCount(Number(e.target.value))} style={{ padding: '12px 14px', width: '100%', borderRadius: '8px', border: '1px solid #3f3f46', backgroundColor: '#09090b', color: '#fff', boxSizing: 'border-box', fontSize: '15px', outline: 'none' }} />
                </div>

                {/* Dynamic Child Component Output */}
                <ReceiptCard 
                    totalBill={finalTotal} 
                    sharePerPerson={perPersonShare} 
                    guestCount={guestCount} 
                    serviceQuality={service}
                />

                

            </div>
        </div>
    );
}