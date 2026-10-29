import { LitElement, html, css } from 'lit';

// Server-rendered only (no client:* directive) so it ships zero JavaScript.
export class ServiceCard extends LitElement {
  static properties = { href: {}, name: {}, tagline: {}, image: {}, alt: {} };
  static styles = css`
    a { display: block; color: inherit; text-decoration: none; background: var(--surface-2);
        border-radius: var(--radius-3); overflow: hidden; box-shadow: var(--shadow-2); height: 100%; }
    a:hover, a:focus-visible { box-shadow: var(--shadow-4); }
    img { width: 100%; aspect-ratio: 16/10; object-fit: cover; display: block; }
    div { padding: var(--size-4); }
    h3 { margin: 0 0 var(--size-2); font-size: var(--font-size-4); }
    p { margin: 0; color: var(--text-2); }
  `;
  declare href: string; declare name: string; declare tagline: string; declare image: string; declare alt: string;
  render() {
    return html`<a href=${this.href}><img src=${this.image} alt=${this.alt} loading="lazy" />
      <div><h3>${this.name}</h3><p>${this.tagline}</p></div></a>`;
  }
}
customElements.define('service-card', ServiceCard);
