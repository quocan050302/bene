import React from 'react';
import './footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<ul className="footer-content grid">
				<li className="footer-content__item footer-label">
					<div className="footer-content__office">
						<div>
							<p>New York</p>
						</div>
						<span className="clock">
							<span className="clock__inner">
								03
								<span className="clock__colon">:</span>
								25
							</span>
						</span>
					</div>
					<div className="footer-content__office">
						<div>
							<p>Los Angeles</p>
						</div>
						<span className="clock">
							<span className="clock__inner">
								00
								<span className="clock__colon">:</span>
								26
							</span>
						</span>
					</div>
					<div className="footer-content__office">
						<div>
							<p>Miami</p>
						</div>
						<span className="clock">
							<span className="clock__inner">
								03
								<span className="clock__colon">:</span>
								27
							</span>
						</span>
					</div>
				</li>
				<li className="footer-content__item footer-label">
					<p>Work with us: </p>
					<p><a href="mailto:info@bennettandclive.com" linktype="url">info@bennettandclive.com</a></p>
					<p>CEO, Founder:  </p>
					<p>Sara Mouzayanni</p>
				</li>
				<li className="footer-content__item footer-label">
					<ul className="footer__socials">
						<li>
							<a href="https://www.instagram.com/bennettandclive/" target="_blank" rel="noopener noreferrer">Instagram</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/company/bennett-and-clive" target="_blank" rel="noopener noreferrer">LinkedIn</a>
						</li>
					</ul>
				</li>
				<li className="footer-content__item footer-label">
					<ul className="footer__socials">
						<li>
							<a href="/privacy-policy" className="">Privacy Policy</a>
						</li> 
						<li>
							<a href="/terms-of-use" className="">Terms of Use</a>
						</li>
					</ul>
				</li>
			</ul>
			<div className="footer__logo-wrapper">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1899 185" className="footer__logo">
					<g className="logo__bennett">
						<path d="M0 182.092V2.456h71.925c13.215 0 24.238 1.959 33.068 5.877 8.829 3.918 15.466 9.356 19.91 16.314 4.445 6.9 6.667 14.853 6.667 23.858 0 7.017-1.404 13.186-4.211 18.508-2.806 5.263-6.666 9.59-11.578 12.981-4.853 3.333-10.408 5.702-16.665 7.105v1.754c6.841.293 13.244 2.222 19.209 5.79 6.023 3.566 10.906 8.566 14.648 14.998 3.742 6.374 5.614 13.976 5.614 22.806 0 9.531-2.369 18.039-7.105 25.524-4.678 7.427-11.607 13.303-20.788 17.631-9.181 4.327-20.496 6.49-33.945 6.49H0Zm37.98-31.05h30.962c10.585 0 18.303-2.017 23.157-6.052 4.853-4.094 7.28-9.532 7.28-16.315 0-4.97-1.199-9.356-3.596-13.157-2.398-3.801-5.819-6.783-10.263-8.947-4.385-2.163-9.619-3.245-15.7-3.245H37.98v47.716Zm0-73.416h28.156c5.204 0 9.824-.906 13.858-2.719 4.094-1.871 7.31-4.503 9.649-7.894 2.397-3.392 3.596-7.456 3.596-12.192 0-6.491-2.31-11.725-6.93-15.701-4.56-3.976-11.051-5.964-19.472-5.964H37.98v44.47Z"></path>
						<path d="M146.01 182.092V2.456h121.044V33.77H183.99v42.803h76.836v31.314H183.99v42.892h83.415v31.313H146.01Z"></path>
						<path d="M430.212 2.456v179.636h-32.805L319.254 69.03h-1.315v113.062h-37.98V2.456h33.331l77.538 112.974h1.579V2.456h37.805Z"></path>
						<path d="M594.553 2.456v179.636h-32.804L483.596 69.03h-1.315v113.062h-37.98V2.456h33.331L555.17 115.43h1.579V2.456h37.804Z"></path>
						<path d="M608.643 182.092V2.456h121.044V33.77h-83.065v42.803h76.837v31.314h-76.837v42.892h83.416v31.313H608.643Z"></path>
						<path d="M735.75 33.77V2.456h147.534V33.77h-54.996v148.322h-37.542V33.769H735.75Z"></path>
						<path d="M889.463 33.77V2.456H1037V33.77h-55v148.322h-37.541V33.769h-54.996Z"></path>
					</g>
					<g className="logo__and">
						<path d="M1132.25 184.724c-12.4 0-23.1-2.222-32.11-6.666-9-4.445-15.93-10.468-20.78-18.069-4.8-7.661-7.2-16.198-7.2-25.613 0-7.017 1.41-13.244 4.21-18.682 2.81-5.439 6.73-10.438 11.76-14.999 5.03-4.62 10.87-9.21 17.54-13.771l34.82-22.894c4.51-2.865 7.81-5.876 9.91-9.034 2.11-3.216 3.16-6.695 3.16-10.438 0-3.567-1.43-6.87-4.3-9.911-2.86-3.041-6.93-4.532-12.19-4.474-3.51 0-6.55.79-9.12 2.369-2.57 1.52-4.59 3.537-6.05 6.052-1.41 2.456-2.11 5.204-2.11 8.245 0 3.742 1.05 7.543 3.16 11.403 2.11 3.859 4.91 7.952 8.42 12.28 3.51 4.268 7.34 8.888 11.49 13.858l85.17 97.712h-38.94l-71.05-79.117A525.024 525.024 0 0 1 1104 86.31c-4.62-5.848-8.47-12.046-11.57-18.596-3.1-6.607-4.65-13.77-4.65-21.49 0-8.712 2.01-16.548 6.05-23.506 4.09-6.959 9.82-12.456 17.19-16.49 7.37-4.094 15.96-6.14 25.79-6.14 9.59 0 17.86 1.959 24.82 5.876 7.02 3.86 12.4 9.006 16.14 15.438 3.8 6.374 5.7 13.39 5.7 21.051 0 8.48-2.1 16.169-6.31 23.069-4.16 6.841-10 12.981-17.55 18.42l-36.66 26.401c-4.97 3.626-8.65 7.339-11.05 11.14-2.34 3.742-3.51 7.338-3.51 10.788 0 4.269 1.05 8.099 3.16 11.491 2.1 3.391 5.08 6.081 8.94 8.069 3.86 1.93 8.4 2.895 13.6 2.895 6.31 0 12.54-1.433 18.68-4.298 6.2-2.924 11.81-7.046 16.84-12.368 5.09-5.379 9.15-11.753 12.2-19.121 3.04-7.368 4.56-15.525 4.56-24.472h30.96c0 10.993-1.2 20.905-3.6 29.735-2.39 8.771-5.73 16.431-10 22.981-4.26 6.49-9.15 11.812-14.64 15.963a330.678 330.678 0 0 1-5.09 3.158c-1.64.994-3.33 2.047-5.09 3.158-6.67 5.379-14.12 9.268-22.37 11.665-8.18 2.398-16.28 3.597-24.29 3.597Z"></path>
					</g>
					<g className="logo__clive">
						<path d="M1425.39 65.346h-38.42c-.7-4.97-2.14-9.385-4.3-13.244-2.16-3.918-4.94-7.251-8.33-10-3.4-2.748-7.31-4.853-11.76-6.315-4.38-1.462-9.15-2.193-14.29-2.193-9.3 0-17.4 2.31-24.3 6.93-6.9 4.56-12.25 11.227-16.05 19.998-3.8 8.713-5.7 19.297-5.7 31.752 0 12.806 1.9 23.566 5.7 32.279 3.86 8.712 9.24 15.291 16.14 19.735 6.9 4.444 14.88 6.666 23.94 6.666 5.09 0 9.8-.672 14.12-2.017 4.39-1.345 8.28-3.304 11.67-5.877a33.844 33.844 0 0 0 8.42-9.561c2.28-3.742 3.86-8.011 4.74-12.806l38.42.176c-1 8.245-3.48 16.197-7.46 23.858-3.92 7.601-9.21 14.414-15.88 20.437-6.6 5.964-14.5 10.701-23.68 14.209-9.12 3.45-19.44 5.175-30.96 5.175-16.02 0-30.35-3.625-42.98-10.876-12.57-7.251-22.51-17.747-29.82-31.489-7.25-13.742-10.88-30.378-10.88-49.909 0-19.59 3.68-36.255 11.05-49.996 7.37-13.742 17.37-24.21 30-31.402C1317.41 3.626 1331.62 0 1347.41 0c10.41 0 20.06 1.462 28.94 4.386 8.95 2.923 16.87 7.192 23.77 12.806 6.9 5.555 12.52 12.367 16.85 20.437 4.38 8.07 7.19 17.309 8.42 27.717Z"></path>
						<path d="M1435.33 182.092V2.456h37.98v148.323h77.01v31.313h-114.99Z"></path>
						<path d="M1596.16 2.456v179.636h-37.98V2.456h37.98Z"></path>
						<path d="m1642.58 2.456 43.41 136.482h1.67l43.51-136.482h42.1l-61.93 179.636h-48.94L1600.39 2.456h42.19Z"></path>
						<path d="M1777.6 182.092V2.456h121.04V33.77h-83.06v42.803h76.84v31.314h-76.84v42.892h83.41v31.313H1777.6Z"></path>
					</g>
				</svg>
			</div>
		</div>
	)
};

export default Footer;
