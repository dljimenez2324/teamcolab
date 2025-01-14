import { Box, Card, Flex } from "@radix-ui/themes";
import {Skeleton} from '@/app/components/'

// import Skeleton from '@/app/components/Skeleton'
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";


const LoadingIssueDetailPage = () => {
  return (
    <>
      <Box className="max-w-xl">
        <Skeleton baseColor="#202020" highlightColor="#444"/>
        <Flex gap={"3"} my={"2"}>
          <Skeleton width={"5rem"} baseColor="#202020" highlightColor="#444"/>

          <Skeleton width={"4rem"} baseColor="#202020" highlightColor="#444"/>
        </Flex>
        <Card className="prose" mt={"4"}>
          <Skeleton count={3} baseColor="#202020" highlightColor="#444"/>
        </Card>
      </Box>
    </>
  );
};

export default LoadingIssueDetailPage;
