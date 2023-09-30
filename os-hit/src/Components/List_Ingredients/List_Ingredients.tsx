function List_Ingredients()
{
    const list_of_ingredients = [2, 1, 5, 7, 30];
    return (
        <div className = "Recipe">
            <div className = "">
                <p> { list_of_ingredients[0] } </p>
                <p> { list_of_ingredients[1] }</p>
                <p> { list_of_ingredients[2] }</p>
                <p> { list_of_ingredients[3] }</p>
            </div>
        </div>
    )
}

export default List_Ingredients