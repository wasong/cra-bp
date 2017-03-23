import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import gql from 'graphql-tag'
import debounce from 'lodash.debounce'

import { query } from '../../utils/query'

/**
 * Graphql query to invoke on click
 * @return [Promise] loading and data response
 */
const onClickQuery = async () => {
  const options = {
    query: gql`
      query {
        allKappachinoes {
          id
          createdAt
          posts
        }
      }
    `,
  }

  const p = await query(options)
  console.log(p)
}

/**
 * Debounce multiple queries into one
 * @type {Function} Executes onClickQuery function after 250seconds of waiting if no
 * further invokations
 */
const debouncedQuery = debounce(onClickQuery, 250)

const App = props => (
  <div className="App">
    <div><RaisedButton label="Console log Redux!" onClick={props.loadDefault} /></div>
    <div><RaisedButton label="Material UI" /></div>
    <div><RaisedButton label="onClick Query" onClick={debouncedQuery} /></div>
    <p><Link to="/auth">Auth</Link></p>
    <div>
      Display Graphql query:&nbsp;
      {
        props.data.loading || props.data.error
        ? <span>Loading...</span>
        : (
          <div>
            {
              props.data.allKappachinoes.map(user => (
                <div key={user.id}>{user.posts}</div>
              ))
            }
          </div>
        )
      }
    </div>
  </div>
)

export default App
