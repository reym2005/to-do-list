export const EventHandling=()=>
{
    const handleButtonClick = (event) => {
        console.log(event);
        console.log("Button clicked!");
    };
    return(
    <>
    <button onClick={handleButtonClick}>
        Click Me
    </button>
    </>);
};
