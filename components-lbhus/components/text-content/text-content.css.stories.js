import React from 'react';
import { TextContent, TextContentMeta } from './text-content.js';
import { ListElements, ListElementsMeta } from '../list-elements/list-elements.js';
     
export default {
  title: 'Components/' + TextContentMeta.title,
  component: TextContent,
  parameters: {
    docs: {
        extractComponentDescription: () => TextContentMeta.description
      }
    },
    argTypes: TextContentMeta.argTypes
  }
      
const Template = (args) => <TextContent {...args} />;

export const Example = Template.bind({});

Example.args = TextContentMeta.argExamples;

export const differntTextContent = () => <div>
  {/* no changes */}
  <TextContent {...TextContentMeta.argExamples} contents="<p>Jag är en section som har flex start på mig</p>"></TextContent>
  {/* change with modifier */}
  <TextContent {...TextContentMeta.argExamples} modifiers="--justify-content-direction-to-center" contents="<p>Jag är en section som har center på mig</p>"></TextContent>
  {/* change trough json */}
  <TextContent {...TextContentMeta.argExamples} {...{"--_dev-text-content-align-items": "flex-end", "--_dev-text-content-bg-clr": "hotpink"} } contents="<p class='title'>Jag är en section som har flex end på mig</p>"></TextContent>
  
  <TextContent child-prop="textContents" example-props 
    css-props="
    --text-content-align-items: center;
    --text-content-justify-content: center;
    --text-content-text-align: center;
    "> 
    
    {/* 3 ways to use the props */}
    <TextContent>
        <h1 parent-prop="kurt">sune</h1>
        <h1 parent-prop="kurt">sune</h1>
    </TextContent>

    <TextContent child-prop="kurt">
        <h1>sune</h1>
        <h1>sune</h1>
    </TextContent>

    <TextContent child-prop="kurt">
        <h1>sune</h1>
        <h1 parent-prop="textContents">sune</h1>
    </TextContent> 

  </TextContent>
    
    
  {/* how this looked before */}
  <TextContent {...TextContentMeta.argExamples} {...{"--_dev-text-content-align-items": "center", "--_dev-text-content-bg-clr": "white"} }
  contents=" 
  <div>
    <section class='title'>
      <h2>Visningar</h2>
    </section>
    
    <section class='text'>
      <ul>
        <li><a class='link' href='http://www.lbhus.se/visningshus/lb-optimal-133-vikbolandet'>Lördag 26 sept LB Optimal 133 i Vikbolandet</a></li>
        <li><a class='link' href='http://www.lbhus.se/visningshus/lb-optimal-113-karlsborg'>Söndag 27 sept LB Optimal 113 i Karlsborg</a></li>
        <li><a class='link' href='http://www.lbhus.se/visningshus/lb-optimal-113-halmstad'>Söndag 27 sept LB Optimal 113 i Halmstad</a></li>
        <li><a class='link' href='http://www.lbhus.se/visningshus/lb-optimal-117-lindome'>Söndag 27 sept LB Optimal 117 i Lindome</a></li>
        <li><a class='link' href='http://www.lbhus.se/visningshus/lb-optimal-134'>Onsdag 1 okt LB Optimal 134 i Ås, Östersund</a></li>
        <li><a class='link' href='http://www.lbhus.se/visningshus/lb-optimal-141-ronneby'>Söndag 4 okt LB Optimal 141 i Ronneby</a></li>
        <li><a class='link' href='http://www.lbhus.se/visningshus/lb-flex-163-vaxjo'>Söndag 4 okt LB Flex 163 i Växjö</a></li>
        <li><a class='link' href='http://www.lbhus.se/visningshus/lb-optimal-141-halmstad'>Söndag 11 okt LB Optimal i Halmstad</a></li>
      </ul>
      
      <p> 
        <a class='link' href='http://www.lbhus.se/optimal'>Du kan även se alla våra LB Optimalhus i virtuella visningar redan nu. klicka här för att välja hus</a>
      </p> 
    </section>
    
    <section class='button'> 
        SE ALL VISNINGAR
      </section>
    </div>"
  ></TextContent>

  {/* how this looks now */}
  <TextContent child-prop="textContents" example-props >
    
    <h2>Visningar</h2>

    <ListElements child-prop="ul" example-props="" modifiers="link">
      <li><a href='http://www.lbhus.se/visningshus/lb-optimal-133-vikbolandet'>Lördag 26 sept LB Optimal 133 i Vikbolandet</a></li>
      <li><a href='http://www.lbhus.se/visningshus/lb-optimal-113-karlsborg'>Söndag 27 sept LB Optimal 113 i Karlsborg</a></li>
      <li><a href='http://www.lbhus.se/visningshus/lb-optimal-113-halmstad'>Söndag 27 sept LB Optimal 113 i Halmstad</a></li>
      <li><a href='http://www.lbhus.se/visningshus/lb-optimal-117-lindome'>Söndag 27 sept LB Optimal 117 i Lindome</a></li>
      <li><a href='http://www.lbhus.se/visningshus/lb-optimal-134'>Onsdag 1 okt LB Optimal 134 i Ås, Östersund</a></li>
      <li><a href='http://www.lbhus.se/visningshus/lb-optimal-141-ronneby'>Söndag 4 okt LB Optimal 141 i Ronneby</a></li>
      <li><a href='http://www.lbhus.se/visningshus/lb-flex-163-vaxjo'>Söndag 4 okt LB Flex 163 i Växjö</a></li>
      <li><a href='http://www.lbhus.se/visningshus/lb-optimal-141-halmstad'>Söndag 11 okt LB Optimal i Halmstad</a></li>
    
      <p> 
        <a href='http://www.lbhus.se/optimal'>Du kan även se alla våra LB Optimalhus i virtuella visningar redan nu. klicka här för att välja hus</a>
      </p>
    </ListElements>
  </TextContent>
</div>




  