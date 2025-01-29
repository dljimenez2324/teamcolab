'use client'
import { Spinner } from '@/app/components';
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const DeleteIssueButton = ({issueId}:{issueId:number}) => {

    const router = useRouter();
    const [error, setError] = useState(false);

    const [isDeleting, setIsDeleting] = useState(false)


    const DeleteIssue = () => {
      try {
           setIsDeleting(true)
        axios.delete('/api/issues/' + issueId);
        router.push('/issues/list')
        router.refresh();

        
      } catch (error) {
        setIsDeleting(true)
        setError(true);
      }
    }
  return (
   <>
  <AlertDialog.Root>
	<AlertDialog.Trigger>
		<Button color="red" disabled={isDeleting}>Delete {isDeleting && <Spinner/>}</Button>
	</AlertDialog.Trigger>
	<AlertDialog.Content maxWidth="450px">
		<AlertDialog.Title>Delete Issue</AlertDialog.Title>
		<AlertDialog.Description size="2">
	This will delete FOR EVER!!!!
		</AlertDialog.Description>

		<Flex gap="3" mt="4" justify="end">
			<AlertDialog.Cancel>
				<Button variant="soft" color="gray">
					Cancel
				</Button>
			</AlertDialog.Cancel>
			<AlertDialog.Action>
				<Button variant="solid" color="red" onClick={DeleteIssue}>
					Delete Issue
				</Button>
			</AlertDialog.Action>
		</Flex>
	</AlertDialog.Content>
</AlertDialog.Root>

<AlertDialog.Root open={error}>
        <AlertDialog.Content>
            <AlertDialog.Title>
              Error
            </AlertDialog.Title>
            <AlertDialog.Description>
              This issue could not be deleted
            </AlertDialog.Description>
            <Button className='mt-2' color='gray' variant='soft' onClick={()=> setError(false)}>OK</Button>
        </AlertDialog.Content>
</AlertDialog.Root>

   </>
  )
}

export default DeleteIssueButton


////// OLD CODE //////
// "use client";
// import { AlertDialog, Button, Flex, Link } from "@radix-ui/themes";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
//   // const issue = await prisma.issue.findUnique({
//   //   where: { id: parseInt(params.id) },
//   // });

//   // if (!issue) notFound();
//   const router = useRouter();

//   const [error, setError] = useState(false);

//   const handleDelete = async () => {
//     try {
//       // throw new Error("Not implemented");
//       await axios.delete(`/api/issues/${issueId}`);
//       router.push("/issues");
//       router.refresh();
//     } catch (error) {
//       setError(true);
//     }
//   };

//   return (
//     <>
      
//       <AlertDialog.Root>
//         <AlertDialog.Trigger>
//           <Button color="red">Delete Issue</Button>
//         </AlertDialog.Trigger>
//         <AlertDialog.Content maxWidth="450px">
//           <AlertDialog.Title>Delete Issue</AlertDialog.Title>
//           <AlertDialog.Description size="2">
//             Are you sure? This issue will be permanently deleted!
//           </AlertDialog.Description>

//           <Flex gap="3" mt="4" justify="end">
//             <AlertDialog.Cancel>
//               <Button variant="soft" color="gray">
//                 Cancel
//               </Button>
//             </AlertDialog.Cancel>
//             <AlertDialog.Action>
//               <Button
//                 variant="solid"
//                 color="red"
//                 onClick={handleDelete}
//               >
//                 Delete Issue
//               </Button>
//             </AlertDialog.Action>
//           </Flex>
//         </AlertDialog.Content>
//       </AlertDialog.Root>

//       <AlertDialog.Root open={error}>
//         <AlertDialog.Content>
//           <AlertDialog.Title>
//             Error
//           </AlertDialog.Title>
//           <AlertDialog.Description>
//             Something went wrong. Issue could not be deleted!
//           </AlertDialog.Description>
//           <Button className="mt-2" color="gray" variant="soft" onClick={()=> setError(false)}>Okay</Button>
//         </AlertDialog.Content>
//       </AlertDialog.Root>

//     </>
//   );
// };

// export default DeleteIssueButton;
