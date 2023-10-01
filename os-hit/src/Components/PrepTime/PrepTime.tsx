function PrepTime()
{
    const time_hours = 5;
    const time_minutes = 2;
    return (
        <div className = "Recipe">
            <div className = "Nutrition">
                <p> Hours: {time_hours} </p>
                <p> Minutes: {time_minutes} </p>
            </div>
        </div>
    )
}

export default PrepTime