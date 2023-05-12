import { styled } from "styled-components";

export const ContainerCard = styled.div`
	width: 100%;
	max-width: 900px;
	height: fit-content;

	padding: 25px;
	background-color: #fff;

	box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
	border-radius: 5px;

	.date {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;

		p {
			color: #717171;
		}
	}

	.content {
		margin-top: 22px;
		display: flex;
		flex-direction: column;
		gap: 8px;

		h1 {
			font-size: 1.625rem;
			color: #1a202c;
		}

		h2 {
			font-size: 1.125rem;
			color: #717171;
		}
	}

	.icon-like {
		border: none;
		background-color: transparent;

		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
