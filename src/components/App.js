import React from 'react'
import Title from './Title'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Lists from '../containers/Lists'

// material touch support
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <Title />
      <AddTodo />
      <Lists />
      <VisibleTodoList />
      <Footer />
    </div>
  </MuiThemeProvider>
)

export default App


// list and VisibleTodoList use router