import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { House } from "@phosphor-icons/react"
import React from "react"

export const Content: React.FC = function () {
  return (
    <>
      <Tabs defaultValue="address" className="w-[400px]">
        <TabsList className="bg-transparent">
          <TabsTrigger value="address" className="flex flex-col">
            <div className="">
              <House size={32} />
            </div>
            Endereço
          </TabsTrigger>
          <TabsTrigger value="password">Metodo de pagamento</TabsTrigger>
          <TabsTrigger value="review">Revisar</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </>
  )
}
