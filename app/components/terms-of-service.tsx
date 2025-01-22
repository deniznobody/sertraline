import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

export function TermsOfService() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger
          onClick={() => toggleItem("item-1")}
          className="cursor-pointer font-semibold text-lg py-2  rounded-md"
        >
          1. Acceptance of Terms
        </AccordionTrigger>
        <AccordionContent className={`accordion-content ${openItems.includes("item-1") ? "open" : ""}`}>
          By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws
          and regulations.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger
          onClick={() => toggleItem("item-2")}
          className="cursor-pointer font-semibold text-lg py-2  rounded-md"
        >
          2. Use of Service
        </AccordionTrigger>
        <AccordionContent className={`accordion-content ${openItems.includes("item-2") ? "open" : ""}`}>
          You agree to use our service only for lawful purposes and in accordance with these Terms of Service.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger
          onClick={() => toggleItem("item-3")}
          className="cursor-pointer font-semibold text-lg py-2  rounded-md"
        >
          3. User Accounts
        </AccordionTrigger>
        <AccordionContent className={`accordion-content ${openItems.includes("item-3") ? "open" : ""}`}>
          You are responsible for maintaining the confidentiality of your account and password and for restricting
          access to your computer.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger
          onClick={() => toggleItem("item-4")}
          className="cursor-pointer font-semibold text-lg py-2  rounded-md"
        >
          4. Intellectual Property
        </AccordionTrigger>
        <AccordionContent className={`accordion-content ${openItems.includes("item-4") ? "open" : ""}`}>
          The content, organization, graphics, design, and other matters related to the Service are protected under
          applicable copyrights and other proprietary laws.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger
          onClick={() => toggleItem("item-5")}
          className="cursor-pointer font-semibold text-lg py-2  rounded-md"
        >
          5. Termination
        </AccordionTrigger>
        <AccordionContent className={`accordion-content ${openItems.includes("item-5") ? "open" : ""}`}>
          We reserve the right to terminate or suspend your account and access to the Service at our sole discretion,
          without notice, for conduct that we believe violates these Terms of Service or is harmful to other users of
          the Service, us, or third parties, or for any other reason.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
