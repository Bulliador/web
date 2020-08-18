let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-triggers'),
        tabContent = document.querySelectorAll('.tabs-content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('tabs-triggers--active');
        });
        this.classList.add('tabs-triggers--active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('tabs-content--active') : item.classList.remove('tabs-content--active');
        })
    }

};


tab();