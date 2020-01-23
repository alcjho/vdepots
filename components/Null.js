export default function blank(){
    const msg = 'No component found for this widget type - Create a component from your left!';
    return (
        <div className="col-12">
            <h4>{msg}</h4>
        </div>
    )
}