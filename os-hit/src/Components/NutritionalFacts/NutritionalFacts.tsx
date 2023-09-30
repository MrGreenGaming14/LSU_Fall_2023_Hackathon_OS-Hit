function Nutrition()
{
    const nutritional_facts = {calories: 300, protein: '12g', fat: '20g', sodium: '6mg'};
    return (
        <div className = "Recipe">
            <div className = "Nutrition">
                <p> { nutritional_facts.calories } </p>
                <p> { nutritional_facts.protein }</p>
                <p> { nutritional_facts.fat }</p>
                <p> { nutritional_facts.sodium }</p>
            </div>
        </div>
    )
}

export default Nutrition