const heading = React.createElement('h1',{id:'heading'},'Hello world from react app')
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

// console.log(heading) return object

const parent = React.createElement('div',{id:'parent'},
    [React.createElement('div',{id:'child'},
        [
            React.createElement('h1',{id:'heading'},'Hello world from react app'),
            React.createElement('h2',{id:'heading'},'Hello world from react app')
        ]
    ),
    React.createElement('div',{id:'child2'},
        [
            React.createElement('h1',{id:'heading'},'Hello world from react app'),
            React.createElement('h2',{id:'heading'},'Hello world from react app')
        ]
    )]
)
// console.log(parent) return object
root.render(parent)