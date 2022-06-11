//Countdown Timer
const clockdiv = document.getElementById("countdown");
const countDownTime = new Date(
  clockdiv.getAttribute("data-date")
).getTime();

const countdownfunction = setInterval(function () {
  const now = new Date().getTime();
  const diff = countDownTime - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(diff % (1000 * 60) / 1000);

  if (diff < 0) {
    clockdiv.style.display = "none";
    clearInterval(countdownfunction);
  } else {
    clockdiv.querySelector(".days").innerHTML = days;
    clockdiv.querySelector(".hours").innerHTML = hours;
    clockdiv.querySelector(".minutes").innerHTML = minutes;
    clockdiv.querySelector(".seconds").innerHTML = seconds;
  }
}, 1000);


// METAMASK CONNECTION
/*
window.addEventListener('DOMContentLoaded', () => {
  const onboarding = new MetaMaskOnboarding();
  const onboardButton = document.getElementById('connectWallet');
  let accounts;

  const updateButton = () => {
    if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
      onboardButton.innerText = 'Install MetaMask!';
      onboardButton.onclick = () => {
        onboardButton.innerText = 'Connecting...';
        onboardButton.disabled = true;
        onboarding.startOnboarding();
      };
    } else if (accounts && accounts.length > 0) {
      onboardButton.innerText = `✔ ...${accounts[0].slice(-4)}`;
      onboardButton.disabled = true;
      onboarding.stopOnboarding();
    } else {
      onboardButton.innerText = 'Connect MetaMask!';
      onboardButton.onclick = async () => {
        await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        .then(function(accounts) {
          onboardButton.innerText = `✔ ...${accounts[0].slice(-4)}`;
          onboardButton.disabled = true;
        });
      };
    }
  };

  updateButton();
  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    window.ethereum.on('accountsChanged', (newAccounts) => {
      accounts = newAccounts;
      updateButton();
    });
  }
});
*/

// FAQ DropDown
$(".question-wrapper").click(function() {
  var container = $(this).parents(".accordion");
  var answer = container.find(".answer-wrapper");
  var trigger = container.find(".material-icons.drop");
  var state = container.find(".question-wrapper");

  answer.animate({ height: "toggle" }, 100);

  if (trigger.hasClass("icon-expand")) {
    trigger.removeClass("icon-expand");
    // state.removeClass("active");
  } else {
    trigger.addClass("icon-expand");
    // state.addClass("active");
  }

  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  } else {
    container.addClass("expanded");
  }
});

// Date Updater
function updateYear() {
  let getYear = new Date().getFullYear();
  let year = document.getElementById('year').innerHTML = getYear;
}
updateYear();

// NFTs Slider
var index = 0;
var slides = document.querySelectorAll(".slides");

function changeSlide(){

  if(index < 0){
    index = slides.length - 1;
  }
  
  if(index > slides.length - 1){
    index = 0;
  }
  
  for( let i=0; i < slides.length; i++ ){
    slides[i].style.display = "none";
  }
  
  slides[index].style.display= "block";
  
  index++;
  
  setTimeout(changeSlide, 700);
  
}

changeSlide();