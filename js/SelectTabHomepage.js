function selectTab(tabId) {
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active-tab');
    }

    var buttons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active-tab-button');
    }

    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');

    var selectedButton = document.getElementById('button-' + tabId);
    selectedButton.classList.add('active-tab-button');
}

//window.onload = selectTab;