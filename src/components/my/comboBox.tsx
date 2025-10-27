"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "cmdk";
import { useState } from "react";

export function ComboboxDemo({ value, setValue }: any) {
  const [open, setOpen] = React.useState(false);

  const [datasOfCategories, setDatasOfCategories] = useState<
    { name: string; _id: number }[]
  >([]);
  React.useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/api/categories");
    const responseData = await result.json();
    setDatasOfCategories(responseData.data);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[288px] justify-between"
        >
          {value
            ? datasOfCategories.find((framework) => framework.name === value)
                ?.name
            : "Select Category"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[290px] p-0">
        <Command>
          <CommandInput placeholder=" Search Category" className="h-9 w-full" />
          <CommandList>
            <CommandEmpty>No Category found.</CommandEmpty>
            <CommandGroup>
              {datasOfCategories.map((framework) => (
                <CommandItem
                  className="ml-5 mt-3"
                  key={framework._id}
                  value={framework.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
