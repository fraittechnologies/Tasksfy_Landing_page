document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
            
            // Close other open FAQs in the same category
            const currentCategory = faqItem.closest('.faq-category');
            currentCategory.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
        });
    });
    
    // Category Filter Functionality
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get category to show
            const categoryToShow = btn.dataset.category;
            
            // Hide all categories
            document.querySelectorAll('.faq-category').forEach(category => {
                category.classList.remove('show');
            });
            
            // Show selected category
            document.querySelector(`.faq-category.${categoryToShow}`).classList.add('show');
        });
    });
    
    // Initialize first category as active
    document.querySelector('.faq-category.general').classList.add('show');
});