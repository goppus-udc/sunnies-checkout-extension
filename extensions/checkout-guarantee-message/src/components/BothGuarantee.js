import {
    reactExtension as checkoutReactExtension,
    BlockLayout,
    View,
    Link,
    Text,
    Image,
    List,
    ListItem
  } from '@shopify/ui-extensions-react/checkout';
  
  import React from 'react';
  
  export default function BothGuarantee() {
    return (
      <BlockLayout border="none" rows={['auto', 'fill']}>
        <View border="none">
          <Image 
            source="https://cdn.shopify.com/s/files/1/0172/4383/2374/files/Sunnies_Guarantee_resized.png?v=1709797288"
          />
        </View>
        <View>
          <View padding={['base', 'none']}>
            <Text size="base">We hope you are happy with your purchase. If not, you’re welcome to change your Sunnies purchase:</Text>
          </View>
            <List spacing="tight">
              <ListItem>Sunnies Studios products include a 90-day guarantee. <Link appearance="monochrome" to="/pages/sunnies-guarantee" >Learn more</Link></ListItem>
              <ListItem> Sunnies Flask includes a limited lifetime warranty against manufacturing defects and workmanship issues. Applies to Sunnies Club members only. <Link appearance="monochrome" to="/pages/sunnies-guarantee" >Learn more</Link></ListItem>
            </List>
        </View>
      </BlockLayout>
    );
  }
  