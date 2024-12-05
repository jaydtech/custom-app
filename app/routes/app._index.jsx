import React from "react";
import { Button } from "@shopify/polaris";

export default function Index() {
  function test(event){
   // alert('Button clicked');
    event.target.style.color = 'red';
  }
  return (
    <>
      <Button onClick={test}>Click here</Button>
    </>
  );
}