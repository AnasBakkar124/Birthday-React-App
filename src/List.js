import React from "react";

const List = ({ people }) => {
	return (
		<>
			{people.map((person) => {
				const { id, name, age } = person;
				return (
					<>
						<article key={id} className="person"></article>
						<div>
							<h4>{name} </h4>
							<p>{age}</p>
						</div>
					</>
				);
			})}
		</>
	);
};

export default List;
