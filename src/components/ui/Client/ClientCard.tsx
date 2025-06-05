import { Card, CardContent } from "@/components/ui/card";
import { Client } from "@/types";

type Props = {
  client: Client
}

export default function ClientCard({ client }: Props) {
  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold">{client.name}</h2>
        <p className="text-sm text-muted-foreground">{client.type}</p>
        <p className="text-sm mt-2">{client.siteCount} Site{client.siteCount !== 1 && "s"}</p>
      </CardContent>
    </Card>
  );
}
