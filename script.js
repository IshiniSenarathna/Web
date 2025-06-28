// Show alert for main navigation and hero buttons
function showComingSoon(feature) {
    alert(feature + " feature coming soon!");
}

document.addEventListener('DOMContentLoaded', function() {
    // Navbar buttons
    document.getElementById('lostItemsBtn').onclick = function(e) { e.preventDefault(); showComingSoon('Lost Items'); };
    document.getElementById('foundItemsBtn').onclick = function(e) { e.preventDefault(); showComingSoon('Found Items'); };
    document.getElementById('reportBtn').onclick = function(e) { e.preventDefault(); showComingSoon('Report'); };
    document.getElementById('dashboardBtn').onclick = function(e) { e.preventDefault(); showComingSoon('Dashboard'); };
    document.getElementById('loginBtn').onclick = function(e) { e.preventDefault(); showComingSoon('Login'); };
    document.getElementById('registerBtn').onclick = function(e) { e.preventDefault(); showComingSoon('Register'); };

    // Hero section buttons
    document.getElementById('searchBtn').onclick = function(e) { e.preventDefault(); showComingSoon('Search Items'); };
    document.getElementById('reportItemBtn').onclick = function(e) { e.preventDefault(); showComingSoon('Report Item'); };
    document.getElementById('browseBtn').onclick = function(e) { e.preventDefault(); showComingSoon('Browse All Items'); };
    document.getElementById('ctaRegisterBtn').onclick = function(e) { e.preventDefault(); showComingSoon('Register'); };

    // Search form
    document.getElementById('searchForm').onsubmit = function(e) {
        e.preventDefault();
        const query = document.getElementById('searchInput').value.trim();
        if(query) {
            alert('Searching for: ' + query + '\n(This would show search results on a real site)');
        } else {
            alert('Please enter a search term.');
        }
    };
});
