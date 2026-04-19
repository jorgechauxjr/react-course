const StComponentV2 = () => {
    const countries = ['Colombia', 'Israel', 'USA'];

return (
    <>
        <h1>Static Component V2</h1>
        <ul>
            {
            countries.map((country, index) => (
                <li key={ index }>{ country }</li>
            ))
            }
        </ul>
    </>
    )
}
export default StComponentV2;