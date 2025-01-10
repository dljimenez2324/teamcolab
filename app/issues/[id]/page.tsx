import IssuesStatusBadge from "@/app/components/IssuesStatusBadge";
import { prisma } from "@/prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import React from "react";

// interface Props {
//     params: {id:string}
// }

const IssuesDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  await delay(1000)

  return (
    <>
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap={"3"} my={"2"}>
          <IssuesStatusBadge status={issue.status}/>
          
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card>

        <Text>{issue.description}</Text>
        </Card>
      </Box>
    </>
  );
};

export default IssuesDetailPage;
