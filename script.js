const mockData = [
    {
        category: "Tinctures",
        items: [
            { brand: "AYRLOOM", name: "High Dose Tincture", price: 60.00, type: "default", thc: "1000mg", weight: "30ml" },
            { brand: "AYRLOOM", name: "Everyday Drops Tincture", price: 30.00, type: "default", thc: "500mg", weight: "15ml" },
            { brand: "MFNY", name: "Oishii Live Resin Tincture", price: 48.00, type: "hybrid", thc: "800mg", weight: "30ml" },
            { brand: "MFNY", name: "Hash Burger Live Resin Tincture", price: 48.00, type: "indica", thc: "850mg", weight: "30ml" },
            { brand: "AYRLOOM", name: "High Dose Tincture", price: 60.00, type: "default", thc: "1000mg", weight: "30ml" },
            { brand: "AYRLOOM", name: "Everyday Drops Tincture", price: 30.00, type: "default", thc: "500mg", weight: "15ml" },
            { brand: "MFNY", name: "Oishii Live Resin Tincture", price: 48.00, type: "hybrid", thc: "800mg", weight: "30ml" },
            { brand: "MFNY", name: "Hash Burger Live Resin Tincture", price: 48.00, type: "indica", thc: "850mg", weight: "30ml" }
        ]
    },
    {
        category: "Concentrates",
        items: [
            { brand: "CIRCLE HILL FARM", name: "Live Rosins", price: 108.00, type: "sativa", thc: "75%", weight: "2g" },
            { brand: "MFNY", name: "Live Resins", price: 65.00, type: "hybrid", thc: "82%", weight: "1g" },
            { brand: "NYCE", name: "Live Rosins", price: 60.00, type: "indica", thc: "78%", weight: "1g" },
            { brand: "UMAMII", name: "Live Rosins", price: 85.00, type: "indica", thc: "80%", weight: "1g" },
            { brand: "CIRCLE HILL FARM", name: "Live Rosins", price: 108.00, type: "sativa", thc: "75%", weight: "2g" },
            { brand: "MFNY", name: "Live Resins", price: 65.00, type: "hybrid", thc: "82%", weight: "1g" },
            { brand: "NYCE", name: "Live Rosins", price: 60.00, type: "indica", thc: "78%", weight: "1g" },
            { brand: "UMAMII", name: "Live Rosins", price: 85.00, type: "indica", thc: "80%", weight: "1g" }
        ]
    }
];

function renderMenu() {
    const container = document.getElementById('menu-content');
    let html = '';

    mockData.forEach(cat => {
        html += `
            <div class="category">
                <h2 class="category-title">${cat.category}</h2>
                <div class="items-grid">
        `;

        cat.items.forEach(item => {
            html += `
                <div class="item-card">
                    <div class="item-header">
                        <div>
                            <div class="item-brand">${item.brand}</div>
                            <div class="item-name">${item.name}</div>
                        </div>
                        <div class="item-price">$${item.price.toFixed(2)}</div>
                    </div>
                    <div class="item-footer">
                        <div class="strain-type type-${item.type}">${item.type}</div>
                        <div class="item-details">
                            <span>THC: ${item.thc}</span>
                            <span>Wt: ${item.weight}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function initScrolling() {
    const wrapper = document.getElementById('scrolling-wrapper');
    const content = document.getElementById('menu-content');

    // Clone content for seamless looping
    const clone = content.cloneNode(true);
    clone.id = 'menu-content-clone';

    const scrollContainer = document.createElement('div');
    scrollContainer.style.display = 'flex';
    scrollContainer.style.flexDirection = 'column';

    content.parentNode.insertBefore(scrollContainer, content);
    scrollContainer.appendChild(content);
    scrollContainer.appendChild(clone);

    let scrollPos = 0;
    const speed = 0.05 * (window.innerHeight / 100); // Speed adjusted based on screen height

    function scroll() {
        scrollPos += speed;

        // Reset scroll position when the first element is completely scrolled out of view
        if (scrollPos >= content.offsetHeight) {
            scrollPos = 0;
        }

        scrollContainer.style.transform = `translateY(-${scrollPos}px)`;
        requestAnimationFrame(scroll);
    }

    requestAnimationFrame(scroll);
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    // Wait for render to calculate heights
    setTimeout(initScrolling, 500);
});
