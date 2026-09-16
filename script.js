document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard loaded - Version 2');
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            console.log('Navigated to:', this.textContent.trim());
        });
    });
    
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.style.borderColor = '#B8671B';
            this.style.boxShadow = '0 0 0 2px rgba(184, 103, 27, 0.1)';
        });
        searchInput.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
        });
        
        // NEW IN V2: Real-time search
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterOrders(searchTerm);
        });
    }
    
    const kpiCards = document.querySelectorAll('.kpi-cards .card');
    kpiCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const values = ['$307.00', '98', '2', '4'];
            console.log('Card clicked:', this.querySelector('h3').textContent, '- Value:', values[index]);
        });
    });
    
    const tableRows = document.querySelectorAll('.orders-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';
        });
        row.style.cursor = 'pointer';
        row.addEventListener('click', function() {
            const orderNum = this.querySelector('td')?.textContent;
            if (orderNum) {
                console.log('Order selected:', orderNum);
            }
        });
    });
});

// NEW IN V2: Filter function
function filterOrders(searchTerm) {
    const tableRows = document.querySelectorAll('.orders-table tbody tr');
    tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (searchTerm === '' || text.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}