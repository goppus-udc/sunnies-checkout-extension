import {
  reactExtension,
  Banner,
  BlockStack,
  useApi,
  useInstructions,
  useTranslate,
  useDiscountCodes,
  useEmail,
  useApplyDiscountCodeChange
} from "@shopify/ui-extensions-react/checkout";
import React, { useState, useEffect } from "react";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const email = useEmail();
  const code = useDiscountCodes();
  const applyDiscountCodeChange = useApplyDiscountCodeChange();
  const clientId = "95jgnvudiht03075kdhfrw256789dhif";
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if (email && code.length > 0) {
      const url = `https://www.sunniessystems.com/api/3.0/324566/promo-code/?client_id=${clientId}&email_address=${email}&promo_code=${code[0]}`;
      fetch(url, {
        method: "GET",
        headers: {
          'oassis-api-key': '052398FSOWRI2UR7FHJKG789403JHFSA'
        }
      })
        .then(res => res.json())
        .then(response => {
          const isValidCode = response.length === 0;
          // console.log(response)
          setIsValid(isValidCode);
          if (!isValidCode) {
            applyDiscountCodeChange({ type: 'removeDiscountCode', code: code[0] });
          }
        })
        .catch(err => console.error(err));
    }
  }, [email, code, clientId, applyDiscountCodeChange]);

  if (isValid === false) {
    return (
      <BlockStack border={"dotted"} padding={"tight"}>
        <Banner status="critical" title="Warning">
          Invalid discount code
        </Banner>
      </BlockStack>
    );
  }

  return null;
}
