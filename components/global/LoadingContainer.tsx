import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
<<<<<<< HEAD
=======
import SectionTitle from "./SectionTitle";
>>>>>>> db658a637e9dc1f2b80ee933c1a508e52f97b7d0

function LoadingContainer() {
  return (
    <>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
      </div>
    </>
  );
}

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-4 w-3/4 mt-4" />
        <Skeleton className="h-4 w-1/2 mt-4" />
      </CardContent>
    </Card>
  );
}
export default LoadingContainer;
