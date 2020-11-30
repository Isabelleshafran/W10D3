import React from 'react';


class TodoForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: Math.floor(Math.random() * 1000000), 
            title: '',
            body: ''
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    updateTitle(e) {
        this.setState({title: e.target.value })
    }

    updateBody(e) {
        this.setState({body: e.target.value})
    }

    handleSubmit(e) {
       
        e.preventDefault();

        const todo = Object.assign({}, this.state, { id: Math.floor(Math.random() * 1000000) });
        console.log(todo)
        this.props.receiveTodo(todo);
        console.log(this.props)

        this.setState({
            title: "",
            body: ""
        })

    }

    render() {
        return (
            <div>
                <h3>Form:</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                    </label>
                    <label>Body:
                        <input type="text" value={this.state.body} onChange={this.updateBody} />
                    </label>
                    <input type="submit" value="add todo"/>
                </form>
            </div>
        )
    }
}

export default TodoForm;