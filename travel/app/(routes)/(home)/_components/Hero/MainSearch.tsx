"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const MainSearch = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    destination: "paris", //Default Destination
    activity: "ocak",
    duration: "çarşamba",
    price: "1800$",
  });

  const handleChange = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    const query = new URLSearchParams(formValues).toString();
    console.log(query);
    router.push(`/search?${query}`);
  };
  return (
    <div className="absolute z-50 left-1/2 transform -translate-x-1/2 top-[630px] md:top-[865px] lg:top-[335px] xl:top-[430] 2xl:top-[525px] container px-8">
      <div className=" bg-white shadow-lg py-10 px-2 lg:px-24 rounded-md lg:rounded-full flex flex-col mt-12 lg:mt-24 lg:flex-row items-center justify-between p-4 gap-3">
        <Select
          defaultValue={formValues.destination}
          onValueChange={(value) => handleChange("destination", value)}
        >
          <SelectTrigger className="w-full py-6">
            <SelectValue placeholder="destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="paris">Paris</SelectItem>
            <SelectItem value="türkiye">Türkiye</SelectItem>
            <SelectItem value="tokyo">Tokyo</SelectItem>
          </SelectContent>
        </Select>
        <Select
          defaultValue={formValues.activity}
          onValueChange={(value) => handleChange("activity", value)}
        >
          <SelectTrigger className="w-full py-6">
            <SelectValue placeholder="activity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ocak">Ocak</SelectItem>
            <SelectItem value="aralık">Aralık</SelectItem>
            <SelectItem value="temmuz">Temmuz</SelectItem>
          </SelectContent>
        </Select>
        <Select
          defaultValue={formValues.duration}
          onValueChange={(value) => handleChange("duration", value)}
        >
          <SelectTrigger className="w-full py-6">
            <SelectValue placeholder="duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pazartesi">Pazartesi</SelectItem>
            <SelectItem value="çarşamba">Çarşamba</SelectItem>
            <SelectItem value="pazar">Pazar</SelectItem>
          </SelectContent>
        </Select>
        <Select
          defaultValue={formValues.price}
          onValueChange={(value) => handleChange("price", value)}
        >
          <SelectTrigger className="w-full py-6">
            <SelectValue placeholder="price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1500-2000">1500₺ - 2000₺</SelectItem>
            <SelectItem value="2500-3000">2500₺ - 3000₺</SelectItem>
            <SelectItem value="3000-7000">3000₺ - 7000₺</SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={handleSearch}
          className="bg-orange-500 text-white text-xl hover:bg-orange-600 py-6 w-[200px]"
        >
          Ara
        </Button>
      </div>
    </div>
  );
};

export default MainSearch;
