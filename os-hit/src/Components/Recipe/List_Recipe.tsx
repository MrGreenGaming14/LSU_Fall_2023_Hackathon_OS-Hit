function Recipe()
{
    const recipe = ["20 grams of sugar", "2 spoonfuls of garlic"];
    return (
        <div className = "Recipe">
            <div className = "Nutrition">
                <p> { recipe[1] } </p>
                <p> { recipe[0] }</p>
            </div>
        </div>
    )
}

export default Recipe