class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="" class="skip-link">Skip to content</a>
      <header class="header" aria-label="kykoi kichen">
        <a href="/" class="logo" tabindex="0">
          <alt="Kykoi Kichen">
          <i class="fas fa-cookie-bite"></i> Kykoi Kichen
        </a>
        <div class="icons">
          <button id="menu-btn" type="button" class="fas fa-bars fa-3x" tabindex="0" aria-label="tombol menu"></button>
        </div>
        <nav class="navbar" id="navigationDrawer" aria-label="Navigasi utama">
          <a href="#/home" tabindex="0" aria-label="home">home</a>
          <a href="#/favorite" tabindex="0" aria-label="favorite">Favorite</a>
          <a href="https://github.com/dikymonz" tabindex="0" target="_blank" rel="noopener noreferrer"
            aria-label="about us">About Us</a>
        </nav>
      </header>
    `;
  }
}

class FooterElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <small>Copyright &copy; 2023 - Dikymonz All Right Reserved.</small>
      </footer>
    `;
  }
}

customElements.define('custom-header', HeaderElement);
customElements.define('custom-footer', FooterElement);
