import React from 'react'
import "./Recipe.css"

const Recipe = ({title, link, image, calories, totalYield, digest, sugar, fiber }) => {
	return(
		<div className="recipe">
			<h1>{title}</h1>
			<p><b>Calories: </b>{Math.round(calories)} &emsp;<b>Serves: </b>{totalYield}</p>
			<img className="image" src={image} alt="" />
			{/* <ol>
				{ingredients.map((ingredient, i) => (
					<li key={i}>{ingredient.text}</li>
				))}
			</ol> */}
			<p><b>Carbs: </b>{Math.round(digest[1].total)}g &emsp;<b>Fat: </b>{Math.round(digest[0].total)}g &emsp;<b>Protein: </b>{Math.round(digest[2].total)}g</p>
			<p><small><b>Fiber: </b>{Math.round(fiber.quantity)}g &emsp;<b>Cholseterol: </b>{Math.round(digest[3].total)}g &emsp;<b>Sodium: </b>{Math.round(digest[4].total)}g &emsp;<b>Sugar: </b>{Math.round(sugar.quantity)}g </small></p>
			<a href={link} target="_blank" className="bottomSpace ctrText sideSpace">{link}</a>
		</div>
	)
}

export default Recipe