import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
export default function Examples(){
  
  const [ selectedTopic, setSelectedTopic ] =  useState()
  // let tabContent = 'Please click a button'
  function hendleSelect(selectedButton) {
    // selected button => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Example" id='examples'>
      <menu>
        <TabButton isSelected={selectedTopic === 'components'} onClick={() => hendleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => hendleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onClick={() => hendleSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onClick={() => hendleSelect('state')}>State</TabButton>
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
    </Section>
  );
}