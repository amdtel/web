import { LitElement, html, css } from 'lit';

// Server-rendered only (no client:* directive) so it ships zero JavaScript.
export class ServiceCard extends LitElement {
  static properties = { href: {}, name: {}, tagline: {}, image: {}, alt: {} };
  static styles = css`
    a { position: relative; display: flex; align-items: flex-end; min-height: 26rem; overflow: hidden; color: white; text-decoration: none; background: #282926; }
    img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 400ms ease; }
    a::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgb(20 21 20 / 85%), rgb(20 21 20 / 5%) 65%); }
    a:hover img, a:focus-visible img { transform: scale(1.05); }
    div { position: relative; z-index: 1; padding: 1.5rem; }
    h3 { margin: 0 0 .5rem; font: 400 1.9rem/1.05 'DM Serif Display', Georgia, serif; }
    p { margin: 0; opacity: .85; }
    span { display: inline-block; margin-top: 1rem; color: #e8caa5; font-size: .72rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
  `;
  declare href: string; declare name: string; declare tagline: string; declare image: string; declare alt: string;
  render() {
    return html`<a href=${this.href}><img src=${this.image} alt=${this.alt} loading="lazy" />
      <div><h3>${this.name}</h3><p>${this.tagline}</p><span>View service ›</span></div></a>`;
  }
}
customElements.define('service-card', ServiceCard);
