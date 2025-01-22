"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TermsOfService } from "../components/terms-of-service"
import { PrivacyPolicy } from "../components/privacy-policy"

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("tos")

  return (
    <div className="container mx-auto py-12 px-6 lg:px-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Legal Information
      </h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex border rounded-md">
          <TabsTrigger
            value="tos"
            className={`w-1/2 py-4 text-lg font-medium uppercase transition-all ${
              activeTab === "tos"
                ? "dark:text-white text-black"
                : "text-gray-400 hover:dark:text-white hover:text-black"
            }`}
          >
            Terms of Service
          </TabsTrigger>
          <TabsTrigger
            value="privacy"
            className={`w-1/2 py-4 text-lg font-medium uppercase transition-all ${
              activeTab === "privacy"
                ? "dark:text-white text-black"
                : "text-gray-400 hover:dark:text-white hover:text-black"
            }`}
          >
            Privacy Policy
          </TabsTrigger>    
        </TabsList>
        <div className="mt-10">
          <TabsContent value="tos">
            <h2 className="text-2xl font-semibold mb-6 dark:text-white text-black">
              Terms of Service
            </h2>
            <TermsOfService />
          </TabsContent>
          <TabsContent value="privacy">
            <h2 className="text-2xl font-semibold mb-6 dark:text-white text-black">
              Privacy Policy
            </h2>
            <PrivacyPolicy />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
