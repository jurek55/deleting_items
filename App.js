class App extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        users: [
                {id: 1, name:'antek'},
                {id: 2, name: 'janek'}, 
                {id: 3, name: 'kasia'}, 
                {id: 4, name: 'tosia'}, 
                {id:5, name:'marek'},
                {id:6, name:'michał'},
                {id:7, name:'jacek'},
                {id:8, name:'renata'},
                ]
            } 
        }

handleClick=(select)=>{
    const users = this.state.users;
    const index = users.indexOf(select);
    const users1 = users.splice(index,1)
    this.setState({
        users: users
    })
}
    render() { 
        const users = this.state.users
        const list = users.map(user => {return <User key={user.id} user={user.name} click={()=>this.handleClick(user)}/>})
        return (
            <React.Fragment>
                <div className='wrapper'>
                <h1>Lista użytkowników</h1>
                <table>{list}</table>
                </div>
            </React.Fragment>
        );
    }
}
const User=(props)=>{
    return (
    <React.Fragment>
        <tr className='wraper'>
            <td className='user'>{props.user}</td>
            <td><button type='submit' name={props.user} onClick={props.click}>usuń użytkownika</button></td>
        </tr>
    </React.Fragment>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));