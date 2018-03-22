import React from 'react';
import ReactDOM from 'react-dom';

// class Hello extends React.Component {
//   render() {
//     return (
//         <h1>my name is {this.props.name} and i love {this.props.action}</h1>
//     );
//   }
// }
//
//
//
// ReactDOM.render(
//   <div>
//     <Hello name='Mark' action = 'rock'/>
//     <Hello name='Marks' action = 'play basketball'/>
//     <Hello name='Markin' action = 'skate'/>
//     <Hello name='Markern' action = 'rocknroll'/>
//   </div>,
// document.getElementById('root')

var CONTACTS = [
            {
                id: 1,
                name: 'Darth Vader',
                phoneNumber: '+250966666666',
                image: 'img/darth.gif'
            }, {
                id: 2,
                name: 'Princess Leia',
                phoneNumber: '+250966344466',
                image: 'img/leia.gif'
            }, {
                id: 3,
                name: 'Luke Skywalker',
                phoneNumber: '+250976654433',
                image: 'img/luke.gif'
            }, {
                id: 4,
                name: 'Chewbacca',
                phoneNumber: '+250456784935',
                image: 'img/chewbacca.gif'
            }
        ];


class Contact extends React.Component {
  render() {
    return(
      <li>{this.props.name}</li>
    )
  }
};

class ContactsList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            CONTACTS.map(function (el) {
              return <Contact name={el.name} />
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render (
  <ContactsList/>,
  document.getElementById('root')
)
