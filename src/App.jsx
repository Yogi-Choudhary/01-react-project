import { useState } from 'react'; 

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [ selectedTopic, setSelectedTopic ] =  useState()
  // let tabContent = 'Please click a button'
  function hendleSelect(selectedButton) {
    // selected button => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic)
  }
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title = {CORE_CONCEPTS[0].title}
              description = {CORE_CONCEPTS[0].description}
              image = {CORE_CONCEPTS[0].image} 
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>  
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => hendleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => hendleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => hendleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => hendleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p> 
          ): (
            <div id='tab-content'>  
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          ) } 
        </section>
      </main>
    </div>
  );
}

export default App;
