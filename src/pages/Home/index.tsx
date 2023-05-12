import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { results } from "../../data/data";
import { ContainerHome } from "./styles";

export interface IContent {
	id: number;
	date: string;
	title: string;
	content: string;
}

export const Home = () => {
	const [contents, setContents] = useState<IContent[]>([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		setContents(results);
	}, []);

	const renderList = contents
		.filter(
			(content) =>
				search.toLowerCase() === "" ||
				content.title.toLowerCase().includes(search.toLowerCase())
		)
		.map((content) => {
			return (
				<Card
					key={content.id}
					date={content.date}
					title={content.title}
					content={content.content}
				/>
			);
		});

	return (
		<>
			<Header setSearch={setSearch} search={search} />
			<ContainerHome>{renderList}</ContainerHome>
		</>
	);
};
