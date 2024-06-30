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
import { INote } from "../types";
  
export function Note({ title, description, createdAt } : INote){
  return (
    <Card variant={"filled"}>
      <CardHeader>
        <Heading size={"md"}>{title}</Heading>
      </CardHeader>
      <Divider borderColor={"gray"} />
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <Divider borderColor={"gray"} />
      <CardFooter>{moment(createdAt).format("DD/MM/YYYY h:mm:ss")}</CardFooter>
    </Card>
  );
};