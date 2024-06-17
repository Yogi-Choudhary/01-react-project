import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
export default function Examples(){
  
  const [ selectedTopic, setSelectedTopic ] =  useState()
  // let tabContent = 'Please click a button'
  function hendleSelect(selectedButton) {
    // selected button => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  return (
    <section id='examples'>
      <h2>Example</h2>
      <menu>
        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => hendleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => hendleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => hendleSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => hendleSelect('state')}>State</TabButton>
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
  );
}