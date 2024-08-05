import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/app/components/ui/card"
  import { DollarSign } from "lucide-react"
  
  interface ExpensiveCardType {
    title: string, description: string, value: string
  }
  
  export default function ExpensiveCard({ title, description, value }: ExpensiveCardType) {
    return (
      <Card className="flex flex-col items-center justify-between rounded-lg border border-gray-200 p-2 shadow-md mx-3 my-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium ">{title}</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{`$ ${value}`}</div>
          <p className="text-xs text-muted-foreground">{description} </p>
        </CardContent>
      </Card>
  
    )
  }