import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button className='modalBtn' onClick={() => this.setState({ isOpen: true })}>

          About To Do List
        </button>

        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal-body'>
              <button className='modalBtn2' onClick={() => this.setState({ isOpen: false })}>
                Close
              </button>

              <h2>The main benefits of to-do lists</h2>
              <p>Let’s start with the 10 main benefits of keeping neatly organized to-do lists: </p>
              <ul>
                <li> It’s the best way to manage and organize your life (if you do it the right way) </li>
                <li> You’ll easily break down your big goals into items, and items into tasks </li>
                <li>  You’ll see both the forest and the trees (with the right system in place) </li>
                <li>  You’ll set your priorities more easily </li>
                <li>    You can measure progress more easily (what gets done) </li>
                <li>   You’ll free your brain and get more mental bandwidth (memory improvement) </li>
                <li> You won’t forget things </li>
                <li>     You’ll definitely manage your time better </li>
                <li> To-do lists will boost your motivation, especially when crossing out each completed task  </li>
                <li>       With a Kanban type of to-do list you can nicely visualize your workload </li>
                <li>   Lists, especially visualized ones, bring a lot of value to your personal organization system. </li>
              </ul>

            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
