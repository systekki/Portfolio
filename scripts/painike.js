document.addEventListener('DOMContentLoaded', () => {
  const portfolioBtn = document.getElementById('showPortfolioMsg');
  if (portfolioBtn) {
    portfolioBtn.addEventListener('click', () => {
      alert('olet portfolio sivustolla');
    });
  }
});
