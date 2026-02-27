import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://kayzjwnvzupfvvuyqxnm.supabase.co/storage/v1/object/sign/cabin-images/cabin-001.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZWIzMDcxOS0xZDljLTRhYzYtOTlhMy0wYzM0YjAzOTk5NTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvY2FiaW4tMDAxLmpwZyIsImlhdCI6MTc3MjIwNTI1OCwiZXhwIjoxODAzNzQxMjU4fQ.Ynb5gZQhz_Y1-2eLUXqGCvviUssEZ67dpTwMefK6h3M" />
    </Row>
  );
}

export default Cabins;
