import { prisma } from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";

// interface Props {
//     params: {id:string}
// }

const IssuesDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  // await delay(2000)

  return (
    <>
      <Grid columns={{ initial: "1", md: "2" }} gap={"5"}>
        <Box>
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id}/>
        </Box>
      </Grid>
    </>
  );
};

export default IssuesDetailPage;
