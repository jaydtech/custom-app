import React from "react";
import { Button } from "@shopify/polaris";

export default function Index() {
  function test(){
    alert('Button clicked');
  }
  return (
    <>
      <Button onClick={test}>Click here</Button>
    </>
  );
}