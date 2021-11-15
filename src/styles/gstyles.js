import { createGlobalStyle } from 'styled-components';
// Devices like mediaqueryes
import { device } from './rstyles';

// Images
import dbackground from '../images/background.jpg';

// Variables
import { colors, mixins, fonts, gap } from './vstyles';

// Nomenclatura BEM  block + __ + element +--+ modifier all on lowercase

export const Gstyles = createGlobalStyle`
	html {
		${mixins.box}
		scroll-behavior: smooth;
		font-size: 42.4%; /* 1REM = 10px */

		@media only screen and ${device.laptop} {
			font-size: 62.5%; /* 1REM = 10px */
		}
	}

	body {
		${mixins.box}
		font-size: 1.6rem;
		${fonts.font_01}
		color: ${colors.white};
		background-color: ${colors.blue};
		background-image: url(${dbackground});
		background-size: auto 100%;
		background-repeat: no-repeat;
		background-position: center center;
		margin: 0;
		padding: 0;
		min-height: 100vh;

		@media only screen and ${device.laptop} {
			margin: 0;
			padding: 0;
		}

		@media only screen and ${device.laptopL} {
			margin: 0;
			padding: 0;
		}
	}

	h1 {
		${fonts.font_00}
		font-size: 3.0rem;
		line-height: 3.0rem;
		text-transform: uppercase;
		max-width: 400px;
		text-
		: left;
		margin: 0;
		padding: 0;
	}

	h2 {
		${fonts.font_01}
		font-size: 1.25rem;
		text-transform: uppercase;
		max-width: 300px;
		text-align: left;
		margin: ${gap.gap5} 0 0 0;
		padding: 0;
	}

	h3 {
		${fonts.font_00}
		font-size: 2rem;
		text-transform: uppercase;
		text-align: left;
		margin: 0 0 ${gap.gap20};
		padding: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		aling-items: flex-start;
		justify-content: flex-start;
	}

	main {
		padding: ${gap.gap30} ${gap.gap20} ${gap.gap20};
		height: auto;
		min-height: calc(100vh - 84px);
		display: flex;

		-items: center;
		justify-content: center;
	}

	* {
		${mixins.box}
		background-color: transparent;
		font-smooth: never;
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
	}

	img {
		width: 100%;
	}
`;

export const HeaderStyles = createGlobalStyle`
	header{
		${mixins.box}
		width: 100%;
		height: auto;
		min-height: auto;
		background: transparent;
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: row;
		aling-items: flex-start;
		justify-content: space-between;
		-webkit-backdrop-filter: blur(3.5px);
		backdrop-filter: blur(3.5px);
		background-color: rgba(38, 42, 144, 0.2);
		padding: ${gap.gap30} ${gap.gap20} ${gap.gap20};
		box-shadow: 0 1px 32px 0 rgba(0, 0, 0, 0.6);
		border-bottom: solid 1px ${colors.blue};

		span{
			${fonts.font_01}
			font-size: 2rem;
			text-transform: uppercase;
			background-image: linear-gradient(to bottom, #e8c56b, #b5861c);
			line-height: normal;
			padding: 2px;
			border-radius: 3px;
			margin: 0 0 0  ${gap.gap5};
			display: flex;

			b{
				${fonts.font_00}
				margin: 0 5px 0 0;
			}
		}

		.logo{
			display: flex;
			flex-direction: column;

			-items: flex-start;
			flex-wrap: no-wrap;
			justify-content: center;

			&--name{
				width: 100%;
				display: flex;
				flex-direction: row;

				-items: center;
				justify-content: flex-start;
			}
		}
	}
`;

export const FooterStyles = createGlobalStyle`
	footer{
		${mixins.box}
		width: 100%;
		height: auto;
		min-height: auto;
		background: transparent;
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		-webkit-backdrop-filter: blur(3.5px);
		backdrop-filter: blur(3.5px);
		background-color: rgba(38, 42, 144, 0.2);
		padding: ${gap.gap30} ${gap.gap20} ${gap.gap20};
		box-shadow: 0 1px 32px 0 rgba(0, 0, 0, 0.6);
		border-top: solid 1px ${colors.blue};

		@media only screen and ${device.laptop} {
			flex-direction: row;
			align-items: flex-start;
		}

		p{
			${fonts.font_01}
			font-size: 2rem;
			text-transform: uppercase;
			line-height: normal;
			padding: 2px;
			border-radius: 3px;
			margin: 0 0 0  ${gap.gap5};
			display: flex;

			b{
				${fonts.font_00}
				margin: 0 5px 0 0;
			}
		}
`;

