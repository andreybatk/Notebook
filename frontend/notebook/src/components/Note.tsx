import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Heading,
    Text,
  } from "@chakra-ui/react";
  import moment from "moment";
  
  export function Note(){
    return (
      <Card variant={"filled"}>
        <CardHeader>
          <Heading size={"md"}>test</Heading>
        </CardHeader>
        <Divider borderColor={"gray"} />
        <CardBody>
          <Text>test</Text>
        </CardBody>
        <Divider borderColor={"gray"} />
        <CardFooter>{moment('12.12.12 00:00:00').format("DD/MM/YYYY h:mm:ss")}</CardFooter>
      </Card>
    );
  };