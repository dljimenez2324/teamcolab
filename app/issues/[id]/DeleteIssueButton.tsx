import { Button, Link } from "@radix-ui/themes";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <>
      <Button color="red">
        <Link href={`/issues/${issueId}`}>Delete Issue</Link>
      </Button>
    </>
  );
};

export default DeleteIssueButton;
