// import { Link } from '@remix-run/react';
import {
    reactExtension as checkoutReactExtension,
    BlockLayout,
    View,
    Link,
    Text,
    Image
  } from '@shopify/ui-extensions-react/checkout';
    
  import React from 'react';
    
  export default function EyewearGuarantee() {
    return (
      <BlockLayout border="none" rows={['auto', 'fill']}>
        <View border="none">
          <Image 
            source="https://cdn.shopify.com/s/files/1/0172/4383/2374/files/Sunnies_Guarantee_resized.png?v=1709797288"
          />
        </View>
        <View blockAlignment padding={['base', 'none', 'none', 'none']}>
          <Text size="base">Thank you. We hope you are happy with your purchase. If not, you’re welcome to change your Sunnies Studios product* within 90 days of purchase. </Text>
          <Text>*Terms and conditions apply </Text>
          <Link appearance="monochrome" to="/pages/sunnies-guarantee">Learn more</Link>
        </View> 
      </BlockLayout>
    );
  }