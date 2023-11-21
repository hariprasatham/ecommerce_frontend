import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navListItemsMens, navListItemsWomens } from "@/lib/misc";

import { Menu } from "lucide-react";

export function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>ACME Store</SheetTitle>
          <SheetDescription>Categories </SheetDescription>
        </SheetHeader>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Mens</AccordionTrigger>
            <AccordionContent className="flex flex-col">
              {navListItemsMens.map((item) => (
                <a key={item.id} href={item.href} className="text-base">
                  {item.title}
                </a>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Women</AccordionTrigger>
            <AccordionContent className="flex flex-col">
              {navListItemsWomens.map((item) => (
                <a key={item.id} href={item.href} className="text-base">
                  {item.title}
                </a>
              ))}
            </AccordionContent>
          </AccordionItem>
          <a href="#" className="text-base">
            Kids
          </a>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
