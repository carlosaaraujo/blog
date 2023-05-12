import { ContainerHeader } from "./styles";
import SearchIcon from "../../assets/search-icon.svg";
import { Dispatch, SetStateAction } from "react";

interface HeaderComponentProps {
	setSearch: Dispatch<SetStateAction<string>>;
	search: string;
}

export const Header = ({
	setSearch,
	search,
}: HeaderComponentProps) => {
	return (
		<ContainerHeader>
			<div className="logo">
				<h2>Codelândia</h2>
				<h2>blog</h2>
			</div>

			<div className="search">
				<span className="search-icon">
					<img src={SearchIcon} alt="" />
				</span>

				<input
					type="text"
					placeholder="Pesquisar no blog"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
		</ContainerHeader>
	);
};
