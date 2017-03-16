import React from 'react'
import Title from './Title'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Lists from '../containers/Lists'

export const App = () => (
  <div> 
    <Title title='List' />
    <AddTodo />
    <Lists />
    <VisibleTodoList />
    <Footer />
  </div>
)

export const TodoPage = () => (
  <div> 
    <Title title='Tods' />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

// export default App


// list and VisibleTodoList use router