export const Content = createGlobalStyle`
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
		width: 100%;

		@media only screen and ${device.laptop} {
			max-width: 80%;
		}

		&--form{
			width: 100%;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			-webkit-backdrop-filter: blur(3.5px);
			backdrop-filter: blur(3.5px);
			background-color: rgba(255, 255, 255, 0.7);
			padding: ${gap.gap30} ${gap.gap20} ${gap.gap20};
			box-shadow: 0 1px 32px 0 rgba(0, 0, 0, 0.6);
			border: solid 1px ${colors.blue};
			margin: 0 0 ${gap.gap10} 0;

			label {
				${fonts.font_00}
				font-size: 2.5rem;
				letter-spacing: -0.2px;
				margin: 0 0 ${gap.gap20} 0;
				color: ${colors.blue};
			}

			select {
				width: 100%;
				display: block;
				padding: 1rem;
				-webkit-appearance: none;
				border-radius: 10px;
				border: none;
				${fonts.font_00}
				font-size: 2.0rem;
				border: solid 1px ${colors.blue};
				margin: 0 0 ${gap.gap20} 0;
			}

			input {
				${fonts.font_00}
				font-size: 2.5rem;
				padding: ${gap.gap5};
				background-color: ${colors.blue};
				border: none;
				width: 100%;
				border-radius: 10px;
				color: #FFFFFF;
				transition: background-color .3s ease;

				&:hover {
					background-color: ${colors.lblue};
					cursor: pointer;
				}
			}

			p{
				color: ${colors.lblue};
				${fonts.font_00}
				font-size: 2rem;
			}
		}

		&--cotizacion {
			width: 100%;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 0 0 ${gap.gap10} 0;

			@media only screen and ${device.laptop} {
				display: grid;
				grid-template-columns: minmax(calc(50% - 5px), auto) minmax(calc(50% - 5px), auto);
				gap: ${gap.gap10};

				 -ms-grid-columns: minmax(calc(50% - 5px), auto) minmax(calc(50% - 5px), auto);
				-ms-column-gap: ${gap.gap10};
			}

			p {
				${fonts.font_00}
				font-size: 2rem;
				-webkit-backdrop-filter: blur(3.5px);
				backdrop-filter: blur(3.5px);
				background-color: rgba(255, 255, 255, 0.7);
				padding: ${gap.gap5} ${gap.gap20};
				box-shadow: 0 1px 32px 0 rgba(0, 0, 0, 0.6);
				border: solid 1px ${colors.blue};
				display: flex;
				width: 100%;
				margin: 0 0 ${gap.gap5} 0;
				border-radius: 5px;
				color: ${colors.blue};

				span {
					${fonts.font_01}
					margin: 0 0 0 10px;
				}
			}
		}

		&--cotizados {
			width: 100%;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 0 0 ${gap.gap10} 0;

			ul{
				list-style: none;
				width: 100%;
				margin: 0;
				padding: 0;

				@media only screen and ${device.laptop} {
					display: grid;
    			grid-template-columns: minmax(calc(33.3% - 13.3px), auto) minmax(calc(33.3% - 13.3px), auto) minmax(calc(33.3% - 13.3px), auto);
    			gap: ${gap.gap10};

   			  -ms-grid-columns: minmax(calc(33.3% - 13.3px), auto) minmax(calc(33.3% - 13.3px), auto) minmax(calc(33.3% - 13.3px), auto);
    			-ms-column-gap: ${gap.gap10};
				}
			}

			li{
				${fonts.font_00}
				font-size: 2rem;
				-webkit-backdrop-filter: blur(3.5px);
				backdrop-filter: blur(3.5px);
				background-color: rgba(255, 255, 255, 0.7);
				padding: ${gap.gap5} ${gap.gap20};
				box-shadow: 0 1px 32px 0 rgba(0, 0, 0, 0.6);
				border: solid 1px ${colors.blue};
				display: flex;
				width: 100%;
				margin: 0 0 ${gap.gap5} 0;
				border-radius: 5px;
				color: ${colors.blue};
				justify-content: space-between;

				&:last-of-type {
					margin: 0;
				}

				@media only screen and ${device.laptop} {
					&:last-of-type {
						margin: 0 0 ${gap.gap5} 0;
					}
				}

				span {
					${fonts.font_00}
					margin: 0 0 0 10px;
					color: ${colors.yellow};
					font-size: 3rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
`