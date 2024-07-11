// import { Link } from '@remix-run/react';
import {
  reactExtension as checkoutReactExtension,
  BlockLayout,
  View,
  Link,
  Text,
  Image,
  useApi,
  List,
  ListItem,  
  Button,
  Modal,
  TextBlock,
  Sheet
} from '@shopify/ui-extensions-react/checkout';
 
import React from 'react';

import EyewearGuarantee from './components/EyewearGuarantee';
import BothGuarantee from './components/BothGuarantee';
import FlaskGuarantee from './components/FlaskGuarantee';

const guaranteeBlock = checkoutReactExtension("purchase.thank-you.block.render", () => <Guarantee />);
export { guaranteeBlock };
 
let value = 1;
function Guarantee() {
  const cartObject = useApi();
  
  const {ui} = useApi();
  const lineCurrent = cartObject.lines.current;
  let flaskCount = 0;
  let eyewearCount = 0;
  lineCurrent.forEach(attributes => {
    attributes.attributes.forEach(key => {
      console.log(key.key, key.value);
      if(key.key.includes("item_type") && key.value.includes('flask')){
        flaskCount++;
      } else if(key.key.includes("item_type") && !key.value.includes('flask')) {
        eyewearCount++;
      } 
    }); 
  });   
  return (
    <View border="base" padding="base">
      
            <Sheet className="testClass"
              id="basic-sheet"
              heading="Basic Sheet"
              accessibilityLabel="A sheet with text content"
              defaultOpen="true"
            >
              <TextBlock>
                Basic Sheet Content
              </TextBlock>
            </Sheet>

      {
      (flaskCount > 0 && eyewearCount === 0) ? 
        <FlaskGuarantee /> :
      (flaskCount > 0 && eyewearCount > 0) ? 
        <BothGuarantee /> :
      (flaskCount === 0 && eyewearCount > 0) ? 
        <EyewearGuarantee /> : <EyewearGuarantee />
      }
    </View>
  );
}