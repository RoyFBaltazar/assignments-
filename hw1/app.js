// Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
// Make inputs so that new items can be added
// Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
// Add some style to your app
// Stretch Add a button that says 'remove' and when clicked the value of isPurchased is toggled

class App extends React.Component{
    state ={
        list:[{
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false,}
      ]
}
    
    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        
        const newItem={
            item: this.state.item,
            quantity: this.state.quantity,
            units: this.state.units
        }
        this.setState({list: [ newItem, ...this.state.list],
        item:'',
        quantity: 0,
        units: '',
        })
        
        
    }
    
    render(){
    
        return(
            <div>
                <h1>Shopping list</h1>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor='item'> Item: </label>    
            <input type='text' value={this.state.item} name='item' onChange={this.handleChange} />
            <label htmlFor='quantity'> Quantity: </label>  
            <input type='number' value={this.state.quantity} name='quantity' onChange={this.handleChange} />
            <label htmlFor='units'> Units: </label>  
            <input type='number' value={this.state.units} name='units' onChange={this.handleChange} />
            <input type="submit" />
            </form>
            <h3>To Buy:</h3>
            <ul>{this.state.list.map(items=><li>Item: {items.item} <br/>Quantity: {items.quantity}<br/>  Units: {items.units}</li> )}
            
            </ul>


            </div>
        )
    }
    }
    ReactDOM.render(<App/>, document.getElementById('root'))