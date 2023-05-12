import { ContainerCard } from "./styles";
import HeatIcon from "../../assets/heart-icon.svg";

interface CardComponentProps {
	date: string;
	title: string;
	content: string;
}

export const Card = ({
	date,
	title,
	content,
}: CardComponentProps) => {
	return (
		<ContainerCard>
			<div className="date">
				<p>{date}</p>

				<button type="submit" className="icon-like">
					<img src={HeatIcon} alt="Botão de Like" />
				</button>
			</div>

			<div className="content">
				<h1>{title}</h1>
				<h2>{content}</h2>
			</div>
		</ContainerCard>
	);
};
