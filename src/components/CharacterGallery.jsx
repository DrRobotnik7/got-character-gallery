import characterData from "../data/characterData"
import Character from "./CharacterCard/Character.jsx"
import { useState } from "react"
import React from "react";

function CharacterGallery() {

  const [charData, setCharData] = useState(characterData)

  return (
    <>
			<div>
				{charData.map((char) => (
					<Character
						key={char._id}
						name={char.name}
						image={char.imgUrl}
						birth={char.birth}
						death={char.death}
						race={char.race}
						realm={char.realm}
						spouse={char.spouse}
					/>
				))}
			</div>
    </>
  );
}

export default CharacterGallery