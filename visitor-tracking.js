// Visitor Tracking System for Demascus Knights
document.addEventListener('DOMContentLoaded', () => {
    // Webhook notification
    const webhookUrl = 'https://discord.com/api/webhooks/1378616336451768451/CK8fQEhW7yINC4TPSmZoezM_NPYAJf2BdLZOIjluy2LGeC1ZZKJUYz33ExOo_pO5KQYr';
    
    // Get current page name
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get visitor information
    const visitorInfo = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        colorDepth: window.screen.colorDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer || 'Direct',
        currentPage: currentPage
    };

    // Create Discord embed
    const embed = {
        title: "🎭 Demascus Knights Visitor",
        description: "Ein neuer Besucher hat die Seite aufgerufen",
        color: 0xD4AF37, // Gold color
        thumbnail: {
            url: "https://demascus-knights.vercel.app/logo_2.png"
        },
        fields: [
            {
                name: "📄 Seite",
                value: `\`\`\`${visitorInfo.currentPage}\`\`\``,
                inline: false
            },
            {
                name: "⏰ Zeitpunkt",
                value: `\`\`\`${new Date().toLocaleString('de-DE', { 
                    timeZone: visitorInfo.timezone,
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })}\`\`\``,
                inline: false
            },
            {
                name: "🌐 Browser & System",
                value: `\`\`\`${visitorInfo.platform}\`\`\`\n\`\`\`${visitorInfo.userAgent}\`\`\``,
                inline: false
            },
            {
                name: "📱 Display",
                value: `\`\`\`${visitorInfo.screenWidth}x${visitorInfo.screenHeight} | ${visitorInfo.colorDepth}bit\`\`\``,
                inline: true
            },
            {
                name: "🌍 Sprache & Zeitzone",
                value: `\`\`\`${visitorInfo.language} | ${visitorInfo.timezone}\`\`\``,
                inline: true
            },
            {
                name: "🔗 Referrer",
                value: `\`\`\`${visitorInfo.referrer}\`\`\``,
                inline: false
            }
        ],
        footer: {
            text: "Demascus Knights • Visitor Tracking System",
            icon_url: "https://demascus-knights.vercel.app/logo_2.png"
        },
        timestamp: new Date().toISOString()
    };

    // Send webhook
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: "Demascus Knights",
            avatar_url: "https://demascus-knights.vercel.app/logo_2.png",
            embeds: [embed]
        })
    }).catch(error => console.error('Error sending webhook:', error));
}); 