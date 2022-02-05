// Try to recreate this wireframe with React. Be sure to create a few components (e.g. app, sidebar, reviews, average rating, sentiment analysis, website visitors).

class App extends React.Component {

render(){
    return(
        <div class='wrapper'>
        <h1>DashBoard</h1>
        <Sidebar/>
        <Reviews/>
        <Rating/>
        <Analysis/>
        <Website/>
        
        </div>
    )
}
}

class Sidebar extends React.Component{
    render(){
        return(
            <div class='box1' >
                <h3>DashBoard</h3>
                <h3>Widget</h3>
                <h3>Reviews</h3>
                <h3>Customers</h3>
                <h3>Online Analysis</h3>
                <h3>Settings</h3>
        
            </div>
        )
    }
}
class Reviews extends React.Component{
    render(){
        return(
            <div class='box2'>
                <h2>Reviews</h2>
                <br/><p>1,281</p>
            </div>
        )
    }
}
class Rating extends React.Component{
    render(){
        return(
            <div class='box3'>
                <h2>Average Rating</h2>
                <br/><p>4.6</p>
            </div>
        )
    }
}
class Analysis extends React.Component{
    render(){
        return(
            <div class='box4'>
                <h2>Sentiment Analysis</h2>
                <br/><p>960</p>
                <p>122</p>
                <p>321</p>
            </div>
        )
    }
}
class Website extends React.Component{
    render(){
        return(
            <div class='box5'>
                <h2>Website Visitors</h2>
                <br/><p>821</p>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );