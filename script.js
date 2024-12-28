document.addEventListener('DOMContentLoaded', () => {
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const maxBarWidth = 100;

    const analytics = {
        posts: randomInt(100, 10000),
        followers: randomInt(1000, 1000000),
        impressions: randomInt(10000, 10000000),
        verifiedFollowers: randomInt(10, 100000),
        bookmarks: randomInt(100, 10000),
        likes: randomInt(1000, 100000),
        reposts: randomInt(500, 50000),
        shares: randomInt(500, 50000),
        engagementRate: (Math.random() * 10).toFixed(2),
        demographics: { // Corrected the typo 'demograohics' to 'demographics'
            gender: { male: 50, female: 45, others: 5 }, age: { '18-24': 25, '25-34': 35, '35-44': 20, '45+': 20 },
            location: { USA: 40, UK: 20, Canada: 15, Others: 25 }
        }
    };
    const updateBar = (id, value, maxValue) => {
        const bar = document.getElementById(id);
        const width = (value / maxValue) * maxBarWidth;
        bar.style.width = `${width}%`; // Fixed template literal to use backticks
    };

    const updateMetrics = () => {
        for (let metric in analytics) {
            if (['posts', 'followers', 'impressions', 'verifiedFollowers', 'bookmarks', 'likes', 'reposts', 'shares'].includes(metric)) { // Corrected condition logic
                document.getElementById(metric).textContent = analytics[metric].toLocaleString(); // Fixed typo 'tolocaleString' to 'toLocaleString'
                updateBar(`${metric}Bar`, analytics[metric], Math.max(...Object.values(analytics)));
            }
        }
        document.getElementById('engagementRate').textContent = `${analytics.engagementRate}%`; // Fixed template literal
        updateBar('engagementRateBar', analytics.engagementRate * 100, 1000); // Assuming a max engagement rate of 10%
    };

    const displayDemographic = (id, data) => {
        let content = '';
        for (let category in data) {
            content += `<p>${category}: ${data[category]}%</p>`; 
        }
        document.getElementById(id).innerHTML = content;
    };

    displayDemographic('gender', analytics.demographics.gender); 
    displayDemographic('age', analytics.demographics.age); 
    displayDemographic('location', analytics.demographics.location); 


    // Update metrics every 10 seconds for a live feel
    setInterval(() => {
        analytics.posts += randomInt(0, 10);
        analytics.followers += randomInt(0, 15);
        analytics.impressions += randomInt(0, 1000);
        analytics.verifiedFollowers += randomInt(0, 5);
        analytics.bookmarks += randomInt(0, 10);
        analytics.likes += randomInt(0, 50);
        analytics.reposts += randomInt(0, 20);
        analytics.shares += randomInt(0, 20);
        analytics.engagementRate = (parseFloat(analytics.engagementRate) + (Math.random() * 0.1 - 0.05)).toFixed(2);

        updateMetrics();
    }, 10000);
});