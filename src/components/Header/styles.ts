import { styled } from "styled-components";

export const ContainerHeader = styled.header`
	width: 100%;
	height: 250px;

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	padding: 0 20px;
	background: linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);

	.logo {
		width: 100%;
		max-width: 900px;

		display: flex;
		justify-content: space-between;

		margin-bottom: 73px;
		font-size: 1.125rem;
	}

	.search {
		width: 100%;
		max-width: 900px;

		display: flex;
		align-items: center;
		gap: 17px;

		padding: 10px;
		background: rgba(255, 255, 255, 0.2);

		border: transparent;
		border-radius: 5px;

		input {
			background-color: transparent;
			width: 100%;

			border: none;
			color: #fff;
			font-size: 1rem;
		}

		::placeholder {
			color: #fff;
			opacity: 0.5;
		}

		.search-icon {
			display: flex;
			justify-content: center;
			align-items: center;

			background-color: transparent;
			border: none;
		}
	}
`;
