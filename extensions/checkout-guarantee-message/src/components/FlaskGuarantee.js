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
  
  export default function FlaskGuarantee() {
    return (
      <BlockLayout border="none" rows={['auto', 'fill']}>
        <View border="none">
          <Image 
            source="https://cdn.shopify.com/s/files/1/0172/4383/2374/files/Sunnies_Guarantee_resized.png?v=1709797288"
          />
        </View>
        <View border="none" padding={['base', 'none', 'none', 'none']}>
          <Text size="base">We hope you are happy with your purchase. If not, your Sunnies Flask includes a limited lifetime warranty against manufacturing defects and workmanship issues. Applies to Sunnies Club members only. <Link appearance="monochrome" to="https://ph.sunniesstudios.com/pages/sunnies-guarantee">Learn more</Link></Text>
        </View>
      </BlockLayout>
    );
  }
  