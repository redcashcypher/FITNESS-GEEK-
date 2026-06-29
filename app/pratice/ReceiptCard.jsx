"use client";

export default function ReceiptCard({ totalBill, sharePerPerson, guestCount, serviceQuality }) {
    
    let accentColor = '#a855f7';
    let cardBg = 'rgba(168, 85, 247, 0.04)';
    
    if (serviceQuality === 'excellent') {
        accentColor = '#10b981';
        cardBg = 'rgba(16, 185, 129, 0.04)';
    } else if (serviceQuality === 'bad') {
        accentColor = '#f43f5e';
        cardBg = 'rgba(244, 63, 94, 0.04)';
    }

    return (
        <div style={{ 
            marginTop: '5px', 
            padding: '20px', 
            backgroundColor: cardBg, 
            borderRadius: '10px', 
            border: `1px solid ${accentColor}`,
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
            <h4 style={{ margin: '0 0 16px 0', color: accentColor, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px', fontWeight: '700' }}>
                📊 Computational Output Ledger
            </h4>
            
            <div style={{ fontSize: '14px', color: '#a1a1aa' }}>
                <p style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Allocation Level:</span>
                    <span style={{ color: '#fff', textTransform: 'capitalize', fontWeight: '600', fontSize: '13px', backgroundColor: '#27272a', padding: '2px 8px', borderRadius: '4px' }}>{serviceQuality}</span>
                </p>
                <p style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Gross Aggregated Capital:</span>
                    <strong style={{ color: '#fff', fontWeight: '500' }}>${totalBill.toFixed(2)}</strong>
                </p>
                <p style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Divisor Count:</span>
                    <strong style={{ color: '#fff', fontWeight: '500' }}>{guestCount} Units</strong>
                </p>
                
                <hr style={{ borderColor: '#27272a', margin: '16px 0' }} />
                
                <h3 style={{ margin: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', color: '#e4e4e7', fontWeight: '500' }}>Per-Capita Allocation:</span>
                    <span style={{ color: '#38bdf8', fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px' }}>${sharePerPerson.toFixed(2)}</span>
                </h3>
            </div>
        </div>
    );
}