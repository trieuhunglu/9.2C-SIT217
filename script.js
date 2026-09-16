// Just basic navigation and hover effects
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard loaded - Version 1');
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
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
    }
    
    const tableRows = document.querySelectorAll('.orders-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';
        });
    });
});